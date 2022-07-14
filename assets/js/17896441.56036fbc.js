"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[7918],{6995:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var n=a(7294),l=a(6742),s=a(9052);const i=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(l.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(l.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var r=a(2263),o=a(907),c=a(6700);function d(e){let{siteTitle:t,versionLabel:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("strong",null,a)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function m(e){let{siteTitle:t,versionLabel:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("strong",null,a)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function u(e){let{versionLabel:t,to:a,onClick:i}=e;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:t,latestVersionLink:n.createElement("strong",null,n.createElement(l.Z,{to:a,onClick:i},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}const v=function(){const{siteConfig:{title:e}}=(0,r.default)(),{pluginId:t}=(0,o.useActivePlugin)({failfast:!0}),{savePreferredVersionName:a}=(0,c.J)(t),l=(0,o.useActiveVersion)(t),{latestDocSuggestion:s,latestVersionSuggestion:i}=(0,o.useDocVersionSuggestions)(t);if(!i)return n.createElement(n.Fragment,null);const v=null!=s?s:(p=i).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,"current"===l.name?n.createElement(d,{siteTitle:e,versionLabel:l.label}):n.createElement(m,{siteTitle:e,versionLabel:l.label})),n.createElement("div",{className:"margin-top--md"},n.createElement(u,{versionLabel:i.label,to:v.path,onClick:()=>a(i.name)})))};var p=a(1217);const g="lastUpdatedDate_nN9m";function E(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("time",{dateTime:new Date(1e3*t).toISOString(),className:g},a)}}," on {date}")}function h(e){let{lastUpdatedBy:t}=e;return n.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("strong",null,t)}}," by {user}")}function b(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("div",{className:"col text--right"},n.createElement("em",null,n.createElement("small",null,n.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(h,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)))}var f=a(571),_=a(7462),N=a(6010);const L="iconEdit_mS5F",U=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,_.Z)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:(0,N.Z)(L,t),"aria-label":"Edit page"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function T(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(U,null),n.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const k="docTitle_-X99",y="docItemContainer_oiyr",w="docItemCol_zHA2";const A=function(e){const{content:t}=e,{metadata:a,frontMatter:l}=t,{image:s,keywords:r,hide_title:c,hide_table_of_contents:d}=l,{description:m,title:u,editUrl:g,lastUpdatedAt:E,formattedLastUpdatedAt:h,lastUpdatedBy:_}=a,{pluginId:L}=(0,o.useActivePlugin)({failfast:!0}),U=(0,o.useVersions)(L),A=(0,o.useActiveVersion)(L),Z=U.length>1,C=l.title||u;return n.createElement(n.Fragment,null,n.createElement(p.Z,{title:C,description:m,keywords:r,image:s}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,N.Z)("col",{[w]:!d})},n.createElement(v,null),n.createElement("div",{className:y},n.createElement("article",null,Z&&n.createElement("div",null,n.createElement("span",{className:"badge badge--secondary"},"Version: ",A.label)),!c&&n.createElement("header",null,n.createElement("h1",{className:k},u)),n.createElement("div",{className:"markdown"},n.createElement(t,null))),(g||E||_)&&n.createElement("div",{className:"margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},g&&n.createElement(T,{editUrl:g})),(E||_)&&n.createElement(b,{lastUpdatedAt:E,formattedLastUpdatedAt:h,lastUpdatedBy:_}))),n.createElement("div",{className:"margin-vert--lg"},n.createElement(i,{metadata:a})))),!d&&t.toc&&n.createElement("div",{className:"col col--3"},n.createElement(f.Z,{toc:t.toc}))))}},571:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(6010);const s=function(e,t,a){const[l,s]=(0,n.useState)(void 0);(0,n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(n){let a=0,i=!1;const r=document.getElementsByClassName(e);for(;a<r.length&&!i;){const e=r[a],{href:o}=e,c=decodeURIComponent(o.substring(o.indexOf("#")+1));n.id===c&&(l&&l.classList.remove(t),e.classList.add(t),s(e),i=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_vrFS",r="table-of-contents__link";function o(e){let{toc:t,isChild:a}=e;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:r,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))))):null}const c=function(e){let{toc:t}=e;return s(r,"table-of-contents__link--active",100),n.createElement("div",{className:(0,l.Z)(i,"thin-scrollbar")},n.createElement(o,{toc:t}))}}}]);