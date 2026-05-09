import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },
  components: [{ path: '~/components', pathPrefix: false }],
  modules: ['@nuxtjs/google-fonts', '@vueuse/nuxt', '@nuxtjs/i18n'],
  googleFonts: {
    families: {
      'Plus Jakarta Sans': [300, 400, 500, 600, 700, 800],
    }
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json', name: 'English' },
      { code: 'es', language: 'es-ES', file: 'es.json', name: 'Español' },
    ],
    lazy: true,
    langDir: 'locales',
  },
  vite: {
    plugins: [tailwindcss()]
  },
  css: ['~/assets/css/main.css']
})
