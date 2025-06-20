// Toggle a class on any element
const toggleClass = (el, className) => el.classList.toggle(className);
const removeClass = (el, className) => el.classList.remove(className);

// Lazy-load hero background image
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector('.hero.lazy-bg');
    const bg = hero?.getAttribute('data-bg');

    if (bg) {
        const img = new Image();
        img.src = bg;
        img.onload = () => {
            hero.style.backgroundImage = `url('${bg}')`;
            hero.classList.remove('lazy-bg');
        };
    }
});


// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksA = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    toggleClass(hamburger, 'active')
    toggleClass(navLinks, 'show')
});

// Close menu on nav link click
navLinksA.forEach(link =>
    link.addEventListener('click', () => {
        removeClass(navLinks, 'show');
        removeClass(hamburger, 'active');
    })
);