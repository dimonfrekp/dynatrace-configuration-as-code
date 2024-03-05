/*
 * @license
 * Copyright 2023 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package classic

import (
	"errors"
	"fmt"
	"github.com/dynatrace/dynatrace-configuration-as-code/v2/internal/log"
	"github.com/dynatrace/dynatrace-configuration-as-code/v2/internal/log/field"
	"github.com/dynatrace/dynatrace-configuration-as-code/v2/pkg/api"
	"github.com/dynatrace/dynatrace-configuration-as-code/v2/pkg/client/dtclient"
	"github.com/dynatrace/dynatrace-configuration-as-code/v2/pkg/delete/pointer"
	"github.com/dynatrace/dynatrace-configuration-as-code/v2/pkg/rest"
	"golang.org/x/net/context"
	"net/http"
	"strings"
)

// Delete removes the given pointer.DeletePointer entries from the environment the supplied client dtclient.Client connects to
func Delete(ctx context.Context, client dtclient.Client, theApi api.API, entries []pointer.DeletePointer, targetApi string) error {
	logger := log.WithCtxFields(ctx).WithFields(field.Type(theApi.ID))

	deleteErrs := 0

	// Collect IDs of parent objects if the API has a parent, so we can search for scoped values to delete
	parentIDs := make(map[string]string)
	if theApi.HasParent() {
		values, err := client.ListConfigs(ctx, *theApi.Parent)
		if err != nil {
			logger.WithFields(field.Error(err)).Error("Failed to fetch existing configs of API type %q - skipping deletion: %v", theApi.ID, err)
			return err
		}

		for _, v := range values {
			parentIDs[v.Name] = v.Id
		}
	}

	// Split delete pointers by scope, so we can efficiently list existing API objects with a single call
	// for APIs without a Parent, there will be a single one entry for empty scope
	ptrsPerScope := make(map[string][]pointer.DeletePointer)
	for _, entry := range entries {
		ptrsPerScope[entry.Scope] = append(ptrsPerScope[entry.Scope], entry)
	}

	// Attempt deletion of all pointers for a scope
	for scope, entries := range ptrsPerScope {
		a := theApi
		if theApi.HasParent() {
			if _, parentFound := parentIDs[scope]; !parentFound {
				log.Debug("not deleting %q configurations, parent configuration %q not found", len(entries), scope)
				continue
			}
			a = theApi.Resolve(parentIDs[scope])
		}

		values, err := client.ListConfigs(ctx, a)
		if err != nil {
			var respErr rest.RespError
			if errors.As(err, &respErr) && a.HasParent() && respErr.StatusCode == http.StatusNotFound {
				logger.Debug("No config of type %q found to delete for scope %q :%s", theApi.ID, scope, respErr.Body)
				err = nil
			} else {
				logger.WithFields(field.Error(err)).Error("Failed to fetch existing configs for api %q: %w", a.ID, err)
				deleteErrs++
			}
		}

		for _, p := range entries {
			idToDelete, err := findIDToDelete(p, values)
			if err != nil {
				if errors.Is(err, notFoundErr) {
					logger.WithFields(field.F("expectedID", p.Identifier)).Debug("No config of type %s found with the name or ID %q", theApi.ID, p.Identifier)
				} else {
					log.Error("Unable to delete config: %v", err)
					deleteErrs++
				}
				continue
			}
			log.Debug("Deleting %s with ID %s", targetApi, idToDelete)
			err = client.DeleteConfigById(a, idToDelete)

			if err != nil {
				var respErr rest.RespError
				if errors.As(err, &respErr) && respErr.StatusCode == http.StatusNotFound {
					logger.Debug("No config of type %q found to delete %q", theApi.ID, respErr.Body)
					err = nil
				} else {
					log.Error("Failed to delete %s with ID %s: %v", a.ID, idToDelete, err)
					deleteErrs++
				}
			}
		}

	}

	if deleteErrs > 0 {
		return fmt.Errorf("failed to delete %d config(s) of type %q", deleteErrs, theApi.ID)
	}

	return nil
}

var notFoundErr = errors.New("no config found to delete")

func findIDToDelete(ptr pointer.DeletePointer, values []dtclient.Value) (string, error) {
	var toDeleteByName []dtclient.Value
	var toDeleteByID []dtclient.Value
	for _, v := range values {
		if v.Name == ptr.Identifier {
			toDeleteByName = append(toDeleteByName, v)
		}
		if v.Id == ptr.Identifier {
			toDeleteByID = append(toDeleteByID, v)
		}
	}

	if len(toDeleteByName) == 1 {
		return toDeleteByName[0].Id, nil
	}

	if len(toDeleteByName) > 1 {
		matches := strings.Builder{}
		for i, v := range toDeleteByName {
			matches.WriteString(v.Id)
			if i < len(toDeleteByName)-1 {
				matches.WriteString(", ")
			}
		}
		return "", fmt.Errorf("found %d configs of type %q with name %q - manually delete desired configuration(s) with IDs: %s", len(toDeleteByName), ptr.Type, ptr.Identifier, matches.String())
	}

	if len(toDeleteByID) == 1 {
		return toDeleteByID[0].Id, nil
	}

	return "", notFoundErr
}

// DeleteAll collects and deletes all classic API configuration objects using the provided ConfigClient.
//
// Parameters:
//   - ctx (context.Context): The context in which the function operates.
//   - client (dtclient.ConfigClient): An implementation of the ConfigClient interface for managing configuration objects.
//   - apis (api.APIs): A list of APIs for which configuration values need to be collected and deleted.
//
// Returns:
//   - error: After all deletions where attempted an error is returned if any attempt failed.
func DeleteAll(ctx context.Context, client dtclient.ConfigClient, apis api.APIs) error {

	errs := 0

	for _, a := range apis {
		logger := log.WithCtxFields(ctx).WithFields(field.Type(a.ID))
		logger.Info("Collecting configs of type %q...", a.ID)
		values, err := client.ListConfigs(ctx, a)
		if err != nil {
			errs++
			continue
		}

		logger.Info("Deleting %d configs of type %q...", len(values), a.ID)

		for _, v := range values {
			logger := logger.WithFields(field.F("value", v))
			logger.Debug("Deleting config %s:%s...", a.ID, v.Id)
			err := client.DeleteConfigById(a, v.Id)

			if err != nil {
				logger.WithFields(field.Error(err)).Error("Failed to delete %s with ID %s: %v", a.ID, v.Id, err)
				errs++
			}
		}
	}

	if errs > 0 {
		return fmt.Errorf("failed to delete %d config(s)", errs)
	}

	return nil
}

//// filterValuesToDelete filters the given values for only values we want to delete.
//// We first search the names of the config-to-be-deleted, and if we find it, return them.
//// If we don't find it, we look if the name is actually an id, and if we find it, return them.
//// If a given name is found multiple times, we return an error for each name.
//func filterValuesToDelete(logger loggers.Logger, entries []pointer.DeletePointer, existingValues []dtclient.Value, apiName string) ([]deleteValue, error) {
//
//	toDeleteByDelPtr := make(map[pointer.DeletePointer][]dtclient.Value, len(entries))
//	valuesById := make(map[string]dtclient.Value, len(existingValues))
//
//	for _, v := range existingValues {
//		valuesById[v.Id] = v
//
//		for _, entry := range entries {
//			if toDeleteByDelPtr[entry] == nil {
//				toDeleteByDelPtr[entry] = []dtclient.Value{}
//			}
//
//			if v.Name == entry.Identifier {
//				toDeleteByDelPtr[entry] = append(toDeleteByDelPtr[entry], v)
//			}
//		}
//	}
//
//	result := make([]deleteValue, 0, len(entries))
//	filterErr := false
//
//	for delPtr, valuesToDelete := range toDeleteByDelPtr {
//
//		switch len(valuesToDelete) {
//		case 1:
//			result = append(result, deleteValue{
//				DeletePointer: delPtr,
//				ID:            valuesToDelete[0].Id,
//				Name:          valuesToDelete[0].Name,
//			})
//		case 0:
//			v, found := valuesById[delPtr.Identifier]
//
//			if found {
//				result = append(result, deleteValue{
//					DeletePointer: delPtr,
//					ID:            v.Id,
//					Name:          v.Name,
//				})
//			} else {
//				logger.WithFields(field.F("expectedID", delPtr.Identifier)).Debug("No config of type %s found with the name or ID %q", apiName, delPtr.Identifier)
//			}
//
//		default:
//			// multiple configs with this name found -> error
//			matches := strings.Builder{}
//			for i, v := range valuesToDelete {
//				matches.WriteString(v.Id)
//				if i < len(valuesToDelete)-1 {
//					matches.WriteString(", ")
//				}
//			}
//			logger.WithFields(field.F("expectedID", delPtr.Identifier)).Error("Unable to delete unique config - multiple configs of type %q found with the name %q. Please manually delete the desired configuration(s) with IDs: %s", apiName, delPtr.Identifier, matches.String())
//			filterErr = true
//		}
//	}
//
//	if filterErr {
//		return result, fmt.Errorf("failed to identify all configurations to be deleted")
//	}
//
//	return result, nil
//}
