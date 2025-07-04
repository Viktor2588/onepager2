<template>
  <header :class="['header', { scrolled: isScrolled }]">
    <div class="nav-container">
      <div class="logo">
        <h1>IMR</h1>
        <span>Industrieverwertung</span>
      </div>
      <ul :class="['nav-menu', { active: isMenuOpen }]">
        <li><a @click="scrollToSection('firmenaufloesung')">Firmenauflösung</a></li>
        <li><a @click="scrollToSection('betriebsaufloesung')">Betriebsauflösung</a></li>
        <li><a @click="scrollToSection('industrieverwertung')">Industrieverwertung</a></li>
        <li><a @click="scrollToSection('kontakt')">Kontakt</a></li>
      </ul>
      <div :class="['hamburger', { active: isMenuOpen }]" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      this.isMenuOpen = false
    }
  }
}
</script>