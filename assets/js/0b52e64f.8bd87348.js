"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[167],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const l={sidebar_position:2},a="Running the Dev Cluster Locally",s={unversionedId:"dev-cluster/run-dev-cluster-locally",id:"dev-cluster/run-dev-cluster-locally",title:"Running the Dev Cluster Locally",description:"To deploy your own rollup on the Astria Dusknet devnet, check out the",source:"@site/docs/dev-cluster/2-run-dev-cluster-locally.md",sourceDirName:"dev-cluster",slug:"/dev-cluster/run-dev-cluster-locally",permalink:"/docs/dev-cluster/run-dev-cluster-locally",draft:!1,editUrl:"https://github.com/astriaorg/docs/docs/dev-cluster/2-run-dev-cluster-locally.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Dev-Cluster Overview",permalink:"/docs/dev-cluster/overview"},next:{title:"Running a Local Rollup",permalink:"/docs/dev-cluster/deploy-a-local-rollup"}},i={},c=[{value:"Installation",id:"installation",level:2},{value:"Deployment",id:"deployment",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-the-dev-cluster-locally"},"Running the Dev Cluster Locally"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To deploy your own rollup on the Astria Dusknet devnet, check out the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/running-a-rollup-on-astria-dusknet/overview/"},"instructions here"),"!")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"You will need to pull both the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/dev-cluster"},"dev-cluster")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/astria-web3"},"astria-web3")," repos from our github."),(0,o.kt)("p",null,"Install the necessary dependencies and tools listed for each repo:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"docker - ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"https://docs.docker.com/get-docker/")),(0,o.kt)("li",{parentName:"ul"},"kubectl - ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"https://kubernetes.io/docs/tasks/tools/")),(0,o.kt)("li",{parentName:"ul"},"helm - ",(0,o.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"https://helm.sh/docs/intro/install/")),(0,o.kt)("li",{parentName:"ul"},"kind - ",(0,o.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"https://kind.sigs.k8s.io/docs/user/quick-start/#installation")),(0,o.kt)("li",{parentName:"ul"},"just - ",(0,o.kt)("a",{parentName:"li",href:"https://just.systems/man/en/chapter_4.html"},"https://just.systems/man/en/chapter_4.html"))),(0,o.kt)("p",null,"For contract deployment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Forge (part of Foundry) - ",(0,o.kt)("a",{parentName:"li",href:"https://book.getfoundry.sh/getting-started/installation"},"https://book.getfoundry.sh/getting-started/installation"))),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Make sure that Docker is running before deploying with ",(0,o.kt)("inlineCode",{parentName:"p"},"just"),".")),(0,o.kt)("p",null,"To deploy the Astria Sequencer and a local DA, open a terminal in the dev-cluster directory and run the commands: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# create control plane cluster\njust create-cluster\n# ingress controller\njust deploy-ingress-controller\n# wait for ingress.\njust wait-for-ingress-controller\n# Deploys Sequencer + local DA\njust deploy-astria-local\n")),(0,o.kt)("p",null,"This may take a minute or two if this the first time you are deploying as quite\na few containers need to be downloaded. Once the command completes, all elements\nof the dev-cluster will be up and running. This does not run a rollup, block\nexplorer, or faucet. "),(0,o.kt)("p",null,"Now that the sequencer and DA are running, the next step is to deploy a rollup."))}d.isMDXComponent=!0}}]);