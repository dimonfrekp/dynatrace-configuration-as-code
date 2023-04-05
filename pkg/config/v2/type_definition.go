// @license
// Copyright 2021 Dynatrace LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package v2

import (
	"errors"
	"fmt"
	"github.com/dynatrace/dynatrace-configuration-as-code/internal/featureflags"

	"github.com/mitchellh/mapstructure"
)

type typeDefinition struct {
	Api        string               `yaml:"api,omitempty"`
	Settings   settingsDefinition   `yaml:"settings,omitempty"`
	Entities   entitiesDefinition   `yaml:"entities,omitempty"`
	Automation automationDefinition `yaml:"automation,omitempty"`
}

type settingsDefinition struct {
	Schema        string          `yaml:"schema,omitempty"`
	SchemaVersion string          `yaml:"schemaVersion,omitempty"`
	Scope         configParameter `yaml:"scope,omitempty"`
}

type entitiesDefinition struct {
	EntitiesType string `yaml:"entitiesType,omitempty"`
}

type automationDefinition struct {
	Resource AutomationResource `yaml:"resource"`
}

// UnmarshalYAML Custom unmarshaler that knows how to handle typeDefinition.
// 'type' section can come as string or as struct as it is defind in `typeDefinition`
// function parameter more than once if necessary.
func (c *typeDefinition) UnmarshalYAML(unmarshal func(interface{}) error) error {
	var data interface{}
	if err := unmarshal(&data); err != nil {
		return err
	}

	switch v := data.(type) {
	case string:
		c.Api = v
		return nil
	default:
		var td typeDefinition
		if err := mapstructure.Decode(v, &td); err == nil {
			*c = td
			return nil
		}
	}

	return fmt.Errorf("'type' section is not filed with proper values")
}

func (c *typeDefinition) isSound(knownApis map[string]struct{}) error {
	classicErrs := c.isClassicSound(knownApis)
	settingsErrs := c.Settings.isSettingsSound()
	entitiesErrs := c.Entities.isEntitiesSound()
	automationErr := c.Automation.isSound()

	types := 0
	var err error

	if c.isClassic() {
		types += 1
		err = classicErrs
	}
	if c.isSettings() {
		types += 1
		err = settingsErrs
	}
	if c.isEntities() {
		types += 1
		err = entitiesErrs
	}
	if c.isAutomation() {
		types++
		err = automationErr
	}

	typesSound := 0
	for _, e := range []error{classicErrs, settingsErrs, entitiesErrs, automationErr} {
		if e == nil {
			typesSound += 1
		}
	}

	switch {
	case types >= 2:
		return errors.New("wrong configuration of type property")
	case typesSound == 1:
		return nil
	case types == 0:
		return errors.New("type configuration is missing or unknown")
	case types == 1:
		return err
	default:
		return errors.New("wrong configuration of type property")
	}
}

// isSettings returns true iff one of fields from typeDefinition are filed up
func (c *typeDefinition) isSettings() bool {
	return c.Settings != settingsDefinition{}
}
func (t *settingsDefinition) isSettingsSound() error {
	var s []string
	if t.Schema == "" {
		s = append(s, "type.schema")
	}
	if t.Scope == nil {
		s = append(s, "type.scope")
	}
	if s == nil {
		return nil
	}
	return fmt.Errorf("next property missing: %v", s)
}
func (c *typeDefinition) isEntities() bool {
	return c.Entities != entitiesDefinition{}
}
func (f *entitiesDefinition) isEntitiesSound() error {
	var e []string
	if f.EntitiesType == "" {
		e = append(e, "type.entitiesType")
	}
	if e == nil {
		return nil
	}
	return fmt.Errorf("next property missing: %v", e)
}

func (c *typeDefinition) isClassic() bool {
	return c.Api != ""
}
func (c *typeDefinition) isClassicSound(knownApis map[string]struct{}) error {
	if !c.isClassic() {
		return errors.New("missing 'type.api' property")
	} else if _, found := knownApis[c.Api]; !found {
		return errors.New("unknown API: " + c.Api)
	}
	return nil
}

func (c *typeDefinition) isAutomation() bool {
	return c.Automation != automationDefinition{}
}

func (c *automationDefinition) isSound() error {

	if !featureflags.AutomationResources().Enabled() {
		return errors.New("automation resource feature is not enabled")
	}

	switch c.Resource {
	case "":
		return errors.New("missing 'type.automation.resource' property")

	case Workflow, BusinessCalendar, SchedulingRule:
		return nil

	default:
		return fmt.Errorf("unknown automation resource %q", c.Resource)
	}
}

func (c *typeDefinition) GetApiType() string {
	switch {
	case c.isSettings():
		return c.Settings.Schema
	case c.isClassic():
		return c.Api
	case c.isEntities():
		return c.Entities.EntitiesType
	case c.isAutomation():
		return string(c.Automation.Resource)
	default:
		return ""
	}
}
