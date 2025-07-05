<template>
  <section id="galerie" class="gallery-section">
    <div class="container">
      <h2>Unsere Arbeit in Bildern</h2>
      <div class="gallery-grid">
        <div 
          v-for="(item, index) in galleryItems" 
          :key="index" 
          class="gallery-item"
          @click="openLightbox(item)"
        >
          <!-- Placeholder images with industrial themes -->
          <div style="width: 100%; height: 300px; background: linear-gradient(135deg, #2d5a47, #1a3d2e); display: flex; align-items: center; justify-content: center; position: relative;">
            <svg width="120" height="120" viewBox="0 0 120 120" style="opacity: 0.6;">
              <g v-if="item.type === 'machinery'">
                <rect x="20" y="40" width="80" height="60" fill="#d4a574" rx="8"/>
                <circle cx="35" cy="55" r="8" fill="#1a3d2e"/>
                <circle cx="85" cy="55" r="8" fill="#1a3d2e"/>
                <rect x="30" y="70" width="60" height="8" fill="#1a3d2e" rx="4"/>
                <rect x="45" y="25" width="30" height="20" fill="#d4a574" rx="4"/>
              </g>
              <g v-else-if="item.type === 'recycling'">
                <path d="M60 20 L80 50 L40 50 Z" fill="#d4a574"/>
                <path d="M40 50 L20 80 L60 80 Z" fill="#d4a574"/>
                <path d="M60 80 L80 50 L100 80 Z" fill="#d4a574"/>
                <circle cx="60" cy="60" r="15" fill="none" stroke="#1a3d2e" stroke-width="3"/>
              </g>
              <g v-else-if="item.type === 'demolition'">
                <rect x="30" y="60" width="60" height="40" fill="#d4a574"/>
                <polygon points="30,60 60,30 90,60" fill="#d4a574"/>
                <rect x="45" y="70" width="8" height="20" fill="#1a3d2e"/>
                <rect x="67" y="70" width="8" height="20" fill="#1a3d2e"/>
              </g>
              <g v-else>
                <circle cx="60" cy="60" r="30" fill="#d4a574"/>
                <rect x="50" y="50" width="20" height="20" fill="#1a3d2e" rx="4"/>
              </g>
            </svg>
            <div style="position: absolute; bottom: 20px; right: 20px; background: rgba(212, 165, 116, 0.9); color: #1a3d2e; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; font-weight: 600;">
              📸 {{ item.category }}
            </div>
          </div>
          
          <div class="gallery-overlay">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 3rem;">
        <button class="cta-button" @click="loadMoreImages">
          📷 Weitere Bilder laden
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const galleryItems = ref([
  {
    title: 'Industriemaschinen Demontage',
    description: 'Professionelle Demontage einer 50-Tonnen Produktionsanlage',
    category: 'Demontage',
    type: 'machinery',
    image: '/placeholder-machinery.jpg'
  },
  {
    title: 'Metallrecycling Prozess',
    description: 'Sortierung und Aufbereitung von Industriemetallen',
    category: 'Recycling',
    type: 'recycling',
    image: '/placeholder-recycling.jpg'
  },
  {
    title: 'Betriebsauflösung Komplett',
    description: 'Komplette Räumung und Verwertung eines Industriebetriebs',
    category: 'Auflösung',
    type: 'demolition',
    image: '/placeholder-demolition.jpg'
  },
  {
    title: 'Umweltgerechte Entsorgung',
    description: 'Fachgerechte Entsorgung von Gefahrstoffen und Chemikalien',
    category: 'Entsorgung',
    type: 'environmental',
    image: '/placeholder-environmental.jpg'
  },
  {
    title: 'Anlagenbewertung vor Ort',
    description: 'Detaillierte Bewertung und Dokumentation von Industrieanlagen',
    category: 'Bewertung',
    type: 'evaluation',
    image: '/placeholder-evaluation.jpg'
  },
  {
    title: 'Logistik und Transport',
    description: 'Spezialtransport für schwere Maschinen und Anlagenteile',
    category: 'Transport',
    type: 'logistics',
    image: '/placeholder-logistics.jpg'
  }
])

const openLightbox = (item) => {
  // Emit event to parent component to open lightbox
  if (process.client) {
    window.dispatchEvent(new CustomEvent('open-lightbox', { 
      detail: { 
        image: item.image, 
        title: item.title,
        description: item.description 
      } 
    }))
  }
}

const loadMoreImages = () => {
  // Simulate loading more images
  const newItems = [
    {
      title: 'Rohstoffaufbereitung',
      description: 'Innovative Verfahren zur Rohstoffgewinnung aus Altmaterialien',
      category: 'Aufbereitung',
      type: 'processing',
      image: '/placeholder-processing.jpg'
    },
    {
      title: 'Qualitätskontrolle',
      description: 'Strenge Qualitätsprüfung aller verwerteten Materialien',
      category: 'Kontrolle',
      type: 'quality',
      image: '/placeholder-quality.jpg'
    }
  ]
  
  galleryItems.value.push(...newItems)
}
</script>