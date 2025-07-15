<template>
  <section id="prozess" class="process-section">
    <div class="container">
      <h2>Unser Prozess in Bildern</h2>
      <div class="process-timeline">
        <div v-for="(step, index) in processSteps" :key="index" class="process-step">
          <div class="process-number">{{ index + 1 }}</div>
          
          <div class="process-content">
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
            <ul style="margin-top: 1rem; color: var(--text-light);">
              <li v-for="detail in step.details" :key="detail">{{ detail }}</li>
            </ul>
          </div>
          
          <div class="process-image">
            <!-- Process step visualization -->
            <div style="width: 100%; height: 300px; border-radius: 20px; position: relative; overflow: hidden;">
              <img :src="step.image" :alt="step.title" style="width: 100%; height: 100%; object-fit: cover;">
              
              <!-- Step indicator -->
              <div style="position: absolute; top: 20px; right: 20px; background: rgba(212, 165, 116, 0.9); color: #1a3d2e; padding: 0.5rem 1rem; border-radius: 20px; font-weight: 600;">
                Schritt {{ index + 1 }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const processSteps = [
  {
    title: 'Analyse & Bewertung',
    description: 'Detaillierte Vor-Ort-Analyse und Bewertung aller Anlagen und Materialien.',
    type: 'analysis',
    image: '/img/IMG-20250714-Analyse&Bewertung.jpg',
    details: [
      'Umfassende Bestandsaufnahme',
      'Schadstoffprüfung und -bewertung',
      'Wertermittlung der Materialien',
      'Dokumentation mit Bildern und Videos'
    ]
  },
  {
    title: 'Planung & Konzeption',
    description: 'Entwicklung eines maßgeschneiderten Verwertungskonzepts.',
    type: 'planning',
    image: '/img/IMG-20250714-Plannung&Konzeption.jpg',
    details: [
      'Demontage-Reihenfolge festlegen',
      'Logistikplanung für Transport',
      'Sicherheitskonzept erstellen',
      'Zeitplan und Ressourcenplanung'
    ]
  },
  {
    title: 'Demontage & Verwertung',
    description: 'Fachgerechte Demontage und sortenreine Trennung aller Materialien.',
    type: 'execution',
    image: '/img/IMG-20250714-Industrieverwertung.jpg',
    details: [
      'Sichere Demontage durch Fachkräfte',
      'Sortenreine Materialtrennung',
      'Gefahrstoff-Management',
      'Kontinuierliche Fortschrittsdokumentation'
    ]
  },
  {
    title: 'Qualitätskontrolle',
    description: 'Strenge Qualitätsprüfung und Umweltstandard-Einhaltung.',
    type: 'quality',
    image: '/img/IMG-20250714-Beratung&Analyse.jpg',
    details: [
      'Materialqualität prüfen',
      'Umweltauflagen kontrollieren',
      'Sicherheitsstandards einhalten',
      'Recyclingquoten dokumentieren'
    ]
  },
  {
    title: 'Dokumentation & Abschluss',
    description: 'Vollständige Dokumentation und Übergabe der Ergebnisse.',
    type: 'documentation',
    image: '/img/IMG-20250714-Dokumentation&Abschluss.jpg',
    details: [
      'Umfassender Abschlussbericht',
      'Bilderdokumentation des Fortschritts',
      'Nachweise und Zertifikate',
      'Nachhaltigkeitsbilanz erstellen'
    ]
  }
]
</script>