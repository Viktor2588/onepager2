export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@vueuse/nuxt'
  ],
  // Configure for static site generation
  ssr: false,
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      'Playfair Display': [400, 600, 700]
    }
  },
  image: {
    quality: 80,
    format: ['webp', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },
  app: {
    head: {
      title: 'INDUVA GmbH - Ihr Partner für individuelle Verwertungslösungen',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'INDUVA GmbH - Ihr Partner für individuelle Verwertungslösungen mit visueller Dokumentation und professioneller Industrieverwertung.' 
        }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})