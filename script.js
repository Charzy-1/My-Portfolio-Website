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

document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: 'Ecommerce Web',
      description: 'This is an ecommerce website',
      imgSrc: './images/images2.jpg',
      liveLink: '#',
      sourceLink: '#'
    },
    {
      title: 'Fin. xchange blog',
      description: 'This is for currency trading',
      imgSrc: './images/image5.jpg',
      liveLink: '#',
      sourceLink: '#'
    },
    {
      title: 'Charzy Global Services',
      description: 'My graphics and printing business site',
      imgSrc: './images/image3.jpg',
      liveLink: '#',
      sourceLink: '#'
    },
    {
      title: 'St. Barnabas Catholic Chaplaincy',
      description: 'A Catholic church website in North Cyprus',
      imgSrc: './images/image3.jpg',
      liveLink: '#',
      sourceLink: '#'
    },
    {
      title: 'Charzy Portfolio',
      description: 'This is Charzy\'s portfolio',
      imgSrc: './images/images4.jpg',
      liveLink: '#',
      sourceLink: '#'
    },
    {
      title: 'Blog',
      description: 'This blog allows post to be shared',
      imgSrc: './images/image5.jpg',
      liveLink: '#',
      sourceLink: '#'
    }
  ];

  const projectBoxes = document.querySelectorAll('.project-box');
  const popupContainer = document.getElementById('popup-container');

  projectBoxes.forEach((box, index) => {
    box.querySelector('.hover-effect').addEventListener('click', () => {
      const project = projects[index];

      const popup = document.createElement('div');
      popup.className = 'project-popup active';
      popup.innerHTML = `
              <div class="project-popup-content">
                  <span class="close-btn">&times;</span>
                  <h1 class="popupH1">${project.title}</h1>
                  <div class="paragraphANDimg">
                      <img class="popupImg" src="${project.imgSrc}" alt="Project image">
                      <p id="popup-paragraph">${project.description}</p>
                  </div>
                  <div class="pbuttons">
                      <a href="${project.liveLink}" class="popup-button">See live<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                      <a href="${project.sourceLink}" class="popup-button">See source<i class="fa-brands fa-github"></i></a>
                  </div>
              </div>
          `;

      popup.querySelector('.close-btn').addEventListener('click', () => {
        popup.classList.remove('active');
        setTimeout(() => popupContainer.removeChild(popup), 300); // Wait for animation to finish
      });

// Close the popup if the user clicks outside of it
      window.addEventListener('click', (event) => {
        if (event.target === popup) {
          popup.classList.remove('active');
          setTimeout(() => popupContainer.removeChild(popup), 300); // Wait for animation to finish
        }
      });

      popupContainer.appendChild(popup);
    });
  });
});

