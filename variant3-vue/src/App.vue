<template>
  <div id="app">
    <Header />
    <Hero />
    <Contact />
    <Services />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Contact from './components/Contact.vue'
import Services from './components/Services.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Contact,
    Services,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header Styles */
.header {
  background: #1e3a8a;
  color: white;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: background 0.3s ease;
}

.header.scrolled {
  background: rgba(30, 58, 138, 0.95);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  font-size: 2rem;
  font-weight: bold;
}

.logo span {
  font-size: 0.9rem;
  opacity: 0.8;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  cursor: pointer;
}

.nav-menu a:hover {
  color: #60a5fa;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: white;
  margin: 3px 0;
  transition: 0.3s;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  color: white;
  padding: 150px 0 100px;
  text-align: center;
}

.hero h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  opacity: 0.9;
}

/* Contact Section */
.contact-section {
  padding: 80px 0;
  background: #f8fafc;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info h3,
.contact-form h3 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1e3a8a;
}

.contact-item {
  margin-bottom: 2rem;
}

.contact-item h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #374151;
}

.contact-item p {
  color: #6b7280;
  line-height: 1.8;
}

.contact-item a {
  color: #1e3a8a;
  text-decoration: none;
}

.contact-item a:hover {
  text-decoration: underline;
}

/* Form Styles */
.contact-form-container {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #374151;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
}

.form-group.error input,
.form-group.error textarea {
  border-color: #ef4444;
}

.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.submit-btn {
  background: #1e3a8a;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s;
  width: 100%;
}

.submit-btn:hover:not(:disabled) {
  background: #1e40af;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Services Section */
.services {
  padding: 80px 0;
  background: white;
}

.services h3 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #1e3a8a;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

.service-card h4 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1e3a8a;
}

.service-card p {
  color: #6b7280;
  line-height: 1.8;
}

/* Footer */
.footer {
  background: #1e3a8a;
  color: white;
  padding: 2rem 0;
  text-align: center;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a {
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.footer-links a:hover {
  opacity: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background: #1e3a8a;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0,0,0,0.05);
    padding: 2rem 0;
  }

  .nav-menu.active {
    left: 0;
  }

  .hamburger {
    display: flex;
  }

  .hero h2 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .services h3 {
    font-size: 2rem;
  }

  .footer-container {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>