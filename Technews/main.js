document.querySelector('.menu-btn').addEventListener('click', () => {
   document.querySelector('.nav_menu').classList.toggle('show');
   // console.log('Pulsado');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.showcase', {delay:300});
ScrollReveal().reveal('.news-cards'); 
ScrollReveal().reveal('.news-cards', {delay:300});
ScrollReveal().reveal('.section-cars-banner-two');
ScrollReveal().reveal('.section-cars-banner-two', {delay:300});
