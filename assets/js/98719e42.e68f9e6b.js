"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[6634],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),g=o,f=m["".concat(p,".").concat(g)]||m[g]||s[g]||i;return t?a.createElement(f,r(r({ref:n},u),{},{components:t})):a.createElement(f,r({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8672:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const i={sidebar_position:4},r={unversionedId:"configuration/yaml_config",id:"version-1.7.0/configuration/yaml_config",isDocsHomePage:!1,title:"Configuration YAML structure",description:"\u200b",source:"@site/versioned_docs/version-1.7.0/configuration/yaml_config.md",sourceDirName:"configuration",slug:"/configuration/yaml_config",permalink:"/dynatrace-monitoring-as-code/1.7.0/configuration/yaml_config",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/versioned_docs/version-1.7.0/configuration/yaml_config.md",version:"1.7.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"version-1.7.0/tutorialSidebar",previous:{title:"Configuration structure",permalink:"/dynatrace-monitoring-as-code/1.7.0/configuration/configuration_structure"},next:{title:"Plugin configuration",permalink:"/dynatrace-monitoring-as-code/1.7.0/configuration/plugin_config"}},l=[{value:"Config YAML structure",id:"config-yaml-structure",children:[{value:"Skip configuration deployment",id:"skip-configuration-deployment",children:[]},{value:"Specific configuration per environment or group",id:"specific-configuration-per-environment-or-group",children:[]},{value:"Referencing other configurations",id:"referencing-other-configurations",children:[]},{value:"Referencing other JSON templates",id:"referencing-other-json-templates",children:[]},{value:"Templating of environment variables",id:"templating-of-environment-variables",children:[]}]}],p={toc:l};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u200b\nThis guide explains the structure of a YAML config file.\n\u200b"),(0,o.kt)("h2",{id:"config-yaml-structure"},"Config YAML structure"),(0,o.kt)("p",null,"\u200b\nEvery configuration needs a YAML file containing required and optional content.\n\u200b\nA minimum viable config should look like this:\n\u200b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'config:\n    - {config name} : "{path of config json template}"\n\u200b\n{config name}:\n    - name: "{a unique name}"\n')),(0,o.kt)("p",null,"\u200b\nExample: in ",(0,o.kt)("inlineCode",{parentName:"p"},"projects/infrastructure/alerting-profile/profiles.yaml"),"\n\u200b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'config:\n  - profile: "projects/infrastructure/alerting-profile/profile.json"\n\u200b\nprofile:\n  - name: "profile-name"\n[...]\n')),(0,o.kt)("p",null,"\u200b\nEvery config needs to provide a name for unique identification. Omitting the name variable or using a duplicate name causes a validation / deployment error.\n\u200b\nAny defined ",(0,o.kt)("inlineCode",{parentName:"p"},"{config name}")," represents a variable that can then be used in a ",(0,o.kt)("a",{parentName:"p",href:"../configuration/configuration_structure#config-json-templates"},"JSON template"),", and will be resolved and inserted into the config before deploying to Dynatrace.\n\u200b\nExample: ",(0,o.kt)("inlineCode",{parentName:"p"},"projects/infrastructure/alerting-profile/profiles.yaml")," defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", which is then used in ",(0,o.kt)("inlineCode",{parentName:"p"},"projects/infrastructure/alerting-profile/profile.json")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"{{.name}}"),".\n\u200b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'[...]\nprofile:\n  - name: "EXAMPLE Infrastructure"\n[...]\n')),(0,o.kt)("p",null,"\u200b"),(0,o.kt)("h3",{id:"skip-configuration-deployment"},"Skip configuration deployment"),(0,o.kt)("p",null,"\u200b\nTo skip the deployment of a configuration, use the predefined ",(0,o.kt)("inlineCode",{parentName:"p"},"skipDeployment")," parameter.\n\u200b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'my-config:\n  - name: "My config"\n  - skipDeployment: "true"\n')),(0,o.kt)("p",null,"If you wan to enable it by default, but skip for environment or group, do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'my-config:\n  - name: "My config"\n  - skipDeployment: "true"\n\u200b\nmy-config.development:\n  - skipDeployment: "false"\n')),(0,o.kt)("p",null,"If you want to disable it by default and enable only for environment or group: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'my-config:\n  - name: "My config"\n  - skipDeployment: "false"\n\u200b\nmy-config.environment:\n  - skipDeployment: "true"\n')),(0,o.kt)("p",null,"\u200b"),(0,o.kt)("h3",{id:"specific-configuration-per-environment-or-group"},"Specific configuration per environment or group"),(0,o.kt)("p",null,"\u200b\nConfigurations can be overwritten or extended:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"per environment, by adding ",(0,o.kt)("inlineCode",{parentName:"li"},".{Environment}")," configurations"),(0,o.kt)("li",{parentName:"ul"},"per group, by adding ",(0,o.kt)("inlineCode",{parentName:"li"},".{GROUP}")," configurations\n\u200b\n",(0,o.kt)("inlineCode",{parentName:"li"},"projects/infrastructure/notification/notifications.yaml")," defines different recipients for email notifications for each environment via\n\u200b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"email:\n    [...]\n\u200b\nemail.group:\n    [...]\n\u200b\nemail.environment1:\n    [...]\n\u200b\nemail.environment2:\n    [...]\n\u200b\nemail.environment3:\n    [...]\n")),(0,o.kt)("p",null,"\u200b\nAnything in the base ",(0,o.kt)("inlineCode",{parentName:"p"},"email")," configuration is still applied, unless it's re-defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},".{GROUP}")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".{Environment}")," config.\n\u200b"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f If both environment and group configurations are defined, then environment is preferred over the group configuration.\n\u200b")),(0,o.kt)("h3",{id:"referencing-other-configurations"},"Referencing other configurations"),(0,o.kt)("p",null,"\u200b\nIn many cases, one auto-deployed Dynatrace configuration depends on another one. E.g., where most configurations depend on the management-zone defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"projects/infrastructure/management-zone"),"\n\u200b\nThe tool allows your configuration to reference either the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of the Dynatrace object of another configuration created on the cluster.\n\u200b\nTo reference these, the dependent ",(0,o.kt)("inlineCode",{parentName:"p"},"config yaml")," can configure a variable of the format\n\u200b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{var} : "{name of the referenced configuration}.[id|name]"\n')),(0,o.kt)("p",null,"\u200b\ne.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"projects/project-name/dashboard/dashboard.yaml")," references the management-zone defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"/projects/infrastructure/management-zone/zone.json")," via"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'  - managementZoneId: "projects/infrastructure/management-zone/zone.id"\n')),(0,o.kt)("p",null,"\u200b"),(0,o.kt)("h3",{id:"referencing-other-json-templates"},"Referencing other JSON templates"),(0,o.kt)("p",null,"JSON templates are usually defined inside of a project configuration and then referenced in the same project:\n\u200b\n",(0,o.kt)("strong",{parentName:"p"},"testproject/auto-tag/auto-tag.yaml:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'config:\n  - application-tagging-multiproject: "application-tagging.json"\n\u200b\napplication-tagging-multiproject:\n  - name: "Test Application Multiproject"\n')),(0,o.kt)("p",null,"\u200b\nIn this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"application-tagging.json")," is located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"auto-tag")," folder of the same project and the path to it\ncan be defined relative to ",(0,o.kt)("inlineCode",{parentName:"p"},"auto-tag.yaml")," file. But, what if you would like to reuse one template defined outside of this project?\nIn this case, you need to define the full path of a json template:\n\u200b\n",(0,o.kt)("strong",{parentName:"p"},"testproject/auto-tag/auto-tag.yaml:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'config:\n  - application-tagging-multiproject: "/path/to/project/auto-tag/application-tagging.json"\n\u200b\napplication-tagging-multiproject:\n  - name: "Test Application Multiproject"\n')),(0,o.kt)("p",null,"This would save us from content duplication and redefining the same templates over and over again.\n\u200b\nOf course, it is also possible to reuse one template multiple times within one or different YAML file(s):\n",(0,o.kt)("strong",{parentName:"p"},"testproject/auto-tag/auto-tag.yaml:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'config:\n  - application-tagging-multiproject: "/path/to/project/auto-tag/application-tagging.json"\n  - application-tagging-tesproject: "/path/to/project/auto-tag/application-tagging.json"\n  - application-tagging-otherproject: "/path/to/project/auto-tag/application-tagging.json"\n\u200b\napplication-tagging-multiproject:\n  - name: "Test Application Multiproject"\n  - param: "Multiproject parameter"\n\u200b\napplication-tagging-tesproject:\n  - name: "Test Application Tesproject"\n  - param: "Tesproject parameter"\n\u200b\napplication-tagging-otherproject:\n  - name: "Test Application Otherproject"\n  - param: "Otherproject parameter"\n')),(0,o.kt)("p",null,"\u200b"),(0,o.kt)("h3",{id:"templating-of-environment-variables"},"Templating of environment variables"),(0,o.kt)("p",null,"\u200b\nIn addition to the templating of JSON files, where you need to specify the values in the corresponding YAML files, its also possible to resolve\nenvironment variables. This can be done in any JSON or YAML file using this syntax: ",(0,o.kt)("inlineCode",{parentName:"p"},"{{.Env.ENV_VAR}}"),".\n\u200b\nE.g., to resolve the URL of an environment, use the following snippet:\n\u200b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'development:\n    - name: "Dev"\n    - env-url: "{{ .Env.DEV_URL }}"\n    - env-token-name: "DEV_TOKEN_ENV_VAR"\n')),(0,o.kt)("p",null,"\u200b\nAn environment variable can also be resolved directly in the JSON. See the following example which sets the value\nof an alerting profile from the env var ",(0,o.kt)("inlineCode",{parentName:"p"},"ALERTING_PROFILE_VALUE"),".\n\u200b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "{{ .name }}",\n  "rules": [\n    {\n      "type": "APPLICATION",\n      "enabled": true,\n      "valueFormat": null,\n      "propagationTypes": [],\n      "conditions": [\n        {\n          "key": {\n            "attribute": "WEB_APPLICATION_NAME"\n          },\n          "comparisonInfo": {\n            "type": "STRING",\n            "operator": "CONTAINS",\n            "value": "{{ .Env.ALERTING_PROFILE_VALUE }}",\n            "negate": false,\n            "caseSensitive": true\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"\u200b"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Values you pass into a configuration as environment variables must not contain the ",(0,o.kt)("inlineCode",{parentName:"p"},"=")," character.")))}c.isMDXComponent=!0}}]);