<script setup lang="ts">
import { computed } from 'vue'
import translations from '../i18n/pricing-features.json'
import { product, productCopy } from '../product'

type Locale = keyof typeof translations

const props = defineProps<{
  lang?: Locale
  mode?: 'full' | 'preview'
}>()

const copy = computed(() => translations[props.lang || 'en'] || translations.en)
const showFeatures = computed(() => props.mode !== 'preview')
const language = computed(() => props.lang === 'zh' ? 'zh' : 'en')
const trial = computed(() => productCopy[language.value].trial)
const pricing = computed(() => productCopy[language.value].pricing)
</script>

<template>
  <div class="pricing-feature-system">
    <section v-if="showFeatures" class="home-page-section dense alt pf-section">
      <div class="home-page-section-head">
        <p class="home-page-eyebrow">{{ copy.features.eyebrow }}</p>
        <h2 class="home-page-section-title">{{ copy.features.title }}</h2>
        <p class="home-page-section-copy">{{ copy.features.summary }}</p>
      </div>
      <div class="pf-feature-grid">
        <article v-for="group in copy.features.groups" :key="group.name" class="pf-feature-card">
          <div class="pf-card-head">
            <h3>{{ group.name }}</h3>
            <span>{{ group.badge }}</span>
          </div>
          <ul>
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="home-page-section dense pf-pricing-section">
      <div class="home-page-section-head">
        <p class="home-page-eyebrow">{{ copy.pricing.eyebrow }}</p>
        <h2 class="home-page-section-title">{{ copy.pricing.title }}</h2>
        <p class="home-page-section-copy">{{ copy.pricing.summary }}</p>
      </div>
      <div class="pf-pricing-grid">
        <article
          v-for="(plan, index) in copy.pricing.plans"
          :key="plan.name"
          class="pf-plan-card"
          :class="{ 'is-featured': plan.highlight }"
        >
          <div class="pf-plan-topline">
            <h3>{{ plan.name }}</h3>
            <span v-if="plan.badge">{{ plan.badge }}</span>
          </div>
          <div class="pf-price-row">
            <strong>{{ index === 1 ? product.pricing.monthly.replace('/month', '') : plan.price }}</strong>
            <span>{{ index === 1 ? (language === 'zh' ? '每月' : 'per month') : plan.period }}</span>
          </div>
          <div v-if="index === 1" class="pf-yearly-row">
            <strong>{{ product.pricing.yearly.replace('/year', '') }}</strong>
            <span>{{ language === 'zh' ? '每年' : 'per year' }}</span>
          </div>
          <p class="pf-plan-summary">{{ plan.summary }}</p>
          <a :href="plan.link" class="home-page-btn" :class="plan.highlight ? 'primary' : 'secondary'">
            {{ plan.cta }}
          </a>
          <ul class="pf-plan-features">
            <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
          </ul>
        </article>
      </div>
      <p class="pf-trust-line">{{ copy.pricing.trustLine }} {{ trial }}. {{ pricing }}.</p>
      <p class="pf-trust-line">{{ productCopy[language].byok }}</p>
    </section>
  </div>
</template>
