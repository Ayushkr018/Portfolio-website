// EmailJS Initialization
(function(){
    emailjs.init("DQtdHgnKMZXpirdVZ"); // Replace this with your EmailJS public key
})();

// Typewriter effect
const phrases = [
    "Full Stack Developer",
    "UI Designer", 
    "Problem Solver",
    "Data Analyst",
    "Mr Coder"
];

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;
const typewriterElement = document.getElementById('typewriter-text');

function typewriter() {
    const current = phrases[currentPhrase];
    
    if (isDeleting) {
        typewriterElement.textContent = current.substring(0, currentChar - 1);
        currentChar--;
    } else {
        typewriterElement.textContent = current.substring(0, currentChar + 1);
        currentChar++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && currentChar === current.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(typewriter, typeSpeed);
}

typewriter();

// Floating particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.width = particle.style.height = Math.random() * 4 + 2 + 'px';
    particle.style.animationDuration = Math.random() * 10 + 10 + 's';
    particle.style.opacity = Math.random() * 0.6 + 0.2;
    
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 15000);
}

setInterval(createParticle, 300);

// Smooth scrolling
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

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
});

// Navigation bar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(15, 23, 42, 0.98)';
        nav.style.backdropFilter = 'blur(20px)';
    } else {
        nav.style.background = 'rgba(15, 23, 42, 0.95)';
        nav.style.backdropFilter = 'blur(15px)';
    }
});

// Resume Modal Functions
function openResumeModal() {
    document.getElementById('resumeModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
    document.getElementById('resumeModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function downloadResume(type) {
    alert(`Downloading ${type} resume... This would typically trigger a PDF download.`);
    closeResumeModal();
}

function viewResume(type) {
    alert(`Opening ${type} resume in new tab... This would typically open the resume in a new window.`);
    closeResumeModal();
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('resumeModal');
    if (e.target === modal) {
        closeResumeModal();
    }
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    submitBtn.textContent = 'Sending... ⏳';
    submitBtn.disabled = true;

    emailjs.send('service_2y1zfys', 'template_q931smm', formData)
    .then(() => {
        alert('✅ Message sent successfully!');
        document.getElementById('contactForm').reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    })
    .catch((error) => {
        alert('❌ Failed to send message. Please try again later.');
        console.error('EmailJS Error:', error);
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
});

// Mobile menu toggle (placeholder for mobile menu functionality)
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    // This would typically toggle a mobile menu
    nav.classList.toggle('visible');
      this.textContent = nav.classList.contains('visible') ? '✖' : '☰';
});

// Enhanced scroll animations for skill cards
const skillCards = document.querySelectorAll('.skill-category');
skillCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Project cards hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Certificate cards animation
document.querySelectorAll('.certificate-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
    
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Enhanced parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Dynamic background color based on section
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Contact form validation
const contactInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
contactInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.parentElement.classList.remove('focused');
        }
    });
    input.addEventListener('input', function() {
        if (this.checkValidity()) {
            this.style.borderColor = 'var(--accent)';
        } else {
            this.style.borderColor = '#ef4444';
        }
    });
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeResumeModal();
    }
});

// Lazy loading for better performance
const lazyElements = document.querySelectorAll('.lazy');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyElements.forEach(img => imageObserver.observe(img));

// Dynamic theme adjustment based on time
function adjustThemeByTime() {
    const hour = new Date().getHours();
    const root = document.documentElement;
    
    if (hour >= 6 && hour < 18) {
        // Day mode - slightly brighter
        root.style.setProperty('--background', '#1e293b');
        root.style.setProperty('--darker', '#0f172a');
    } else {
        // Night mode - darker
        root.style.setProperty('--background', '#0f172a');
        root.style.setProperty('--darker', '#020617');
    }
}

adjustThemeByTime();
setInterval(adjustThemeByTime, 3600000); // Check every hour

// Easter egg - Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        // Easter egg activated
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
            alert('🎉 Konami Code activated! You found the easter egg!');
        }, 2000);
        konamiCode = [];
    }
});

// Add CSS for rainbow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Performance optimization - throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations here
}, 16)); // ~60fps

// Initialize all animations on page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('fade-in-up');
    }, 500);
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Console message for developers
console.log(`
🚀 Welcome to Ayush Kumar's Portfolio!

Built with:
- Vanilla JavaScript
- CSS3 Animations
- Modern Web APIs
- Responsive Design

Feel free to explore the code!
Contact: ayush@example.com
`);
