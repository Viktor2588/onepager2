<template>
  <div>
    <AppHeader />
    <AppHero />
    <AppServices />
    <AppGallery />
    <AppBeforeAfter />
    <AppProcess />
<!--    <AppContact />-->
    <AppFooter />
    <AppLightbox />
  </div>
</template>

<script setup>
// Meta tags for unified variant
useHead({
  titleTemplate: '%s - INDUVA GmbH',
  meta: [
    { name: 'description', content: 'INDUVA GmbH - Ihr Partner für individuelle Verwertungslösungen mit visueller Dokumentation und professioneller Industrieverwertung.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'INDUVA GmbH - Verwertungslösungen' },
    { property: 'og:description', content: 'Professionelle Industrieverwertung mit visueller Dokumentation. Sehen Sie unsere Arbeit in Bildern und Vorher-Nachher-Vergleichen.' }
  ]
})
</script>