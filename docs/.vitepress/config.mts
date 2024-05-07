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
            { text: 'Cross rollup composability', link: '/overview/3-cross-rollup-composability' },
          ]
        }
      ],
    },
    {
      text: 'Developers',
      collapsed: true,
      items: [
        {
          text: 'Using the Astria cli',
          collapsed: true,
          items: [
            { text: 'Install the CLI', link: '/developer/tutorials/install-the-cli.md' },
            { text: 'Run a Local Rollup and Sequencer', link: '/developer/tutorials/run-local-rollup-and-sequencer.md' },
            { text: 'Run a Local Rollup against a Remote Sequencer', link: '/developer/tutorials/run-local-rollup-against-remote-sequencer.md' },
            { text: 'Test Transactions', link: '/developer/tutorials/test-transactions.md' },
            { text: 'Useful commands', link: '/developer/tutorials/2-cli-faq-examples.md' },
          ]
        },
        { text: 'The Astria EVM', link: '/astria-evm/overview' },
        { text: 'Dusknet FAQ', link: '/dusk-faq/1-information' }
      ]
    },
    {
      text: 'Community',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/community/1-overview' }
      ]
    },
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
