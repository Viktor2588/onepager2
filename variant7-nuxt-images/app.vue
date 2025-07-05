<template>
  <div>
    <AppHeader />
    <AppHero />
    <AppGallery />
    <AppBeforeAfter />
    <AppProcess />
    <AppContact />
    <AppFooter />
    <AppLightbox />
  </div>
</template>

<script setup>
// Meta tags for image-focused variant
useHead({
  titleTemplate: '%s - INDUVA GmbH Visuelle Einblicke',
  meta: [
    { name: 'description', content: 'INDUVA GmbH - Sehen Sie unsere Verwertungslösungen in Bildern. Professionelle Industrieverwertung visualisiert.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'INDUVA GmbH - Visuelle Verwertungslösungen' },
    { property: 'og:description', content: 'Entdecken Sie unsere Arbeit durch beeindruckende Bilder und Vorher-Nachher-Vergleiche.' }
  ]
})
</script>