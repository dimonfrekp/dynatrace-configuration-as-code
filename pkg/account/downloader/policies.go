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
	accountmanagement "github.com/dynatrace/dynatrace-configuration-as-code-core/gen/account_management"
	"github.com/dynatrace/dynatrace-configuration-as-code/v2/internal/log"
	stringutils "github.com/dynatrace/dynatrace-configuration-as-code/v2/internal/strings"
	"github.com/dynatrace/dynatrace-configuration-as-code/v2/pkg/account"
)

type (
	Policies []policy

	policy account.Policy
)

func (a *Downloader) policies(ctx context.Context) (Policies, error) {
	log.WithCtxFields(ctx).Info("Downloading policies")
	dtos, err := a.httpClient.GetPolicies(ctx, a.accountInfo.AccountUUID)
	if err != nil {
		return nil, fmt.Errorf("failed to get a list of policies for account %q from DT: %w", a.accountInfo, err)
	}
	log.WithCtxFields(ctx).Debug("Downloaded %d policies (global + custom)", len(dtos))

	retVal := make(Policies, 0, len(dtos))
	for i := range dtos {
		log.WithCtxFields(ctx).Debug("Downloading definition for policy %q (uuid: %q)", dtos[i].Name, dtos[i].Uuid)
		dtoDef, err := a.httpClient.GetPolicyDefinition(ctx, dtos[i])
		if err != nil {
			return nil, fmt.Errorf("failed to get the definition for the policy %q (uuid: %q) from DT: %w", dtos[i].Name, dtos[i].Uuid, err)
		}
		if dtoDef == nil {
			return nil, fmt.Errorf("failed to get the definition for the policy %q (uuid: %q) from DT", dtos[i].Name, dtos[i].Uuid)
		}

		retVal = append(retVal, (policy)(dtoToAccountPolicy(&dtos[i], dtoDef)))
	}

	log.WithCtxFields(ctx).Info("Downloaded %d policies", len(retVal.asAccountPolicies()))
	return retVal, nil
}

func dtoToAccountPolicy(dto *accountmanagement.PolicyOverview, dtoDef *accountmanagement.LevelPolicyDto) account.Policy {
	return account.Policy{
		ID:             stringutils.Sanitize(dto.Name),
		Name:           dto.Name,
		Level:          toAccountPolicyLevel(dto),
		Description:    dto.Description,
		Statement:      dtoDef.StatementQuery,
		OriginObjectID: dto.Uuid,
	}
}

func toAccountPolicyLevel(dto *accountmanagement.PolicyOverview) account.PolicyLevel {
	var retVal account.PolicyLevel
	switch dto.LevelType {
	case "global":
		retVal = account.PolicyLevelGlobal{}
	case "account":
		retVal = account.PolicyLevelAccount{}
	case "environment":
		retVal = account.PolicyLevelEnvironment{Environment: dto.LevelId}
	}
	return retVal
}

func (ps Policies) asAccountPolicies() account.Policies {
	retVal := make(account.Policies, 0, len(ps))
	for i := range ps {
		if ps[i].isCustom() {
			retVal = append(retVal, (account.Policy)(ps[i]))
		}
	}
	return retVal
}

func (ps Policies) refOn(policyUUID ...string) []account.Ref {
	var retVal []account.Ref
	for _, pol := range ps {
		for _, uuid := range policyUUID {
			if pol.OriginObjectID == uuid {
				retVal = append(retVal, (*account.Policy)(&pol).AsRef())
				break
			}
		}
	}
	return retVal
}

func (p *policy) isCustom() bool {
	switch (*p).Level.(type) {
	case account.PolicyLevelAccount, account.PolicyLevelEnvironment:
		return true
	}
	return false
}
