<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-container">
        <div class="footer-info">
          <div class="company-info">
            <h4>Björn Kratz</h4>
            <p>[Straße und Hausnummer]</p>
            <p>89073 Ulm</p>
            <p>Tel.: (040) 525 60 50</p>
            <p>Email: info@ht-kg.de</p>
          </div>
        </div>
        
        <div class="footer-certification">
          <div class="dqs-cert">
            <h4>DQS-zertifiziertes</h4>
            <h4>Managementsystem</h4>
            <h4>ISO 9001 : 2015</h4>
            <div class="cert-logo">🏆</div>
          </div>
        </div>
        
        <div class="footer-legal">
          <div class="legal-links">
            <NuxtLink to="/impressum"><h4>IMPRESSUM</h4></NuxtLink>
            <NuxtLink to="/datenschutz"><h4>DATENSCHUTZ</h4></NuxtLink>
            <h4>BEDINGUNGEN</h4>
          </div>
        </div>
      </div>
      
      <div class="copyright">
        <p>&copy; 2025 INDUVA GmbH. Alle Rechte vorbehalten.</p>
        <p style="font-size: 0.9rem; opacity: 0.8; margin-top: 0.5rem;">
          Ihr Partner für visuelle Verwertungslösungen
        </p>
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

.company-info h4 {
  color: var(--accent-mustard);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.company-info p {
  margin: 0.25rem 0;
  font-size: 0.9rem;
}

.footer-certification {
  text-align: center;
}

.dqs-cert {
  background: rgba(212, 165, 116, 0.1);
  padding: 1rem;
  border-radius: 10px;
  border: 2px solid var(--accent-mustard);
}

.dqs-cert h4 {
  color: var(--accent-mustard);
  margin: 0.25rem 0;
  font-size: 0.9rem;
}

.cert-logo {
  font-size: 2rem;
  margin-top: 0.5rem;
}

.footer-legal {
  text-align: right;
}

.legal-links a {
  text-decoration: none;
  color: inherit;
}

.legal-links h4 {
  color: var(--accent-mustard);
  margin: 0.5rem 0;
  font-size: 0.9rem;
  cursor: pointer;
  transition: opacity 0.3s;
}

.legal-links h4:hover {
  opacity: 0.7;
}

.copyright {
  text-align: center;
  border-top: 1px solid rgba(212, 165, 116, 0.3);
  padding-top: 1rem;
  margin-top: 1rem;
}

.copyright p {
  margin: 0;
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