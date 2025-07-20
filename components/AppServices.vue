<template>
  <section id="services" class="services">
    <div class="container">
      <h2>Unsere Leistungen</h2>
      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <div class="service-icon">
            <img :src="service.icon" :alt="service.title" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <ul v-if="service.features" class="service-features">
            <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
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

const services = [
  {
    icon: getImagePath('/img/IMG-20250714-Industrieverwertung.jpg'),
    title: 'Industrieverwertung',
    description: 'Professionelle Verwertung von Industrieanlagen, Maschinen und Produktionsausrüstung mit maximaler Wertschöpfung.',
    features: [
      'Anlagenbewertung & -demontage',
      'Maschinenverwertung',
      'Rohstoffrecycling',
      'Logistikabwicklung'
    ]
  },
  {
    icon: getImagePath('/img/IMG-20250714-Industrieverwertung.jpg'),
    title: 'Recycling & Entsorgung',
    description: 'Nachhaltige Recyclinglösungen und umweltgerechte Entsorgung nach neuesten Standards und Vorschriften.',
    features: [
      'Metallrecycling',
      'Elektronikschrott',
      'Kunststoffverwertung',
      'Gefahrstoffentsorgung'
    ]
  },
  {
    icon: getImagePath('/img/IMG-20250714-Firmen-&Betriebsauflösung.jpg'),
    title: 'Firmen- & Betriebsauflösung',
    description: 'Komplette Abwicklung von Firmen- und Betriebsauflösungen mit Fokus auf Werterhaltung und rechtliche Sicherheit.',
    features: [
      'Inventarisierung',
      'Verwertungskonzepte',
      'Rechtliche Begleitung',
      'Standorträumung'
    ]
  },
  {
    icon: getImagePath('/img/IMG-20250714-Beratung&Analyse.jpg'),
    title: 'Beratung & Analyse',
    description: 'Umfassende Beratung für optimale Verwertungsstrategien und nachhaltige Lösungskonzepte.',
    features: [
      'Potentialanalyse',
      'Strategieentwicklung',
      'Rechtliche Beratung',
      'Nachhaltigkeitskonzepte'
    ]
  },
  {
    icon: getImagePath('/img/IMG-20250714-Industrieverwertung.jpg'),
    title: 'Fahrzeuge und Baumaschinen',
    description: 'Professionelle Verwertung und Demontage von Fahrzeugen, Baumaschinen und mobilen Anlagen.',
    features: [
      'Fahrzeugverwertung',
      'Baumaschinendemontage',
      'Altmetallverwertung',
      'Ersatzteilgewinnung'
    ]
  },
  {
    icon: getImagePath('/img/IMG-20250714-Firmen-&Betriebsauflösung.jpg'),
    title: 'Immobilien',
    description: 'Professionelle Abwicklung von Immobilienverwertung und Gebäudeauflösung mit Fokus auf Werterhaltung.',
    features: [
      'Immobilienbewertung',
      'Gebäudeauflösung',
      'Entrümpelung',
      'Verwertungskonzepte'
    ]
  }
]
</script>

<style scoped>
.service-features {
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
  text-align: left;
}

.service-features li {
  padding: 0.5rem 0;
  color: var(--text-light);
  position: relative;
  padding-left: 1.5rem;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-mustard);
  font-weight: bold;
}
</style>