"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[9969],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),u=r,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||a;return t?o.createElement(f,i(i({ref:n},d),{},{components:t})):o.createElement(f,i({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},512:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_position:3},i={unversionedId:"commands/experimental-new-cli",id:"version-1.8.0/commands/experimental-new-cli",isDocsHomePage:!1,title:"Experimental New CLI",description:"Monaco version 1.2.0+ includes the Beta version of the new CLI that is planned for a future release.",source:"@site/versioned_docs/version-1.8.0/commands/experimental-new-cli.md",sourceDirName:"commands",slug:"/commands/experimental-new-cli",permalink:"/dynatrace-monitoring-as-code/commands/experimental-new-cli",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/versioned_docs/version-1.8.0/commands/experimental-new-cli.md",version:"1.8.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-1.8.0/tutorialSidebar",previous:{title:"Deploy projects",permalink:"/dynatrace-monitoring-as-code/commands/deploying-projects"},next:{title:"Download configuration",permalink:"/dynatrace-monitoring-as-code/commands/downloading-configuration"}},l=[{value:"Deploy",id:"deploy",children:[]},{value:"Download",id:"download",children:[]}],c={toc:l};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Monaco version 1.2.0+ includes the Beta version of the new CLI that is planned for a future release.\nThe new CLI is based on commands rather than flag based.\nCurrently, the following commands are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"deploy"),(0,r.kt)("li",{parentName:"ul"},"download")),(0,r.kt)("p",null,"To activate the new experimental CLI, set the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"NEW_CLI")," to any non-empty value other than 0."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Running monaco using the new CLI"',title:'"Running',monaco:!0,using:!0,the:!0,new:!0,'CLI"':!0},"NEW_CLI=1 monaco\n")),(0,r.kt)("h3",{id:"deploy"},"Deploy"),(0,r.kt)("p",null,"This command is basically doing what the old tool did. It is used to deploy a specified config to a Dynatrace environment.\nThe flags to things like the environments files are mostly the same.\nRead more about it here: ",(0,r.kt)("a",{parentName:"p",href:"/dynatrace-monitoring-as-code/commands/deploying-projects"},"Deploy projects")),(0,r.kt)("h3",{id:"download"},"Download"),(0,r.kt)("p",null,"This command allows you to download the configuration from a Dynatrace tenant as Monaco files.\nUse this command to avoid starting from scratch when using Monaco.\nRead more about it here: ",(0,r.kt)("a",{parentName:"p",href:"/dynatrace-monitoring-as-code/commands/downloading-configuration"},"Download configuration")))}s.isMDXComponent=!0}}]);