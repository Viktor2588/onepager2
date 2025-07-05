<template>
  <section id="services" class="services">
    <div class="container">
      <h2>Unsere Leistungen</h2>
      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <div class="service-icon">
            <component :is="service.icon" />
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
// Define icon components
const IndustryIcon = () => h('svg', {
  viewBox: '0 0 24 24',
  fill: 'currentColor'
}, [
  h('path', {
    d: 'M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 19H5V5H19V19M17 17H7V15H17V17M17 13H7V11H17V13M17 9H7V7H17V9Z'
  })
])

const RecycleIcon = () => h('svg', {
  viewBox: '0 0 24 24',
  fill: 'currentColor'
}, [
  h('path', {
    d: 'M21.82 15.42L19.32 19.75C18.83 20.61 17.92 21.06 17 21.06C16.08 21.06 15.17 20.61 14.68 19.75L12.18 15.42C11.96 15.03 12.25 14.5 12.68 14.5H17.32C17.75 14.5 18.04 15.03 17.82 15.42M17 2.94C17.92 2.94 18.83 3.39 19.32 4.25L21.82 8.58C22.04 8.97 21.75 9.5 21.32 9.5H16.68C16.25 9.5 15.96 8.97 16.18 8.58L18.68 4.25C19.17 3.39 20.08 2.94 17 2.94M7 12C7.92 12 8.83 12.45 9.32 13.31L10.82 15.81C11.04 16.2 10.75 16.73 10.32 16.73H5.68C5.25 16.73 4.96 16.2 5.18 15.81L6.68 13.31C7.17 12.45 8.08 12 7 12Z'
  })
])

const BuildingIcon = () => h('svg', {
  viewBox: '0 0 24 24',
  fill: 'currentColor'
}, [
  h('path', {
    d: 'M15 2V8H21V2H15M17 4H19V6H17V4M3 10V14H9V10H3M5 12H7V14H5V12M15 10V14H21V10H15M17 12H19V14H17V12M3 16V20H9V16H3M5 18H7V20H5V18M11 16V20H17V16H11M13 18H15V20H13V18M19 16V20H21V16H19Z'
  })
])

const ConsultingIcon = () => h('svg', {
  viewBox: '0 0 24 24',
  fill: 'currentColor'
}, [
  h('path', {
    d: 'M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1V3H9V1L3 7V9H9V20C9 21.1 9.9 22 11 22H13C14.1 22 15 21.1 15 20V9H21Z'
  })
])

const services = [
  {
    icon: IndustryIcon,
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
    icon: RecycleIcon,
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
    icon: BuildingIcon,
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
    icon: ConsultingIcon,
    title: 'Beratung & Analyse',
    description: 'Umfassende Beratung für optimale Verwertungsstrategien und nachhaltige Lösungskonzepte.',
    features: [
      'Potentialanalyse',
      'Strategieentwicklung',
      'Rechtliche Beratung',
      'Nachhaltigkeitskonzepte'
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