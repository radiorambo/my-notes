// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== 'undefined') {
      // Enable "detailed list" view for local search by default
      const key = 'vitepress:local-search-detailed-list'
      if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, 'true')
      }
    }
  }
} satisfies Theme
