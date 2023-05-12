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

// MultiError is a slice of errors that can be returned by operations
// that require collecting errors instead of exiting as soon as an error occured
type MultiError []error

func (me MultiError) Error() string {
	var errStr string
	for _, err := range me {
		errStr += err.Error() + "\n"
	}
	return errStr
}

// Append adds an error or multiple errors to the [MultiError]
func (me MultiError) Append(err ...error) MultiError {
	me = append(me, err...)
	return me
}

// AppendSl appends a slice of errors to the [MultiError]
func (me MultiError) AppendSl(errSl []error) MultiError {
	for _, err := range errSl {
		me = append(me, err)
	}
	return me
}

func (me MultiError) ToErrSl() []error {
	return me
}

// New creates a new [MultiError]
func New(err ...error) MultiError {
	return err
}

// FromErrSl converts a slice of errors to a [MultiError]
func FromErrSl(errSl []error) MultiError {
	return errSl
}
