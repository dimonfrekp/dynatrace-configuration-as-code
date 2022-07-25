"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[6232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2057:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1,title:"What is Monaco ?"},i={unversionedId:"Get-started/intro",id:"version-1.7.0/Get-started/intro",isDocsHomePage:!1,title:"What is Monaco ?",description:"Monaco is a CLI tool that automates the deployment of Dynatrace Monitoring Configuration to one or multiple Dynatrace environments.",source:"@site/versioned_docs/version-1.7.0/Get-started/intro.md",sourceDirName:"Get-started",slug:"/Get-started/intro",permalink:"/dynatrace-monitoring-as-code/1.7.0/Get-started/intro",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/versioned_docs/version-1.7.0/Get-started/intro.md",version:"1.7.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"What is Monaco ?"},sidebar:"version-1.7.0/tutorialSidebar",previous:{title:"Welcome to the Monaco docs",permalink:"/dynatrace-monitoring-as-code/1.7.0/"},next:{title:"Install Monaco",permalink:"/dynatrace-monitoring-as-code/1.7.0/Get-started/installation"}},l=[{value:"Why Monaco?",id:"why-monaco",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Features",id:"features",children:[]},{value:"Get started",id:"get-started",children:[]},{value:"Learn more",id:"learn-more",children:[]}],s={toc:l};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Monaco is a CLI tool that automates the deployment of Dynatrace Monitoring Configuration to one or multiple Dynatrace environments."),(0,r.kt)("h2",{id:"why-monaco"},"Why Monaco?"),(0,r.kt)("p",null,"Monaco\u2019s self-service model enables development teams to set up monitoring and observability easily and efficiently, even for large scale applications. It eliminates the need for building custom monitoring solutions and reduces the manual work for monitoring teams.  "),(0,r.kt)("p",null,"The Monitoring as Code (MAC) approach enables you to manage your Dynatrace environment monitoring tasks through configuration files instead of a graphical user interface. Configuration files allow you to create, update, and manage your monitoring configurations safely, consistently, and repetitively. They can be reused, versioned, and shared within your team."),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("p",null,"Developers define a monitoring configuration file that is checked into version control alongside the application\u2019s source code. With the next commit or pull request, the code gets built and deployed, automatically creating monitoring dashboards and alerting notifications. "),(0,r.kt)("img",{src:n(7160).Z,alt:"An image showing each step in the Monaco pipeline"}),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"Monaco currently offers the following features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creating configuration templates for reuse across multiple environments. "),(0,r.kt)("li",{parentName:"ul"},"Handling interdependencies between configurations without needing to keep track of unique identifiers. "),(0,r.kt)("li",{parentName:"ul"},"Applying the same configuration to hundreds of Dynatrace environments and being able to update them all at once. "),(0,r.kt)("li",{parentName:"ul"},"Rolling out specific configurations to specific environments. "),(0,r.kt)("li",{parentName:"ul"},"Promoting application-specific configurations from one environment to another, following deployments in every stage. "),(0,r.kt)("li",{parentName:"ul"},"Supporting all mechanisms and best practices of git-based workflows such as pull requests, merging, and approvals. "),(0,r.kt)("li",{parentName:"ul"},"Commit your configuration to version control and collaborate on changes. ")),(0,r.kt)("h2",{id:"get-started"},"Get started"),(0,r.kt)("p",null,"To get started, follow our guide on ",(0,r.kt)("a",{parentName:"p",href:"./installation"},"how to install Monaco.")),(0,r.kt)("h2",{id:"learn-more"},"Learn more"),(0,r.kt)("p",null,"To learn more, watch our one hour deep-dive into Monitoring as Code with Monaco:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=8MCua6Ip_0E"},(0,r.kt)("img",{alt:"Intro to Monaco video thumbnail",src:n(198).Z}))))}c.isMDXComponent=!0},7160:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/monaco-pipeline-26a35fd908cfe6937c92fbc587d8cddc.jpg"},198:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/monaco-video-thumbnail-e8995122a39192c9a4dffa69aea00c75.jpg"}}]);