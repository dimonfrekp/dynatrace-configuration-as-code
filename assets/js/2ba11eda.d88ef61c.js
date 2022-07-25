"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[1301],{3905:(e,n,o)=>{o.d(n,{Zo:()=>s,kt:()=>m});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=t.createContext({}),c=function(e){var n=t.useContext(p),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},s=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return o?t.createElement(f,a(a({ref:n},s),{},{components:o})):t.createElement(f,a({ref:n},s))}));function m(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7740:(e,n,o)=>{o.r(n),o.d(n,{default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=o(7462),r=(o(7294),o(3905));const i={sidebar_position:1},a={unversionedId:"configuration/deploy_configuration",id:"version-1.8.0/configuration/deploy_configuration",isDocsHomePage:!1,title:"Deploy configuration",description:"This guide will show you how to deploy a Monaco configuration to Dynatrace.",source:"@site/versioned_docs/version-1.8.0/configuration/deploy_configuration.md",sourceDirName:"configuration",slug:"/configuration/deploy_configuration",permalink:"/dynatrace-monitoring-as-code/configuration/deploy_configuration",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/versioned_docs/version-1.8.0/configuration/deploy_configuration.md",version:"1.8.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-1.8.0/tutorialSidebar",previous:{title:"Logging",permalink:"/dynatrace-monitoring-as-code/commands/logging"},next:{title:"Environments file",permalink:"/dynatrace-monitoring-as-code/configuration/environments_file"}},l=[{value:"Running the tool",id:"running-the-tool",children:[]},{value:"Running the tool with a proxy",id:"running-the-tool-with-a-proxy",children:[]}],p={toc:l};function c(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide will show you how to deploy a Monaco configuration to Dynatrace."),(0,r.kt)("p",null,"Monaco allows for deploying a configuration or a set of configurations in the form of project(s). A project is a folder containing files that define configurations to be deployed to an environment or a group of environments. This is done by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"--project")," flag (or ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," for short)."),(0,r.kt)("h3",{id:"running-the-tool"},"Running the tool"),(0,r.kt)("p",null,"Below you will find a few examples on how to run the tool to deploy your configurations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# deploy all projects in the current folder to all environments\nmonaco -e=environments.yaml\n\n# deploy projects-root-folder/project and any projects in projects-root-folder it depends on to all environments\nmonaco -e=environments.yaml -p="project" projects-root-folder\n\n# deploy projects-root-folder/projectA, projectB and dependencies to all environments\nmonaco -e=environments.yaml -p="projectA, projectB" projects-root-folder\n\n# deploy all projects in the current folder to the "dev" environment defined in environments.yaml\nmonaco -e=environments.yaml -se dev\n')),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"project")," contains additional sub-projects, then all projects are deployed recursively."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"project")," depends on different projects under the same root, those are also deployed."),(0,r.kt)("p",null,"Multiple projects can be specified with the following syntax: ",(0,r.kt)("inlineCode",{parentName:"p"},'-p="projectA, projectB, projectC/subproject"')),(0,r.kt)("p",null,"To deploy configurations the tool will need a valid API Token(s) for the given environments defined as ",(0,r.kt)("inlineCode",{parentName:"p"},"environment variables"),". You can define the name of that enviroment variable in the environments file."),(0,r.kt)("p",null,"To deploy to one specific environment within an ",(0,r.kt)("inlineCode",{parentName:"p"},"environments.yaml")," file, the ",(0,r.kt)("inlineCode",{parentName:"p"},"-specific-environment")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-se")," flag can be passed as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'monaco -e=environments.yaml -se=my-environment -p="my-environment" cluster\n')),(0,r.kt)("p",null,"Read more about the environments file here: ",(0,r.kt)("a",{parentName:"p",href:"./environments_file"},"Environments file")),(0,r.kt)("h3",{id:"running-the-tool-with-a-proxy"},"Running the tool with a proxy"),(0,r.kt)("p",null,"In environments where the access to Dynatrace API endpoints is only possible or allowed via a proxy server, Monaco provides the option of specifying the address of your proxy server when running a command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTPS_PROXY=localhost:5000 monaco -e=environments.yaml -se=my-environment -p="my-environment" cluster \n')),(0,r.kt)("p",null,"With the new CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTPS_PROXY=localhost:5000 NEW_CLI=1 monaco deploy -e environments.yaml \n")))}c.isMDXComponent=!0}}]);