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


 const projects = [
  {
    title: 'Multi-Post Services',
    description: 'A daily selection of privately personalized reads; no accounts or sign-up required. This has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    imgSrc: './images/Img Placeholder (1).png',
    liveLink: '#',
    sourceLink: '#'
  },
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

function open_popup(id) {
  const project = projects[id - 0]; // id is 1-based index, so adjust to 0-based
  document.getElementById('popup-title').innerText = project.title;
  document.getElementById('popup-description').innerText = project.description;
  document.getElementById('popup-image').src = project.imgSrc;
  document.getElementById('popup-live-link').href = project.liveLink;
  document.getElementById('popup-source-link').href = project.sourceLink;
  document.getElementById('modal-popup').style.display = 'block';  
};

let modal = document.getElementById('modal-popup');

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

document.getElementById('close-btn').onclick = function() {
  modal.style.display = 'none';
};



// document.addEventListener('DOMContentLoaded', () => {
//   const seeProjectButton = document.getElementById('see-project');
//   const popup = document.getElementById('popup');
//   const closePopupButton = document.getElementById('close-popup');

//   seeProjectButton.addEventListener('click', () => {
//     popup.classList.add('active');
//   });

//   closePopupButton.addEventListener('click', () => {
//     popup.classList.remove('active');
//   });

//   // Close the popup if the user clicks outside of it
//   window.addEventListener('click', (event) => {
//     if (event.target === popup) {
//       popup.classList.remove('active');
//     }
//   });
// });
