// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-opacity-95');
        navbar.classList.add('backdrop-blur-sm');
    } else {
        navbar.classList.remove('bg-opacity-95');
        navbar.classList.remove('backdrop-blur-sm');
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
    });
});

// Form validation and submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Clear previous validation errors
    clearValidationErrors();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    let isValid = true;
    
    // Validate required fields
    if (!name.trim()) {
        showValidationError('name', 'Name ist erforderlich');
        isValid = false;
    }
    
    if (!email.trim()) {
        showValidationError('email', 'E-Mail ist erforderlich');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showValidationError('email', 'Ungültige E-Mail-Adresse');
        isValid = false;
    }
    
    if (!phone.trim()) {
        showValidationError('phone', 'Telefon ist erforderlich');
        isValid = false;
    }
    
    if (!isValid) {
        return;
    }
    
    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const submitText = submitButton.querySelector('.submit-text');
    const loadingText = submitButton.querySelector('.loading-text');
    
    submitButton.disabled = true;
    submitText.classList.add('hidden');
    loadingText.classList.remove('hidden');
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.');
        
        // Reset form
        contactForm.reset();
        
    } catch (error) {
        alert('Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.');
    } finally {
        // Reset button state
        submitButton.disabled = false;
        submitText.classList.remove('hidden');
        loadingText.classList.add('hidden');
    }
});

// Clear validation errors on input
document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(input => {
    input.addEventListener('input', function() {
        clearFieldValidationError(this);
    });
});

function showValidationError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const errorDiv = field.nextElementSibling;
    
    field.classList.add('border-red-500');
    field.classList.remove('border-gray-300');
    
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
}

function clearValidationErrors() {
    document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(field => {
        clearFieldValidationError(field);
    });
}

function clearFieldValidationError(field) {
    const errorDiv = field.nextElementSibling;
    
    field.classList.remove('border-red-500');
    field.classList.add('border-gray-300');
    
    if (errorDiv && errorDiv.classList.contains('error-message')) {
        errorDiv.classList.add('hidden');
        errorDiv.textContent = '';
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add custom animations
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in-up {
        animation: fadeInUp 1s ease-out;
    }
    
    .animate-fade-in-up-delayed {
        animation: fadeInUp 1s ease-out 0.3s both;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);