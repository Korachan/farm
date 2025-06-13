document.addEventListener('DOMContentLoaded', function() {

    // Hamburger Menu Toggle
    const hamburger = document.getElementById('js-hamburger');
    const drawer = document.getElementById('js-drawer');
    
    if (hamburger && drawer) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('open');
            drawer.classList.toggle('open');
        });
    }

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const href = this.getAttribute('href');
            const targetElement = document.querySelector(href);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade-in animation on scroll
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

});