/*
 * @license
 * Copyright 2024 Dynatrace LLC
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
	accountmanagement "github.com/dynatrace/dynatrace-configuration-as-code-core/gen/account_management"
	"github.com/dynatrace/dynatrace-configuration-as-code/v2/pkg/account"
)

type (
	permission struct {
		id, description string
	}
)

var _ resource = (*permission)(nil)

func (p *permission) originID() string {
	return p.id
}

func (p *permission) asRef() account.Ref {
	return (account.StrReference)(p.id)
}

func (a *Downloader) permissions(ctx context.Context) ([]resource, error) {
	var retVal []resource
	dtos, err := a.httpClient.GetPermissions(ctx)
	if err != nil {
		return nil, fmt.Errorf("failed to get the list of the permissions for account %q from DT: %w", a.accountInfo, err)
	}

	for _, dto := range dtos {
		retVal = append(retVal, toPermission(dto))
	}
	return retVal, nil
}

func toPermission(dto accountmanagement.PermissionDto) *permission {
	return &permission{
		id:          dto.Id,
		description: dto.Description,
	}
}
