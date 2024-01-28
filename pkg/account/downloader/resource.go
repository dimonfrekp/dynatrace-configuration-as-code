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

import "github.com/dynatrace/dynatrace-configuration-as-code/v2/pkg/account"

type (
	resources []resource //TODO: remove

	// resource is abstraction for:
	//  * account, tenant, managementZon
	//  * policy, permission
	//  * group
	//  * user
	resource interface {
		originID() string
		asRef() account.Ref
	}

	user2  string
	group2 struct {
		id, name, originObjectID, description string
	}
)

var (
	_ resource = user2("")
	_ resource = (*group2)(nil)
)

func (u user2) originID() string {
	return string(u)
}
func (u user2) asRef() account.Ref {
	return account.StrReference(u)
}

func (g *group2) originID() string {
	return g.originObjectID
}
func (g *group2) asRef() account.Ref {
	return account.StrReference(g.id)
}
