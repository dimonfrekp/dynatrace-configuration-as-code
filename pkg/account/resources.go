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

package account

func NewAccountManagementResources() *Resources {
	resources := Resources{
		Groups: make(map[GroupId]Group),
		Users:  make(map[UserId]User),
	}
	return &resources
}

type (
	GroupId = string
	UserId  = string

	Resources struct {
		Policies Policies
		Groups   map[GroupId]Group
		Users    map[UserId]User
	}

	Group struct {
		ID             string
		Name           string
		Description    string
		Account        *Account
		Environment    []Environment
		ManagementZone []ManagementZone
		OriginObjectID string
	}
	Account struct {
		Permissions []string
		Policies    []Ref
	}
	Environment struct {
		Name        string
		Permissions []string
		Policies    []Ref
	}
	ManagementZone struct {
		Environment    string
		ManagementZone string
		Permissions    []string
	}

	User struct {
		Email  string
		Groups []Ref
	}
	Reference struct {
		Id string
	}

	StrReference string
)

func (r Reference) ID() string {
	return r.Id
}

func (r StrReference) ID() string {
	return string(r)
}

type Ref interface {
	ID() string
}
