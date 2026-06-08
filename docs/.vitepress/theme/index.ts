import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import { type Theme } from 'vitepress'
import './custom.css'

const theme: Theme = {
  extends: DefaultTheme,
  Layout,

  enhanceApp() {}
}

export default theme
