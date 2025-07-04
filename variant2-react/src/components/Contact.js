import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon ist erforderlich';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      alert('Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="kontakt">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Kontakt</h3>
            <div className="contact-item">
              <h4>Adresse</h4>
              <p>Fürfelder Str. 10<br />70437 Stuttgart</p>
            </div>
            <div className="contact-item">
              <h4>Telefon</h4>
              <p><a href="tel:0711/39681250">0711 / 3968 1250</a></p>
            </div>
            <div className="contact-item">
              <h4>E-Mail</h4>
              <p><a href="mailto:info@imr-verwertung.de">info@imr-verwertung.de</a></p>
            </div>
            <div className="contact-item">
              <h4>Öffnungszeiten</h4>
              <p>
                Montag - Freitag: 7:00 – 20:00<br />
                Samstag: 8:00 – 14:00<br />
                und nach Vereinbarung
              </p>
            </div>
          </div>

          <div className="contact-form">
            <div className="contact-form-container">
              <h3>Nachricht senden</h3>
              <form onSubmit={handleSubmit}>
                <div className={`form-group ${errors.name ? 'error' : ''}`}>
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="error-message">{errors.name}</div>}
                </div>
                
                <div className={`form-group ${errors.email ? 'error' : ''}`}>
                  <label htmlFor="email">E-Mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="error-message">{errors.email}</div>}
                </div>
                
                <div className={`form-group ${errors.phone ? 'error' : ''}`}>
                  <label htmlFor="phone">Telefon *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <div className="error-message">{errors.phone}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Nachricht</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;