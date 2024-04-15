import{_ as s,c as i,o as a,a5 as t}from"./chunks/framework.D561hJ3q.js";const e="/assets/sequencer-faucet.6UQ0f9HT.png",F=JSON.parse('{"title":"Overview","description":"","frontmatter":{"sidebar_position":1},"headers":[],"relativePath":"local-rollup/1-introduction.md","filePath":"local-rollup/1-introduction.md","lastUpdated":1713206801000}'),l={name:"local-rollup/1-introduction.md"},n=t(`<h1 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h1><p>This guide will walk you through deploying a rollup full node on a local Kubernetes cluster which uses the Astria shared sequencer network.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you would like to deploy a rollup on a remote Kubernetes cluster, please see the <a href="/cloud-rollup/digital-ocean">remote deployment guide</a> here.</p></div><h2 id="local-dependencies" tabindex="-1">Local Dependencies <a class="header-anchor" href="#local-dependencies" aria-label="Permalink to &quot;Local Dependencies&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This guide has been tested on MacOS and Linux but not Windows</p></div><h3 id="clone-the-astria-dev-cluster" tabindex="-1">Clone the Astria <a href="https://github.com/astriaorg/dev-cluster/tree/main" target="_blank" rel="noreferrer">dev-cluster</a> <a class="header-anchor" href="#clone-the-astria-dev-cluster" aria-label="Permalink to &quot;Clone the Astria [dev-cluster](https://github.com/astriaorg/dev-cluster/tree/main)&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dusk-3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/astriaorg/dev-cluster.git</span></span></code></pre></div><h3 id="install-the-latest-astria-cli" tabindex="-1">Install the latest <a href="https://github.com/astriaorg/astria/releases/tag/cli-v0.2.2" target="_blank" rel="noreferrer">astria cli</a> <a class="header-anchor" href="#install-the-latest-astria-cli" aria-label="Permalink to &quot;Install the latest [astria cli](https://github.com/astriaorg/astria/releases/tag/cli-v0.2.2)&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-y6W2N" id="tab-SraVYkx" checked="checked"><label for="tab-SraVYkx">ARM Mac</label><input type="radio" name="group-y6W2N" id="tab-dUf6iJp"><label for="tab-dUf6iJp">X86_64 Mac</label><input type="radio" name="group-y6W2N" id="tab-LTsmrBe"><label for="tab-LTsmrBe">x86_64 Linux</label><input type="radio" name="group-y6W2N" id="tab-6tHcl3S"><label for="tab-6tHcl3S">From Source</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/astriaorg/astria/releases/download/cli-v0.3.1/astria-cli-aarch64-apple-darwin.tar.gz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvzf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/astriaorg/astria/releases/download/cli-v0.3.1/astria-cli-x86_64-apple-darwin.tar.gz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvzf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/astriaorg/astria/releases/download/cli-v0.3.1/astria-cli-x86_64-unknown-linux-gnu.tar.gz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvzf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --git=https://github.com/astriaorg/astria</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --tag=cli-v0.3.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --locked</span></span></code></pre></div></div></div><p>You&#39;ll also need to install the following tools:</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>There is a bug in the latest Docker desktop release for MacOS<br> Please install the following release: <a href="https://docs.docker.com/desktop/release-notes/#4252" target="_blank" rel="noreferrer">https://docs.docker.com/desktop/release-notes/#4252</a><br> For more details see <a href="https://github.com/docker/for-mac/issues/7100" target="_blank" rel="noreferrer">here</a></p></div><ul><li>docker - <a href="https://docs.docker.com/get-docker/" target="_blank" rel="noreferrer">https://docs.docker.com/get-docker/</a></li><li>kubectl - <a href="https://kubernetes.io/docs/tasks/tools/" target="_blank" rel="noreferrer">https://kubernetes.io/docs/tasks/tools/</a></li><li>helm - <a href="https://helm.sh/docs/intro/install/" target="_blank" rel="noreferrer">https://helm.sh/docs/intro/install/</a></li><li>kind - <a href="https://kind.sigs.k8s.io/docs/user/quick-start/#installation" target="_blank" rel="noreferrer">https://kind.sigs.k8s.io/docs/user/quick-start/#installation</a></li><li>just - <a href="https://just.systems/man/en/chapter_4.html" target="_blank" rel="noreferrer">https://just.systems/man/en/chapter_4.html</a></li><li>Foundry Cast and Forge tools - <a href="https://book.getfoundry.sh/getting-started/installation" target="_blank" rel="noreferrer">https://book.getfoundry.sh/getting-started/installation</a></li></ul><h2 id="dusknet-endpoints" tabindex="-1">Dusknet Endpoints <a class="header-anchor" href="#dusknet-endpoints" aria-label="Permalink to &quot;Dusknet Endpoints&quot;">​</a></h2><p>The endpoints for the remote shared sequencer are:</p><table><thead><tr><th>NAME</th><th>HOSTS</th><th>ADDRESS</th></tr></thead><tbody><tr><td>Sequencer RPC</td><td>rpc.sequencer.dusk-3.devnet.astria.org</td><td>34.111.73.187</td></tr><tr><td>Sequencer Faucet</td><td>faucet.sequencer.dusk-3.devnet.astria.org</td><td>34.36.8.102</td></tr></tbody></table><h2 id="setup-local-environment" tabindex="-1">Setup Local Environment <a class="header-anchor" href="#setup-local-environment" aria-label="Permalink to &quot;Setup Local Environment&quot;">​</a></h2><p>We use the <a href="https://github.com/astriaorg/dev-cluster" target="_blank" rel="noreferrer">Astria dev-cluster</a> to setup a local Kubernetes (k8s) cluster where we will deploy our local rollup.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Make sure that Docker is running before continuing.</p></div><p>In the <strong>dev-cluster</strong> repo, run:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create-cluster</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deploy-ingress-controller</span></span></code></pre></div><p>This sets up a local environment compatible with our helm charts.</p><h2 id="create-your-rollup-genesis-account-s" tabindex="-1">Create your Rollup Genesis Account(s) <a class="header-anchor" href="#create-your-rollup-genesis-account-s" aria-label="Permalink to &quot;Create your Rollup Genesis Account(s)&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p><strong>NEVER</strong> use a private key you use on a live network.</p></div><p>Specify the accounts which will be funded at the genesis block of your EVM rollup.</p><p>You can create an account using:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cast</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Successfully</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> created</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keypair.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Address:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     0xfFe9...5f8b</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &lt;GENESIS_ADDRESS&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Private</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0x332e...a8fb</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &lt;GENESIS_PRIVATE_KEY&gt;</span></span></code></pre></div><p>Export the genesis private key, this will be used by the faucet included with the rollup:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ROLLUP_FAUCET_PRIV_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GENESIS_PRIVATE_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>Export the genesis address alongside with your desired initial balance in Wei.<br> We recommend using a value of <code>100000000000000000000</code> or larger:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ROLLUP_GENESIS_ACCOUNTS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GENESIS_ADDRESS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BALANCE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>You can specify multiple accounts to be funded at genesis as comma deliminated tuples of <code>&lt;ADDRESS&gt;:&lt;BALANCE&gt;</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ROLLUP_GENESIS_ACCOUNTS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ADDRESS_1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BALANCE_1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ADDRESS_2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BALANCE_2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="create-rollup-config" tabindex="-1">Create Rollup Config <a class="header-anchor" href="#create-rollup-config" aria-label="Permalink to &quot;Create Rollup Config&quot;">​</a></h2><p>Create the configuration manifest for your rollup.</p><p>Replace the tags in the commands and env vars below, as follows:</p><table><thead><tr><th>Var Name</th><th>Var Type</th><th>Description</th></tr></thead><tbody><tr><td><code>&lt;YOUR_ROLLUP_NAME&gt;</code></td><td>String</td><td>The name of your rollup. This must be lowercase alphanumeric, <code>-</code> is allowed, this will be included in your rollup&#39;s URLs.</td></tr><tr><td><code>&lt;YOUR_NETWORK_ID&gt;</code></td><td>u64</td><td>The id of your network. You must select an id that has not already been claimed. You can view claimed chain IDs <a href="https://chainlist.org/" target="_blank" rel="noreferrer">here</a>.</td></tr></tbody></table><p>You can use environment variables to set the configuration for the rollup config creation. Replace all the <code>&lt;&gt;</code> tags with their corresponding values.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ROLLUP_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">YOUR_ROLLUP_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ROLLUP_NETWORK_ID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">YOUR_NETWORK_ID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>Run the config create command:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span></span></code></pre></div><p>Export the config file name as an env vars:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ROLLUP_CONF_FILE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ROLLUP_NAME-rollup-conf.yaml</span></span></code></pre></div><p>Verify the config</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ROLLUP_CONF_FILE</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">global:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  namespace:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-dev-cluster</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  useTTY:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  logLevel:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> debug</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">config:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  rollup:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    name:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">YOUR_ROLLUP_NAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    chainId:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">YOUR_ROLLUP_NAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-chain</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    networkId:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&lt;YOUR_NETWORK_ID&gt;&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    genesisAccounts:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> address:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GENESIS_ADDRES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">S</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      balance:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&lt;BALANCE&gt;&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  sequencer:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    initialBlockHeight:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">INITIAL_SEQUENCER_BLOCK_HEIGH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    websocket:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wss://rpc.sequencer.dusk-3.devnet.astria.org/websocket</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    rpc:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rpc.sequencer.dusk-3.devnet.astria.org</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ingress:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  hostname:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> localdev.me</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">celestia-node:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  config:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    labelPrefix:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">YOUR_ROLLUP_NAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="create-a-new-sequencer-account" tabindex="-1">Create a New Sequencer Account <a class="header-anchor" href="#create-a-new-sequencer-account" aria-label="Permalink to &quot;Create a New Sequencer Account&quot;">​</a></h2><p>Create an account on the Astria shared sequencer network for your rollup to submit transactions.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> account</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Account</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Private</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Key:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;5562...1622&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &lt;SEQUENCER_ACCOUNT_PRIV_KEY&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Public</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Key:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;ec20...f613&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Address:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     &quot;8a2f...5f68&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &lt;SEQUENCER_ACCOUNT_ADDRESS&gt;</span></span></code></pre></div><p>Export your sequencer private key and address as environment variables:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SEQUENCER_PRIV_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">5562...1622</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SEQUENCER_ACCOUNT_ADDRESS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">8a2f...5f68</span></span></code></pre></div><h2 id="fund-your-sequencer-account" tabindex="-1">Fund your Sequencer Account <a class="header-anchor" href="#fund-your-sequencer-account" aria-label="Permalink to &quot;Fund your Sequencer Account&quot;">​</a></h2><p>Navigate to &lt; <a href="https://faucet.sequencer.dusk-3.devnet.astria.org/" target="_blank" rel="noreferrer">https://faucet.sequencer.dusk-3.devnet.astria.org/</a> &gt; to view the sequencer faucet.</p><p>Enter your <code>&lt;SEQUENCER_ACCOUNT_ADDRESS&gt;</code> into the text box to send funds to your account:</p><p><img src="`+e+`" alt="Sequencer Faucet"></p><p>Verify your account received the funds</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> account</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> balance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $SEQUENCER_ACCOUNT_ADDRESS</span></span></code></pre></div><h2 id="deploy-the-rollup-node" tabindex="-1">Deploy the Rollup Node <a class="header-anchor" href="#deploy-the-rollup-node" aria-label="Permalink to &quot;Deploy the Rollup Node&quot;">​</a></h2><p>Use the <code>astria-cli</code> to deploy the rollup node</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deployment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ROLLUP_CONF_FILE </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --faucet-private-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ROLLUP_FAUCET_PRIV_KEY </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --sequencer-private-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $SEQUENCER_PRIV_KEY</span></span></code></pre></div><h2 id="watch-for-rollup-startup" tabindex="-1">Watch for rollup startup <a class="header-anchor" href="#watch-for-rollup-startup" aria-label="Permalink to &quot;Watch for rollup startup&quot;">​</a></h2><p>You can watch for the Kubernetes pods of the rollup to start with:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pods</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-dev-cluster</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NAME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                                             READY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   STATUS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    RESTARTS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      AGE</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">YOUR_ROLLUP_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-blockscout-647745c66d-vz4ks     6/6     Running   1 (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">56s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ago</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)   72s</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">YOUR_ROLLUP_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-celestia-node-light-mocha-4-0   2/2     Running   1 (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">56s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ago</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)   72s</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">YOUR_ROLLUP_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-faucet-68667bd895-pwqmz         1/1     Running   0             72s</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">YOUR_ROLLUP_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-geth-755cb8dd97-k5xp8           3/3     Running   0             72s</span></span></code></pre></div><h2 id="your-rollup-endpoints" tabindex="-1">Your Rollup Endpoints <a class="header-anchor" href="#your-rollup-endpoints" aria-label="Permalink to &quot;Your Rollup Endpoints&quot;">​</a></h2><p>Your rollup will automatically be configured with the several locally accessible endpoints:</p><table><thead><tr><th>Utility</th><th>URL</th></tr></thead><tbody><tr><td>Block Explorer</td><td><code>http://blockscout.&lt;YOUR_ROLLUP_NAME&gt;.localdev.me/</code></td></tr><tr><td>Faucet</td><td><code>http://faucet.&lt;YOUR_ROLLUP_NAME&gt;.localdev.me/</code></td></tr><tr><td>RPC</td><td><code>http://executor.&lt;YOUR_ROLLUP_NAME&gt;.localdev.me/</code></td></tr></tbody></table><h2 id="interact-with-your-rollup" tabindex="-1">Interact with your Rollup <a class="header-anchor" href="#interact-with-your-rollup" aria-label="Permalink to &quot;Interact with your Rollup&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ETH_RPC_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://executor.$ROLLUP_NAME.localdev.me/</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cast</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span></code></pre></div><p>Use an address of your choice.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> REC_ADDR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SOME_ADDRESS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cast</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> balance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $REC_ADDR</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cast</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $REC_ADDR </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--value</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000000000000000000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --private-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ROLLUP_FAUCET_PRIV_KEY</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cast</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> balance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $REC_ADDR</span></span></code></pre></div>`,76),h=[n];function p(k,r,d,o,c,g){return a(),i("div",null,h)}const y=s(l,[["render",p]]);export{F as __pageData,y as default};
