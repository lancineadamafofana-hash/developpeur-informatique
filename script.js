// ==================== LANGUAGE SWITCHING ====================

let currentLanguage = 'fr';

// Language translations
const translations = {
    fr: {
        'Maîtrisez Python du Zéro au Héros': 'Maîtrisez Python du Zéro au Héros',
        'Une formation complète et progressive pour devenir développeur Python': 'Une formation complète et progressive pour devenir développeur Python',
        'Commencer': 'Commencer',
    },
    ar: {
        'Maîtrisez Python du Zéro au Héros': 'احترف بايثون من الصفر إلى الاحترافية',
        'Une formation complète et progressive pour devenir développeur Python': 'تدريب شامل وتدريجي لتصبح مطور بايثون محترفًا',
        'Commencer': 'ابدأ الآن',
    }
};

document.getElementById('lang-fr').addEventListener('click', () => {
    currentLanguage = 'fr';
    updateLanguage();
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('lang-fr').classList.add('active');
    document.documentElement.dir = 'ltr';
});

document.getElementById('lang-ar').addEventListener('click', () => {
    currentLanguage = 'ar';
    updateLanguage();
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('lang-ar').classList.add('active');
    document.documentElement.dir = 'rtl';
});

function updateLanguage() {
    document.querySelectorAll('[data-fr][data-ar]').forEach(element => {
        if (currentLanguage === 'fr') {
            element.textContent = element.getAttribute('data-fr');
        } else {
            element.textContent = element.getAttribute('data-ar');
        }
    });

    // Update placeholder text
    document.querySelectorAll('[data-fr-placeholder][data-ar-placeholder]').forEach(element => {
        if (currentLanguage === 'fr') {
            element.placeholder = element.getAttribute('data-fr-placeholder');
        } else {
            element.placeholder = element.getAttribute('data-ar-placeholder');
        }
    });
}

// Initialize language on page load
window.addEventListener('load', () => {
    updateLanguage();
});

// ==================== FORM HANDLING ====================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;

        // Validation
        if (!name || !email || !message) {
            showNotification('Veuillez remplir tous les champs', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Email invalide', 'error');
            return;
        }

        // Simulate form submission
        console.log('Form submitted:', { name, email, message });
        
        showNotification(currentLanguage === 'fr' ? 
            'Message envoyé avec succès!' : 
            'تم إرسال الرسالة بنجاح!', 'success');
        
        this.reset();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#00cc99' : '#ff6b6b'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== SMOOTH SCROLLING ====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ==================== EXERCISE BUTTONS ====================

document.querySelectorAll('.exercise-item .btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        const levelName = this.parentElement.querySelector('h3').textContent;
        const message = currentLanguage === 'fr' ? 
            `Vous allez commencer avec ${levelName}` :
            `ستبدأ مع ${levelName}`;
        
        showNotification(message, 'success');
        // Here you would typically redirect to a lessons page
        console.log('Starting exercises for:', levelName);
    });
});

// ==================== MODULE LINKS ====================

document.querySelectorAll('.module-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const moduleName = this.parentElement.querySelector('h3').textContent;
        const message = currentLanguage === 'fr' ? 
            `Module: ${moduleName}` :
            `الوحدة: ${moduleName}`;
        
        showNotification(message, 'success');
        console.log('Navigating to module:', moduleName);
    });
});

// ==================== SCROLL ANIMATIONS ====================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.module-card, .resource-card, .exercise-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ==================== ACTIVE NAV LINK ====================

window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== PROGRESS TRACKING ====================

class ProgressTracker {
    constructor() {
        this.progress = JSON.parse(localStorage.getItem('pythonProgress') || '{}');
    }

    saveProgress(module, percentage) {
        this.progress[module] = percentage;
        localStorage.setItem('pythonProgress', JSON.stringify(this.progress));
    }

    getProgress(module) {
        return this.progress[module] || 0;
    }

    getAllProgress() {
        return this.progress;
    }
}

const tracker = new ProgressTracker();

// ==================== STATS COUNTER ANIMATION ====================

function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        let currentValue = 0;
        const increment = finalValue / 50;
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                stat.textContent = stat.textContent;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(currentValue) + (stat.textContent.includes('+') ? '+' : '');
            }
        }, 30);
    });
}

// Trigger animation when stats section is visible
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            animateStats();
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ==================== KEYBOARD SHORTCUTS ====================

document.addEventListener('keydown', (e) => {
    // Press 'h' to go home
    if (e.key === 'h') {
        document.getElementById('accueil').scrollIntoView({ behavior: 'smooth' });
    }
});

// ==================== CONSOLE WELCOME MESSAGE ====================

console.log(`
╔═══════════════════════════════════════════════════════════════╗
║         Bienvenue sur Formation Python - Python Academy       ║
║                                                               ║
║  Vous apprenez Python? Excellent choix! 🐍                   ║
║  Explorez nos 50+ cours et 200+ exercices pratiques          ║
║                                                               ║
║  هرجة بايثون؟ اختيار ممتاز! 🐍                             ║
║  استكشف أكثر من 50 دورة و 200 تمرين عملي                     ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
`);

console.log('Connectez-vous avec nous sur GitHub pour plus d\'infos!');