/*
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

package api

import (
	"fmt"
	"go.uber.org/mock/gomock"
)

func Eq(x API) gomock.Matcher {
	type matcher interface {
		Matches(x any) bool
	}

	return struct {
		matcher
		gomock.GotFormatter
		fmt.Stringer
	}{
		matcher: eq(x),
		GotFormatter: gomock.GotFormatterFunc(func(i any) string {
			if a, ok := i.(API); ok {
				return fmt.Sprintf("%q{url: %q} (%T)", a.ID, a.URLPath, a)
			}
			return fmt.Sprintf("%#v (%T)", i, i)
		}),
		Stringer: gomock.StringerFunc(func() string {
			return fmt.Sprintf("%q{url: %q} (%T)", x.ID, x.URLPath, x)
		}),
	}
}

func eq(x API) matcher { return matcher{api: x} }

type matcher struct {
	api API
}

func (m matcher) Matches(x any) bool {
	if a, ok := x.(API); ok {
		return a.ID == m.api.ID && a.URLPath == m.api.URLPath
	}
	return false
}

func (m matcher) String() string {
	return fmt.Sprintf("is equal to %#v (%T)", m.api, m.api)
}
