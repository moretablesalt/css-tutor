document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector('.mobile-menu-toggle');

  const mobileMenu = document.querySelector('.mobile-menu-items');

  toggleButton.addEventListener('click', (e) => {
    mobileMenu.classList.toggle('active');
  })
})

// change navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
})
