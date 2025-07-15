<template>
  <div class="lightbox" :class="{ active: isOpen }" @click="closeLightbox">
    <div class="lightbox-content" @click.stop>
      <div v-if="currentImage">
        <!-- Lightbox image display -->
        <div style="width: 800px; height: 600px; max-width: 90vw; max-height: 90vh; background: #000; display: flex; flex-direction: column; border-radius: 10px; position: relative; overflow: hidden;">
          <button 
            @click="closeLightbox" 
            style="position: absolute; top: 15px; right: 15px; background: rgba(0,0,0,0.7); color: white; border: none; width: 40px; height: 40px; border-radius: 50%; font-size: 24px; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10; transition: background 0.3s;"
            @mouseover="$event.target.style.background = 'rgba(0,0,0,0.9)'"
            @mouseout="$event.target.style.background = 'rgba(0,0,0,0.7)'"
          >
            &times;
          </button>
          <div style="flex: 1; position: relative; overflow: hidden;">
            <img :src="currentImage.image" :alt="currentImage.title" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          
          <div style="background: rgba(26, 61, 46, 0.95); color: white; padding: 1.5rem; text-align: center;">
            <h3 style="color: #d4a574; margin-bottom: 1rem; font-size: 1.5rem;">{{ currentImage.title }}</h3>
            <p style="color: #f5f5f5; line-height: 1.6; max-width: 600px; margin: 0 auto;">{{ currentImage.description }}</p>
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