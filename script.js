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



// Select form elements
const firstnameEl = document.querySelector('input[name="first_name"]');
const lastnameEl = document.querySelector('input[name="last_name"]');
const emailEl = document.querySelector('input[name="email"]');
const messageEl = document.querySelector('textarea[name="message"]');
const submitErrorEl = document.querySelector('#submit-error');
const form = document.querySelector('#contact-form');

// Load data from local storage and pre-fill the form
document.addEventListener('DOMContentLoaded', (event) => {
  const formData = JSON.parse(localStorage.getItem('contactFormData'));
  if (formData) {
    // Pre-fill form fields with data from local storage
    firstnameEl.value = formData.first_name || '';
    lastnameEl.value = formData.last_name || '';
    emailEl.value = formData.email || '';
    messageEl.value = formData.message || '';
  }
});

// Function to save form data to local storage
const saveFormData = () => {
  // Create an object with form data
  const formData = {
    first_name: firstnameEl.value.trim(),
    last_name: lastnameEl.value.trim(),
    email: emailEl.value.trim(),
    message: messageEl.value.trim(),
  };
  // Save the object to local storage
  localStorage.setItem('contactFormData', JSON.stringify(formData));
};

// Add input event listeners to save data on change
firstnameEl.addEventListener('input', saveFormData);
lastnameEl.addEventListener('input', saveFormData);
emailEl.addEventListener('input', saveFormData);
messageEl.addEventListener('input', saveFormData);

// Validation functions
const isRequired = value => value !== ''; // Check if value is not empty
const isBetween = (length, min, max) => length >= min && length <= max; // Check if length is within range
const isEmailValid = (email) => {
  // Regular expression to validate email format
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// Function to show error message
const showError = (input, message) => {
  const formGroup = input.parentElement;
  formGroup.classList.remove('success');
  formGroup.classList.add('error');
  const error = formGroup.querySelector('.error-message');
  error.textContent = message;
  error.style.display = 'block';
};

// Function to show success state
const showSuccess = (input) => {
  const formGroup = input.parentElement;
  formGroup.classList.remove('error');
  formGroup.classList.add('success');
  const error = formGroup.querySelector('.error-message');
  error.textContent = '';
  error.style.display = 'none';
};

// Validation function for first name
const checkFirstname = () => {
  let valid = false;
  const min = 3, max = 30;
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
};

// Validation function for last name
const checkLastname = () => {
  let valid = false;
  const min = 3, max = 30;
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
};

// Validation function for email
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
};

// Validation function for message
const checkComment = () => {
  let valid = false;
  const min = 3, max = 500;
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
};

// Function to clear form data
const clearFormData = () => {
  // Clear input fields
  firstnameEl.value = '';
  lastnameEl.value = '';
  emailEl.value = '';
  messageEl.value = '';
  // Clear local storage
  localStorage.removeItem('contactFormData');
};

// Form submit event listener
form.addEventListener('submit', function (e) {
  // Prevent the form from submitting
  e.preventDefault();

  // Validate form fields
  let isFirstnameValid = checkFirstname(),
      isLastnameValid = checkLastname(),
      isEmailValid = checkEmail(),
      isCommentValid = checkComment();

  // Check overall form validity
  let isFormValid = isFirstnameValid &&
      isLastnameValid &&
      isEmailValid &&
      isCommentValid;

  // Ensure email is in lower case
  const email = emailEl.value.trim();
  const isEmailLowerCase = email === email.toLowerCase();

  if (!isEmailLowerCase) {
    submitErrorEl.textContent = 'Email must be in lower case.';
    submitErrorEl.style.display = 'block';
    isFormValid = false;
  } else {
    submitErrorEl.textContent = '';
    submitErrorEl.style.display = 'none';
  }

  // Submit form if valid
  if (isFormValid) {
    // Submit form via AJAX
    fetch(form.action, {
      method: form.method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: firstnameEl.value.trim(),
        last_name: lastnameEl.value.trim(),
        email: emailEl.value.trim(),
        message: messageEl.value.trim()
      })
    }).then(response => {
      if (response.ok) {
        // Clear form data on successful submission
        clearFormData();
        // Redirect to success page or show success message
        window.location.href = '/success.html'; // Replace with your success page URL
      } else {
        response.json().then(data => {
          submitErrorEl.textContent = data.error || 'There was an error submitting the form.';
          submitErrorEl.style.display = 'block';
        });
      }
    }).catch(error => {
      submitErrorEl.textContent = 'There was an error submitting the form.';
      submitErrorEl.style.display = 'block';
    });
  }
});

