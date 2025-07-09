<template>
  <section class="hero">
    <!-- Hero Background Image -->
    <div class="hero-background">
      <!-- Using a placeholder for industrial machinery -->
      <svg viewBox="0 0 1920 1080" style="width: 100%; height: 100%;">
        <defs>
          <pattern id="industrial" patternUnits="userSpaceOnUse" width="100" height="100">
            <rect width="100" height="100" fill="#2d5a47"/>
            <circle cx="25" cy="25" r="8" fill="#d4a574" opacity="0.3"/>
            <circle cx="75" cy="25" r="6" fill="#d4a574" opacity="0.2"/>
            <circle cx="25" cy="75" r="10" fill="#d4a574" opacity="0.4"/>
            <circle cx="75" cy="75" r="7" fill="#d4a574" opacity="0.25"/>
            <rect x="40" y="40" width="20" height="20" fill="#1a3d2e" opacity="0.6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#industrial)"/>
        <!-- Industrial shapes -->
        <g opacity="0.1">
          <rect x="100" y="200" width="200" height="150" fill="#d4a574"/>
          <rect x="400" y="150" width="180" height="200" fill="#d4a574"/>
          <rect x="700" y="180" width="160" height="170" fill="#d4a574"/>
          <rect x="1000" y="120" width="220" height="180" fill="#d4a574"/>
          <rect x="1300" y="200" width="190" height="160" fill="#d4a574"/>
        </g>
      </svg>
    </div>
    
    <div class="hero-overlay"></div>
    
    <div class="container">
      <div class="hero-content">
        <h1>INDUVA in Bildern</h1>
        <p class="slogan">Ihr Partner für individuelle Verwertungslösungen</p>
        <p>
          Entdecken Sie unsere professionelle Arbeit durch beeindruckende Bilder. 
          Sehen Sie, wie wir Industrieanlagen verwerten, Umwelt schützen und 
          nachhaltige Lösungen schaffen - visualisiert in hochwertigen Aufnahmen.
        </p>
        <NuxtLink to="#galerie" class="cta-button">
          📸 Galerie entdecken
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
onMounted(() => {
  if (process.client) {
    const ctaButton = document.querySelector('.cta-button')
    if (ctaButton) {
      ctaButton.addEventListener('click', (e) => {
        e.preventDefault()
        const target = document.querySelector('#galerie')
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      })
    }
  }
})
</script>