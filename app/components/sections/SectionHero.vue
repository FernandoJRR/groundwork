<script setup lang="ts">
const { el, isVisible } = useScrollReveal(0.05)
const useMatrix = Math.random() < 0.5
const { t, tm, rt, locale } = useI18n()

const messages = computed(() => (tm('hero.messages') as any[]).map(m => rt(m)))
const heroStats = computed(() => {
  const all = (tm('mission.stats') as any[]).map(s => ({ number: rt(s.number), label: rt(s.label) }))
  return [
    { ...all[0], accent: false },
    { ...all[3], accent: true  },
    { ...all[2], accent: false },
  ]
})

const displayText = ref('')
type Phase = 'typing' | 'waiting' | 'erasing' | 'gap'
const phase = ref<Phase>('gap')
let msgIdx = 0

const speeds = { typing: 70, erasing: 38, waiting: 2400, gap: 380 }
let timer: ReturnType<typeof setTimeout>

function step() {
  const target = messages.value[msgIdx] ?? ''

  switch (phase.value) {
    case 'typing':
      if (displayText.value.length < target.length) {
        displayText.value = target.slice(0, displayText.value.length + 1)
        timer = setTimeout(step, speeds.typing)
      } else {
        phase.value = 'waiting'
        timer = setTimeout(step, speeds.waiting)
      }
      break
    case 'waiting':
      phase.value = 'erasing'
      timer = setTimeout(step, speeds.erasing)
      break
    case 'erasing':
      if (displayText.value.length > 0) {
        displayText.value = displayText.value.slice(0, -1)
        timer = setTimeout(step, speeds.erasing)
      } else {
        msgIdx = (msgIdx + 1) % messages.value.length
        phase.value = 'gap'
        timer = setTimeout(step, speeds.gap)
      }
      break
    case 'gap':
      phase.value = 'typing'
      timer = setTimeout(step, speeds.typing)
      break
  }
}

function resetTypewriter() {
  clearTimeout(timer)
  msgIdx = 0
  displayText.value = ''
  phase.value = 'gap'
  timer = setTimeout(step, speeds.gap)
}

watch(locale, resetTypewriter)

onMounted(() => {
  displayText.value = messages.value[0] ?? ''
  phase.value = 'waiting'
  timer = setTimeout(step, speeds.waiting)
})

onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <section id="hero" class="relative min-h-screen flex flex-col overflow-hidden bg-bg">
    <HexGrid />
    <MatrixWatermark v-if="useMatrix" />
    <CircuitWatermark v-else />

    <!-- Ambient glows -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute top-0 left-0 w-[900px] h-[700px] bg-accent/[0.045] blur-[200px] rounded-full -translate-x-1/3 -translate-y-1/3" />
      <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-crimson/[0.03] blur-[160px] rounded-full translate-x-1/4 translate-y-1/4" />
    </div>

    <!-- Top accent rule -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-accent/50 via-accent/10 to-transparent" aria-hidden="true" />

    <!-- Content -->
    <div
      ref="el"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      class="relative z-10 flex-1 flex flex-col justify-center max-w-7xl w-full mx-auto px-6 lg:px-16 transition-all duration-700 ease-out pt-32 pb-28"
    >
      <!-- Badge -->
      <div class="flex items-center gap-4 mb-10">
        <div class="inline-flex items-center gap-2.5 border border-white/10 bg-surface-2/80 backdrop-blur-sm px-4 py-2">
          <span class="pulse-dot w-1.5 h-1.5 rounded-full bg-accent" />
          <span class="text-[11px] font-semibold tracking-widest uppercase text-muted">
            {{ t('hero.badge') }}
          </span>
          <span class="pulse-dot w-1.5 h-1.5 rounded-full bg-accent" />
        </div>
        <div class="h-px w-12 bg-white/10" />
      </div>

      <!-- Two-column layout -->
      <div class="flex flex-col lg:flex-row lg:items-start lg:gap-20">

        <!-- Left: Headline + Subtext + CTAs -->
        <div class="flex-1 min-w-0">
          <h1
            class="font-display font-black text-foreground tracking-tight"
            style="font-size: clamp(1.9rem, 4vw, 3.6rem); line-height: 1.05;"
          >
            <span class="block">
              <span>{{ displayText }}</span><span
                class="text-accent"
                :class="phase === 'waiting' ? 'cursor-blink' : ''"
              >|</span>
            </span>
            <span class="block text-accent">{{ t('hero.line2') }}</span>
            <span class="block">{{ t('hero.line3') }}</span>
          </h1>

          <p class="text-base lg:text-lg text-muted leading-relaxed max-w-lg mt-8 mb-10">
            {{ t('hero.subtext') }}
          </p>

          <div class="flex flex-wrap items-center gap-4">
            <BaseButton href="#contact" size="lg">{{ t('hero.cta_primary') }}</BaseButton>
            <BaseButton href="#work" variant="ghost" size="lg">{{ t('hero.cta_secondary') }} →</BaseButton>
          </div>
        </div>

        <!-- Right: Stats card (desktop only) -->
        <div class="hidden lg:block shrink-0 w-[256px] mt-2">
          <div class="border border-white/[0.09] bg-surface/50 backdrop-blur-sm divide-y divide-white/[0.07]">
            <div
              v-for="stat in heroStats"
              :key="stat.label"
              class="p-7"
            >
              <div
                class="text-[3rem] font-black leading-none tracking-tight"
                :class="stat.accent ? 'text-accent' : 'text-foreground'"
              >{{ stat.number }}</div>
              <div class="text-[11px] font-semibold tracking-widest uppercase text-muted mt-2.5">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile stats strip -->
      <div class="mt-14 pt-8 border-t border-white/[0.07] grid grid-cols-3 gap-6 lg:hidden">
        <div
          v-for="stat in heroStats"
          :key="stat.label"
        >
          <div
            class="text-2xl font-black leading-none"
            :class="stat.accent ? 'text-accent' : 'text-foreground'"
          >{{ stat.number }}</div>
          <div class="text-[10px] font-semibold tracking-widest uppercase text-muted mt-1.5">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="relative z-10 flex flex-col items-center gap-2.5 pb-10">
      <span class="text-[10px] font-semibold text-muted tracking-widest uppercase">{{ t('hero.scroll') }}</span>
      <svg class="scroll-chevron w-3.5 h-3.5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>
  </section>
</template>
