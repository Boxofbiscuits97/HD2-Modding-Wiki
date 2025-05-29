import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  base: "/HD2-Modding-Wiki/",
  title: "Helldivers 2 Modding Wiki",
  description: "The Modding Wiki For Helldivers 2",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: `Users`,
        items: [
          { text: 'Getting Started', link: `/player-overview`}
        ]
      },
      {
        text: 'Developers',
        items: [
          { text: 'Getting Started', link: '/overview' }
        ]
      },
      {
        text: "Other",
        items: [
          { text: `FAQ`, link: `/faq`}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
