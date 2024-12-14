document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector('.mobile-menu-toggle');

  const mobileMenu = document.querySelector('.mobile-menu-items');

  toggleButton.addEventListener('click', (e) => {
    mobileMenu.classList.toggle('active');
  })
})
