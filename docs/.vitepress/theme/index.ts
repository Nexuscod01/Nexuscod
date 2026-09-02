/// <reference types="vite/client" />

import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import MarketingLayout from './MarketingLayout.vue'
import ImagePlaceholder from './components/ImagePlaceholder.vue'
import PricingFeatureSystem from './components/PricingFeatureSystem.vue'
import SocialProof from './components/SocialProof.vue'
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
    app.component('SocialProof', SocialProof)
    app.component('MarketingLayout', MarketingLayout)

    if (import.meta.env.PROD) {
      googleAnalytics({
        id: 'G-JML9VGDMXJ'
      })
    }
  }
}

export default theme
