export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@vueuse/nuxt'
  ],
  // Configure for static site generation
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  // Generate static files for deployment
  target: 'static',
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
      title: 'INDUVA GmbH - Visuelle Verwertungslösungen',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'INDUVA GmbH - Ihre visuellen Einblicke in professionelle Verwertungslösungen. Sehen Sie unsere Arbeit in Bildern.' 
        }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})