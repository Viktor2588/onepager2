<template>
  <section class="contact-section" id="kontakt">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info">
          <h3>Kontakt</h3>
          <div class="contact-item">
            <h4>Adresse</h4>
            <p>Fürfelder Str. 10<br>70437 Stuttgart</p>
          </div>
          <div class="contact-item">
            <h4>Telefon</h4>
            <p><a href="tel:0711/39681250">0711 / 3968 1250</a></p>
          </div>
          <div class="contact-item">
            <h4>E-Mail</h4>
            <p><a href="mailto:info@imr-verwertung.de">info@imr-verwertung.de</a></p>
          </div>
          <div class="contact-item">
            <h4>Öffnungszeiten</h4>
            <p>
              Montag - Freitag: 7:00 – 20:00<br>
              Samstag: 8:00 – 14:00<br>
              und nach Vereinbarung
            </p>
          </div>
        </div>

        <div class="contact-form">
          <div class="contact-form-container">
            <h3>Nachricht senden</h3>
            <form @submit.prevent="handleSubmit">
              <div :class="['form-group', { error: errors.name }]">
                <label for="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  @input="clearError('name')"
                />
                <div v-if="errors.name" class="error-message">{{ errors.name }}</div>
              </div>
              
              <div :class="['form-group', { error: errors.email }]">
                <label for="email">E-Mail *</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  @input="clearError('email')"
                />
                <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
              </div>
              
              <div :class="['form-group', { error: errors.phone }]">
                <label for="phone">Telefon *</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  @input="clearError('phone')"
                />
                <div v-if="errors.phone" class="error-message">{{ errors.phone }}</div>
              </div>
              
              <div class="form-group">
                <label for="message">Nachricht</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="5"
                />
              </div>
              
              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                {{ isSubmitting ? 'Wird gesendet...' : 'Nachricht senden' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      errors: {},
      isSubmitting: false
    }
  },
  methods: {
    clearError(field) {
      if (this.errors[field]) {
        this.$delete(this.errors, field)
      }
    },
    validateForm() {
      const errors = {}
      
      if (!this.formData.name.trim()) {
        errors.name = 'Name ist erforderlich'
      }
      
      if (!this.formData.email.trim()) {
        errors.email = 'E-Mail ist erforderlich'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)) {
        errors.email = 'Ungültige E-Mail-Adresse'
      }
      
      if (!this.formData.phone.trim()) {
        errors.phone = 'Telefon ist erforderlich'
      }
      
      return errors
    },
    async handleSubmit() {
      const errors = this.validateForm()
      if (Object.keys(errors).length > 0) {
        this.errors = errors
        return
      }
      
      this.isSubmitting = true
      
      try {
        await new Promise(resolve => setTimeout(resolve, 2000))
        alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.')
        this.formData = {
          name: '',
          email: '',
          phone: '',
          message: ''
        }
        this.errors = {}
      } catch (error) {
        alert('Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.')
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>