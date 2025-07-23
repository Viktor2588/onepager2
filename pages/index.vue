<template>
  <div>
    <AppHero />
    <AppServices />
    <AppGallery />
    <AppProcess />
    <AppContact />
  </div>
</template>

<script setup>
// Meta tags for the main page
useHead({
  title: 'INDUVA GmbH - Ihr Partner für individuelle Verwertungslösungen',
  meta: [
    { name: 'description', content: 'INDUVA GmbH - Ihr Partner für individuelle Verwertungslösungen mit visueller Dokumentation und professioneller Industrieverwertung.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'INDUVA GmbH - Verwertungslösungen' },
    { property: 'og:description', content: 'Professionelle Industrieverwertung mit visueller Dokumentation. Sehen Sie unsere Arbeit in Bildern und Vorher-Nachher-Vergleichen.' }
  ]
})
</script>