/// <reference types="vite/client" />

import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import ImagePlaceholder from './components/ImagePlaceholder.vue'
import PricingFeatureSystem from './components/PricingFeatureSystem.vue'
import { type Theme } from 'vitepress'
import './custom.css'
// @ts-ignore - The package does not ship TypeScript types.
import googleAnalytics from 'vitepress-plugin-google-analytics'

const theme: Theme = {
  extends: DefaultTheme,
  Layout,

  enhanceApp({ app }) {
    app.component('ImagePlaceholder', ImagePlaceholder)
    app.component('PricingFeatureSystem', PricingFeatureSystem)

    if (import.meta.env.PROD) {
      googleAnalytics({
        id: 'G-JML9VGDMXJ'
      })
    }
  }
}

export default theme
