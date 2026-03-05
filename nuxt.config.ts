// Configuration Nuxt - Pure Web Agency
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxt/ui',
    '@nuxtjs/color-mode'
  ],
  
  ui: {
    global: true,
    icons: ['heroicons']
  },
  
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: ''
  },
  
  css: ['~/assets/css/main.css'],
  
  nitro: {
    preset: 'static'
  },
  
  app: {
    head: {
      titleTemplate: '%s | Pure Web Agency',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Agence web créative spécialisée dans les expériences digitales d\'exception. Design sur-mesure, performances optimales.'
        },
        { name: 'theme-color', content: '#0a0a0f' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Pure Web Agency' },
        { property: 'og:image', content: '/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  }
})