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

package multierr

import (
	"errors"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMultiError_Error(t *testing.T) {
	me := MultiError{errors.New("error 1"), errors.New("error 2")}
	expected := "error 1\nerror 2\n"
	assert.Equal(t, expected, me.Error())
}

func TestMultiError_Append(t *testing.T) {
	me := MultiError{errors.New("error 1")}
	me = me.Append(errors.New("error 2"), errors.New("error 3"))
	expected := MultiError{errors.New("error 1"), errors.New("error 2"), errors.New("error 3")}
	assert.Equal(t, expected, me)
}

func TestMultiError_AppendErrSl(t *testing.T) {
	me := MultiError{errors.New("error 1")}
	errSl := []error{errors.New("error 2"), errors.New("error 3")}
	me = me.AppendSl(errSl)
	expected := MultiError{errors.New("error 1"), errors.New("error 2"), errors.New("error 3")}
	assert.Equal(t, expected, me)
}

func TestMultiError_ToErrSl(t *testing.T) {
	me := MultiError{errors.New("error 1"), errors.New("error 2")}
	errSl := me.ToErrSl()
	expected := []error{errors.New("error 1"), errors.New("error 2")}
	assert.Equal(t, expected, errSl)
}

func TestNew(t *testing.T) {
	me := New(errors.New("error 1"), errors.New("error 2"))
	expected := MultiError{errors.New("error 1"), errors.New("error 2")}
	assert.Equal(t, expected, me)
}

func TestFromErrSl(t *testing.T) {
	errSl := []error{errors.New("error 1"), errors.New("error 2")}
	me := FromErrSl(errSl)
	expected := MultiError{errors.New("error 1"), errors.New("error 2")}
	assert.Equal(t, expected, me)
}
