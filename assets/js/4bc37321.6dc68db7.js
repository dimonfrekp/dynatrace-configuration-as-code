"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[2236],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||r;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(7294);const a=function(e){let{children:n,hidden:t,className:a}=e;return o.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},1395:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(7294),a=t(944),r=t(6010);const i="tabItem_vU9c",l="tabItemActive_cw6a";const s=37,c=39;const u=function(e){const{lazy:n,block:t,defaultValue:u,values:d,groupId:m,className:p}=e,{tabGroupChoices:f,setTabGroupChoices:y}=(0,a.Z)(),[h,v]=(0,o.useState)(u),g=o.Children.toArray(e.children),b=[];if(null!=m){const e=f[m];null!=e&&e!==h&&d.some((n=>n.value===e))&&v(e)}const w=e=>{const n=e.currentTarget,t=b.indexOf(n),o=d[t].value;v(o),null!=m&&(y(m,o),setTimeout((()=>{(function(e){const{top:n,left:t,bottom:o,right:a}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:i}=window;return n>=0&&a<=i&&o<=r&&t>=0})(n)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l),setTimeout((()=>n.classList.remove(l)),2e3))}),150))},k=e=>{var n;let t;switch(e.keyCode){case c:{const n=b.indexOf(e.target)+1;t=b[n]||b[0];break}case s:{const n=b.indexOf(e.target)-1;t=b[n]||b[b.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},p)},d.map((e=>{let{value:n,label:t}=e;return o.createElement("li",{role:"tab",tabIndex:h===n?0:-1,"aria-selected":h===n,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":h===n}),key:n,ref:e=>b.push(e),onKeyDown:k,onFocus:w,onClick:w},t)}))),n?(0,o.cloneElement)(g.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},g.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==h})))))}},9443:(e,n,t)=>{t.d(n,{Z:()=>o});const o=(0,t(7294).createContext)(void 0)},944:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(7294),a=t(9443);const r=function(){const e=(0,o.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6930:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var o=t(7462),a=(t(7294),t(3905)),r=t(1395),i=t(8215);const l={sidebar_position:2,title:"Install Monaco"},s={unversionedId:"Get-started/installation",id:"version-1.7.0/Get-started/installation",isDocsHomePage:!1,title:"Install Monaco",description:"This guide shows you how to download Monaco and install it on your operating system (Linux/macOS or Windows).",source:"@site/versioned_docs/version-1.7.0/Get-started/installation.md",sourceDirName:"Get-started",slug:"/Get-started/installation",permalink:"/dynatrace-monitoring-as-code/Get-started/installation",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/versioned_docs/version-1.7.0/Get-started/installation.md",version:"1.7.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Install Monaco"},sidebar:"version-1.7.0/tutorialSidebar",previous:{title:"What is Monaco ?",permalink:"/dynatrace-monitoring-as-code/Get-started/intro"},next:{title:"Validate configuration",permalink:"/dynatrace-monitoring-as-code/commands/validating-configuration"}},c=[],u={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide shows you how to download Monaco and install it on your operating system (Linux/macOS or Windows)."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the Monaco ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/releases"},"release page"),"."),(0,a.kt)("li",{parentName:"ol"},"Download the appropriate version."),(0,a.kt)("li",{parentName:"ol"},"Check that the Monaco binary is available on your PATH. This process will differ depending on your operating system (see steps below). ")),(0,a.kt)(r.Z,{defaultValue:"operating system",values:[{label:"Operating System",value:"operating system"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"operating system",mdxType:"TabItem"},(0,a.kt)(r.Z,{defaultValue:"linux-macos",values:[{label:"Linux / macOS",value:"linux-macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"linux-macos",mdxType:"TabItem"},(0,a.kt)("p",null,"For Linux/macOS, we recommend using ",(0,a.kt)("inlineCode",{parentName:"p"},"curl"),". You can download it from ",(0,a.kt)("a",{parentName:"p",href:"https://curl.se/"},"here")," or use ",(0,a.kt)("inlineCode",{parentName:"p"},"wget"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Linux\n# x64\n curl -L https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/releases/download/v1.7.0/monaco-linux-amd64 -o monaco\n\n# x86\n curl -L https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/releases/download/v1.7.0/monaco-linux-386 -o monaco\n\n# macOS\n curl -L https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/releases/download/v1.7.0/monaco-darwin-10.16-amd64 -o monaco\n")),(0,a.kt)("p",null,"Make the binary executable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"}," chmod +x monaco\n")),(0,a.kt)("p",null,"Optionally, install Monaco to a central location in your ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),".\nThis command assumes that the binary is currently in your downloads folder and that your $PATH includes ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# use any path that suits you; this is just a standard example. Install sudo if needed.\n sudo mv ~/Downloads/monaco /usr/local/bin/\n")),(0,a.kt)("p",null,"Now you can execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"monaco")," command to verify the download. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"}," monaco\nYou are currently using the old CLI structure which will be used by\ndefault until monaco version 2.0.0\nCheck out the beta of the new CLI by adding the environment variable\n  \"NEW_CLI\".\nWe can't wait for your feedback.\nNAME:\n   monaco-linux-amd64 - Automates the deployment of Dynatrace Monitoring Configuration to one or multiple Dynatrace environments.\nUSAGE:\n   monaco-linux-amd64 [global options] command [command options] [working directory]\nVERSION:\n   1.7.0\nDESCRIPTION:\n   Tool used to deploy dynatrace configurations via the cli\n   Examples:\n     Deploy a specific project inside a root config folder:\n       monaco -p='project-folder' -e='environments.yaml' projects-root-folder\n     Deploy a specific project to a specific tenant:\n       monaco --environments environments.yaml --specific-environment dev --project myProject\nCOMMANDS:\n   help, h  Shows a list of commands or help for one command\nGLOBAL OPTIONS:\n   --verbose, -v                             (default: false)\n   --environments value, -e value            Yaml file containing environments to deploy to\n   --specific-environment value, --se value  Specific environment (from list) to deploy to (default: none)\n   --project value, -p value                 Project configuration to deploy (also deploys any dependent configurations) (default: none)\n   --dry-run, -d                             Switches to just validation instead of actual deployment (default: false)\n   --continue-on-error, -c                   Proceed deployment even if config upload fails (default: false)\n   --help, -h                                show help (default: false)\n   --version                                 print the version (default: false)\n"))),(0,a.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,a.kt)("p",null,"Before you start, you need to set the PATH on Windows: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to Control Panel -> System -> System settings -> Environment Variables."),(0,a.kt)("li",{parentName:"ol"},"Scroll down in system variables until you find PATH."),(0,a.kt)("li",{parentName:"ol"},"Click edit and change accordingly."),(0,a.kt)("li",{parentName:"ol"},"Include a semicolon at the end of the previous as that is the delimiter, i.e., c:\\path;c:\\path2"),(0,a.kt)("li",{parentName:"ol"},"Launch a new console for the settings to take effect.")),(0,a.kt)("p",null,"Once your PATH is set, verify the installation by running ",(0,a.kt)("inlineCode",{parentName:"p"},"monaco")," from your terminal. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"}," monaco\nYYou are currently using the old CLI structure which will be used by\ndefault until monaco version 2.0.0\n\nCheck out the beta of the new CLI by adding the environment variable\n  \"NEW_CLI\".\n\nWe can't wait for your feedback.\n\nNAME:\n   monaco.exe - Automates the deployment of Dynatrace Monitoring Configuration to one or multiple Dynatrace environments.\n\nUSAGE:\n   monaco.exe [global options] command [command options] [working directory]\n\nVERSION:\n   1.7.0\n\nDESCRIPTION:\n   Tool used to deploy dynatrace configurations via the cli\n\n   Examples:\n     Deploy a specific project inside a root config folder:\n       monaco -p='project-folder' -e='environments.yaml' projects-root-folder\n\n     Deploy a specific project to a specific tenant:\n       monaco --environments environments.yaml --specific-environment dev --project myProject\n\nCOMMANDS:\n   help, h  Shows a list of commands or help for one command\n\nGLOBAL OPTIONS:\n   --verbose, -v                             (default: false)\n   --environments value, -e value            Yaml file containing environments to deploy to\n   --specific-environment value, --se value  Specific environment (from list) to deploy to (default: none)\n   --project value, -p value                 Project configuration to deploy (also deploys any dependent configurations) (default: none)\n   --dry-run, -d                             Switches to just validation instead of actual deployment (default: false)\n   --continue-on-error, -c                   Proceed deployment even if config upload fails (default: false)\n   --help, -h                                show help (default: false)\n   --version                                 print the version (default: false)\n")))))),(0,a.kt)("p",null,"Now that Monaco is installed, follow our introductory guide on ",(0,a.kt)("a",{parentName:"p",href:"../configuration/deploy_configuration"},"how to deploy a configuration to Dynatrace.")))}d.isMDXComponent=!0},6010:(e,n,t)=>{function o(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=o(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:()=>a});const a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=o(e))&&(a&&(a+=" "),a+=n);return a}}}]);