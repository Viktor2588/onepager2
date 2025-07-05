<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>INDUVA GmbH</h1>
        <p class="slogan">Ihr Partner für individuelle Verwertungslösungen</p>
        <p>
          Professionelle Industrieverwertung, nachhaltige Lösungen und 
          umfassende Beratung für Ihre Verwertungsanforderungen. 
          Mit jahrelanger Erfahrung und modernster Technologie.
        </p>
        <NuxtLink to="#kontakt" class="cta-button">
          Jetzt Beratung anfragen
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
onMounted(() => {
  if (process.client) {
    // Add click handler for CTA button
    const ctaButton = document.querySelector('.cta-button')
    if (ctaButton) {
      ctaButton.addEventListener('click', (e) => {
        e.preventDefault()
        const target = document.querySelector('#kontakt')
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      })
    }
  }
})
</script>