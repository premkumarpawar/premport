// ===== Mobile Menu Toggle =====
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navbar ul');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // toggles menu visibility
        menuToggle.classList.toggle('active'); // optional animation for toggle button
    });
}

// ===== Smooth Scroll =====
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        // Close menu on mobile after click
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

// ===== Typing Animation =====
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const textArray = ["Full-Stack Developer", "Web Designer", "Java Developer", "Tech Enthusiast"];
    let textIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textIndex].length) {
            typingText.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, 500);
        }
    }

    document.addEventListener("DOMContentLoaded", () => setTimeout(type, 1000));
}

// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll('.reveal');
window.addEventListener('scroll', reveal);

function reveal() {
    for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealElements[i].classList.add('active');
        } else {
            revealElements[i].classList.remove('active');
        }
    }
}

// ===== Contact Form (Send Email via mailto) =====
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.querySelector('#name') ? document.querySelector('#name').value.trim() : 'Anonymous';
        const email = document.querySelector('input[name="email"]').value.trim();
        const message = document.querySelector('textarea[name="message"]').value.trim();

        if (email === "" || message === "") {
            alert("Please fill out all required fields.");
            return;
        }

        window.location.href = `mailto:prempawar45p@gmail.com?subject=Message from ${name}&body=${message}%0A%0AFrom: ${email}`;
        contactForm.reset();
    });
}
