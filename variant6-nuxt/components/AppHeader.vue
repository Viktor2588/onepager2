<template>
  <header ref="header" class="header">
    <div class="nav-container">
      <div class="logo">
        <div class="logo-icon">
          <!-- Gear with Arrow Logo -->
          <svg class="gear-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
          </svg>
          <!-- Curved Arrow -->
          <svg class="arrow-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4,15V9A6,6 0 0,1 10,3H13V1L16,4L13,7V5H10A4,4 0 0,0 6,9V15A2,2 0 0,0 8,17H14V15H16V17A2,2 0 0,1 14,19H8A4,4 0 0,1 4,15M18,9V7L21,10L18,13V11H13V9H18Z"/>
          </svg>
        </div>
        <div class="logo-text">
          <h1>INDUVA</h1>
          <span>Verwertungslösungen</span>
        </div>
      </div>
      
      <ul ref="navMenu" class="nav-menu">
        <li><NuxtLink @click="closeMenu" to="#services">Verwertung</NuxtLink></li>
        <li><NuxtLink @click="closeMenu" to="#aufloesung">Auflösung</NuxtLink></li>
        <li><NuxtLink @click="closeMenu" to="#recycling">Recycling</NuxtLink></li>
        <li><NuxtLink @click="closeMenu" to="#kontakt">Kontakt</NuxtLink></li>
      </ul>
      
      <div ref="hamburger" class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<script setup>
const header = ref(null)
const navMenu = ref(null)
const hamburger = ref(null)
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  navMenu.value?.classList.toggle('active')
  hamburger.value?.classList.toggle('active')
}

const closeMenu = () => {
  isMenuOpen.value = false
  navMenu.value?.classList.remove('active')
  hamburger.value?.classList.remove('active')
}

const handleScroll = () => {
  if (process.client && header.value) {
    if (window.scrollY > 50) {
      header.value.classList.add('scrolled')
    } else {
      header.value.classList.remove('scrolled')
    }
  }
}

const scrollToSection = (sectionId) => {
  if (process.client) {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  closeMenu()
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll)
    
    // Add click handlers to nav links
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]')
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const href = link.getAttribute('href')
        if (href) {
          scrollToSection(href)
        }
      })
    })
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>