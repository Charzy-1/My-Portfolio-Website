const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navmenu.classList.toggle('active');
});

document.querySelectorAll('.navLink').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navmenu.classList.remove('active');
}));

document.addEventListener('DOMContentLoaded', () => {
  const seeProjectButton = document.getElementById('see-project');
  const popup = document.getElementById('popup');
  const closePopupButton = document.getElementById('close-popup');

  seeProjectButton.addEventListener('click', () => {
    popup.classList.add('active');
  });

  closePopupButton.addEventListener('click', () => {
    popup.classList.remove('active');
  });

  // Close the popup if the user clicks outside of it
  window.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.classList.remove('active');
    }
  });
});

