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
          <!-- Gallery images -->
          <div style="width: 100%; height: 300px; position: relative; overflow: hidden; border-radius: 12px; background: linear-gradient(135deg, #2d5a47, #1a3d2e);">
            <img 
              :src="item.image" 
              :alt="item.title" 
              style="width: 100%; height: 100%; object-fit: cover;"
              @error="handleImageError"
              @load="handleImageLoad"
            >
            <div 
              v-if="!item.imageLoaded" 
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #2d5a47, #1a3d2e); color: #d4a574; text-align: center; padding: 2rem;"
            >
              <div>
                <div style="font-size: 3rem; margin-bottom: 1rem;">📷</div>
                <div style="font-weight: 600; margin-bottom: 0.5rem;">{{ item.title }}</div>
                <div style="font-size: 0.875rem; opacity: 0.8;">Bild wird geladen...</div>
              </div>
            </div>
            <div style="position: absolute; bottom: 20px; right: 20px; background: rgba(212, 165, 116, 0.9); color: #1a3d2e; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; font-weight: 600;">
              📸 {{ item.category }}
            </div>
          </div>
          
          <div v-if="item.imageLoaded" class="gallery-overlay">
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
const { $config } = useNuxtApp()

const getImagePath = (imagePath) => {
  const baseURL = $config.app?.baseURL || '/'
  return baseURL === '/' ? imagePath : `${baseURL}${imagePath}`
}

const galleryItems = ref([
  {
    title: 'Fabrikhalle Transformation',
    description: 'Komplette Transformation einer Industriehalle',
    category: 'Transformation',
    type: 'transformation',
    image: getImagePath('/img/IMG-20250714-FabrikhalleTransformation.jpg'),
    imageLoaded: false
  },
  {
    title: 'Metallrecycling Prozess',
    description: 'Sortierung und Aufbereitung von Industriemetallen',
    category: 'Recycling',
    type: 'recycling',
    image: getImagePath('/placeholder-recycling.jpg')
  },
  {
    title: 'Betriebsauflösung Komplett',
    description: 'Komplette Räumung und Verwertung eines Industriebetriebs',
    category: 'Auflösung',
    type: 'demolition',
    image: getImagePath('/placeholder-demolition.jpg')
  },
  {
    title: 'Umweltgerechte Entsorgung',
    description: 'Fachgerechte Entsorgung von Gefahrstoffen und Chemikalien',
    category: 'Entsorgung',
    type: 'environmental',
    image: getImagePath('/placeholder-environmental.jpg')
  },
  {
    title: 'Anlagenbewertung vor Ort',
    description: 'Detaillierte Bewertung und Dokumentation von Industrieanlagen',
    category: 'Bewertung',
    type: 'evaluation',
    image: getImagePath('/placeholder-evaluation.jpg')
  },
  {
    title: 'Logistik und Transport',
    description: 'Spezialtransport für schwere Maschinen und Anlagenteile',
    category: 'Transport',
    type: 'logistics',
    image: getImagePath('/placeholder-logistics.jpg')
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

const handleImageLoad = (event) => {
  const imgSrc = event.target.src
  const item = galleryItems.value.find(item => item.image === imgSrc.split('/').pop() || imgSrc.includes(item.image))
  if (item) {
    item.imageLoaded = true
  }
}

const handleImageError = (event) => {
  const imgSrc = event.target.src
  const item = galleryItems.value.find(item => item.image === imgSrc.split('/').pop() || imgSrc.includes(item.image))
  if (item) {
    item.imageLoaded = false
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
      image: getImagePath('/placeholder-processing.jpg'),
      imageLoaded: false
    },
    {
      title: 'Qualitätskontrolle',
      description: 'Strenge Qualitätsprüfung aller verwerteten Materialien',
      category: 'Kontrolle',
      type: 'quality',
      image: getImagePath('/placeholder-quality.jpg'),
      imageLoaded: false
    }
  ]
  
  galleryItems.value.push(...newItems)
}
</script>