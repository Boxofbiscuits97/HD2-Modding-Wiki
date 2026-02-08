import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/HD2-Modding-Wiki/favicon.ico' }]
  ],
  base: "/HD2-Modding-Wiki/",
  title: "Helldivers 2 Modding Wiki",
  description: "The Modding Wiki For Helldivers 2",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Players', link:'/user/overview', activeMatch: '/user/'},
      { text: 'Modders', link:'/dev/overview', activeMatch: '/dev/'}
    ],

    search: {
      provider: 'local'
    },

    sidebar: {
      '/': [
        { 
          text: 'Getting Started', 
          link: `/user/overview`
        },
        { 
          text: 'Mod Managers', 
          link: `/user/mod manager/overview`,
          collapsed: true,
          items: [
            {text: 'Arsenal', link: `/user/mod manager/arsenal`},
            {text: 'HD2MM', link: `/user/mod manager/hd2mm`}
          ]
        }
      ],
      '/dev/': [
        { text: 'Getting Started',
          collapsed: true,
          link: '/dev/overview' ,
          items: [
            {text: 'Terms', link: '/dev/terms'},
            {text: 'Settings', link: '/dev/sdk functions/settings'},
            {text: 'Special Tools', link: '/dev/sdk functions/special-tools'},
            {text: 'Functions', link: '/dev/sdk functions/functions'}
          ]
        },
        { 
          text: 'Textures', 
          collapsed: true,
          link: '/dev/textures/overview',
          items: [
            {text: 'Texture Baking', link: '/dev/textures/texture-baking'},
            {text: '(Legacy) Texture Atlas', link: '/dev/textures/texture-atlas'}
          ]
        },
        { 
          text: 'Materials', 
          collapsed: true,
          link: '/dev/materials/overview',
          items: [
            {text: 'Advanced', link: '/dev/materials/advanced'},
            {text: 'Basic+', link: '/dev/materials/basic'},
            {text: 'Translucent', link: '/dev/materials/translucent'},
            {text: 'Alpha Clip+', link: '/dev/materials/alphaclip'},
            {text: 'Original', link: '/dev/materials/original'},
            {text: 'Emissive', link: '/dev/materials/emissive'},
            {text: '(Legacy) Material Slot Order', link: '/dev/materials/material-slot-order'},
            {text: '(Legacy) Extra Material', link: '/dev/materials/extra-material'}
          ]
        },
        { 
          text: 'Armor Modding', 
          collapsed: true,
          link: '/dev/armor modding/overview',
          items: [
            {text: 'Armor Replacement', link: '/dev/armor modding/armor-replacement'},
            {text: 'HD2 Armor Anatomy', link: '/dev/armor modding/anatomy'},
            {text: 'HD2 Body Parts', link: '/dev/armor modding/body-parts'},
            {text: 'Armor Swapping', link: '/dev/armor modding/armor-swapping'}
          ]
        },
        { 
          text: 'Weapon Modding', 
          collapsed: true,
          link: '/dev/weapon modding/overview',
          items: [
            {text: 'Weapon Replacement', link: '/dev/weapon modding/weapon-replacement'},
            {text: 'LOD Dependant Units', link: '/dev/weapon modding/lod-dependant-units'}
          ]
        },
        {
          text: 'Animation Modding',
          collapsed: true,
          link: '/dev/animation/overview',
          items: [
            {text: 'Animation Replacement', link: '/dev/animation/animation-replacement'},
            {text: 'Aligning Magazines', link: '/dev/animation/aligningmagazines'},
            {text: 'Importing External Animations', link : '/dev/animation/external-animations'},
            {text: 'Rig Editing', link: '/dev/animation/rigediting'}
          ]
        },
        {
          text: 'Audio Modding',
          collapsed: true,
          link: '/dev/audio/overview',
          items: [
            {
              text: 'Music', 
              link: '/dev/audio/music', 
              collapsed: true, 
              items: [
                {text: 'Mission Music', link: '/dev/audio/missionmusic'},
                {text: 'Troubleshooting', link: '/dev/audio/troubleshooting'}
              ]
            },
            {text: 'Voicelines', link: '/dev/audio/voicelines'},
            {text: 'SFX', link: '/dev/audio/sfx'}
          ]
        },
        {
          text: 'Text Modding',
          collapsed: true,
          link: '/dev/text/overview',
          items: [
              {text: 'Replacing Text', link: '/dev/text/replacing-text'}
          ]
        },
        {
          text: 'LUT Modding',
          collapsed: true,
          link: '/dev/lut/overview',
          items: [
            
          ]
        },
        {
          text: 'Cape Modding',
          collapsed: true,
          link: '/dev/cape/overview',
          items: [
            {text: 'Beginners Course', link: '/dev/cape/beginnersguide'}
          ]
        },
        {
          text: 'Miscellaneous Modding',
          collapsed: true,
          link: '/dev/misc/overview',
          items: [
            {text: 'ID Swapping', link: '/dev/misc/id-swapping'},
            {text: 'Separating Patches', link: '/dev/misc/separating-patches'},
            {text: 'Rank Replacement', link: '/dev/misc/rank-replacement'},
            {text: 'Player Card Replacement', link: '/dev/misc/player-card-replacement'}
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Boxofbiscuits97/HD2-Modding-Wiki' },
      { icon: 'discord', link: 'https://discord.gg/ZwjPaZNwH7' }
    ],

    editLink: {
      pattern: 'https://github.com/Boxofbiscuits97/HD2-Modding-Wiki/edit/main/docs/:path',
      text: "Edit this page on GitHub"
    }
  }
})
