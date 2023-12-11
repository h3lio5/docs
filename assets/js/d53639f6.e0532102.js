"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[635],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,y=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return r?n.createElement(y,a(a({ref:t},d),{},{components:r})):n.createElement(y,a({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:2},a="Why Decentralized Sequencers?",c={unversionedId:"overview/why-decentralized-sequencers",id:"overview/why-decentralized-sequencers",title:"Why Decentralized Sequencers?",description:"To deploy your own rollup on the Astria Dusknet, check out the",source:"@site/docs/overview/2-why-decentralized-sequencers.md",sourceDirName:"overview",slug:"/overview/why-decentralized-sequencers",permalink:"/docs/overview/why-decentralized-sequencers",draft:!1,editUrl:"https://github.com/astriaorg/docs/docs/overview/2-why-decentralized-sequencers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/overview/introduction"},next:{title:"Cross-Rollup Composability",permalink:"/docs/overview/cross-rollup-composability"}},s={},l=[],d={toc:l},u="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"why-decentralized-sequencers"},"Why Decentralized Sequencers?"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To deploy your own rollup on the Astria Dusknet, check out the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/local-rollup/introduction/"},"instructions here"),"!")),(0,o.kt)("p",null,"Centralization is antithetical to crypto. And yet, today\u2019s rollups almost\nuniversally depend on a single sequencer. Centralized sequencers provide fast\ntransaction confirmations and reduce costs by batching and compressing\ntransactions. However, these benefits come at the cost of relying on a single\ntrusted actor for liveness and censorship resistance."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sacrificing decentralization for an improved user experience is an\nunacceptable Faustian bargain.")),(0,o.kt)("p",null,"Astria tackles centralization head-on, providing rollups with a decentralized\nsequencer and even better UX. Astria\u2019s shared sequencer network is a middleware\nblockchain with its own decentralized sequencer set which accepts transactions\nfrom multiple rollups. These transactions are ordered into a single block and\nwritten to the base layer without executing them."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Shared Sequencers",src:r(2788).Z,width:"3840",height:"2160"})))}p.isMDXComponent=!0},2788:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/shared_sequencer-aef561d11f236d4ade5df4e6b7bcadcf.png"}}]);