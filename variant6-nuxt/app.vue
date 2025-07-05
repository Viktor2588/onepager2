<template>
  <div>
    <AppHeader />
    <AppHero />
    <AppContact />
    <AppServices />
    <AppFooter />
  </div>
</template>

<script setup>
// Meta tags
useHead({
  titleTemplate: '%s - INDUVA GmbH',
  meta: [
    { name: 'description', content: 'INDUVA GmbH - Ihr Partner für individuelle Verwertungslösungen' }
  ]
})
</script>