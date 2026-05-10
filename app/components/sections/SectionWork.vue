<script setup lang="ts">
const { el, isVisible } = useScrollReveal()
const { t, tm, rt } = useI18n()
const localePath = useLocalePath()

const cases = computed(() =>
  (tm('work.cases') as any[]).map((c) => ({
    tag: rt(c.tag),
    title: rt(c.title),
    challenge: rt(c.challenge),
    outcome: rt(c.outcome),
    metric: rt(c.metric),
    metric_label: rt(c.metric_label),
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
          <NuxtLink
            :to="localePath('/work')"
            class="text-sm text-muted hover:text-accent transition-colors font-medium flex items-center gap-2 group"
          >
            <span>{{ t('work.view_all') }}</span>
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </NuxtLink>
        </div>

        <div class="grid md:grid-cols-2 gap-px bg-white/8">
          <div
            v-for="(item, i) in cases"
            :key="item.title"
            class="group bg-surface-2 overflow-hidden relative transition-all duration-300 hover:bg-bg"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            :style="{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }"
          >
            <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/0 group-hover:bg-accent transition-all duration-300" />

            <div class="p-8 md:p-10 flex flex-col h-full">
              <!-- Tag -->
              <span class="text-[10px] font-semibold tracking-wider uppercase text-accent/80 border border-accent/20 px-2.5 py-1 inline-block mb-6 self-start">
                {{ item.tag }}
              </span>

              <!-- Title -->
              <h3 class="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 leading-tight group-hover:text-accent transition-colors">
                {{ item.title }}
              </h3>

              <!-- Challenge -->
              <p class="text-[10px] font-semibold tracking-widest uppercase text-muted/40 mb-2">
                {{ t('work.challenge_label') }}
              </p>
              <p class="text-muted text-sm leading-relaxed mb-6">{{ item.challenge }}</p>

              <!-- Outcome -->
              <p class="text-[10px] font-semibold tracking-widest uppercase text-muted/40 mb-2">
                {{ t('work.outcome_label') }}
              </p>
              <p class="text-muted text-sm leading-relaxed">{{ item.outcome }}</p>

              <!-- Footer -->
              <div class="border-t border-white/[0.07] mt-8 pt-5 flex items-center justify-between">
                <span class="text-[11px] font-black text-accent/50 group-hover:text-accent/70 transition-colors tracking-tight">
                  {{ item.metric }}
                  <span class="text-[10px] font-semibold text-muted/40 tracking-widest uppercase ml-1">{{ item.metric_label }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
