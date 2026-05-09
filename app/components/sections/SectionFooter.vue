<script setup lang="ts">
const { t } = useI18n()

const navKeys = ['services', 'work', 'about', 'contact'] as const
const navHrefs: Record<string, string> = {
  services: '#services', work: '#work', about: '#about', contact: '#contact',
}

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`,
  },
]
</script>

<template>
  <footer class="bg-bg border-t border-white/8 pt-20 pb-8">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-12 mb-16">
        <!-- Logo + tagline -->
        <div>
          <LogoMark variant="green" class="mb-6" />
          <p class="text-sm text-muted leading-relaxed max-w-xs">
            {{ t('footer.tagline_1') }}<br/>
            {{ t('footer.tagline_2') }}
          </p>
          <div class="flex items-center gap-4 mt-6">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              class="text-muted/50 hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              v-html="social.icon"
            />
          </div>
        </div>

        <!-- Nav -->
        <nav>
          <p class="text-[11px] font-semibold tracking-widest uppercase text-muted/50 mb-5">{{ t('footer.nav_label') }}</p>
          <div class="flex flex-col gap-3">
            <a
              v-for="key in navKeys"
              :key="key"
              :href="navHrefs[key]"
              class="text-sm text-muted hover:text-foreground transition-colors w-fit"
            >
              {{ t(`nav.${key}`) }}
            </a>
          </div>
        </nav>

        <!-- Contact -->
        <div>
          <p class="text-[11px] font-semibold tracking-widest uppercase text-muted/50 mb-5">{{ t('footer.connect_label') }}</p>
          <div class="flex flex-col gap-3">
            <a
              href="mailto:hello@gembaloft.com"
              class="text-sm text-muted hover:text-accent transition-colors w-fit"
            >
              hello@gembaloft.com
            </a>
            <p class="text-sm text-muted/50">{{ t('footer.location') }}</p>
          </div>
        </div>
      </div>

      <div class="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-xs font-normal text-muted/40">
          © {{ new Date().getFullYear() }} Gembaloft. {{ t('footer.copyright') }}
        </p>
        <p class="text-xs font-normal text-muted/30 uppercase tracking-wide">
          {{ t('footer.built') }}
        </p>
      </div>
    </div>
  </footer>
</template>
