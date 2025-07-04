<template>
  <section class="services">
    <div class="container">
      <h3>Unsere Leistungen</h3>
      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <h4>{{ service.title }}</h4>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          title: 'Maschinen & Fahrzeuge',
          description: 'Professionelle Verwertung von Industriemaschinen und Fahrzeugen'
        },
        {
          title: 'Verwertung & Recycling',
          description: 'Nachhaltige Verwertung und umweltgerechtes Recycling'
        },
        {
          title: 'Demontage & Abbrüche',
          description: 'Fachgerechte Demontage und Abbrucharbeiten'
        }
      ]
    }
  }
}
</script>