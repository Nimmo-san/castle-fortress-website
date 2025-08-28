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


fetch('/testimonials.json')
  .then(res => res.json())
  .then(testimonials => {
    const wrapper = document.getElementById('testimonials-wrapper');
    wrapper.innerHTML = testimonials.map(t => `
    <div class="swiper-slide testimonials-item">
          <div class="info">
            <div class="text-box">
              <h3 class="name">${t.name}</h3>
            </div>
          </div>
          <div class="rating">
            ${'<i class="fa fa-star"></i>'.repeat(t.rating)}
          </div>
          <p>"${t.text}"</p>
        </div>
    `).join('');

    // testimonial pagination
    const swiper = new Swiper(".js-testiomonials-slider", {
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      spaceBetween: 30,
      slidesPerView: 1.05,
      pagination: {
        el: ".js-testiomonials-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1.05,
          spaceBetween: 28
        },
        992: {
          slidesPerView: 1.6,
          spaceBetween: 32 
        },
        1280: {
          slidesPerView: 2.2,
          spaceBetween: 36
        }
      },
    });
  })
  .catch(err => console.error('Error loading testimonials:', err));