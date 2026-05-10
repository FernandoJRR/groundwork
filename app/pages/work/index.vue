<script setup lang="ts">
const { el, isVisible } = useScrollReveal(0.05)
const { t, tm, rt } = useI18n()
const localePath = useLocalePath()

const extraData = [
  {
    industry: 'Logistics & Distribution',
    services: ['Custom Software', 'Process Automation', 'API Integration'],
  },
  {
    industry: 'Financial Services',
    services: ['Business Intelligence', 'Data Visualization', 'ETL Pipeline'],
  },
  {
    industry: 'Operations & Consulting',
    services: ['IT Consulting', 'Process Mapping', 'Change Management'],
  },
  {
    industry: 'Infrastructure',
    services: ['Network Design', 'Cloud Connectivity', 'Site Migration'],
  },
]

const cases = computed(() =>
  (tm('work.cases') as any[]).map((c, i) => ({
    tag: rt(c.tag),
    title: rt(c.title),
    challenge: rt(c.challenge),
    outcome: rt(c.outcome),
    metric: rt(c.metric),
    metric_label: rt(c.metric_label),
    ...extraData[i],
  }))
)
</script>

<template>
  <div class="bg-bg min-h-screen">
    <SectionNav />

    <main>
      <!-- Page Header -->
      <section class="relative pt-40 pb-24 bg-bg overflow-hidden">
        <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div class="absolute top-0 left-0 w-[700px] h-[500px] bg-accent/[0.04] blur-[180px] -translate-x-1/3 -translate-y-1/4" />
        </div>
        <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-accent/50 via-accent/10 to-transparent" aria-hidden="true" />

        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <NuxtLink
            :to="localePath('/')"
            class="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-muted hover:text-accent transition-colors mb-12 group"
          >
            <span class="group-hover:-translate-x-1 transition-transform">←</span>
            {{ t('casestudies.back') }}
          </NuxtLink>

          <div class="flex items-center gap-3 mb-6">
            <span class="text-[11px] font-semibold tracking-widest uppercase text-crimson">{{ t('casestudies.label') }}</span>
          </div>

          <h1
            class="font-display font-black text-foreground tracking-tight leading-[0.95] mb-8"
            style="font-size: clamp(2.4rem, 5vw, 4.5rem);"
          >
            <span class="block">{{ t('casestudies.headline_1') }}</span>
            <span class="block text-accent">{{ t('casestudies.headline_2') }}</span>
          </h1>

          <p class="text-base lg:text-lg text-muted leading-relaxed max-w-xl">
            {{ t('casestudies.subtitle') }}
          </p>
        </div>
      </section>

      <!-- Case Studies Grid -->
      <section class="pb-28 bg-bg">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref="el" class="grid md:grid-cols-2 gap-px bg-white/8">
            <div
              v-for="(item, i) in cases"
              :key="item.title"
              class="group bg-surface-2 overflow-hidden relative transition-all duration-300 hover:bg-bg"
              :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
              :style="{ transitionDelay: isVisible ? `${i * 90}ms` : '0ms', transition: 'opacity 0.6s ease, transform 0.6s ease' }"
            >
              <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/0 group-hover:bg-accent transition-all duration-300" />

              <div class="p-8 md:p-10 flex flex-col h-full">
                <!-- Tag -->
                <span class="text-[10px] font-semibold tracking-wider uppercase text-accent/80 border border-accent/20 px-2.5 py-1 inline-block mb-6 self-start">
                  {{ item.tag }}
                </span>

                <!-- Title -->
                <h2 class="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 leading-tight group-hover:text-accent transition-colors">
                  {{ item.title }}
                </h2>

                <!-- Challenge -->
                <p class="text-[10px] font-semibold tracking-widest uppercase text-muted/40 mb-2">
                  {{ t('work.challenge_label') }}
                </p>
                <p class="text-muted text-sm leading-relaxed mb-6">{{ item.challenge }}</p>

                <!-- Outcome -->
                <p class="text-[10px] font-semibold tracking-widest uppercase text-muted/40 mb-2">
                  {{ t('work.outcome_label') }}
                </p>
                <p class="text-muted text-sm leading-relaxed mb-8">{{ item.outcome }}</p>

                <!-- Divider -->
                <div class="border-t border-white/[0.07] mb-6" />

                <!-- Industry -->
                <div class="flex items-start gap-3 mb-4">
                  <span class="text-[10px] font-semibold tracking-widest uppercase text-muted/40 pt-0.5 shrink-0 w-20">
                    {{ t('casestudies.industry_label') }}
                  </span>
                  <span class="text-xs font-medium text-muted">{{ item.industry }}</span>
                </div>

                <!-- Services -->
                <div class="flex items-start gap-3 mb-8">
                  <span class="text-[10px] font-semibold tracking-widest uppercase text-muted/40 pt-0.5 shrink-0 w-20">
                    {{ t('casestudies.services_label') }}
                  </span>
                  <div class="flex flex-wrap gap-1.5">
                    <span
                      v-for="service in item.services"
                      :key="service"
                      class="text-[9px] font-semibold tracking-wider uppercase text-muted/60 border border-white/10 px-2 py-0.5"
                    >
                      {{ service }}
                    </span>
                  </div>
                </div>

                <!-- Footer: metric + coming soon -->
                <div class="mt-auto flex items-center justify-between">
                  <span class="text-[11px] font-black text-accent/40 tracking-tight">
                    {{ item.metric }}
                    <span class="text-[10px] font-semibold text-muted/30 tracking-widest uppercase ml-1">{{ item.metric_label }}</span>
                  </span>
                  <span class="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase text-muted/25 border border-white/6 px-3 py-1.5 cursor-default">
                    <span class="w-1 h-1 bg-muted/20" />
                    {{ t('casestudies.coming_soon') }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom CTA -->
      <section class="py-20 bg-surface border-t border-white/8">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <span class="text-[11px] font-semibold tracking-widest uppercase text-accent">{{ t('casestudies.cta_label') }}</span>
            </div>
            <h2 class="font-display text-3xl md:text-4xl font-black text-foreground leading-tight">
              {{ t('casestudies.cta_headline') }}
            </h2>
          </div>
          <BaseButton href="#contact" size="lg" class="shrink-0">
            {{ t('casestudies.cta_button') }}
          </BaseButton>
        </div>
      </section>
    </main>

    <SectionFooter />
  </div>
</template>
