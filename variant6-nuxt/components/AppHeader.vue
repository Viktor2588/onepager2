<template>
  <header ref="header" class="header">
    <div class="nav-container">
      <div class="logo">
        <div class="logo-icon">
          <img src="../public/IMG-20250708-WA0002.jpg" alt="INDUVA Logo" style="width: 50px; height: 50px; object-fit: cover;">
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