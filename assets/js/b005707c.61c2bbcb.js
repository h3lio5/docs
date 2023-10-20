"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=s(n),g=l,k=p["".concat(c,".").concat(g)]||p[g]||d[g]||r;return n?a.createElement(k,o(o({ref:t},i),{},{components:n})):a.createElement(k,o({ref:t},i))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=g;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:l,o[1]=u;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:3},o="GCP",u={unversionedId:"dusknet/cloud-rollup-deployment/gcp",id:"dusknet/cloud-rollup-deployment/gcp",title:"GCP",description:"Deploy your rollup to GCP.",source:"@site/docs/dusknet/cloud-rollup-deployment/3-gcp.md",sourceDirName:"dusknet/cloud-rollup-deployment",slug:"/dusknet/cloud-rollup-deployment/gcp",permalink:"/docs/dusknet/cloud-rollup-deployment/gcp",draft:!1,editUrl:"https://github.com/astriaorg/docs/docs/dusknet/cloud-rollup-deployment/3-gcp.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Azure",permalink:"/docs/dusknet/cloud-rollup-deployment/azure"},next:{title:"AWS",permalink:"/docs/dusknet/cloud-rollup-deployment/aws"}},c={},s=[{value:"Create a GCP (Google) Account",id:"create-a-gcp-google-account",level:2},{value:"Install GCP <code>gcloud</code> CLI",id:"install-gcp-gcloud-cli",level:2},{value:"Authenticate the CLI",id:"authenticate-the-cli",level:2},{value:"Create a Google Cloud Project",id:"create-a-google-cloud-project",level:2},{value:"Set Default Project",id:"set-default-project",level:2},{value:"Enable Billing",id:"enable-billing",level:2},{value:"Enable GKE API",id:"enable-gke-api",level:2},{value:"GKE Quickstart",id:"gke-quickstart",level:2},{value:"Create a GKE Cluster",id:"create-a-gke-cluster",level:3},{value:"Configure Kubectl for your GKE Cluster",id:"configure-kubectl-for-your-gke-cluster",level:2},{value:"Deploy Ingress Nginx Controller",id:"deploy-ingress-nginx-controller",level:2},{value:"Verify Loadbalancer with external IP",id:"verify-loadbalancer-with-external-ip",level:2},{value:"Create an <code>A</code> Record",id:"create-an-a-record",level:2},{value:"Creating your own Genesis Account",id:"creating-your-own-genesis-account",level:2},{value:"Configure and Deploy Rollup",id:"configure-and-deploy-rollup",level:2},{value:"Update the <code>helm</code> Chart",id:"update-the-helm-chart",level:3},{value:"Install the <code>astria-cli</code>",id:"install-the-astria-cli",level:2},{value:"Get Current Sequencer Block Height",id:"get-current-sequencer-block-height",level:3},{value:"Create Rollup Config",id:"create-rollup-config",level:2},{value:"Create new sequencer account",id:"create-new-sequencer-account",level:2},{value:"Create Namespace",id:"create-namespace",level:3},{value:"Use locally modified chart",id:"use-locally-modified-chart",level:3},{value:"Deploy the Rollup Node",id:"deploy-the-rollup-node",level:3},{value:"Observe your Deployment",id:"observe-your-deployment",level:2},{value:"Use <code>cast</code> to Interact with your Rollup",id:"use-cast-to-interact-with-your-rollup",level:2},{value:"Fund you Sequencer Account",id:"fund-you-sequencer-account",level:2}],i={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"gcp"},"GCP"),(0,l.kt)("p",null,"Deploy your rollup to GCP."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The list of local dependencies for the following instructions ",(0,l.kt)("a",{parentName:"p",href:"/docs/dusknet/overview"},"can be found here"),".")),(0,l.kt)("h2",{id:"create-a-gcp-google-account"},"Create a GCP (Google) Account"),(0,l.kt)("p",null,"Follow instructions here: ",(0,l.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/"},"https://console.cloud.google.com/")),(0,l.kt)("h2",{id:"install-gcp-gcloud-cli"},"Install GCP ",(0,l.kt)("inlineCode",{parentName:"h2"},"gcloud")," CLI"),(0,l.kt)("p",null,"Find the correct cli for your OS here:\n",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install"},"https://cloud.google.com/sdk/docs/install")),(0,l.kt)("h2",{id:"authenticate-the-cli"},"Authenticate the CLI"),(0,l.kt)("p",null,"Following instructions here:\n",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/gcloud/reference/auth/login"},"https://cloud.google.com/sdk/gcloud/reference/auth/login")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud auth login\n")),(0,l.kt)("h2",{id:"create-a-google-cloud-project"},"Create a Google Cloud Project"),(0,l.kt)("p",null,"See the full instructions here:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects"},"https://cloud.google.com/resource-manager/docs/creating-managing-projects"))),(0,l.kt)("p",null,"We recommend using the cli commands, which can be found on the above page by selecting\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"gcloud")," tabs within the instructions:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud projects create PROJECT_ID\n")),(0,l.kt)("h2",{id:"set-default-project"},"Set Default Project"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud config set project PROJECT_ID\n")),(0,l.kt)("h2",{id:"enable-billing"},"Enable Billing"),(0,l.kt)("p",null,"See the following page for setting up a billing account that suits your needs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cloud.google.com/billing/docs/how-to/verify-billing-enabled#console"},"https://cloud.google.com/billing/docs/how-to/verify-billing-enabled#console"))),(0,l.kt)("h2",{id:"enable-gke-api"},"Enable GKE API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud services enable container.googleapis.com\n")),(0,l.kt)("h2",{id:"gke-quickstart"},"GKE Quickstart"),(0,l.kt)("p",null,"Follow the Quickstart guide to create your GKE cluster:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/deploy-app-cluster"},"https://cloud.google.com/kubernetes-engine/docs/deploy-app-cluster"))),(0,l.kt)("h3",{id:"create-a-gke-cluster"},"Create a GKE Cluster"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters create-auto hello-cluster \\\n    --region=us-central1\n")),(0,l.kt)("h2",{id:"configure-kubectl-for-your-gke-cluster"},"Configure Kubectl for your GKE Cluster"),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"Due to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubectl/issues/1338"},"https://github.com/kubernetes/kubectl/issues/1338")," you must run the following commands before configuring your cluster\u2019s credentials, otherwise ",(0,l.kt)("inlineCode",{parentName:"p"},"helm")," will not work."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud components install gke-gcloud-auth-plugin\nexport USE_GKE_GCLOUD_AUTH_PLUGIN=True\n"))),(0,l.kt)("p",null,"Configure your credentials:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters get-credentials hello-cluster \\\n    --region us-central1\n")),(0,l.kt)("h2",{id:"deploy-ingress-nginx-controller"},"Deploy Ingress Nginx Controller"),(0,l.kt)("p",null,"See the Kubernetes GCE-GKE nginx installation guid here:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/deploy/#gce-gke"},"https://kubernetes.github.io/ingress-nginx/deploy/#gce-gke"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml\n")),(0,l.kt)("h2",{id:"verify-loadbalancer-with-external-ip"},"Verify Loadbalancer with external IP"),(0,l.kt)("p",null,"Run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc -n ingress-nginx\n")),(0,l.kt)("p",null,"You should see something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                 TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                      AGE\ningress-nginx-controller             LoadBalancer   34.118.228.98   34.42.184.206   80:31623/TCP,443:31357/TCP   57s\ningress-nginx-controller-admission   ClusterIP      34.118.229.71   <none>          443/TCP                      57s\n")),(0,l.kt)("h2",{id:"create-an-a-record"},"Create an ",(0,l.kt)("inlineCode",{parentName:"h2"},"A")," Record"),(0,l.kt)("p",null,"Creating an ",(0,l.kt)("inlineCode",{parentName:"p"},"A")," record will depend on where you purchased your domain from. Each\ndomain provider will have different steps required to set up an A record."),(0,l.kt)("p",null,"An example (for Google domains) can be seen here:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://support.google.com/a/answer/2579934?hl=en"},"https://support.google.com/a/answer/2579934?hl=en"))),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"You must configure a DNS record because our ingress configuration uses name\nbased virtual routing.\nMore info here: ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting"},"https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting"))),(0,l.kt)("h2",{id:"creating-your-own-genesis-account"},"Creating your own Genesis Account"),(0,l.kt)("p",null,"You can add genesis account(s) to your rollup during configuration."),(0,l.kt)("p",null,"You can create an account using"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cast w new\n")),(0,l.kt)("p",null,"to create a new account:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Successfully created new keypair.\nAddress:     0xfFe9...5f8b # <GENESIS_ADDRESS>\nPrivate key: 0x332e...a8fb # <GENESIS_PRIVATE_KEY>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"export")," the genesis address:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export GENESIS_ADDRESS=<GENESIS_ADDRESS>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"export")," the genesis private key:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export ROLLUP_FAUCET_PRIV_KEY=<GENESIS_PRIVATE_KEY>\n")),(0,l.kt)("p",null,"Exporting the genesis account(s) is also shown in the export block in the next section."),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"NEVER")," use a private key you use on a live network. ")),(0,l.kt)("h2",{id:"configure-and-deploy-rollup"},"Configure and Deploy Rollup"),(0,l.kt)("h3",{id:"update-the-helm-chart"},"Update the ",(0,l.kt)("inlineCode",{parentName:"h3"},"helm")," Chart"),(0,l.kt)("p",null,"Pull the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/dev-cluster"},"Astria dev-cluster repo"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:astriaorg/dev-cluster.git\ncd dev-cluster\n")),(0,l.kt)("p",null,"Within the dev-cluster repo, update the ingress template\n",(0,l.kt)("inlineCode",{parentName:"p"},"chart/rollup/templates/ingress.yaml")," so that each hostname ends in\n",(0,l.kt)("inlineCode",{parentName:"p"},"<YOUR_HOSTNAME>")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"localdev.me")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n- host: executor.{{ .Values.config.rollup.name }}.<YOUR_HOSTNAME>\n...\n- host: ws-executor.{{ .Values.config.rollup.name }}.<YOUR_HOSTNAME>\n...\n- host: faucet.{{ .Values.config.rollup.name }}.<YOUR_HOSTNAME>\n...\n- host: blockscout.{{ .Values.config.rollup.name }}.<YOUR_HOSTNAME>\n...\n")),(0,l.kt)("p",null,"Add an IngressClass so that the ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata")," section in the same file looks like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"metadata:\n  name: {{ .Values.config.rollup.name }}-ingress\n  namespace: {{ .Values.namespace }}\n  annotations:\n    kubernetes.io/ingress.class: nginx\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can see an example of these changes in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/dev-cluster/pull/119/files"},"this PR here"),".")),(0,l.kt)("h2",{id:"install-the-astria-cli"},"Install the ",(0,l.kt)("inlineCode",{parentName:"h2"},"astria-cli")),(0,l.kt)("p",null,"Pull the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/astria"},"Astria repo")," and install the ",(0,l.kt)("inlineCode",{parentName:"p"},"astria-cli")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:astriaorg/astria.git\ncd astria\njust install-cli\n")),(0,l.kt)("h3",{id:"get-current-sequencer-block-height"},"Get Current Sequencer Block Height"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"astria-cli sequencer blockheight get \\\n  --sequencer-url https://rpc.sequencer.dusk-1.devnet.astria.org/\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"export")," the initial sequencer block height as an environment variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export INITIAL_SEQUENCER_BLOCK_HEIGHT=<INITIAL_SEQUENCER_BLOCK_HEIGHT>\n")),(0,l.kt)("h2",{id:"create-rollup-config"},"Create Rollup Config"),(0,l.kt)("p",null,"Replace the tags in the commands and env vars below, as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Var Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Var Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<YOUR_ROLLUP_NAME>")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of your rollup")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<YOUR_NETWORK_ID>")),(0,l.kt)("td",{parentName:"tr",align:null},"u64"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of your network")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<BALANCE>")),(0,l.kt)("td",{parentName:"tr",align:null},"u64"),(0,l.kt)("td",{parentName:"tr",align:null},"A balance. We recommend using ",(0,l.kt)("inlineCode",{parentName:"td"},"100000000000000000000"),".")))),(0,l.kt)("p",null,"You can use environment variables to set the configuration for the rollup\nconfig creation. Replace all the ",(0,l.kt)("inlineCode",{parentName:"p"},"<>")," tags with their corresponding values. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export ROLLUP_USE_TTY=true\nexport ROLLUP_LOG_LEVEL=DEBUG\nexport ROLLUP_NAME=<YOUR_ROLLUP_NAME>\nexport ROLLUP_NETWORK_ID=<YOUR_NETWORK_ID>\nexport ROLLUP_SKIP_EMPTY_BLOCKS=false\nexport ROLLUP_GENESIS_ACCOUNTS=$GENESIS_ADDRESS:<BALANCE>\nexport ROLLUP_SEQUENCER_INITIAL_BLOCK_HEIGHT=$INITIAL_SEQUENCER_BLOCK_HEIGHT\nexport ROLLUP_SEQUENCER_WEBSOCKET=wss://rpc.sequencer.dusk-1.devnet.astria.org/websocket\nexport ROLLUP_SEQUENCER_RPC=https://rpc.sequencer.dusk-1.devnet.astria.org\n")),(0,l.kt)("p",null,"Once the environment variables shown above are set, run the following command to\ncreate the rollup config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"astria-cli rollup config create\n")),(0,l.kt)("p",null,"You can then run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cat <YOUR_ROLLUP_NAME>-rollup-conf.yaml\n")),(0,l.kt)("p",null,"to print out the config file contents to double check everything:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"config:\n  useTTY: true\n  logLevel: DEBUG\n  rollup:\n    name: <YOUR_ROLLUP_NAME>\n    chainId: # derived from rollup name\n    networkId: <YOUR_NETWORK_ID>\n    skipEmptyBlocks: true\n    genesisAccounts: \n      - address: 0x<GENESIS_ADDRESS>\n        balance: '<BALANCE>'\n  sequencer:\n    initialBlockHeight: <INITIAL_SEQUENCER_BLOCK_HEIGHT>\n    websocket: ws://rpc.sequencer.dusk-1.devnet.astria.org/websocket\n    rpc: http://rpc.sequencer.dusk-1.devnet.astria.org\n  celestia:\n    fullNodeUrl: http://celestia-service:26658\n")),(0,l.kt)("p",null,"Export this file to the env vars as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export ROLLUP_CONF_FILE=<YOUR_ROLLUP_NAME>-rollup-conf.yaml\n")),(0,l.kt)("h2",{id:"create-new-sequencer-account"},"Create new sequencer account"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"astria-cli sequencer account create\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Create Sequencer Account\n\nPrivate Key: "5562...1622" # <SEQUENCER_ACCOUNT_PRIV_KEY>\nPublic Key:  "ec20...f613" # <SEQUENCER_ACCOUNT_PUB_KEY>\nAddress:     "8a2f...5f68"\n')),(0,l.kt)("p",null,"Keep track of the ",(0,l.kt)("inlineCode",{parentName:"p"},"<SEQUENCER_ACCOUNT_PUB_KEY>")," as it will be used with the\nFaucet later on for funding your sequencer account."),(0,l.kt)("p",null,"Export your sequencer private key as an environment variable."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export SEQUENCER_PRIV_KEY=9c78...710d\n")),(0,l.kt)("h3",{id:"create-namespace"},"Create Namespace"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f kubernetes/namespace.yml\n")),(0,l.kt)("h3",{id:"use-locally-modified-chart"},"Use locally modified chart"),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"You ",(0,l.kt)("strong",{parentName:"p"},"must")," have modified your local ",(0,l.kt)("inlineCode",{parentName:"p"},"helm")," chart to use your own domain name\nas described in ",(0,l.kt)("a",{parentName:"p",href:"#update-the-helm-chart"},"this section here"),".")),(0,l.kt)("p",null,"Because you needed to modify the host names inside your ingress template you must deploy your rollup using your local chart:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export ROLLUP_CHART_PATH="/your_path_to/dev-cluster/charts/rollup"\n')),(0,l.kt)("h3",{id:"deploy-the-rollup-node"},"Deploy the Rollup Node"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"astria-cli")," to deploy the node."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"astria-cli rollup deployment create \\\n  --config $ROLLUP_CONF_FILE \\\n  --faucet-private-key $ROLLUP_FAUCET_PRIV_KEY \\\n  --sequencer-private-key $SEQUENCER_PRIV_KEY\n")),(0,l.kt)("h2",{id:"observe-your-deployment"},"Observe your Deployment"),(0,l.kt)("p",null,"Your rollups utility endpoints are as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Utility"),(0,l.kt)("th",{parentName:"tr",align:null},"URL"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Block Explorer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://blockscout."},"http://blockscout."),"<YOUR_ROLLUP_NAME>.<YOUR_HOSTNAME>/")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Faucet"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://faucet."},"http://faucet."),"<YOUR_ROLLUP_NAME>.<YOUR_HOSTNAME>/")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RPC"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://executor."},"http://executor."),"<YOUR_ROLLUP_NAME>.<YOUR_HOSTNAME>/")))),(0,l.kt)("p",null,"Open the URLs in your browser to view your running rollup."),(0,l.kt)("h2",{id:"use-cast-to-interact-with-your-rollup"},"Use ",(0,l.kt)("inlineCode",{parentName:"h2"},"cast")," to Interact with your Rollup"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export ETH_RPC_URL=http://executor.<YOUR_ROLLUP_NAME>.<YOUR_HOSTNAME>/\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cast block 0\n")),(0,l.kt)("p",null,"Use an address of your choice."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export REC_ADDR=<SOME_ADDRESS>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cast balance $REC_ADDR\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cast send $REC_ADDR --value 10000000000000000000 --private-key $ROLLUP_FAUCET_PRIV_KEY\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cast balance $REC_ADDR\n")),(0,l.kt)("h2",{id:"fund-you-sequencer-account"},"Fund you Sequencer Account"),(0,l.kt)("p",null,"Using your sequencer pub key you created in the\n",(0,l.kt)("a",{parentName:"p",href:"#create-new-sequencer-account"},"Create a New Sequencer Account")," section, copy and past the\n",(0,l.kt)("inlineCode",{parentName:"p"},"<SEQUENCER_ACCOUNT_PUB_KEY>")," into the input on the faucet page, and mint funds\nto your account:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Sequencer Faucet",src:n(9596).Z,width:"1490",height:"794"})))}d.isMDXComponent=!0},9596:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sequencer-faucet-63615ccc21b8c454150825d608e5dea6.png"}}]);