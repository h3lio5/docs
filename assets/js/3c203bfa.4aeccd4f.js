"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),k=r,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:4},o="Remote Rollup Deployment",i={unversionedId:"running-a-rollup-on-astria-dusknet/remote-rollup-deployment",id:"running-a-rollup-on-astria-dusknet/remote-rollup-deployment",title:"Remote Rollup Deployment",description:"The following assumes you are using [Digital Ocean Kubernetes",source:"@site/docs/running-a-rollup-on-astria-dusknet/4-remote-rollup-deployment.md",sourceDirName:"running-a-rollup-on-astria-dusknet",slug:"/running-a-rollup-on-astria-dusknet/remote-rollup-deployment",permalink:"/docs/running-a-rollup-on-astria-dusknet/remote-rollup-deployment",draft:!1,editUrl:"https://github.com/astriaorg/docs/docs/running-a-rollup-on-astria-dusknet/4-remote-rollup-deployment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Local Rollup Deployment",permalink:"/docs/running-a-rollup-on-astria-dusknet/local-rollup-deployment"},next:{title:"Introduction",permalink:"/docs/overview-of-astria/introduction"}},s={},u=[{value:"Manually Setup Digital Ocean Ingress",id:"manually-setup-digital-ocean-ingress",level:2},{value:"Watching Ingress Deployment",id:"watching-ingress-deployment",level:2},{value:"Digital Ocean Loadbalancer",id:"digital-ocean-loadbalancer",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Update the <code>helm</code> Chart",id:"update-the-helm-chart",level:2},{value:"Creating your own Genesis Account",id:"creating-your-own-genesis-account",level:2},{value:"Get and Build the <code>astria-cli</code>",id:"get-and-build-the-astria-cli",level:2},{value:"Using the <code>astria-cli</code>",id:"using-the-astria-cli",level:2},{value:"Get Current Sequencer Block Height",id:"get-current-sequencer-block-height",level:3},{value:"Environment Variables + cli",id:"environment-variables--cli",level:2},{value:"Create new sequencer account",id:"create-new-sequencer-account",level:2},{value:"Use locally modified chart",id:"use-locally-modified-chart",level:2},{value:"Deploy the Rollup Node",id:"deploy-the-rollup-node",level:2},{value:"Delete Rollup Node",id:"delete-rollup-node",level:2},{value:"Default to <code>astria-dev-cluster</code> namespace",id:"default-to-astria-dev-cluster-namespace",level:2},{value:"Watch for pod startup",id:"watch-for-pod-startup",level:2},{value:"Check Block Retrieval on the Conductor",id:"check-block-retrieval-on-the-conductor",level:2},{value:"Observe your Deployment",id:"observe-your-deployment",level:2},{value:"Debug Ingress",id:"debug-ingress",level:2},{value:"Use <code>cast</code> to Interact with your Rollup",id:"use-cast-to-interact-with-your-rollup",level:2},{value:"Fund you Sequencer Account",id:"fund-you-sequencer-account",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(p,(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"remote-rollup-deployment"},"Remote Rollup Deployment"),(0,r.kt)("p",null,"The following assumes you are using ",(0,r.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/products/kubernetes"},"Digital Ocean Kubernetes\n(DOKS)"),"."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"You must use at least a 2 node cluster.")),(0,r.kt)("h2",{id:"manually-setup-digital-ocean-ingress"},"Manually Setup Digital Ocean Ingress"),(0,r.kt)("p",null,"Follow the steps here to setup the nginx ingress controller:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://marketplace.digitalocean.com/apps/nginx-ingress-controller"},"https://marketplace.digitalocean.com/apps/nginx-ingress-controller"))),(0,r.kt)("p",null,"Follow the steps here to add your own domain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.digitalocean.com/products/networking/dns/getting-started/dns-registrars/"},"https://docs.digitalocean.com/products/networking/dns/getting-started/dns-registrars/")),(0,r.kt)("li",{parentName:"ul"},"This is where you will set ",(0,r.kt)("inlineCode",{parentName:"li"},"<YOUR_HOSTNAME>"))),(0,r.kt)("p",null,"Follow the steps here to set up an ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," record for DNS:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/#a-records"},"https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/#a-records"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When configure=ing the ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," record for DNS, the ",(0,r.kt)("inlineCode",{parentName:"p"},"directs to")," value should specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"loadbalancer")," which was created for the ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx-ingress-controller")," using the console. ")),(0,r.kt)("h2",{id:"watching-ingress-deployment"},"Watching Ingress Deployment"),(0,r.kt)("p",null,"Look for ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress-nginx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ns -w\n")),(0,r.kt)("p",null,"Look for two pods starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress-nginx-controller")," in STATUS ",(0,r.kt)("inlineCode",{parentName:"p"},"Running")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get po -n ingress-nginx -w\n")),(0,r.kt)("h2",{id:"digital-ocean-loadbalancer"},"Digital Ocean Loadbalancer"),(0,r.kt)("p",null,"Look for a new loadbalancer being created:\n",(0,r.kt)("a",{parentName:"p",href:"https://cloud.digitalocean.com/networking/load_balancers"},"https://cloud.digitalocean.com/networking/load_balancers")),(0,r.kt)("h2",{id:"endpoints"},"Endpoints"),(0,r.kt)("p",null,"Endpoints for the remote cluster are the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"NAME (as helm creates)"),(0,r.kt)("th",{parentName:"tr",align:null},"HOSTS"),(0,r.kt)("th",{parentName:"tr",align:null},"ADDRESS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"astria-ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"rpc.evm.dusk-1.devnet.astria.org"),(0,r.kt)("td",{parentName:"tr",align:null},"34.160.214.22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blockscout-ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"explorer.evm.dusk-1.devnet.astria.org"),(0,r.kt)("td",{parentName:"tr",align:null},"34.111.167.16")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"faucet-ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"faucet.evm.dusk-1.devnet.astria.org"),(0,r.kt)("td",{parentName:"tr",align:null},"130.211.4.120")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sequencer-faucet"),(0,r.kt)("td",{parentName:"tr",align:null},"faucet.sequencer.dusk-1.devnet.astria.org"),(0,r.kt)("td",{parentName:"tr",align:null},"34.36.8.102")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sequencer-ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"rpc.sequencer.dusk-1.devnet.astria.org"),(0,r.kt)("td",{parentName:"tr",align:null},"34.111.73.187")))),(0,r.kt)("h2",{id:"update-the-helm-chart"},"Update the ",(0,r.kt)("inlineCode",{parentName:"h2"},"helm")," Chart"),(0,r.kt)("p",null,"Pull the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/dev-cluster"},"Astria dev-cluster repo"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:astriaorg/dev-cluster.git\ncd dev-cluster\n")),(0,r.kt)("p",null,"Within the dev-cluster repo, update the ingress template ",(0,r.kt)("inlineCode",{parentName:"p"},"chart/rollup/templates/ingress.yaml")," so that each hostname ends in ",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR_HOSTNAME>")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"localdev.me")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"...\n- host: executor.{{ .Values.config.rollup.name }}.<YOUR_HOSTNAME>\n...\n- host: ws-executor.{{ .Values.config.rollup.name }}.<YOUR_HOSTNAME>\n...\n- host: faucet.{{ .Values.config.rollup.name }}.<YOUR_HOSTNAME>\n...\n- host: blockscout.{{ .Values.config.rollup.name }}.<YOUR_HOSTNAME>\n...\n")),(0,r.kt)("p",null,"Add an IngressClass so that the ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata")," section in the same file looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"metadata:\n  name: {{ .Values.config.rollup.name }}-ingress\n  namespace: {{ .Values.namespace }}\n  annotations:\n    kubernetes.io/ingress.class: nginx\n")),(0,r.kt)("h2",{id:"creating-your-own-genesis-account"},"Creating your own Genesis Account"),(0,r.kt)("p",null,"You can add genesis account(s) to your rollup during configuration."),(0,r.kt)("p",null,"You can create an account using"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cast w new\n")),(0,r.kt)("p",null,"to create a new account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Successfully created new keypair.\nAddress:     0xfFe9...5f8b # <GENESIS_ADDRESS>\nPrivate key: 0x332e...a8fb # <GENESIS_PRIVATE_KEY>\n")),(0,r.kt)("p",null,"You can then ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," the genesis accounts like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export ROLLUP_GENESIS_ACCOUNTS=<GENESIS_ADDRESS>:100000000000000000000\n")),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"<GENESIS_ADDRESS>")," to the address printed out from the new command, and\n",(0,r.kt)("inlineCode",{parentName:"p"},"export")," the private key to the env vars using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export ROLLUP_FAUCET_PRIV_KEY=<GENESIS_PRIVATE_KEY>\n")),(0,r.kt)("p",null,"Exporting the genesis account(s) is also shown in the export block in the next section."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"NEVER")," use a private key you use on a live network. "),(0,r.kt)("p",{parentName:"admonition"},"For ease of use we recommend you set this to an  key which you have access to")),(0,r.kt)("h2",{id:"get-and-build-the-astria-cli"},"Get and Build the ",(0,r.kt)("inlineCode",{parentName:"h2"},"astria-cli")),(0,r.kt)("p",null,"Pull the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/astria"},"Astria repo"),"."),(0,r.kt)("p",null,"Build the ",(0,r.kt)("inlineCode",{parentName:"p"},"astria-cli")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:astriaorg/astria.git\ncd astria\njust install-cli\n")),(0,r.kt)("p",null,"Keep track of this block height as it will be used for making the rollup config\nlater on. You will use this printed height in place of\n",(0,r.kt)("inlineCode",{parentName:"p"},"<INITIAL_SEQUENCER_BLOCK_HEIGHT>")," in the steps below."),(0,r.kt)("h2",{id:"using-the-astria-cli"},"Using the ",(0,r.kt)("inlineCode",{parentName:"h2"},"astria-cli")),(0,r.kt)("h3",{id:"get-current-sequencer-block-height"},"Get Current Sequencer Block Height"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"astria-cli sequencer blockheight get \\\n  --sequencer-url https://rpc.sequencer.dusk-1.devnet.astria.org/\n")),(0,r.kt)("p",null,"Save the returned value for later. You will replace the\n",(0,r.kt)("inlineCode",{parentName:"p"},"<INITIAL_SEQUENCER_BLOCK_HEIGHT>")," tag in the following sections with this\nvalue."),(0,r.kt)("p",null,"Replace the tags in the commands and env vars below, as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Var Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Var Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<YOUR_ROLLUP_NAME>")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of your rollup")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<YOUR_NETWORK_ID>")),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of your network")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<INITIAL_SEQUENCER_BLOCK_HEIGHT>")),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"The height of the sequencer (found above)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<GENESIS_ADDRESS>")),(0,r.kt)("td",{parentName:"tr",align:null},"[u8; 40]"),(0,r.kt)("td",{parentName:"tr",align:null},"A wallet address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<BALANCE>")),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"A balance. It is useful to make this a large value.")))),(0,r.kt)("h2",{id:"environment-variables--cli"},"Environment Variables + cli"),(0,r.kt)("p",null,"You can use environment variables to set the configuration for the rollup\nconfig creation. Replace all the ",(0,r.kt)("inlineCode",{parentName:"p"},"<>")," tags with their corresponding values. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export ROLLUP_USE_TTY=true\nexport ROLLUP_LOG_LEVEL=DEBUG\nexport ROLLUP_NAME=<YOUR_ROLLUP_NAME>\nexport ROLLUP_NETWORK_ID=<YOUR_NETWORK_ID>\nexport ROLLUP_SKIP_EMPTY_BLOCKS=false\nexport ROLLUP_GENESIS_ACCOUNTS=<GENESIS_ADDRESS>:<BALANCE>\nexport ROLLUP_SEQUENCER_INITIAL_BLOCK_HEIGHT=<INITIAL_SEQUENCER_BLOCK_HEIGHT>\nexport ROLLUP_SEQUENCER_WEBSOCKET=wss://rpc.sequencer.dusk-1.devnet.astria.org/websocket\nexport ROLLUP_SEQUENCER_RPC=https://rpc.sequencer.dusk-1.devnet.astria.org\n")),(0,r.kt)("p",null,"Then just run the config create command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"astria-cli rollup config create\n")),(0,r.kt)("p",null,"You can then run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cat <YOUR_ROLLUP_NAME>-rollup-conf.yaml\n")),(0,r.kt)("p",null,"to print out the config file contents to double check everything:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"config:\n  useTTY: true\n  logLevel: DEBUG\n  rollup:\n    name: <YOUR_ROLLUP_NAME>\n    chainId: # derived from rollup name\n    networkId: <YOUR_NETWORK_ID>\n    skipEmptyBlocks: true\n    genesisAccounts: \n      - address: 0x<GENESIS_ADDRESS>\n        balance: '<BALANCE>'\n  sequencer:\n    initialBlockHeight: <INITIAL_SEQUENCER_BLOCK_HEIGHT>\n    websocket: ws://rpc.sequencer.dusk-1.devnet.astria.org/websocket\n    rpc: http://rpc.sequencer.dusk-1.devnet.astria.org\n  celestia:\n    fullNodeUrl: http://celestia-service:26658\n")),(0,r.kt)("p",null,"Export this file to the env vars as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export ROLLUP_CONF_FILE=<YOUR_ROLLUP_NAME>-rollup-conf.yaml\n")),(0,r.kt)("h2",{id:"create-new-sequencer-account"},"Create new sequencer account"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"astria-cli sequencer account create\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Create Sequencer Account\n\nPrivate Key: "5562...1622" # <SEQUENCER_ACCOUNT_PRIV_KEY>\nPublic Key:  "ec20...f613" # <SEQUENCER_ACCOUNT_PUB_KEY>\nAddress:     "8a2f...5f68"\n')),(0,r.kt)("p",null,"Keep track of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<SEQUENCER_ACCOUNT_PUB_KEY>")," as it will be used with the\nFaucet later on for funding your sequencer account."),(0,r.kt)("p",null,"Export your sequencer private key as an environment variable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export SEQUENCER_PRIV_KEY=9c78...710d\n")),(0,r.kt)("h2",{id:"use-locally-modified-chart"},"Use locally modified chart"),(0,r.kt)("p",null,"Because you needed to modify the host names inside your ingress template you must deploy your rollup using your local chart:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export ROLLUP_CHART_PATH="/your_path_to/dev-cluster/charts/rollup"\n')),(0,r.kt)("h2",{id:"deploy-the-rollup-node"},"Deploy the Rollup Node"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"astria-cli")," to deploy the node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"astria-cli rollup deployment create \\\n  --config $ROLLUP_CONF_FILE \\\n  --faucet-private-key $ROLLUP_FAUCET_PRIV_KEY \\\n  --sequencer-private-key $SEQUENCER_PRIV_KEY\n")),(0,r.kt)("h2",{id:"delete-rollup-node"},"Delete Rollup Node"),(0,r.kt)("p",null,"If there was an error during deployment, you can delete your deployment and try\nagain with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"astria-cli rollup deployment delete --config $ROLLUP_CONF_PATH\n")),(0,r.kt)("h2",{id:"default-to-astria-dev-cluster-namespace"},"Default to ",(0,r.kt)("inlineCode",{parentName:"h2"},"astria-dev-cluster")," namespace"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to the correct namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl config set-context --current --namespace=astria-dev-cluster\n")),(0,r.kt)("h2",{id:"watch-for-pod-startup"},"Watch for pod startup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -w\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                             READY   STATUS    RESTARTS      AGE\n<YOUR_ROLLUP_NAME>-blockscout-647745c66d-vz4ks   6/6     Running   1 (56s ago)   72s\n<YOUR_ROLLUP_NAME>-faucet-68667bd895-pwqmz       1/1     Running   0             72s\n<YOUR_ROLLUP_NAME>-geth-755cb8dd97-k5xp8         3/3     Running   0             72s\n")),(0,r.kt)("h2",{id:"check-block-retrieval-on-the-conductor"},"Check Block Retrieval on the Conductor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export GETH_POD_NAME=<YOUR_ROLLUP_NAME>-geth-755cb8dd97-k5x\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs $GETH_POD_NAME -c conductor\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'2023-10-16T20:49:16.858852Z  INFO run_until_stopped: astria_conductor::executor: executed sequencer block sequencer_block_hash=Hash::Sha256(93C233F2A2A109FF6CC3162A98916BECAE6D8EC43520C995E82B6D1F2B2742EF) sequencer_block_height=423755 execution_block_hash="2d8b2219a30ea4cc409347320f377de937b9ca2425f670c4f913724a2d53b2aa"\n2023-10-16T20:49:18.922694Z  INFO run_until_stopped: astria_conductor::executor: executing block with given parent block height=423756 parent_block_hash="2d8b2219a30ea4cc409347320f377de937b9ca2425f670c4f913724a2d53b2aa"\n2023-10-16T20:49:18.926380Z  INFO run_until_stopped: astria_conductor::executor: executed sequencer block sequencer_block_hash=Hash::Sha256(EAD8701CB15D9B487DC7400ABC2FCB7A4F7E09E09F39D4D6B8FA97B74B5EC50F) sequencer_block_height=423756 execution_block_hash="de20c29febc808b7a2ded8513eb23be116fe441745ccf62d1366b4b9bb160d04"\n')),(0,r.kt)("h2",{id:"observe-your-deployment"},"Observe your Deployment"),(0,r.kt)("p",null,"Your rollups utility endpoints are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Utility"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block Explorer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://blockscout."},"http://blockscout."),"<YOUR_ROLLUP_NAME>.<YOUR_HOSTNAME>/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Faucet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://faucet."},"http://faucet."),"<YOUR_ROLLUP_NAME>.<YOUR_HOSTNAME>/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RPC"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://executor."},"http://executor."),"<YOUR_ROLLUP_NAME>.<YOUR_HOSTNAME>/")))),(0,r.kt)("p",null,"Open the URLs in your browser to view your running rollup."),(0,r.kt)("h2",{id:"debug-ingress"},"Debug Ingress"),(0,r.kt)("p",null,"If you would like to view the ingress logs you can use the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get po -n ingress-nginx\n# get the name of one of the pods\nexport INGRESS_POD_1=ingress-nginx-controller-6d6559598-ll8gv\n# view the logs\nkubectl logs $INGRESS_POD_1 -n ingress-nginx\n")),(0,r.kt)("h2",{id:"use-cast-to-interact-with-your-rollup"},"Use ",(0,r.kt)("inlineCode",{parentName:"h2"},"cast")," to Interact with your Rollup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export ETH_RPC_URL=http://executor.<YOUR_ROLLUP_NAME>.<YOUR_HOSTNAME>/\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cast block 0\n")),(0,r.kt)("p",null,"Use an address of your choice."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export REC_ADDR=<SOME_ADDRESS>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cast balance $REC_ADDR\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cast send $REC_ADDR --value 10000000000000000000 --private-key $ROLLUP_FAUCET_PRIV_KEY\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cast balance $REC_ADDR\n")),(0,r.kt)("h2",{id:"fund-you-sequencer-account"},"Fund you Sequencer Account"),(0,r.kt)("p",null,"Using your sequencer pub key you created in the ",(0,r.kt)("a",{parentName:"p",href:"#create-a-new-sequencer-account"},"Create a New Sequencer\nAccount"),", copy and past the\n",(0,r.kt)("inlineCode",{parentName:"p"},"<SEQUENCER_ACCOUNT_PUB_KEY>")," into the input on the faucet page, and mint funds\nto your account:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sequencer Faucet",src:n(1721).Z,width:"1490",height:"794"})))}d.isMDXComponent=!0},1721:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sequencer-faucet-63615ccc21b8c454150825d608e5dea6.png"}}]);