<script setup lang="ts">
const { el, isVisible } = useScrollReveal()
const { t } = useI18n()

const logos = [
  'RH Avanza', 'PacaMax', 'Panadería Fátima', 'Panadería La Vienesa',
]
</script>

<template>
  <section id="logos" class="py-14 bg-surface-2 border-y border-white/8 overflow-hidden">
    <div
      ref="el"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      class="transition-all duration-700 ease-out"
    >
      <p class="text-center text-[11px] font-semibold tracking-widest uppercase text-muted/60 mb-8">
        {{ t('logos.trusted') }}
      </p>

      <div class="relative overflow-hidden">
        <div class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-2 to-transparent z-10 pointer-events-none" />
        <div class="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-2 to-transparent z-10 pointer-events-none" />

        <div class="marquee-track">
          <div
            v-for="(logo, i) in [...logos, ...logos]"
            :key="i"
            class="mx-10 flex items-center gap-10 whitespace-nowrap"
          >
            <span class="font-display text-xs font-bold text-foreground/25 tracking-[0.12em] uppercase">
              {{ logo }}
            </span>
            <span class="w-1 h-1 rounded-full bg-accent/20 shrink-0" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
