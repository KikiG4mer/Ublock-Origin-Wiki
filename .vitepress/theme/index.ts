import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import CompatibilityTable from './CompatibilityTable.vue'
import BrowserCards from './BrowserCards.vue'
import Icon from './Icons.vue'
import WideCard from './WideCard.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('WideCard', WideCard)
    app.component('CompatibilityTable', CompatibilityTable)
    app.component('BrowserCards', BrowserCards)
    app.component('Icon', Icon)
  }
} satisfies Theme