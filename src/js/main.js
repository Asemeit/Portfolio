// Import Bootstrap JS
import 'bootstrap';

// Preloader
import Typed from 'typed.js';

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('loaded');
        }, 500);
    }
});

// Mobile Nav Toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', function (e) {
        document.body.classList.toggle('mobile-nav-active');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
    });
}

// Close Mobile Nav on Click
const navLinks = document.querySelectorAll('#navbar .nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (document.body.classList.contains('mobile-nav-active')) {
            document.body.classList.remove('mobile-nav-active');
            mobileNavToggle.classList.toggle('bi-list');
            mobileNavToggle.classList.toggle('bi-x');
        }
    });
});

// Typed.js Effect
const typed = document.querySelector('.typed');
if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

// Active State Helper for Sidebar (Scrollspy alternative if Bootstrap one is tricky with Sidebar)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
        if (section.offsetTop <= scrollPos + 100 && (section.offsetTop + section.offsetHeight) > scrollPos + 100) {
            document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
            document.querySelector('.nav-menu a[href="#' + section.id + '"]')?.classList.add('active');
        }
    });
});

// Dark Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const themeIcon = themeToggleBtn.querySelector('i');

// Check Initial Theme
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.setAttribute('data-bs-theme', 'dark');
    themeIcon.classList.remove('bi-moon-fill');
    themeIcon.classList.add('bi-sun-fill');
} else {
    htmlElement.setAttribute('data-bs-theme', 'light');
}

themeToggleBtn.addEventListener('click', () => {
    if (htmlElement.getAttribute('data-bs-theme') === 'dark') {
        htmlElement.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeIcon.classList.remove('bi-sun-fill');
        themeIcon.classList.add('bi-moon-fill');
    } else {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.remove('bi-moon-fill');
        themeIcon.classList.add('bi-sun-fill');
    }
});
