import { defineConfig } from 'vitepress'
const { BASE: base = "/" } = process.env;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Astria",
  description: "The Shared Sequencer Network",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  base: base,
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }]],
  themeConfig: {
    editLink: {
      pattern: "https://github.com/astriaorg/docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    logo: { src: '/astria-logo-mini.svg', width: 24, height: 24 },

    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    search: {
      provider: "local",
      options: {
        detailedView: true,
      },
    },

    sidebar: sidebar(),

    socialLinks: [
      { icon: "github", link: "https://github.com/astriaorg" },
      { icon: "twitter", link: "https://twitter.com/AstriaOrg" },
    ],
  }
})

function sidebar() {
  return [
    {

      items: [
        {
          text: 'What is Astria?',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/overview/1-introduction' },
            { text: 'Why Decentralized Sequencers?', link: '/overview/2-why-decentralized-sequencers' },
            { text: 'Cross-Rollup Composability', link: '/overview/3-cross-rollup-composability' },

            {
              text: 'Architecture',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/overview/architecture/1-overview' },
                { text: 'Transaction Flow', link: '/overview/architecture/2-transaction-flow' },
                { text: 'Rollups', link: '/overview/architecture/3-rollup' },
                { text: 'Composer', link: '/overview/architecture/4-composer' },
                { text: 'The Astria Sequencer', link: '/overview/architecture/5-the-astria-sequencer' },
                { text: 'Relayer', link: '/overview/architecture/6-relayer' },
                { text: 'Conductor', link: '/overview/architecture/7-conductor' },
                { text: 'Data Availability Layer', link: '/overview/architecture/8-data-availability-layer' },
              ]
            },
          ]
        }
      ],
    },
    {
      text: 'Developers',
      collapsed: true,
      items: [
        {
          text: 'Tutorials',
          collapsed: true,
          items: [
            { text: 'Deploy a Local Rollup', link: '/local-rollup/1-introduction' },
            {
              text: 'Deploy a Cloud Rollup',
              collapsed: true,
              items: [
                { text: 'Digital Ocean', link: '/cloud-rollup/digital-ocean' },
              ]
            },
            { 
              text: 'Using the Astria cli', 
              collapsed: true,
              items: [
                {text: 'Install the CLI', link: '/developer/tutorials/install-the-cli.md'},
                {text: 'Run a Local Rollup and Sequencer', link: '/developer/tutorials/run-local-rollup-and-sequencer.md' },
                {text: 'Run a Local Rollup against a Remote Sequencer', link: '/developer/tutorials/run-local-rollup-against-remote-sequencer.md' },
                {text: 'Test Transactions', link: '/developer/tutorials/test-transactions.md' },
              ]
            }
          ]
        },
        {
          text: 'References',
          collapsed: true,
          items: [
            {text: 'Astria Endpoints', link: '/developer/references/endpoints.md'},
            {
              text: 'astria-go cli', 
              collapsed: true,
              items: [
                {text: 'Installation', link: '/developer/references/astria-go/cli-installation.md'},
                {text: 'Commands', link: '/developer/references/astria-go/cli-commands.md'},
                {text: 'Networks Configuration', link: '/developer/references/astria-go/cli-networks-configuration.md'},
              ]
            }
          ]
        },
        {
          text: 'The Astria EVM', link: '/astria-evm/overview'
        },
      ]
    },
    {
      text: 'Resources',
      collapsed: true,
      items: [
        {
          text: 'Community',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/community/1-overview' }
          ]
        },
        { text: 'Dusknet FAQ', link: '/dusk-faq/1-information' }
      ]
    }
  ]
}

function nav() {
  return [
    { text: 'Home', link: '/' },
    {
      text: "Join the network",
      items: [
        { text: "Learn", link: "/overview/1-introduction" },
        { text: "Developers", link: "/local-rollup/1-introduction" },
        { text: "Community", link: '/community/1-overview' },
      ],
    },
  ];
}
