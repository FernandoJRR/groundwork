<script setup lang="ts">
const { el, isVisible } = useScrollReveal()
const { t } = useI18n()
</script>

<template>
  <section id="contact" class="relative py-36 bg-surface-2 border-y border-white/8 overflow-hidden">
    <HexGrid />

    <div class="absolute top-0 left-0 right-0 h-px bg-crimson" aria-hidden="true" />

    <div class="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
      <div class="w-[800px] h-[400px] bg-accent/[0.035] blur-[150px] rounded-full" />
    </div>

    <div class="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
      <span
        class="font-display font-black leading-none tracking-tighter text-accent/[0.018] select-none"
        style="font-size: clamp(8rem, 20vw, 18rem);"
      >
        BUILD
      </span>
    </div>

    <div
      ref="el"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      class="relative z-10 max-w-3xl mx-auto px-6 text-center transition-all duration-700 ease-out"
    >
      <div class="flex items-center justify-center gap-3 mb-8">
        <span class="text-[11px] font-semibold tracking-widest uppercase text-accent">{{ t('cta.label') }}</span>
      </div>

      <h2
        class="font-display font-black text-foreground leading-[0.92] tracking-tight mb-8"
        style="font-size: clamp(3rem, 8vw, 6rem);"
      >
        {{ t('cta.headline_1') }}<br/>{{ t('cta.headline_2') }}
      </h2>

      <p class="text-lg text-muted mb-12 leading-relaxed max-w-md mx-auto">
        {{ t('cta.body') }}
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-5">
        <BaseButton href="mailto:hello@gembaloft.com" size="lg">
          {{ t('cta.cta_primary') }}
        </BaseButton>
        <a
          href="mailto:hello@gembaloft.com"
          class="text-sm font-medium text-muted hover:text-accent transition-colors"
        >
          {{ t('cta.cta_secondary') }}
        </a>
      </div>
    </div>
  </section>
</template>
