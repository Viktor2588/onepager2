<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-container">
        <div class="footer-info">
          <p>&copy; 2024 INDUVA GmbH. Alle Rechte vorbehalten.</p>
          <p style="font-size: 0.9rem; opacity: 0.8; margin-top: 0.5rem;">
            Ihr Partner für individuelle Verwertungslösungen
          </p>
        </div>
        <div class="footer-links">
          <NuxtLink to="#impressum">Impressum</NuxtLink>
          <NuxtLink to="#datenschutz">Datenschutz</NuxtLink>
          <NuxtLink to="#agb">AGB</NuxtLink>
          <NuxtLink to="#kontakt">Kontakt</NuxtLink>
        </div>
      </div>
      
      <!-- Additional Footer Info -->
      <div style="border-top: 1px solid rgba(212, 165, 116, 0.3); margin-top: 2rem; padding-top: 1.5rem; text-align: center;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-bottom: 1rem;">
          <div>
            <h4 style="color: var(--accent-mustard); margin-bottom: 0.5rem;">Zertifizierungen</h4>
            <p style="font-size: 0.9rem; opacity: 0.8;">
              • ISO 14001 Umweltmanagement<br>
              • Entsorgungsfachbetrieb zertifiziert<br>
              • WEEE-Reg.-Nr.: DE 98765432
            </p>
          </div>
          <div>
            <h4 style="color: var(--accent-mustard); margin-bottom: 0.5rem;">Notfall-Service</h4>
            <p style="font-size: 0.9rem; opacity: 0.8;">
              24/7 Hotline: <a href="tel:+4971139682500" style="color: var(--accent-mustard);">+49 711 3968 2500</a><br>
              Schnelle Hilfe bei Umweltnotfällen
            </p>
          </div>
          <div>
            <h4 style="color: var(--accent-mustard); margin-bottom: 0.5rem;">Nachhaltigkeit</h4>
            <p style="font-size: 0.9rem; opacity: 0.8;">
              • CO₂-neutrale Verwertung<br>
              • 95% Recyclingquote<br>
              • Regionale Partnerschaften
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
onMounted(() => {
  if (process.client) {
    // Add smooth scroll behavior to footer links
    const footerLinks = document.querySelectorAll('.footer-links a[href^="#"]')
    footerLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const href = link.getAttribute('href')
        if (href && href !== '#impressum' && href !== '#datenschutz' && href !== '#agb') {
          const target = document.querySelector(href)
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
          }
        }
      })
    })
  }
})
</script>

<style scoped>
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-info p {
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .footer-links {
    justify-content: center;
  }
}</style>