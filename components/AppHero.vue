<template>
  <section class="hero">
    <!-- Hero Background Image -->
    <div class="hero-background">
      <img :src="getImagePath('/img/index-background.jpg')" alt="Industrial background" class="hero-bg-image" />
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
const { $config } = useNuxtApp()

const getImagePath = (imagePath) => {
  const baseURL = $config.app?.baseURL || '/'
  return baseURL === '/' ? imagePath : `${baseURL}${imagePath}`
}

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