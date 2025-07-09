<template>
  <div class="lightbox" :class="{ active: isOpen }" @click="closeLightbox">
    <div class="lightbox-content" @click.stop>
      <button class="lightbox-close" @click="closeLightbox">&times;</button>
      <div v-if="currentImage">
        <!-- Placeholder for lightbox image -->
        <div style="width: 800px; height: 600px; max-width: 90vw; max-height: 90vh; background: linear-gradient(135deg, #2d5a47, #1a3d2e); display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 10px; position: relative;">
          <svg width="200" height="200" viewBox="0 0 200 200" style="opacity: 0.8; margin-bottom: 2rem;">
            <rect x="50" y="70" width="100" height="60" fill="#d4a574" rx="10"/>
            <circle cx="80" cy="90" r="12" fill="#1a3d2e"/>
            <circle cx="120" cy="90" r="12" fill="#1a3d2e"/>
            <rect x="70" y="110" width="60" height="8" fill="#1a3d2e" rx="4"/>
            <rect x="85" y="50" width="30" height="25" fill="#d4a574" rx="5"/>
            
            <!-- Industrial details -->
            <rect x="20" y="140" width="160" height="40" fill="#d4a574" rx="8"/>
            <circle cx="40" cy="160" r="8" fill="#1a3d2e"/>
            <circle cx="160" cy="160" r="8" fill="#1a3d2e"/>
            
            <!-- Decorative elements -->
            <circle cx="30" cy="30" r="5" fill="#d4a574" opacity="0.6"/>
            <circle cx="170" cy="40" r="7" fill="#d4a574" opacity="0.4"/>
            <circle cx="20" cy="180" r="6" fill="#d4a574" opacity="0.5"/>
            <circle cx="180" cy="170" r="4" fill="#d4a574" opacity="0.7"/>
          </svg>
          
          <div style="text-align: center; color: white; padding: 2rem;">
            <h3 style="color: #d4a574; margin-bottom: 1rem; font-size: 1.5rem;">{{ currentImage.title }}</h3>
            <p style="color: #f5f5f5; line-height: 1.6; max-width: 600px;">{{ currentImage.description }}</p>
            
            <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(212, 165, 116, 0.1); border-radius: 8px; border: 1px solid rgba(212, 165, 116, 0.3);">
              <strong style="color: #d4a574;">Bilddetails:</strong>
              <div style="margin-top: 0.5rem; font-size: 0.9rem; color: #f5f5f5;">
                📅 Aufgenommen: {{ currentImage.date || 'Oktober 2024' }}<br>
                📍 Standort: {{ currentImage.location || 'Stuttgart, Deutschland' }}<br>
                📷 Kamera: {{ currentImage.camera || 'Professionelle Industriekamera' }}<br>
                🏷️ Kategorie: {{ currentImage.category || 'Industrieverwertung' }}
              </div>
            </div>
          </div>
          
          <!-- Image placeholder overlay -->
          <div style="position: absolute; top: 20px; left: 20px; background: rgba(0,0,0,0.7); color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem;">
            🖼️ Hochauflösendes Bild
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false)
const currentImage = ref(null)

const openLightbox = (imageData) => {
  currentImage.value = imageData
  isOpen.value = true
  if (process.client) {
    document.body.style.overflow = 'hidden'
  }
}

const closeLightbox = () => {
  isOpen.value = false
  currentImage.value = null
  if (process.client) {
    document.body.style.overflow = 'auto'
  }
}

onMounted(() => {
  if (process.client) {
    // Listen for lightbox open events
    window.addEventListener('open-lightbox', (event) => {
      openLightbox(event.detail)
    })
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen.value) {
        closeLightbox()
      }
    })
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('open-lightbox', openLightbox)
    document.removeEventListener('keydown', closeLightbox)
  }
})
</script>