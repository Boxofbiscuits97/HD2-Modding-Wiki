import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  base: "/HD2-Modding-Wiki/",
  title: "Helldivers 2 Modding Wiki",
  description: "The Modding Wiki For Helldivers 2",
  lastUpdated: true,
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
          {
            text: 'Game Development',
            collapsed: true,
            link: '/game development/overview',
            items: [
              {text: 'Terms', link: '/game development/terms'},
            ]
          },
          { text: 'Getting Started', link: '/overview' },
          {
            text: 'Source Development Kit',
            collapsed: true,
            link: '/sdk functions/overview',
            items: [
              {text: 'Settings', link: '/sdk functions/settings'},
              {text: 'Special Tools', link: '/sdk functions/special-tools'},
              {text: 'Functions', link: '/sdk functions/functions'}
            ]
          },
          { 
            text: 'Textures', 
            collapsed: true,
            link: '/textures/overview',
            items: [
              {text: 'Texture Baking', link: '/textures/texture-baking'},
              {text: '(Legacy) Texture Atlas', link: '/textures/texture-atlas'}
            ]
          },
          { 
            text: 'Materials', 
            collapsed: true,
            link: '/materials/overview',
            items: [
              {text: 'Advanced', link: '/materials/advanced'},
              {text: 'Basic+', link: '/materials/basic'},
              {text: 'Translucent', link: '/materials/translucent'},
              {text: 'Alpha Clip', link: '/materials/alphaclip'},
              {text: 'Original', link: '/materials/original'},
              {text: 'Emissive', link: '/materials/emissive'},
              {text: '(Legacy) Material Slot Order', link: '/materials/material-slot-order'},
              {text: '(Legacy) Extra Material', link: '/materials/extra-material'}
            ]
          },
          { 
            text: 'Armor Modding', 
            collapsed: true,
            link: '/armor modding/overview',
            items: [
              {text: '(Legacy) HD2 Armor Anatomy', link: '/armor modding/anatomy'},
              {text: 'HD2 Body Parts', link: '/armor modding/body-parts'},
              {text: 'Armor Replacement', link: '/armor modding/armor-replacement'}
            ]
          },
          { 
            text: 'Weapon Modding', 
            collapsed: true,
            link: '/weapon modding/overview',
            items: [
              {text: 'Weapon Replacement', link: '/weapon modding/weapon-replacement'},
              {text: 'Weapon/Equipment Replacement (LODs)', link: '/weapon modding/weapon-replacement-lods'}
            ]
          },
          {
            text: 'LUT Modding',
            collapsed: true,
            link: '/lut/overview',
            items: [
              
            ]
          }
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
      { icon: 'github', link: 'https://github.com/Boxofbiscuits97/HD2-Modding-Wiki' }
    ],

    editLink: {
      pattern: 'https://github.com/Boxofbiscuits97/HD2-Modding-Wiki/edit/main/docs/:path',
      text: "Edit this page on GitHub"
    }
  }
})
