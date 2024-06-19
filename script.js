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
    longTitle: 'Keeping tracks of hundreds of components websites',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    imgSrc: './images/Snapshoot Portfolio.png',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'Multi-Post Services',
    longTitle: 'Keeping tracks of hundreds of components websites',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    imgSrc: './images/Snapshoot Portfolio.png',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'Multi-Post Services',
    longTitle: 'Keeping tracks of hundreds of components websites',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    imgSrc: './images/Snapshoot Portfolio.png',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'Multi-Post Services',
    longTitle: 'Keeping tracks of hundreds of components websites',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    imgSrc: './images/Snapshoot Portfolio.png',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'Multi-Post Services',
    longTitle: 'Keeping tracks of hundreds of components websites',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    imgSrc: './images/Snapshoot Portfolio.png',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'Multi-Post Services',
    longTitle: 'Keeping tracks of hundreds of components websites',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    imgSrc: './images/Snapshoot Portfolio.png',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'Multi-Post Services',
    longTitle: 'Keeping tracks of hundreds of components websites',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    imgSrc: './images/Snapshoot Portfolio.png',
    liveLink: '#',
    sourceLink: '#'
  },
];

function open_popup(id) {
  const project = projects[id - 0]; // id is 1-based index, so adjust to 0-based
  const isWideScreen = window.matchMedia("(min-width: 820px)").matches;

  document.getElementById('popup-title').innerText = isWideScreen ? project.longTitle : project.title;
  document.getElementById('popup-description').innerText = isWideScreen ? project.longDescription : project.description;

  document.getElementById('popup-image').src = project.imgSrc;
  document.getElementById('popup-live-link').href = project.liveLink;
  document.getElementById('popup-source-link').href = project.sourceLink;
  document.getElementById('modal-popup').style.display = 'block';  
}

//At the click of the window, the popup closes
let modal = document.getElementById('modal-popup');
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

//At the click of the close, the popup closes
document.getElementById('close-btn').onclick = function() {
  modal.style.display = 'none';
};

// Event listeners to prevent default behavior of anchor tags
document.querySelectorAll('.project-box a').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
  });
});
