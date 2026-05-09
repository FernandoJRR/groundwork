<script setup lang="ts">
const { el, isVisible } = useScrollReveal()
const { t, tm, rt } = useI18n()

const stats = computed(() =>
  (tm('mission.stats') as any[]).map(s => ({ number: rt(s.number), label: rt(s.label) }))
)
</script>

<template>
  <section id="about" class="relative py-28 bg-bg overflow-hidden">
    <HexGrid />

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <div
        ref="el"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        class="transition-all duration-700 ease-out grid md:grid-cols-2 gap-20 items-center"
      >
        <!-- Left: mission text -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <span class="text-[11px] font-semibold tracking-widest uppercase text-crimson">{{ t('mission.label') }}</span>
          </div>
          <h2 class="font-display text-5xl md:text-6xl font-black text-foreground mb-8 leading-[0.95] tracking-tight">
            {{ t('mission.headline_1') }}<br/><span class="text-accent">{{ t('mission.headline_2') }}</span>
          </h2>
          <div class="space-y-4">
            <p class="text-muted leading-relaxed">{{ t('mission.body_1') }}</p>
            <p class="text-muted leading-relaxed">{{ t('mission.body_2') }}</p>
          </div>
        </div>

        <!-- Right: stat grid -->
        <div class="grid grid-cols-2 gap-px bg-white/8">
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            :class="[
              'bg-surface-2 p-8 flex flex-col justify-between transition-all duration-500',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            ]"
            :style="{ transitionDelay: isVisible ? `${i * 80 + 200}ms` : '0ms' }"
          >
            <p class="font-display text-5xl font-black text-accent leading-none mb-4">{{ stat.number }}</p>
            <p class="text-[11px] font-semibold tracking-wider uppercase text-muted">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
