import{_ as o,c as t,o as a,a5 as s}from"./chunks/framework.D561hJ3q.js";const m=JSON.parse('{"title":"Cross-Rollup Composability","description":"","frontmatter":{"sidebar_position":3},"headers":[],"relativePath":"overview/3-cross-rollup-composability.md","filePath":"overview/3-cross-rollup-composability.md","lastUpdated":1713206801000}'),i={name:"overview/3-cross-rollup-composability.md"},e=s('<h1 id="cross-rollup-composability" tabindex="-1">Cross-Rollup Composability <a class="header-anchor" href="#cross-rollup-composability" aria-label="Permalink to &quot;Cross-Rollup Composability&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>To deploy your own rollup on the Astria Devnet on your local machine, check out the <a href="/local-rollup/1-introduction">instructions here</a>!</p><p>To deploy your own rollup on the Astria Devnet using Digital Ocean, check out the <a href="/cloud-rollup/digital-ocean">instructions here</a>!</p></div><p>Because Astria handles the transaction ordering for multiple rollups, it’s able to provide guarantees that transactions are only included as part of an atomic bundle. This allows users to specify that a transaction on Rollup A can be included in a block if and only if a different transaction on Rollup B is also included in the same block. By enabling such conditional transaction inclusion, Astria unlocks exciting possibilities such as atomic cross-rollup arbitrage.</p>',3),l=[e];function r(n,c,p,u,d,h){return a(),t("div",null,l)}const b=o(i,[["render",r]]);export{m as __pageData,b as default};
