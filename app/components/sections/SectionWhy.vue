<script setup lang="ts">
const { el, isVisible } = useScrollReveal()
const { t, tm, rt } = useI18n()

const items = computed(() =>
  (tm('why.items') as any[]).map(item => ({
    title: rt(item.title),
    description: rt(item.description),
  }))
)
</script>

<template>
  <section id="why" class="py-28 bg-bg relative overflow-hidden">
    <HexGrid />

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <div
        ref="el"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        class="transition-all duration-700 ease-out grid md:grid-cols-2 gap-20 items-start"
      >
        <!-- Left -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <span class="text-[11px] font-semibold tracking-widest uppercase text-crimson">{{ t('why.label') }}</span>
          </div>
          <h2 class="font-display text-5xl md:text-6xl font-black text-foreground mb-14 leading-[0.95] tracking-tight">
            {{ t('why.headline_1') }}<br/>{{ t('why.headline_2') }}
          </h2>

          <ul class="flex flex-col gap-0 divide-y divide-white/8">
            <li
              v-for="(item, i) in items"
              :key="item.title"
              :class="[
                'group py-7 flex gap-6 items-start transition-all duration-500',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              ]"
              :style="{ transitionDelay: isVisible ? `${i * 100 + 200}ms` : '0ms' }"
            >
              <span class="text-[10px] font-bold text-accent/40 group-hover:text-accent/70 transition-colors shrink-0 pt-1 tabular-nums">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <div>
                <h3 class="font-display text-base font-bold text-foreground mb-1.5 group-hover:text-accent transition-colors">{{ item.title }}</h3>
                <p class="text-sm text-muted leading-relaxed">{{ item.description }}</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Right: architectural grid graphic -->
        <div
          :class="[
            'border border-white/8 bg-surface-2 overflow-hidden aspect-square relative transition-all duration-700',
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          ]"
          style="transition-delay: 300ms"
        >
          <svg class="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="why-fine-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#22C55E" stroke-width="0.25" opacity="0.15"/>
            </pattern>
            <rect width="400" height="400" fill="url(#why-fine-grid)"/>
            <pattern id="why-bold-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#22C55E" stroke-width="0.5" opacity="0.12"/>
            </pattern>
            <rect width="400" height="400" fill="url(#why-bold-grid)"/>
            <path d="M 80 200 L 160 200 L 160 120 L 240 120" stroke="#22C55E" stroke-width="1.5" opacity="0.5" stroke-linecap="square"/>
            <path d="M 80 200 L 80 280 L 200 280 L 200 320" stroke="#22C55E" stroke-width="1.5" opacity="0.35" stroke-linecap="square"/>
            <path d="M 240 120 L 320 120 L 320 200 L 280 200" stroke="#22C55E" stroke-width="1.5" opacity="0.45" stroke-linecap="square"/>
            <path d="M 280 200 L 280 280 L 200 280" stroke="#22C55E" stroke-width="1.5" opacity="0.3" stroke-linecap="square"/>
            <rect x="74"  y="194" width="12" height="12" fill="#22C55E" opacity="0.8"/>
            <rect x="154" y="114" width="12" height="12" fill="#22C55E" opacity="0.6"/>
            <rect x="234" y="114" width="12" height="12" fill="#22C55E"/>
            <rect x="314" y="114" width="12" height="12" fill="#22C55E" opacity="0.5"/>
            <rect x="314" y="194" width="12" height="12" fill="#22C55E" opacity="0.65"/>
            <rect x="274" y="194" width="12" height="12" fill="#22C55E" opacity="0.75"/>
            <rect x="274" y="274" width="12" height="12" fill="#22C55E" opacity="0.5"/>
            <rect x="194" y="274" width="12" height="12" fill="#22C55E" opacity="0.8"/>
            <rect x="194" y="314" width="12" height="12" fill="#22C55E" opacity="0.4"/>
            <rect x="74"  y="274" width="12" height="12" fill="#22C55E" opacity="0.4"/>
            <rect x="168" y="88"  width="64" height="64" fill="none" stroke="#22C55E" stroke-width="1.5" opacity="0.6"/>
            <rect x="180" y="100" width="40" height="40" fill="#22C55E" opacity="0.06"/>
            <rect x="192" y="112" width="16" height="16" fill="#22C55E" opacity="0.9"/>
            <rect x="0"   y="0"   width="20" height="2"  fill="#22C55E" opacity="0.4"/>
            <rect x="0"   y="0"   width="2"  height="20" fill="#22C55E" opacity="0.4"/>
            <rect x="380" y="398" width="20" height="2"  fill="#22C55E" opacity="0.4"/>
            <rect x="398" y="380" width="2"  height="20" fill="#22C55E" opacity="0.4"/>
          </svg>
          <div class="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent pointer-events-none" />
          <div class="absolute bottom-5 right-5">
            <span class="text-[9px] font-semibold tracking-widest uppercase text-accent/30">System architecture</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
