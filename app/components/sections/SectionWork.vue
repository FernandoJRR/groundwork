<script setup lang="ts">
const { el, isVisible } = useScrollReveal()
const { t, tm, rt } = useI18n()

const spans = [true, false, false, false]
const cases = computed(() =>
  (tm('work.cases') as any[]).map((c, i) => ({
    tag: rt(c.tag),
    title: rt(c.title),
    outcome: rt(c.outcome),
    metric: rt(c.metric),
    metric_label: rt(c.metric_label),
    span: spans[i] ?? false,
  }))
)
</script>

<template>
  <section id="work" class="py-28 bg-surface">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div
        ref="el"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        class="transition-all duration-700 ease-out"
      >
        <!-- Header -->
        <div class="flex items-end justify-between mb-20 flex-wrap gap-6">
          <div>
            <div class="flex items-center gap-3 mb-5">
              <span class="text-[11px] font-semibold tracking-widest uppercase text-crimson">{{ t('work.label') }}</span>
            </div>
            <h2 class="font-display text-5xl md:text-6xl font-black text-foreground leading-[0.95] tracking-tight">
              {{ t('work.headline') }}
            </h2>
          </div>
          <a
            href="#contact"
            class="text-sm text-muted hover:text-accent transition-colors font-medium flex items-center gap-2 group"
          >
            <span>{{ t('work.view_all') }}</span>
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <div class="grid md:grid-cols-2 gap-px bg-white/8">
          <div
            v-for="(item, i) in cases"
            :key="item.title"
            :class="[
              'group bg-surface-2 overflow-hidden relative',
              'transition-all duration-300 hover:bg-bg',
              item.span ? 'md:col-span-2' : '',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ]"
            :style="{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }"
          >
            <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/0 group-hover:bg-accent transition-all duration-300" />

            <div :class="['p-8 md:p-10', item.span ? 'md:flex md:gap-16 md:items-center' : '']">
              <div :class="item.span ? 'md:flex-1' : ''">
                <span class="text-[10px] font-semibold tracking-wider uppercase text-accent/80 border border-accent/20 px-2.5 py-1 inline-block mb-5">
                  {{ item.tag }}
                </span>
                <h3 class="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight group-hover:text-accent transition-colors">
                  {{ item.title }}
                </h3>
                <p class="text-muted text-sm leading-relaxed max-w-md">{{ item.outcome }}</p>
              </div>

              <div :class="['mt-8', item.span ? 'md:mt-0 md:text-right md:shrink-0' : '']">
                <p class="font-display font-black text-accent/30 group-hover:text-accent/50 transition-colors leading-none"
                   :style="item.span ? 'font-size: clamp(3rem, 6vw, 5rem)' : 'font-size: 3rem'">
                  {{ item.metric }}
                </p>
                <p class="text-[10px] font-semibold tracking-wider uppercase text-muted/50 mt-1">{{ item.metric_label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
