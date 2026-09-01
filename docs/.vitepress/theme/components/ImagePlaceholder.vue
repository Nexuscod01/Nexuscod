<script setup lang="ts">
import { computed } from 'vue'
import {
  placeholderImages,
  type PlaceholderImageKey
} from '../image-registry'

const props = defineProps<{
  imageKey: PlaceholderImageKey
  alt: string
}>()

const image = computed(() => placeholderImages[props.imageKey])
</script>

<template>
  <div
    class="seo-media-placeholder"
    :class="{ 'has-image': image.src }"
    :role="image.src ? undefined : 'img'"
    :aria-label="image.src ? undefined : alt"
  >
    <img
      v-if="image.src"
      class="seo-media-placeholder__image"
      :src="image.src"
      :alt="alt"
      loading="lazy"
      decoding="async"
    >
    <slot v-else />
  </div>
</template>
