// humburger start

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.header_nav');
const navLinks = document.querySelectorAll('.nav_link');

function toggleMenu() {
   hamburger.classList.toggle('open');
   nav.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);

function closeMenu(event) {
   if (event.target.classList.contains('nav_link')) {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
   }
}

navLinks.forEach((el) => el.addEventListener('click', closeMenu));

// humburger end

