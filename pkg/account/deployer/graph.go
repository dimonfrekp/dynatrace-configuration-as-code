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

package deployer

import (
	"errors"
	"fmt"
	"github.com/dynatrace/dynatrace-configuration-as-code/v2/pkg/account"
	graph2 "github.com/dynatrace/dynatrace-configuration-as-code/v2/pkg/graph"
	"gonum.org/v1/gonum/graph"
	"gonum.org/v1/gonum/graph/simple"
	"gonum.org/v1/gonum/graph/topo"
)

type GroupNode struct {
	simple.Node
	GroupId account.GroupId
	Group   *account.Group
}

type PolicyNode struct {
	simple.Node
	PolicyId account.PolicyId
	Policy   *account.Policy
}
type UserNode struct {
	simple.Node
	UserId account.UserId
	User   *account.User
}

type BuiltinPolicyNode struct {
	simple.Node
	PolicyId account.PolicyId
}

type BuiltinGroupNode struct {
	simple.Node
	GroupId account.GroupId
}

type SortedComponent struct {
	Graph       *simple.DirectedGraph
	SortedNodes []graph.Node
}

type SortedComponents []SortedComponent

func BuildGraph(resources *account.Resources, builtinPolicies map[string]string, builtinGroups map[string]string) (SortedComponents, error) { // nolint:unused
	g := simple.NewDirectedGraph()
	var id int64

	polIds := map[string]int64{}
	groupIds := map[string]int64{}

	for i, po := range resources.Policies {
		id++
		g.AddNode(PolicyNode{
			Node:     simple.Node(id),
			PolicyId: i,
			Policy:   &po,
		})
		polIds[i] = id
	}
	for i, gr := range resources.Groups {
		id++
		groupNode := GroupNode{
			Node:    simple.Node(id),
			GroupId: i,
			Group:   &gr,
		}
		groupIds[i] = id

		g.AddNode(groupNode)
		for _, pref := range gr.Account.Policies {
			if _, ok := builtinPolicies[pref.ID()]; ok {
				if _, existsInGraph := polIds[pref.ID()]; !existsInGraph {
					id++
					g.AddNode(BuiltinPolicyNode{
						Node:     simple.Node(id),
						PolicyId: pref.ID(),
					})
					polIds[pref.ID()] = id
				}
			}
			policyNode, _ := g.NodeWithID(polIds[pref.ID()])
			g.SetEdge(simple.Edge{
				F: policyNode,
				T: groupNode,
			})
		}

		for _, env := range gr.Environment {
			for _, pref := range env.Policies {
				if _, ok := builtinPolicies[pref.ID()]; ok {
					if _, existsInGraph := polIds[pref.ID()]; !existsInGraph {
						id++
						g.AddNode(BuiltinPolicyNode{
							Node:     simple.Node(id),
							PolicyId: pref.ID(),
						})
						polIds[pref.ID()] = id
					}
				}
				policyNode, _ := g.NodeWithID(polIds[pref.ID()])
				g.SetEdge(simple.Edge{
					F: policyNode,
					T: groupNode,
				})
			}
		}
	}
	for i, us := range resources.Users {
		id++
		userNode := UserNode{
			Node:   simple.Node(id),
			UserId: i,
			User:   &us,
		}
		g.AddNode(userNode)
		for _, gref := range us.Groups {
			if _, ok := builtinGroups[gref.ID()]; ok {
				if _, existsInGraph := groupIds[gref.ID()]; !existsInGraph {
					id++
					g.AddNode(BuiltinGroupNode{
						Node:    simple.Node(id),
						GroupId: gref.ID(),
					})
					groupIds[gref.ID()] = id
				}
			}
			groupNode, _ := g.NodeWithID(groupIds[gref.ID()])
			g.SetEdge(simple.Edge{
				F: groupNode,
				T: userNode,
			})
		}
	}

	components := graph2.FindConnectedComponents(g)
	sortedComponents, errs := sortConnectedComponents(components)
	if errs != nil {
		return nil, errors.Join(errs...)
	}

	fmt.Printf("\nPLAN:\n")
	fmt.Printf("Number of independent components: %d\n", len(sortedComponents))
	for i, sc := range sortedComponents {
		fmt.Printf("\nComponent %d\n==========\n", i+1)
		for _, node := range sc.SortedNodes {
			switch n := node.(type) {
			case UserNode:
				fmt.Println("++ Deploying " + n.User.Email)
				fmt.Printf("++++ Create Bindings to %v\n", n.User.Groups)
			case PolicyNode:
				fmt.Println("++ Deploying " + n.Policy.Name)
			case GroupNode:
				fmt.Println("++ Deploying " + n.Group.Name)
				fmt.Printf("++++ Create Policy Bindings to %v\n", n.Group.Account.Policies)
				fmt.Printf("++++ Create Permission Bindings to %v\n", n.Group.Account.Permissions)
				for _, env := range n.Group.Environment {
					fmt.Printf("++++ Create Env Policy Bindings to %v\n", env.Policies)
					fmt.Printf("++++ Create Env Permission Bindings to %v\n", env.Permissions)
				}
				for _, mz := range n.Group.ManagementZone {
					fmt.Printf("++++ Create MZone Permission Bindings to %v\n", mz.Permissions)
				}
			case BuiltinPolicyNode:
				fmt.Println("++ Deploying " + n.PolicyId + " (builtin)")
			case BuiltinGroupNode:
				fmt.Println("++ Deploying " + n.GroupId + " (builtin)")
			default:
				fmt.Println("Unsupported")
			}

		}
	}
	return sortedComponents, nil
}

func sortConnectedComponents(components []*simple.DirectedGraph) (SortedComponents, []error) {
	errs := make([]error, 0, len(components))
	sortedComponents := make([]SortedComponent, len(components))
	for i, subGraph := range components {
		nodes, err := topo.Sort(subGraph)
		if err != nil {
			errs = append(errs, fmt.Errorf("failed to sort dependency graph: %w", err))
			continue
		}
		sortedComponents[i] = SortedComponent{
			Graph:       components[i],
			SortedNodes: nodes,
		}
	}
	if len(errs) > 0 {
		return nil, errs
	}

	return sortedComponents, nil
}
