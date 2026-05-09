<script setup lang="ts">
const { el, isVisible } = useScrollReveal()
const { t, tm, rt } = useI18n()

const services = computed(() =>
  (tm('services.items') as any[]).map(s => ({
    title: rt(s.title),
    description: rt(s.description),
    tag: rt(s.tag),
  }))
)
</script>

<template>
  <section id="services" class="py-28 bg-surface">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div
        ref="el"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        class="transition-all duration-700 ease-out"
      >
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div class="flex items-center gap-3 mb-5">
              <span class="text-[11px] font-semibold tracking-widest uppercase text-crimson">{{ t('services.label') }}</span>
            </div>
            <h2 class="font-display text-5xl md:text-6xl font-black text-foreground leading-[0.95] tracking-tight">
              {{ t('services.headline_1') }}<br/>{{ t('services.headline_2') }}
            </h2>
          </div>
          <a
            href="#contact"
            class="text-sm text-muted hover:text-accent transition-colors font-medium flex items-center gap-2 group shrink-0"
          >
            <span>{{ t('services.cta') }}</span>
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <!-- Numbered service list -->
        <div class="divide-y divide-white/8">
          <div
            v-for="(service, i) in services"
            :key="service.title"
            :class="[
              'group py-10 md:py-12 flex gap-6 md:gap-16 items-start',
              'cursor-default transition-all duration-500',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            ]"
            :style="{ transitionDelay: isVisible ? `${i * 100 + 150}ms` : '0ms' }"
          >
            <span class="text-[2.5rem] md:text-[3.5rem] font-bold text-white/10 group-hover:text-accent/25 transition-colors leading-none shrink-0 w-14 md:w-20 text-right select-none tabular-nums">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <div class="flex-1 pt-1">
              <div class="flex items-start justify-between gap-4 mb-4">
                <h3 class="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
                  {{ service.title }}
                </h3>
                <div class="flex items-center gap-3 shrink-0">
                  <span class="hidden md:block text-[10px] font-semibold tracking-wider uppercase text-muted/60 border border-white/10 px-2.5 py-1">
                    {{ service.tag }}
                  </span>
                  <span class="text-accent opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 transform font-display font-bold text-xl">→</span>
                </div>
              </div>
              <p class="text-muted leading-relaxed max-w-2xl">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
