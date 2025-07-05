<template>
  <section id="vorher-nachher" class="before-after-section">
    <div class="container">
      <h2>Vorher & Nachher</h2>
      <div class="before-after-container">
        <div v-for="(project, index) in projects" :key="index" class="before-after-item">
          <div class="before-after-images">
            <div class="before-after-image">
              <!-- Before image placeholder -->
              <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #666, #333); display: flex; align-items: center; justify-content: center; position: relative;">
                <svg width="80" height="80" viewBox="0 0 100 100" style="opacity: 0.7;">
                  <g v-if="project.type === 'factory'">
                    <!-- Factory before - cluttered -->
                    <rect x="10" y="40" width="20" height="40" fill="#8B4513"/>
                    <rect x="30" y="35" width="15" height="45" fill="#8B4513"/>
                    <rect x="45" y="30" width="25" height="50" fill="#8B4513"/>
                    <rect x="70" y="45" width="20" height="35" fill="#8B4513"/>
                    <!-- Smoke/pollution -->
                    <circle cx="20" cy="35" r="5" fill="#666" opacity="0.8"/>
                    <circle cx="37" cy="30" r="4" fill="#666" opacity="0.6"/>
                    <circle cx="57" cy="25" r="6" fill="#666" opacity="0.7"/>
                    <circle cx="80" cy="40" r="4" fill="#666" opacity="0.5"/>
                  </g>
                  <g v-else-if="project.type === 'machinery'">
                    <!-- Old broken machinery -->
                    <rect x="20" y="50" width="60" height="30" fill="#8B4513"/>
                    <circle cx="35" cy="60" r="8" fill="#666"/>
                    <circle cx="65" cy="60" r="8" fill="#666"/>
                    <rect x="30" y="40" width="40" height="15" fill="#8B4513"/>
                    <!-- Rust/damage indicators -->
                    <circle cx="25" cy="55" r="3" fill="#CD853F"/>
                    <circle cx="75" cy="65" r="2" fill="#CD853F"/>
                  </g>
                  <g v-else>
                    <!-- General waste/clutter -->
                    <rect x="15" y="60" width="15" height="20" fill="#8B4513" transform="rotate(15 22.5 70)"/>
                    <rect x="35" y="55" width="20" height="25" fill="#8B4513" transform="rotate(-10 45 67.5)"/>
                    <rect x="60" y="50" width="25" height="30" fill="#8B4513" transform="rotate(5 72.5 65)"/>
                    <circle cx="30" cy="45" r="8" fill="#666"/>
                    <circle cx="70" cy="40" r="6" fill="#666"/>
                  </g>
                </svg>
                <div class="image-label">Vorher</div>
              </div>
            </div>
            
            <div class="before-after-image">
              <!-- After image placeholder -->
              <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #2d5a47, #1a3d2e); display: flex; align-items: center; justify-content: center; position: relative;">
                <svg width="80" height="80" viewBox="0 0 100 100" style="opacity: 0.8;">
                  <g v-if="project.type === 'factory'">
                    <!-- Clean organized space -->
                    <rect x="20" y="60" width="60" height="20" fill="#d4a574" rx="5"/>
                    <rect x="30" y="45" width="40" height="15" fill="#d4a574" rx="3"/>
                    <!-- Clean lines -->
                    <line x1="25" y1="40" x2="75" y2="40" stroke="#d4a574" stroke-width="2"/>
                    <line x1="25" y1="85" x2="75" y2="85" stroke="#d4a574" stroke-width="2"/>
                  </g>
                  <g v-else-if="project.type === 'machinery'">
                    <!-- Recycled/organized materials -->
                    <rect x="25" y="50" width="50" height="25" fill="#d4a574" rx="5"/>
                    <circle cx="35" cy="60" r="6" fill="#1a3d2e"/>
                    <circle cx="65" cy="60" r="6" fill="#1a3d2e"/>
                    <rect x="35" y="45" width="30" height="10" fill="#d4a574" rx="2"/>
                    <!-- Clean finish -->
                    <circle cx="50" cy="35" r="3" fill="#d4a574"/>
                  </g>
                  <g v-else>
                    <!-- Organized green space -->
                    <rect x="20" y="65" width="60" height="15" fill="#d4a574" rx="7"/>
                    <circle cx="30" cy="50" r="8" fill="#d4a574"/>
                    <circle cx="50" cy="45" r="6" fill="#d4a574"/>
                    <circle cx="70" cy="50" r="7" fill="#d4a574"/>
                    <!-- Nature elements -->
                    <path d="M25 40 Q30 35 35 40" stroke="#d4a574" stroke-width="2" fill="none"/>
                    <path d="M45 35 Q50 30 55 35" stroke="#d4a574" stroke-width="2" fill="none"/>
                  </g>
                </svg>
                <div class="image-label">Nachher</div>
              </div>
            </div>
          </div>
          
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          
          <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(212, 165, 116, 0.1); border-radius: 10px; border-left: 4px solid var(--accent-mustard);">
            <strong style="color: var(--accent-mustard);">Ergebnis:</strong>
            <ul style="margin: 0.5rem 0 0 1rem; color: var(--text-light);">
              <li v-for="result in project.results" :key="result">{{ result }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Fabrikhalle Transformation',
    description: 'Komplette Demontage und umweltgerechte Verwertung einer 5.000m² Produktionshalle.',
    type: 'factory',
    results: [
      '95% der Materialien recycelt',
      'Boden saniert und renaturiert',
      'Neue Grünfläche für die Gemeinde',
      '200 Tonnen CO₂ eingespart'
    ]
  },
  {
    title: 'Maschinenpark Verwertung',
    description: 'Fachgerechte Demontage und Wiederverwertung eines kompletten Maschinenparks.',
    type: 'machinery',
    results: [
      '80% der Maschinen weiterverkauft',
      'Metalle sortenrein getrennt',
      'Schadstoffe sicher entsorgt',
      'Wertstofferlös von 150.000€'
    ]
  },
  {
    title: 'Industriegebiet Revitalisierung',
    description: 'Umwandlung eines stillgelegten Industriegebiets in eine nachhaltige Gewerbefläche.',
    type: 'area',
    results: [
      'Kontaminierte Böden saniert',
      '15 neue Arbeitsplätze geschaffen',
      'Biodiversität um 40% erhöht',
      'Regenwassermanagement installiert'
    ]
  }
]
</script>