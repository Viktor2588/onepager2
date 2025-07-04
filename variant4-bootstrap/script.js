// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Close mobile menu if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

// Form validation and submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form elements
    const form = this;
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const phoneInput = form.querySelector('#phone');
    const messageInput = form.querySelector('#message');
    const submitBtn = form.querySelector('button[type="submit"]');
    const submitText = submitBtn.querySelector('.submit-text');
    const submitSpinner = submitBtn.querySelector('.spinner-border');
    
    // Clear previous validation
    form.querySelectorAll('.is-invalid').forEach(el => {
        el.classList.remove('is-invalid');
    });
    form.querySelectorAll('.invalid-feedback').forEach(el => {
        el.textContent = '';
    });
    
    let isValid = true;
    
    // Validate name
    if (!nameInput.value.trim()) {
        showError(nameInput, 'Name ist erforderlich');
        isValid = false;
    }
    
    // Validate email
    if (!emailInput.value.trim()) {
        showError(emailInput, 'E-Mail ist erforderlich');
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, 'Ungültige E-Mail-Adresse');
        isValid = false;
    }
    
    // Validate phone
    if (!phoneInput.value.trim()) {
        showError(phoneInput, 'Telefon ist erforderlich');
        isValid = false;
    }
    
    if (!isValid) {
        return;
    }
    
    // Show loading state
    submitBtn.disabled = true;
    submitText.classList.add('d-none');
    submitSpinner.classList.remove('d-none');
    
    // Simulate form submission
    setTimeout(() => {
        alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.');
        form.reset();
        
        // Reset button state
        submitBtn.disabled = false;
        submitText.classList.remove('d-none');
        submitSpinner.classList.add('d-none');
    }, 2000);
});

function showError(input, message) {
    input.classList.add('is-invalid');
    const feedback = input.nextElementSibling;
    if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.textContent = message;
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Clear validation on input
document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(input => {
    input.addEventListener('input', function() {
        if (this.classList.contains('is-invalid')) {
            this.classList.remove('is-invalid');
            const feedback = this.nextElementSibling;
            if (feedback && feedback.classList.contains('invalid-feedback')) {
                feedback.textContent = '';
            }
        }
    });
});