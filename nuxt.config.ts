// Configuration principale de Nuxt 3
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Activer les outils de developpement
  devtools: { enabled: true },
  
  // Modules installes
  modules: [
    '@nuxt/ui',           // Composants UI modernes
    '@nuxtjs/color-mode'  // Gestion du mode sombre/clair
  ],
  
  // Configuration UI
  ui: {
    global: true,         // Composants disponibles globalement
    icons: ['heroicons']  // Icones Heroicons integrees
  },
  
  // Mode couleur par defaut
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: ''
  },
  
  // Fichiers CSS globaux
  css: ['~/assets/css/main.css'],
  
  // Configuration pour le build statique (SSG)
  nitro: {
    preset: 'static'
  },
  
  // Meta tags pour SEO
  app: {
    head: {
      title: 'Pure Web Agency | Agence Web Bordeaux',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Agence web specialisee dans la creation de sites modernes, performants et SEO-friendly. Hebergement en France, conforme RGPD.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
