<template>
  <div>
    <main class="immobilien-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-background">
          <img src="/img/IMG-20250714-Firmen-&Betriebsauflösung.jpg" alt="Immobilien" />
        </div>
        <div class="hero-overlay"></div>
        <div class="container">
          <div class="hero-content">
            <h1>Immobilien</h1>
            <p class="slogan">Professionelle Immobilienverwertung und Gebäudeauflösung</p>
            <p>Von der Bewertung bis zur kompletten Auflösung - wir übernehmen die gesamte Abwicklung Ihrer Immobilienprojekte mit Fokus auf maximale Werterhaltung und rechtliche Sicherheit.</p>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="services-section">
        <div class="container">
          <h2>Unsere Immobilienleistungen</h2>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">📊</div>
              <h3>Immobilienbewertung</h3>
              <p>Professionelle Bewertung von Gewerbe- und Industrieimmobilien durch zertifizierte Sachverständige.</p>
              <ul>
                <li>Marktwertermittlung</li>
                <li>Substanzbewertung</li>
                <li>Gutachten erstellen</li>
                <li>Verkehrswertanalyse</li>
              </ul>
            </div>

            <div class="service-card">
              <div class="service-icon">🏗️</div>
              <h3>Gebäudeauflösung</h3>
              <p>Komplette Auflösung von Industrie- und Gewerbegebäuden mit fachgerechter Demontage.</p>
              <ul>
                <li>Rückbau und Demontage</li>
                <li>Schadstoffsanierung</li>
                <li>Materialverwertung</li>
                <li>Flächenräumung</li>
              </ul>
            </div>

            <div class="service-card">
              <div class="service-icon">🧹</div>
              <h3>Entrümpelung</h3>
              <p>Professionelle Entrümpelung von Gewerbeimmobilien und Industrieanlagen.</p>
              <ul>
                <li>Komplette Gebäuderäumung</li>
                <li>Inventar-Entsorgung</li>
                <li>Wertgegenstand-Sortierung</li>
                <li>Reinigung</li>
              </ul>
            </div>

            <div class="service-card">
              <div class="service-icon">📋</div>
              <h3>Verwertungskonzepte</h3>
              <p>Entwicklung individueller Konzepte für optimale Immobilienverwertung.</p>
              <ul>
                <li>Strategieentwicklung</li>
                <li>Wirtschaftlichkeitsanalyse</li>
                <li>Nachnutzungskonzepte</li>
                <li>Projektmanagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="process-section">
        <div class="container">
          <h2>Unser Vorgehen</h2>
          <div class="process-steps">
            <div class="process-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3>Erstberatung & Besichtigung</h3>
                <p>Kostenlose Vor-Ort-Besichtigung und umfassende Beratung zu Ihren Immobilienprojekten.</p>
              </div>
            </div>

            <div class="process-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3>Bewertung & Konzept</h3>
                <p>Professionelle Immobilienbewertung und Entwicklung eines maßgeschneiderten Verwertungskonzepts.</p>
              </div>
            </div>

            <div class="process-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3>Genehmigungsverfahren</h3>
                <p>Abwicklung aller behördlichen Genehmigungen und rechtlichen Formalitäten.</p>
              </div>
            </div>

            <div class="process-step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h3>Durchführung</h3>
                <p>Fachgerechte Umsetzung des Projekts mit kontinuierlicher Qualitätskontrolle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section">
        <div class="container">
          <h2>Immobilienprojekt anfragen</h2>
          <div class="contact-grid">
            <div class="contact-info">
              <h3>Sprechen Sie uns an</h3>
              <p>Unsere Immobilienexperten beraten Sie gerne zu Ihrem Projekt und erstellen Ihnen ein unverbindliches Angebot.</p>
              
              <div class="contact-item">
                <strong>📞 Direkte Hotline</strong>
                <p><a href="tel:+4940525605">+49 (040) 525 60 50</a></p>
              </div>
              
              <div class="contact-item">
                <strong>✉️ E-Mail</strong>
                <p><a href="mailto:immobilien@ht-kg.de">immobilien@ht-kg.de</a></p>
              </div>
            </div>

            <div class="contact-form">
              <form>
                <div class="form-group">
                  <label>Name *</label>
                  <input type="text" required>
                </div>
                <div class="form-group">
                  <label>E-Mail *</label>
                  <input type="email" required>
                </div>
                <div class="form-group">
                  <label>Telefon</label>
                  <input type="tel">
                </div>
                <div class="form-group">
                  <label>Art der Immobilie</label>
                  <select>
                    <option>Gewerbeimmobilie</option>
                    <option>Industriegebäude</option>
                    <option>Bürogebäude</option>
                    <option>Wohnimmobilie</option>
                    <option>Sonstiges</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Nachricht *</label>
                  <textarea rows="5" required></textarea>
                </div>
                <button type="submit" class="submit-btn">Anfrage senden</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'Immobilien - INDUVA GmbH',
  meta: [
    { name: 'description', content: 'Professionelle Immobilienverwertung und Gebäudeauflösung. Von der Bewertung bis zur kompletten Auflösung - wir übernehmen die gesamte Abwicklung.' }
  ]
})
</script>

<style scoped>
.immobilien-page {
  padding-top: 80px;
}

.hero-section {
  min-height: 60vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.3);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(26, 61, 46, 0.8), rgba(212, 165, 116, 0.3));
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: var(--text-white);
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--accent-mustard);
}

.hero-content .slogan {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--accent-mustard);
}

.hero-content p {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.services-section {
  padding: 6rem 0;
  background: var(--primary-green-light);
}

.services-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--accent-mustard);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background: var(--primary-green-dark);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-mustard);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--accent-mustard);
}

.service-card h3 {
  color: var(--accent-mustard);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.service-card p {
  color: var(--text-light);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-card ul {
  list-style: none;
  padding: 0;
  text-align: left;
}

.service-card li {
  color: var(--text-light);
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.service-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-mustard);
  font-weight: bold;
}

.process-section {
  padding: 6rem 0;
  background: var(--primary-green);
}

.process-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--accent-mustard);
}

.process-steps {
  max-width: 800px;
  margin: 0 auto;
}

.process-step {
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  gap: 2rem;
}

.step-number {
  width: 60px;
  height: 60px;
  background: var(--accent-mustard);
  color: var(--primary-green);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content h3 {
  color: var(--accent-mustard);
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.step-content p {
  color: var(--text-light);
  line-height: 1.6;
}

.contact-section {
  padding: 6rem 0;
  background: var(--primary-green-dark);
}

.contact-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--accent-mustard);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.contact-info h3 {
  color: var(--accent-mustard);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.contact-info p {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.contact-item {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(212, 165, 116, 0.1);
  border-radius: 10px;
}

.contact-item strong {
  color: var(--accent-mustard);
  display: block;
  margin-bottom: 0.5rem;
}

.contact-item a {
  color: var(--accent-mustard);
  text-decoration: none;
}

.contact-form {
  background: rgba(26, 61, 46, 0.5);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(212, 165, 116, 0.2);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--accent-mustard);
  font-weight: 500;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(212, 165, 116, 0.3);
  border-radius: 10px;
  background: rgba(26, 61, 46, 0.5);
  color: var(--text-white);
  font-size: 1rem;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--accent-mustard);
}

.submit-btn {
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, var(--accent-mustard), #e6b800);
  color: var(--primary-green);
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(212, 165, 116, 0.3);
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content .slogan {
    font-size: 1.2rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .process-step {
    flex-direction: column;
    text-align: center;
  }
}
</style>