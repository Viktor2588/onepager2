<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
    <AppLightbox />
  </div>
</template>

<script setup>
// Global meta tags
useHead({
  titleTemplate: '%s',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>