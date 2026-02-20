// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import { YouTubeEmbed } from '@miletorix/vitepress-youtube-embed'
import '@miletorix/vitepress-youtube-embed/style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp(ctx) {
    ctx.app.component('YouTubeEmbed', YouTubeEmbed) 
  }
} satisfies Theme
