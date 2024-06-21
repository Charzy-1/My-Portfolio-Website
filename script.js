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
    imgSrc: './images/Img Placeholder (1).png',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'PROFESSIONAL ART PRINTING DATA',
    longTitle: 'PROFESSIONAL ART PRINTING DATA',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    imgSrc: './images/images2copy.jpg',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'PROFESSIONAL ART PRINTING DATA',
    longTitle: 'PROFESSIONAL ART PRINTING DATA',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    imgSrc: './images/image5copy.jpg',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'PROFESSIONAL ART PRINTING DATA',
    longTitle: 'PROFESSIONAL ART PRINTING DATA',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    imgSrc: './images/image3copy.jpg',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'PROFESSIONAL ART PRINTING DATA',
    longTitle: 'PROFESSIONAL ART PRINTING DATA',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    imgSrc: './images/image3copy.jpg',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'PROFESSIONAL ART PRINTING DATA',
    longTitle: 'PROFESSIONAL ART PRINTING DATA',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    imgSrc: './images/images4copy.jpg',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'PROFESSIONAL ART PRINTING DATA',
    longTitle: 'PROFESSIONAL ART PRINTING DATA',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    imgSrc: './images/image5copy.jpg',
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

// use the document.querySelector() method to select the input fields and the form:
const firstnameEl = document.querySelector('input[name="first_name"]');
const lastnameEl = document.querySelector('input[name="last_name"]');
const emailEl = document.querySelector('input[name="email"]');
const messageEl = document.querySelector('textarea[name="message"]');
const submitErrorEl = document.querySelector('#submit-error');

const form = document.querySelector('#contact-form');

// The isRequired() function below returns true if the input argument is empty:
const isRequired = value => value === '' ? false : true;

// The isBetween() function below returns false if the length argument is not between the min and max argument:
const isBetween = (length, min, max) => length < min || length > max ? false : true;

// To check if the email is valid we use regular expression written below
const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// The following showError() function below highlights the border of the input field and displays an error message if the input field is invalid:
const showError = (input, message) => {
  // get the form-group element
  const formGroup = input.parentElement;
  // add the error class
  formGroup.classList.remove('success');
  formGroup.classList.add('error');

  // show the error message
  let error = formGroup.querySelector('small');
  if (!error) {
    error = document.createElement('small');
    error.className = 'error-message';
    formGroup.appendChild(error);
  }
  error.textContent = message;
};

// A similar function created below to handle the show success message
const showSuccess = (input) => {
  // get the form-field element
  const formGroup = input.parentElement;

  // remove the error class
  formGroup.classList.remove('error');
  formGroup.classList.add('success');

  // hide the error message
  const error = formGroup.querySelector('small');
  if (error) {
    error.textContent = '';
  }
}

// Four input field validating functions below

// 1. Firstname validation function below
const checkFirstname = () => {
  let valid = false;
  const min = 3,
      max = 30;
  const firstname = firstnameEl.value.trim();

  if (!isRequired(firstname)) {
      showError(firstnameEl, 'Firstname cannot be blank.');
  } else if (!isBetween(firstname.length, min, max)) {
      showError(firstnameEl, `Firstname must be between ${min} and ${max} characters.`);
  } else {
      showSuccess(firstnameEl);
      valid = true;
  }
  return valid;
}

// 2. Lastname validation function below
const checkLastname = () => {
  let valid = false;
  const min = 3,
      max = 30;
  const lastname = lastnameEl.value.trim();

  if (!isRequired(lastname)) {
      showError(lastnameEl, 'Lastname cannot be blank.');
  } else if (!isBetween(lastname.length, min, max)) {
      showError(lastnameEl, `Lastname must be between ${min} and ${max} characters.`);
  } else {
      showSuccess(lastnameEl);
      valid = true;
  }
  return valid;
}

// 3. Email validation function below
const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
      showError(emailEl, 'Email cannot be blank.');
  } else if (!isEmailValid(email)) {
      showError(emailEl, 'Email is not valid.');
  } else {
      showSuccess(emailEl);
      valid = true;
  }
  return valid;
}

// 4. Comment box validation function below
const checkComment = () => {
  let valid = false;
  const min = 3,
      max = 500;
  const message = messageEl.value.trim();

  if (!isRequired(message)) {
      showError(messageEl, 'Message cannot be blank.');
  } else if (!isBetween(message.length, min, max)) {
      showError(messageEl, `Message must be between ${min} and ${max} characters.`);
  } else {
      showSuccess(messageEl);
      valid = true;
  }
  return valid;
}

// Modifying the submit event handler

form.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();

  // validate forms
  let isFirstnameValid = checkFirstname(),
      isLastnameValid = checkLastname(),
      isEmailValid = checkEmail(),
      isCommentValid = checkComment();

  let isFormValid = isFirstnameValid &&
      isLastnameValid &&
      isEmailValid &&
      isCommentValid;

  // check if the email is in lower case
  const email = emailEl.value.trim();
  const isEmailLowerCase = email === email.toLowerCase();

  if (!isEmailLowerCase) {
    submitErrorEl.textContent = 'Email must be in lower case.';
    isFormValid = false;
  } else {
    submitErrorEl.textContent = '';
  }

  // submit to the server if the form is valid
  if (isFormValid) {
    form.submit();
  }
});
