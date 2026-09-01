<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

type Gtag = (command: 'event', eventName: string, parameters: Record<string, string>) => void

function ctaLocation(link: HTMLAnchorElement): string {
  if (link.closest('.VPNav')) return 'navigation'
  if (link.closest('.nimote-site-footer')) return 'footer'
  if (link.closest('.home-page-hero')) return 'homepage_hero'
  if (link.closest('.home-page-cta')) return 'homepage_final_cta'
  if (link.closest('.seo-cta')) return 'seo_cta'
  if (link.closest('.home-page-video')) return 'homepage_demo'
  return 'content_link'
}

function eventFor(link: HTMLAnchorElement): string | null {
  const url = new URL(link.href, window.location.origin)

  if (url.hostname === 'play.google.com' || url.hostname === 'apps.apple.com') {
    return 'store_click'
  }
  if (url.hostname === 'www.youtube.com' || url.pathname === '/demo') {
    return 'watch_demo'
  }
  if (url.pathname.endsWith('/docs/quick-start')) {
    return 'docs_start'
  }
  if (url.pathname.endsWith('/download')) {
    return 'download_click'
  }
  if (url.pathname.endsWith('/support') && url.searchParams.get('utm_campaign') === 'ios_availability') {
    return 'ios_availability_interest'
  }

  return null
}

function trackClick(event: MouseEvent) {
  const target = event.target
  if (!(target instanceof Element)) return

  const link = target.closest('a[href]') as HTMLAnchorElement | null
  if (!link || link.hasAttribute('data-no-track')) return

  const eventName = eventFor(link)
  const gtag = (window as unknown as { gtag?: Gtag }).gtag
  if (!eventName || !gtag) return

  const url = new URL(link.href, window.location.origin)
  gtag('event', eventName, {
    cta_location: ctaLocation(link),
    link_text: (link.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 100),
    destination_path: `${url.hostname}${url.pathname}`,
    campaign: url.searchParams.get('utm_campaign') || 'none',
    source_page: window.location.pathname
  })
}

onMounted(() => document.addEventListener('click', trackClick))
onBeforeUnmount(() => document.removeEventListener('click', trackClick))
</script>

<template>
  <!-- Interaction tracking is delegated at document level so Markdown CTAs,
       navigation, and future landing pages are measured without extra wiring. -->
  <span class="visually-hidden" aria-hidden="true" />
</template>
