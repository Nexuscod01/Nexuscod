<script setup lang="ts">
import { computed } from 'vue'
import {
  placeholderImages,
  type PlaceholderImage,
  type PlaceholderImageKey
} from '../image-registry'

const props = defineProps<{
  imageKey: PlaceholderImageKey
  alt: string
}>()

const image = computed<PlaceholderImage>(() => placeholderImages[props.imageKey])
const hasWideImage = computed(() => Boolean(image.value.wide?.src))
const hasImages = computed(() => Boolean(
  image.value.wide?.src || image.value.phone?.src || image.value.ipad?.src
))
const hasSingleDeviceImage = computed(
  () => !hasWideImage.value &&
    Boolean(image.value.phone?.src) !== Boolean(image.value.ipad?.src)
)
const hasLandscapeIpad = computed(() => {
  const ipad = image.value.ipad
  return Boolean(
    ipad?.src && ipad.width && ipad.height && ipad.width / ipad.height > 1
  )
})
</script>

<template>
  <div
    class="seo-media-placeholder"
    :class="[
      `seo-media-placeholder--${image.layout ?? 'device-pair'}`,
      {
        'has-image': hasImages,
        'has-single-device-image': hasSingleDeviceImage,
        'has-landscape-ipad': hasLandscapeIpad
      }
    ]"
    :role="hasImages ? undefined : 'img'"
    :aria-label="hasImages ? undefined : alt"
  >
    <img
      v-if="image.wide?.src"
      class="seo-media-placeholder__image seo-media-placeholder__image--wide"
      :src="image.wide.src"
      :alt="alt"
      :width="image.wide.width"
      :height="image.wide.height"
      loading="lazy"
      decoding="async"
    >
    <div v-else-if="hasImages" class="seo-media-placeholder__device-pair">
      <figure v-if="image.phone?.src" class="seo-media-placeholder__device seo-media-placeholder__device--phone">
        <img
          class="seo-media-placeholder__image"
          :src="image.phone.src"
          :alt="`${alt} — phone`"
          :width="image.phone.width"
          :height="image.phone.height"
          loading="lazy"
          decoding="async"
        >
      </figure>
      <figure v-if="image.ipad?.src" class="seo-media-placeholder__device seo-media-placeholder__device--ipad">
        <img
          class="seo-media-placeholder__image"
          :src="image.ipad.src"
          :alt="`${alt} — iPad`"
          :width="image.ipad.width"
          :height="image.ipad.height"
          loading="lazy"
          decoding="async"
        >
      </figure>
    </div>
    <slot v-else />
  </div>
</template>
