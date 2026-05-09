<script setup lang="ts">
const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 40)
const menuOpen = ref(false)

const { t, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const links = computed(() => [
  { label: t('nav.services'), href: '#services', num: '01' },
  { label: t('nav.work'),     href: '#work',     num: '02' },
  { label: t('nav.about'),    href: '#about',    num: '03' },
  { label: t('nav.contact'),  href: '#contact',  num: '04' },
])
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-surface-2/95 backdrop-blur-md border-b border-white/8 shadow-2xl shadow-black/40'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <nav class="flex items-center justify-between h-16">
        <a href="#" class="flex items-center">
          <LogoMark variant="green" />
        </a>

        <ul class="hidden md:flex items-center gap-8">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="group flex items-baseline gap-1.5 text-sm text-muted hover:text-foreground transition-colors duration-150 font-medium"
            >
              <span class="text-[14px] font-semibold text-accent/40 group-hover:text-accent/70 transition-colors tabular-nums">{{ link.num }}</span>
              {{ link.label }}
            </a>
          </li>
        </ul>

        <div class="flex items-center gap-4">
          <!-- Language switcher -->
          <div class="hidden md:flex items-center gap-1.5 text-xs font-semibold">
            <NuxtLink
              :to="switchLocalePath('en')"
              :class="locale === 'en' ? 'text-foreground' : 'text-muted hover:text-foreground'"
              class="transition-colors px-1"
            >EN</NuxtLink>
            <span class="text-muted/30">|</span>
            <NuxtLink
              :to="switchLocalePath('es')"
              :class="locale === 'es' ? 'text-foreground' : 'text-muted hover:text-foreground'"
              class="transition-colors px-1"
            >ES</NuxtLink>
          </div>

          <BaseButton href="#contact" size="sm" class="hidden md:inline-flex">
            {{ t('nav.cta') }}
          </BaseButton>

          <button
            class="md:hidden p-2 text-muted hover:text-foreground"
            aria-label="Toggle menu"
            @click="menuOpen = !menuOpen"
          >
            <svg v-if="!menuOpen" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </nav>

      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="menuOpen" class="md:hidden bg-surface-2 border-t border-white/8 py-5 -mx-6 px-6">
          <ul class="flex flex-col gap-1">
            <li v-for="link in links" :key="link.href">
              <a
                :href="link.href"
                class="flex items-baseline gap-2 py-3 text-sm font-medium text-muted hover:text-foreground transition-colors"
                @click="menuOpen = false"
              >
                <span class="text-[9px] font-semibold text-accent/40 tabular-nums">{{ link.num }}</span>
                {{ link.label }}
              </a>
            </li>
            <li class="pt-2 pb-1 flex items-center gap-3">
              <NuxtLink :to="switchLocalePath('en')" :class="locale === 'en' ? 'text-foreground' : 'text-muted'" class="text-xs font-semibold transition-colors">EN</NuxtLink>
              <span class="text-muted/30 text-xs">|</span>
              <NuxtLink :to="switchLocalePath('es')" :class="locale === 'es' ? 'text-foreground' : 'text-muted'" class="text-xs font-semibold transition-colors">ES</NuxtLink>
            </li>
            <li class="pt-2">
              <BaseButton href="#contact" size="sm" class="w-full justify-center" @click="menuOpen = false">
                {{ t('nav.cta') }}
              </BaseButton>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </header>
</template>
