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

package downloader

import (
	"context"
	"fmt"
	"github.com/dynatrace/dynatrace-configuration-as-code/v2/internal/log"
	"github.com/dynatrace/dynatrace-configuration-as-code/v2/pkg/account"
)

type (
	environments []environment

	acc struct {
		name       string
		originUUID string
	}
	environment2 struct {
		id   string
		name string
	}
	managementZone2 struct {
		name     string
		id       string
		parentID string //TODO: change to pointer to environment2
	}

	environment struct {
		id              string
		name            string
		managementZones []managementZone
	}

	managementZone struct {
		name     string
		originID string
	}
)

var (
	_ resource = (*acc)(nil)
	_ resource = (*environment2)(nil)
	_ resource = (*managementZone2)(nil)
)

func (a *acc) originID() string {
	return a.originUUID
}

func (a *acc) asRef() account.Ref {
	return account.StrReference(a.originUUID)
}

func (e *environment2) originID() string {
	return e.id
}

func (e *environment2) asRef() account.Ref {
	return account.StrReference(e.id)
}

func (mz *managementZone2) originID() string {
	return mz.id
}

func (mz *managementZone2) asRef() account.Ref {
	return account.StrReference(mz.id)
}

func (e environment) String() string {
	return e.id
}

func (mz managementZone) String() string {
	return mz.name
}

func (e environments) getMzoneName(originID string) string {
	for _, env := range e {
		for _, mz := range env.managementZones {
			if mz.originID == originID {
				return mz.name
			}
		}
	}
	return ""
}

func (a *Downloader) environments(ctx context.Context) (resources, error) {
	log.WithCtxFields(ctx).Info("Fetching environments")
	envDTOs, mzoneDTOs, err := a.httpClient.GetEnvironmentsAndMZones(ctx, a.accountInfo.AccountUUID)
	if err != nil {
		return nil, fmt.Errorf("failed to get a list of environments and management zones for account %q from DT: %w", a.accountInfo, err)
	}

	var ret []resource
	ret = append(ret, &acc{
		name:       a.accountInfo.Name,
		originUUID: a.accountInfo.AccountUUID,
	})
	for _, dto := range envDTOs {
		ret = append(ret, &environment2{
			id:   dto.Id,
			name: dto.Name,
		})
	}
	for _, dto := range mzoneDTOs {
		ret = append(ret, &managementZone2{
			name:     dto.Name,
			id:       dto.Id,
			parentID: dto.Parent,
		})
	}
	return ret, nil
}
