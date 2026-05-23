// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500); // 1.5s fake loading time
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    if(navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            
            // Trigger progress bar animation if in view
            if(reveals[i].classList.contains('goal-wrapper')) {
                const fill = reveals[i].querySelector('.progress-fill');
                const targetWidth = fill.getAttribute('data-progress');
                fill.style.width = targetWidth;
            }
        }
    }
}
window.addEventListener("scroll", reveal);
reveal(); // Trigger on initial load

// Copy to Clipboard Function
function copyToClipboard(elementId) {
    const copyText = document.getElementById(elementId);
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    
    navigator.clipboard.writeText(copyText.value).then(() => {
        // Find the button and show feedback
        const btn = copyText.nextElementSibling;
        const icon = btn.querySelector('i');
        
        icon.classList.remove('fa-copy', 'far');
        icon.classList.add('fa-check', 'fas');
        
        setTimeout(() => {
            icon.classList.remove('fa-check', 'fas');
            icon.classList.add('fa-copy', 'far');
        }, 2000);
    });
}

// Particle generation (Simple floaters)
const particlesContainer = document.getElementById('particles');

function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 4 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = 'rgba(0, 255, 136, 0.3)';
    particle.style.borderRadius = '50%';
    
    // Random position
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    
    // Random animation
    const duration = Math.random() * 20 + 10;
    particle.animate([
        { transform: 'translateY(0)', opacity: 0 },
        { opacity: 1, offset: 0.5 },
        { transform: `translateY(-${Math.random() * 200 + 100}px)`, opacity: 0 }
    ], {
        duration: duration * 1000,
        iterations: Infinity,
        easing: 'linear'
    });
    
    particlesContainer.appendChild(particle);
}

// Create 50 particles
for(let i = 0; i < 50; i++) {
    createParticle();
}