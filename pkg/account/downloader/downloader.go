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
	"github.com/dynatrace/dynatrace-configuration-as-code-core/api/clients/accounts"
	"github.com/dynatrace/dynatrace-configuration-as-code/v2/internal/log"
	stringutils "github.com/dynatrace/dynatrace-configuration-as-code/v2/internal/strings"
	"github.com/dynatrace/dynatrace-configuration-as-code/v2/pkg/account"
	"github.com/dynatrace/dynatrace-configuration-as-code/v2/pkg/account/downloader/internal/http"
)

type Downloader struct {
	httpClient  httpClient
	accountInfo *account.AccountInfo
}

var _ httpClient = (*http.Client)(nil)

func New(accountInfo *account.AccountInfo, client *accounts.Client) *Downloader {
	return &Downloader{
		httpClient:  (*http.Client)(client),
		accountInfo: accountInfo,
	}
}

func (rs resources) refOn(originID ...string) []account.Ref {
	var retVal []account.Ref
	for _, r := range rs {
		for _, id := range originID {
			if r.originID() == id {
				retVal = append(retVal, r.asRef())
				break
			}
		}
	}
	return retVal
}

//bindings: account/tenant/managementZone-policy/permission-group; user-group

func (a *Downloader) DownloadResources(ctx context.Context) (*account.Resources, error) {
	log.WithCtxFields(ctx).Info("Starting download")
	res, err := a.getAllResources(ctx)
	if err != nil {
		return nil, err
	}

	groups, err := a.groups(ctx, res)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch groups: %w", err)
	}

	users, err := a.users(ctx, groups)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch users: %w", err)
	}

	r := account.Resources{
		Users:    users.asAccountUsers(),
		Groups:   groups.asAccountGroups(),
		Policies: res.asAccountPolicies(),
	}

	return &r, nil
}

func (a *Downloader) users2(ctx context.Context) ([]resource, error) {
	log.WithCtxFields(ctx).Info("Downloading users")
	dtos, err := a.httpClient.GetUsers(ctx, a.accountInfo.AccountUUID)
	if err != nil {
		return nil, fmt.Errorf("failed to get a list of users for account %q from DT: %w", a.accountInfo, err)
	}
	retVal := make([]resource, 0, len(dtos))
	for i := range dtos {
		retVal = append(retVal, user2(dtos[i].Email))
	}
	return retVal, nil
}

func (a *Downloader) groups2(ctx context.Context) ([]resource, error) {
	log.WithCtxFields(ctx).Info("Downloading groups")
	dtos, err := a.httpClient.GetGroups(ctx, a.accountInfo.AccountUUID)
	if err != nil {
		return nil, fmt.Errorf("failed to get a list of groups for account %q from DT: %w", a.accountInfo, err)
	}
	retval := make([]resource, 0, len(dtos))
	for _, dto := range dtos {
		retval = append(retval, &group2{
			id:             stringutils.Sanitize(dto.Name),
			name:           dto.Name,
			description:    dto.GetDescription(),
			originObjectID: dto.GetUuid(),
		})
	}
	return retval, nil
}
