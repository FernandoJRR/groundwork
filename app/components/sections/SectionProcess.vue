<script setup lang="ts">
const { el, isVisible } = useScrollReveal()
const { t, tm, rt } = useI18n()

const steps = computed(() =>
  (tm('process.steps') as any[]).map(s => ({
    number: rt(s.number),
    title: rt(s.title),
    description: rt(s.description),
  }))
)
</script>

<template>
  <section id="process" class="py-28 bg-bg relative overflow-hidden">
    <HexGrid />

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <div
        ref="el"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        class="transition-all duration-700 ease-out"
      >
        <!-- Header -->
        <div class="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div class="flex items-center gap-3 mb-5">
              <span class="text-[11px] font-semibold tracking-widest uppercase text-crimson">{{ t('process.label') }}</span>
            </div>
            <h2 class="font-display text-5xl md:text-6xl font-black text-foreground leading-[0.95] tracking-tight">
              {{ t('process.headline_1') }}<br/>{{ t('process.headline_2') }}
            </h2>
          </div>
          <p class="text-muted text-sm max-w-xs leading-relaxed md:text-right">
            {{ t('process.subtitle') }}
          </p>
        </div>

        <!-- Desktop: connected timeline -->
        <div class="hidden md:flex items-start gap-0 mb-0">
          <div
            v-for="(step, i) in steps"
            :key="step.number"
            :class="[
              'flex-1 flex flex-col items-center transition-all duration-500',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            ]"
            :style="{ transitionDelay: isVisible ? `${i * 120 + 100}ms` : '0ms' }"
          >
            <div class="w-full flex items-center mb-10">
              <div class="flex-1 h-px" :class="i === 0 ? 'bg-transparent' : 'bg-white/10'" />
              <div class="w-11 h-11 border border-accent/30 bg-surface flex items-center justify-center shrink-0 relative">
                <span class="text-sm text-accent font-bold tabular-nums">{{ step.number }}</span>
                <div class="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-accent/60" />
              </div>
              <div class="flex-1 h-px" :class="i === steps.length - 1 ? 'bg-transparent' : 'bg-white/10'" />
            </div>
            <div class="text-center px-6 w-full">
              <h3 class="font-display text-xl font-bold text-foreground mb-3">{{ step.title }}</h3>
              <p class="text-sm text-muted leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>

        <!-- Mobile: vertical list -->
        <div class="md:hidden flex flex-col gap-0 divide-y divide-white/8">
          <div
            v-for="(step, i) in steps"
            :key="step.number"
            :class="[
              'py-8 flex gap-6 items-start transition-all duration-500',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            ]"
            :style="{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }"
          >
            <div class="w-10 h-10 border border-accent/30 bg-surface flex items-center justify-center shrink-0">
              <span class="text-sm text-accent font-bold tabular-nums">{{ step.number }}</span>
            </div>
            <div>
              <h3 class="font-display text-lg font-bold text-foreground mb-2">{{ step.title }}</h3>
              <p class="text-sm text-muted leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
