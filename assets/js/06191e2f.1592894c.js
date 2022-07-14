"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[5053],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(t),p=o,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7322:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:1},i={unversionedId:"commands/validating-configuration",id:"version-1.6.0/commands/validating-configuration",isDocsHomePage:!1,title:"Validating Configuration",description:"Monaco validates the configuration files in a directory, it does so by performing a dry run. It will check whether your Dynatrace config files are valid JSON, and whether your tool configuration yaml files can be parsed and used.",source:"@site/versioned_docs/version-1.6.0/commands/validating-configuration.md",sourceDirName:"commands",slug:"/commands/validating-configuration",permalink:"/dynatrace-monitoring-as-code/1.6.0/commands/validating-configuration",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/versioned_docs/version-1.6.0/commands/validating-configuration.md",version:"1.6.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-1.6.0/tutorialSidebar",previous:{title:"Install Monaco",permalink:"/dynatrace-monitoring-as-code/1.6.0/installation"},next:{title:"Deploying Projects",permalink:"/dynatrace-monitoring-as-code/1.6.0/commands/deploying-projects"}},c=[],l={toc:c};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Monaco validates the configuration files in a directory, it does so by performing a dry run. It will check whether your Dynatrace config files are valid JSON, and whether your tool configuration yaml files can be parsed and used."),(0,o.kt)("p",null,"To validate the configuration execute monaco -dry-run on a yaml file as show here:"),(0,o.kt)("p",null,"Create a file at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="run monaco in dry mode"',title:'"run',monaco:!0,in:!0,dry:!0,'mode"':!0},"$ ./monaco -dry-run --environments=project/sub-project/my-environments.yaml\n2020/06/16 16:22:30 monaco v1.0.0\n2020/06/16 16:22:30 Reading projects...\n2020/06/16 16:22:30 Sorting projects...\n...\n2020/06/16 16:22:30 Config validation SUCCESSFUL\n")))}s.isMDXComponent=!0}}]);