<template>
  <section id="kontakt" class="contact-section">
    <div class="container">
      <h2>Kontakt</h2>
      
      <div class="contact-grid">
        <div class="contact-info">
          <div class="contact-item">
            <h3>📍 Unser Standort</h3>
            <p>
              [Straße und Hausnummer]<br>
              89073 Ulm<br>
              Deutschland
            </p>
          </div>
          
          <div class="contact-item">
            <h3>📞 Telefon</h3>
            <p>
              <a href="tel:+4940525605">+49 (040) 525 60 50</a>
            </p>
          </div>
          
          <div class="contact-item">
            <h3>✉️ E-Mail</h3>
            <p>
              <a href="mailto:info@ht-kg.de">info@ht-kg.de</a>
            </p>
          </div>
          
          <div class="contact-item">
            <h3>🕒 Geschäftszeiten</h3>
            <p>
              <strong>Montag - Freitag:</strong> 8:00 – 17:00 Uhr<br>
              <strong>Samstag:</strong> Nach Vereinbarung
            </p>
          </div>

          <div class="contact-item qr-code-section">
            <h3>📱 QR-Code</h3>
            <div class="qr-code-container">
              <img src="/img/qr-code.jpg" alt="QR-Code für Kontaktdaten" class="qr-code-image">
              <p>Scannen Sie den Code für unsere Kontaktdaten</p>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <div class="contact-form-container">
            <h3>Kontaktformular</h3>
            <form @submit.prevent="handleSubmit">
              <div class="form-group" :class="{ error: errors.name }">
                <label for="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  placeholder="Ihr vollständiger Name"
                  @input="clearError('name')"
                  required
                />
                <div v-if="errors.name" class="error-message">{{ errors.name }}</div>
              </div>
              
              <div class="form-group">
                <label for="company">Unternehmen</label>
                <input
                  type="text"
                  id="company"
                  v-model="formData.company"
                  placeholder="Ihr Unternehmen (optional)"
                />
              </div>
              
              <div class="form-group" :class="{ error: errors.email }">
                <label for="email">E-Mail *</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  placeholder="ihre.email@beispiel.de"
                  @input="clearError('email')"
                  required
                />
                <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
              </div>
              
              <div class="form-group">
                <label for="phone">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  placeholder="+49 40 123456789"
                />
              </div>
              
              <div class="form-group">
                <label for="service">Betreff</label>
                <select id="service" v-model="formData.service">
                  <option value="">Bitte wählen Sie...</option>
                  <option value="industrieverwertung">Industrieverwertung</option>
                  <option value="recycling">Recycling & Entsorgung</option>
                  <option value="firmenaufloesung">Firmen- & Betriebsauflösung</option>
                  <option value="beratung">Beratung & Analyse</option>
                  <option value="fahrzeuge">Fahrzeuge und Baumaschinen</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>
              
              <div class="form-group" :class="{ error: errors.message }">
                <label for="message">Nachricht *</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="5"
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                  @input="clearError('message')"
                  required
                ></textarea>
                <div v-if="errors.message" class="error-message">{{ errors.message }}</div>
              </div>
              
              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                <span v-if="!isSubmitting">Nachricht senden</span>
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
  
  if (!formData.message.trim()) {
    newErrors.message = 'Nachricht ist erforderlich'
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
      alert(`Vielen Dank für Ihre Nachricht, ${formData.name}! Wir werden uns schnellstmöglich bei Ihnen melden.`)
    }
    
    // Reset form
    Object.keys(formData).forEach(key => {
      formData[key] = ''
    })
    
  } catch (error) {
    if (process.client) {
      alert('Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.')
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--primary-green) 0%, rgba(26, 61, 46, 0.9) 100%);
  color: var(--text-white);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--accent-mustard);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-item {
  background: rgba(26, 61, 46, 0.3);
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid var(--accent-mustard);
}

.contact-item h3 {
  color: var(--accent-mustard);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.contact-item p {
  line-height: 1.6;
  margin: 0;
}

.contact-item a {
  color: var(--accent-mustard);
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.contact-item a:hover {
  opacity: 0.8;
}

.contact-form-container {
  background: rgba(26, 61, 46, 0.3);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(212, 165, 116, 0.2);
}

.contact-form-container h3 {
  color: var(--accent-mustard);
  margin-bottom: 2rem;
  font-size: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--accent-mustard);
  font-weight: 500;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(212, 165, 116, 0.3);
  border-radius: 10px;
  font-size: 1rem;
  background: rgba(26, 61, 46, 0.5);
  color: var(--text-white);
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--accent-mustard);
  background: rgba(26, 61, 46, 0.7);
  box-shadow: 0 0 0 3px rgba(212, 165, 116, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.form-group select option {
  background: var(--primary-green);
  color: var(--text-white);
}

.form-group.error input,
.form-group.error textarea,
.form-group.error select {
  border-color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.submit-btn {
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, var(--accent-mustard), #e6b800);
  color: var(--primary-green);
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(212, 165, 116, 0.3);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.qr-code-section {
  text-align: center;
}

.qr-code-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.qr-code-image {
  width: 150px;
  height: 150px;
  object-fit: contain;
  border: 2px solid var(--accent-mustard);
  border-radius: 10px;
  padding: 0.5rem;
  background: white;
}

.qr-code-container p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-light);
  opacity: 0.8;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-section {
    padding: 3rem 0;
  }
  
  .contact-section h2 {
    font-size: 2rem;
  }
}
</style>