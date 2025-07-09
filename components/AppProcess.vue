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
            <div style="width: 100%; height: 300px; background: linear-gradient(135deg, #2d5a47, #1a3d2e); display: flex; align-items: center; justify-content: center; border-radius: 20px; position: relative;">
              <svg width="150" height="150" viewBox="0 0 150 150" style="opacity: 0.8;">
                <g v-if="step.type === 'analysis'">
                  <!-- Analysis/inspection tools -->
                  <rect x="40" y="60" width="70" height="40" fill="#d4a574" rx="5"/>
                  <circle cx="60" cy="80" r="15" fill="none" stroke="#1a3d2e" stroke-width="3"/>
                  <circle cx="90" cy="80" r="10" fill="none" stroke="#1a3d2e" stroke-width="2"/>
                  <line x1="75" y1="65" x2="85" y2="55" stroke="#1a3d2e" stroke-width="3"/>
                  <circle cx="87" cy="53" r="8" fill="none" stroke="#1a3d2e" stroke-width="2"/>
                  <!-- Document -->
                  <rect x="20" y="30" width="25" height="35" fill="#d4a574" rx="2"/>
                  <line x1="25" y1="40" x2="40" y2="40" stroke="#1a3d2e" stroke-width="1"/>
                  <line x1="25" y1="45" x2="40" y2="45" stroke="#1a3d2e" stroke-width="1"/>
                  <line x1="25" y1="50" x2="35" y2="50" stroke="#1a3d2e" stroke-width="1"/>
                </g>
                <g v-else-if="step.type === 'planning'">
                  <!-- Planning documents and blueprints -->
                  <rect x="30" y="40" width="90" height="60" fill="#d4a574" rx="5"/>
                  <rect x="35" y="45" width="80" height="50" fill="#1a3d2e" rx="3"/>
                  <!-- Blueprint lines -->
                  <line x1="40" y1="55" x2="80" y2="55" stroke="#d4a574" stroke-width="2"/>
                  <line x1="40" y1="65" x2="110" y2="65" stroke="#d4a574" stroke-width="2"/>
                  <line x1="40" y1="75" x2="90" y2="75" stroke="#d4a574" stroke-width="2"/>
                  <line x1="40" y1="85" x2="100" y2="85" stroke="#d4a574" stroke-width="2"/>
                  <rect x="85" y="50" width="25" height="15" fill="none" stroke="#d4a574" stroke-width="2"/>
                  <circle cx="97" cy="57" r="5" fill="#d4a574"/>
                </g>
                <g v-else-if="step.type === 'execution'">
                  <!-- Tools and machinery in action -->
                  <rect x="50" y="70" width="50" height="30" fill="#d4a574" rx="5"/>
                  <circle cx="65" cy="85" r="8" fill="#1a3d2e"/>
                  <circle cx="85" cy="85" r="8" fill="#1a3d2e"/>
                  <!-- Crane/lift -->
                  <rect x="70" y="40" width="6" height="40" fill="#d4a574"/>
                  <rect x="60" y="40" width="26" height="6" fill="#d4a574"/>
                  <rect x="58" y="36" width="4" height="8" fill="#d4a574"/>
                  <!-- Motion lines -->
                  <path d="M40 50 Q45 45 50 50" stroke="#d4a574" stroke-width="2" fill="none"/>
                  <path d="M105 60 Q110 55 115 60" stroke="#d4a574" stroke-width="2" fill="none"/>
                </g>
                <g v-else-if="step.type === 'quality'">
                  <!-- Quality control checkmarks and measurements -->
                  <circle cx="75" cy="75" r="35" fill="none" stroke="#d4a574" stroke-width="4"/>
                  <path d="M60 75 L70 85 L90 60" stroke="#d4a574" stroke-width="6" fill="none"/>
                  <!-- Measurement tools -->
                  <rect x="30" y="40" width="20" height="4" fill="#d4a574"/>
                  <rect x="100" y="90" width="20" height="4" fill="#d4a574"/>
                  <circle cx="35" cy="42" r="2" fill="#1a3d2e"/>
                  <circle cx="45" cy="42" r="2" fill="#1a3d2e"/>
                  <circle cx="105" cy="92" r="2" fill="#1a3d2e"/>
                  <circle cx="115" cy="92" r="2" fill="#1a3d2e"/>
                </g>
                <g v-else>
                  <!-- Documentation and reporting -->
                  <rect x="40" y="50" width="70" height="50" fill="#d4a574" rx="5"/>
                  <rect x="45" y="55" width="60" height="40" fill="#1a3d2e" rx="3"/>
                  <!-- Report content -->
                  <line x1="50" y1="65" x2="90" y2="65" stroke="#d4a574" stroke-width="2"/>
                  <line x1="50" y1="72" x2="95" y2="72" stroke="#d4a574" stroke-width="1"/>
                  <line x1="50" y1="77" x2="85" y2="77" stroke="#d4a574" stroke-width="1"/>
                  <line x1="50" y1="82" x2="90" y2="82" stroke="#d4a574" stroke-width="1"/>
                  <line x1="50" y1="87" x2="80" y2="87" stroke="#d4a574" stroke-width="1"/>
                  <!-- Chart -->
                  <rect x="90" y="75" width="10" height="15" fill="#d4a574"/>
                  <rect x="85" y="80" width="5" height="10" fill="#d4a574"/>
                  <rect x="95" y="82" width="5" height="8" fill="#d4a574"/>
                </g>
              </svg>
              
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
    details: [
      'Umfassender Abschlussbericht',
      'Bilderdokumentation des Fortschritts',
      'Nachweise und Zertifikate',
      'Nachhaltigkeitsbilanz erstellen'
    ]
  }
]
</script>