export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      'Open Sans': [400, 600, 700]
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
          content: 'INDUVA GmbH - Ihr Partner für individuelle Verwertungslösungen. Professionelle Industrieverwertung, Firmenauflösung und Betriebsauflösung.' 
        }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})