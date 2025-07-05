<template>
  <section id="kontakt" class="contact-section">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info">
          <h2>Kontakt aufnehmen</h2>
          
          <div class="contact-item">
            <h3>📍 Unser Standort</h3>
            <p>
              Industriestraße 25<br>
              70437 Stuttgart<br>
              Deutschland
            </p>
          </div>
          
          <div class="contact-item">
            <h3>📞 Telefon & Fax</h3>
            <p>
              Telefon: <a href="tel:+497113968250">+49 711 3968 250</a><br>
              Fax: +49 711 3968 251
            </p>
          </div>
          
          <div class="contact-item">
            <h3>✉️ E-Mail</h3>
            <p>
              <a href="mailto:info@induva-verwertung.de">info@induva-verwertung.de</a><br>
              <a href="mailto:beratung@induva-verwertung.de">beratung@induva-verwertung.de</a>
            </p>
          </div>
          
          <div class="contact-item">
            <h3>🕒 Geschäftszeiten</h3>
            <p>
              <strong>Montag - Freitag:</strong> 7:00 – 18:00 Uhr<br>
              <strong>Samstag:</strong> 8:00 – 14:00 Uhr<br>
              <strong>Sonntag:</strong> Nach Vereinbarung<br>
              <em>24/7 Notfall-Hotline verfügbar</em>
            </p>
          </div>
        </div>

        <div class="contact-form">
          <div class="contact-form-container">
            <h2>Nachricht senden</h2>
            <form @submit.prevent="handleSubmit">
              <div class="form-group" :class="{ error: errors.name }">
                <label for="name">Vollständiger Name *</label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  placeholder="Max Mustermann"
                  @input="clearError('name')"
                  required
                />
                <div v-if="errors.name" class="error-message">{{ errors.name }}</div>
              </div>
              
              <div class="form-group" :class="{ error: errors.company }">
                <label for="company">Unternehmen</label>
                <input
                  type="text"
                  id="company"
                  v-model="formData.company"
                  placeholder="Ihr Unternehmen"
                  @input="clearError('company')"
                />
              </div>
              
              <div class="form-group" :class="{ error: errors.email }">
                <label for="email">E-Mail Adresse *</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  placeholder="max@mustermann.de"
                  @input="clearError('email')"
                  required
                />
                <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
              </div>
              
              <div class="form-group" :class="{ error: errors.phone }">
                <label for="phone">Telefonnummer *</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  placeholder="+49 711 123456"
                  @input="clearError('phone')"
                  required
                />
                <div v-if="errors.phone" class="error-message">{{ errors.phone }}</div>
              </div>
              
              <div class="form-group">
                <label for="service">Gewünschte Dienstleistung</label>
                <select id="service" v-model="formData.service" class="form-control">
                  <option value="">Bitte wählen Sie...</option>
                  <option value="industrieverwertung">Industrieverwertung</option>
                  <option value="firmenaufloesung">Firmenauflösung</option>
                  <option value="betriebsaufloesung">Betriebsauflösung</option>
                  <option value="recycling">Recycling & Entsorgung</option>
                  <option value="beratung">Beratung</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Ihre Nachricht</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="5"
                  placeholder="Beschreiben Sie Ihr Anliegen ausführlich..."
                ></textarea>
              </div>
              
              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                <span v-if="!isSubmitting">Anfrage senden</span>
                <span v-else>Wird gesendet...</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const formData = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const errors = reactive({})
const isSubmitting = ref(false)

const clearError = (field) => {
  if (errors[field]) {
    delete errors[field]
  }
}

const validateForm = () => {
  const newErrors = {}
  
  if (!formData.name.trim()) {
    newErrors.name = 'Name ist erforderlich'
  }
  
  if (!formData.email.trim()) {
    newErrors.email = 'E-Mail ist erforderlich'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = 'Ungültige E-Mail-Adresse'
  }
  
  if (!formData.phone.trim()) {
    newErrors.phone = 'Telefonnummer ist erforderlich'
  } else if (!/^[\+]?[\d\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
    newErrors.phone = 'Ungültige Telefonnummer'
  }
  
  return newErrors
}

const handleSubmit = async () => {
  // Clear previous errors
  Object.keys(errors).forEach(key => delete errors[key])
  
  const newErrors = validateForm()
  if (Object.keys(newErrors).length > 0) {
    Object.assign(errors, newErrors)
    return
  }
  
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Show success message
    if (process.client) {
      alert(`Vielen Dank für Ihre Anfrage, ${formData.name}! Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.`)
    }
    
    // Reset form
    Object.keys(formData).forEach(key => {
      formData[key] = ''
    })
    
  } catch (error) {
    if (process.client) {
      alert('Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.')
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
select {
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(212, 165, 116, 0.3);
  border-radius: 10px;
  font-size: 1rem;
  background: rgba(26, 61, 46, 0.5);
  color: var(--text-white);
  transition: all 0.3s ease;
}

select:focus {
  outline: none;
  border-color: var(--accent-mustard);
  background: rgba(26, 61, 46, 0.7);
  box-shadow: 0 0 0 3px rgba(212, 165, 116, 0.1);
}

select option {
  background: var(--primary-green);
  color: var(--text-white);
  padding: 0.5rem;
}
</style>