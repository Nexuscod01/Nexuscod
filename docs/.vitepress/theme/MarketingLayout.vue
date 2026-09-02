<script setup lang="ts">
import { useData } from 'vitepress'
import NotFound from 'vitepress/dist/client/theme-default/NotFound.vue'
import VPHome from 'vitepress/dist/client/theme-default/components/VPHome.vue'
import VPNav from 'vitepress/dist/client/theme-default/components/VPNav.vue'
import VPSkipLink from 'vitepress/dist/client/theme-default/components/VPSkipLink.vue'
import SiteAnalytics from './SiteAnalytics.vue'
import SiteFooter from './SiteFooter.vue'

const { frontmatter, page } = useData()
</script>

<template>
  <SiteAnalytics />
  <div v-if="frontmatter.layout !== false" class="Layout nimote-marketing-layout" :class="frontmatter.pageClass">
    <VPSkipLink />
    <VPNav />
    <main id="VPContent" class="nimote-marketing-main">
      <NotFound v-if="page.isNotFound" />
      <VPHome v-else-if="frontmatter.layout === 'home'" />
      <div v-else class="nimote-marketing-doc">
        <Content class="vp-doc" />
      </div>
    </main>
    <SiteFooter />
  </div>
  <Content v-else />
</template>
