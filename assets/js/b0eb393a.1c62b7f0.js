"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[1874],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?o.createElement(f,a(a({ref:n},l),{},{components:t})):o.createElement(f,a({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4769:(e,n,t)=>{t.r(n),t.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const i={sidebar_position:5},a={unversionedId:"configuration/plugin_config",id:"version-1.7.0/configuration/plugin_config",isDocsHomePage:!1,title:"Plugin configuration",description:"Important",source:"@site/versioned_docs/version-1.7.0/configuration/plugin_config.md",sourceDirName:"configuration",slug:"/configuration/plugin_config",permalink:"/dynatrace-monitoring-as-code/configuration/plugin_config",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/versioned_docs/version-1.7.0/configuration/plugin_config.md",version:"1.7.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"version-1.7.0/tutorialSidebar",previous:{title:"Configuration YAML structure",permalink:"/dynatrace-monitoring-as-code/configuration/yaml_config"},next:{title:"Delete configuration",permalink:"/dynatrace-monitoring-as-code/configuration/delete_config"}},c=[{value:"Custom Extensions",id:"custom-extensions",children:[]}],s={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Important")),(0,r.kt)("p",{parentName:"blockquote"},"If you define something that depends on a metric created by a plugin, make sure to reference the plugin by name, so that the configurations will be applied in the correct order (after the plugin is created)"),(0,r.kt)("p",{parentName:"blockquote"},"Plugins can not be referenced by ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," as the Dynatrace plugin endpoint does not return this!"),(0,r.kt)("p",{parentName:"blockquote"},"Use only the plugin ",(0,r.kt)("inlineCode",{parentName:"p"},"name"))),(0,r.kt)("p",null,"e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"projects/example-project/anomaly-detection-metrics/numberOfDistributionInProgressAlert.json")," depends on the plugin defined by ",(0,r.kt)("inlineCode",{parentName:"p"},"projects/example-project/plugin/custom.jmx.EXAMPLE-PLUGIN-MY-METRIC.json")),(0,r.kt)("p",null,"So ",(0,r.kt)("inlineCode",{parentName:"p"},"projects/example-project/anomaly-detection-metrics/example-anomaly.yaml")," references the plugin by name in a variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'- metricPrefix: "projects/example-project/plugin/custom.jmx.EXAMPLE-PLUGIN-MY-METRIC.name"\n')),(0,r.kt)("p",null,"to then construct the ",(0,r.kt)("inlineCode",{parentName:"p"},"metric-id")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"metricId": "ext:{{.metricPrefix}}.metric_NumberOfDistributionInProgressRequests"\n')),(0,r.kt)("h3",{id:"custom-extensions"},"Custom Extensions"),(0,r.kt)("p",null,"Monaco can deploy custom extensions and handles the zipping of extensions; as such, the JSON file that defines an extension can just be checked in. The version of the extension is checked before it is uploaded. If the version of the extension to be uploaded is the same or equal to what is already deployed, then the upload is skipped.\nAn example of a custom extension can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/tree/main/cmd/monaco/test-resources/integration-all-configs/project/extension"},"here"),"."))}p.isMDXComponent=!0}}]);