<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-container">
        <div class="footer-info">
          <p>&copy; 2024 INDUVA GmbH. Alle Rechte vorbehalten.</p>
          <p style="font-size: 0.9rem; opacity: 0.8; margin-top: 0.5rem;">
            Ihr Partner für visuelle Verwertungslösungen
          </p>
        </div>
      </div>
      
      <!-- Additional Footer Info for Image Variant -->
      <div style="border-top: 1px solid rgba(212, 165, 116, 0.3); margin-top: 2rem; padding-top: 1.5rem; text-align: center;">
        <div style="margin-top: 2rem; padding: 1rem; background: rgba(212, 165, 116, 0.1); border-radius: 10px;">
          <h4 style="color: var(--accent-mustard); margin-bottom: 0.5rem;">🏆 Auszeichnungen & Zertifikate</h4>
          <p style="font-size: 0.9rem; opacity: 0.8;">
            Gewinner "Beste Industriefotografie 2024" | ISO 14001 zertifiziert | 
            Drohnenpilot-Lizenz A2 | Mitglied im BDI (Bundesverband Digitale Wirtschaft)
          </p>
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
        if (href && href !== '#impressum' && href !== '#datenschutz' && href !== '#bildrechte') {
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
}
</style>