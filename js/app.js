/* -- Modal popup for more additional project info -- */

// Global variables
let closeModalBtn = document.getElementById("close-modal");
let modal = document.getElementById("modal");
let moreInfo = document.querySelectorAll(".modal-btn");
let currentModalInfo;
let hamburger = document.getElementById("hamburger");
let navList = document.getElementById("nav-list");
let navLink = document.getElementsByClassName("nav-link");

// declare data to pull from in Object 
let projectData = [
  {
    projectName: "Modular Web Style Guide",
    projectImage: "img/styleguide.PNG",
    projectDescription: "Made using Sass, and modeled after Bootstrap, this style guide is designed to be dropped into projects for quicker and modular webpage styling",
    technologiesUsed: ["SASS", "CSS", "HTML"],
    githubHref: "https://github.com/bradando4130/techdegree-project-4.",
    liveHref: "https://bradando4130.github.io/Techdegree-project-4./"
  },
  {
    projectName: "Web App Dashboard",
    projectImage: "img/webapp.PNG",
    projectDescription: "This web application uses multiple data visualisations to display detailed user information. Designed to be scalable through different display sizes through use of CSS grid",
    technologiesUsed: ["JavsScript", "SASS", "HTML", "CSS", ],
    githubHref: "https://github.com/bradando4130/techdegree-project-7",
    liveHref: "https://bradando4130.github.io/techdegree-project-7/"
  },
  {
    projectName: "Fetch API Employee Directory",
    projectImage: "img/fetch.PNG",
    projectDescription: "Through use of the Fetch API and JavaScript, the project acesses the Random User Generator API to dynamically build an employee employee directory. Employees can be filtered through a search bar and acess extra information through a modal display",
    technologiesUsed: ["JavaScript", "SASS", "CSS", "HTML"],
    githubHref: "https://github.com/bradando4130/techdegree-project-8",
    liveHref: "https://bradando4130.github.io/Techdegree-project-8/"
  },
  {
    projectName: "Game Show App",
    projectImage: "img/wheelofsucess.PNG",
    projectDescription: "Using JavaScript to show a random phrase from a list to the DOM, the player using on screen click events attempts to solve the phrase. Results are dynamically displayed on the screen. Player is allowed five incorrect guesses before game over",
    technologiesUsed: ["JavaScript", "CSS", "HTML"],
    githubHref: "https://github.com/bradando4130/techdegree-project-6",
    liveHref: "https://bradando4130.github.io/Techdegree-project-6/"
  },
  {
    projectName: "Interactive Photo Gallery",
    projectImage: "img/photo-gallery.PNG",
    projectDescription: "Photo gallery project where photos are displayed in grid format. Images can be filtered using pre-allocated tags, photos are displayed in a Lightbox display.",
    technologiesUsed: ["JavaScript", "CSS", "HTML"],
    githubHref: "https://github.com/bradando4130/techdegree-project-5",
    liveHref: "https://bradando4130.github.io/techdegree-project-5/"
  }
]
// close modal if clicking outside the modal-content

window.onclick = (e) => {
    if (e.target.id === "modal") {
      modal.classList.add("hidden");
    }
}


// Open modal and gather project title from page - run getProject()
moreInfo.forEach(btn => btn.addEventListener("click", (e) => {
  modal.classList.remove("hidden");
  let currentProject = e.target.closest('.card-text').firstElementChild.innerHTML;
  getProject(currentProject);
}))


// run function to take current clicked modal heading, cross check with stored projectData
function getProject(currentProject) {
  for (let i = 0; i < projectData.length; i++) {
    if (currentProject === projectData[i].projectName) {
      currentModalInfo = projectData[i];
      buildModal(currentModalInfo);
    } 
  }
}

// function to build modal from data in currentModalInfo vairable
function buildModal(currentModalInfo) {
  // conccatenate currentModalInfo values into template literal
  let name = currentModalInfo.projectName;
  let img = currentModalInfo.projectImage;
  let desc = currentModalInfo.projectDescription;
  let tech = currentModalInfo.technologiesUsed;
  let repo = currentModalInfo.githubHref;
  let live = currentModalInfo.liveHref;

  let modalHTML = '';

  modalHTML += `
          <div class="modal-content">
            <span id="close-modal" class="close-modal">&times</span>
            <h3>${name}</h3>
            <img class="project-image" src="${img}">
            <p>${desc}</p>
            <ul class="tech-list-modal">
              <li class="tech-list-modal-item">${tech[0]}</li>
              <li class="tech-list-modal-item">${tech[1]}</li>
              <li class="tech-list-modal-item">${tech[2]}</li>
            </ul>
            <div class="project-links">
              <a class="btn-project" href="${repo}" target="_blank">
                <span>View GitHub Repo</span>
              </a>
              <a class="btn-project" href="${live}" target="_blank">
                <span>View Page in Action</span>
              </a>
            </div>
          </div>
        </div>
        `

        modal.innerHTML = modalHTML;

        // reset closeModal Btn
        closeModalBtn = document.getElementById("close-modal");
        
        // Close modal when click on x
        closeModalBtn.addEventListener("click", () => {
          modal.classList.add("hidden");
        });
        }


/* Nav functionality */
// hamburger nav function to toggle to cross and display nav menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle('change');
  navList.classList.toggle('hidden');
})

// hide hamburger nav when clicked through a link
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    navList.classList.toggle("hidden");
    hamburger.classList.toggle('change');
  })
} 

// onresize to remove class="hidden" from nav
window.addEventListener('resize', () => {
  if (window.innerWidth >= 700) {
    navList.classList.remove('hidden');
  } else {
    navList.classList.add('hidden');
  }
})


/* Form Validation */
// re-used variables
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let messageInput = document.getElementById('message');
let myForm = document.getElementById('myForm');

// clear inputs on page reload
window.onunload = function () {
	nameInput.value = '';
  messageInput.value = '';
  emailInput.value = '';
}

// custom submit - running validations -  and prevent submit on fail
myForm.addEventListener('submit', function (e) {

  // validate form inputs
  let isUsernameValid = checkName(),
      isEmailValid = checkEmail(),
      isMessageValid = checkMessage();

  // check if all valid
  let isFormValid = isUsernameValid &&
      isEmailValid &&
      isMessageValid;

  // submit if all inputs valid
  if (isFormValid) {
    
  } else {
    // prevent submit
    e.preventDefault();
  }
});

// check if email valid using regular expression
const validateEmail = (email) => { 
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// function to validate if field is empty
const isEmpty = value => value === '' ? true : false;

// function to validate if value is between two lengths
const isBetween = (length, min, max) => length < min || length > max ? false : true;

// show error function to highlight input red and display error message
const showError = (input, message) => {
  const formPair = input.parentElement;
  // add error class and remove sucess
  formPair.classList.remove('input-sucess');
  formPair.classList.add('input-error');
  // display error message to user
  const error = formPair.querySelector('small');
  error.textContent = message;
};

// show sucess function to highlight input green
const showSuccess = (input) => {
  const formPair = input.parentElement;
  // remove error class and add sucess
  formPair.classList.remove('input-error');
  formPair.classList.add('input-sucess');
  // hide error message
  const error = formPair.querySelector('small');
  error.textContent = '';
}

// function to check if username is valid
const checkName = () => {

  // default false
  let valid = false;
  const min = 3,
        max = 25;
  const userNameTrim = nameInput.value.trim();

  // if username is blank
  if (isEmpty(userNameTrim)) {
    showError(nameInput, 'Username cannot be empty.');
  // if username is bwtween desired length  
  } else if (!isBetween(userNameTrim.length, min, max)) {
    showError(nameInput, `Username must be between ${min} and ${max} characters.`)
  } else {
    showSuccess(nameInput);
    valid = true;
  }
  return valid;
}

// function to check email is valid
const checkEmail = () => {
  
  // default false
  let valid = false;
  const emailTrim = emailInput.value.trim();

  if (isEmpty(emailTrim)) {
    showError(emailInput, 'Email cannot be empty.')
  } else if (!validateEmail(emailTrim)) {
    showError(emailInput, 'Email is not valid.')
  } else {
    showSuccess(emailInput);
    valid = true;
  }
  return valid;
}

// function to check is message valid
const checkMessage = () => {

  // default false
  let valid = false;
  const messageTrim = messageInput.value.trim();
  
  // if message blank return invalid
  if (isEmpty(messageTrim)) {
    showError(messageInput, 'Please leave a message.')
  } else {
    showSuccess(messageInput)
    valid = true;
  }
  return valid;
}

// debounce function for ~0.5s delay on form validation check
const debounce = (fn, delay = 800) => {
  let timeoutId;
  return (...args) => {
    // cancel the previous timer
    if (timeoutId) {
      clearTimeout(timer);
    }
    // set new timer
    timer = setTimeout(() => {
      fn.apply(null, args) 
    }, delay);
  };
};

// instant feedback event listener on form
myForm.addEventListener('input', debounce(function (e) {
  switch (e.target.id) {
    case 'name': 
      checkName();
      break;
    case 'email':
      checkEmail();
      break;
    case 'message':
      checkMessage();
      break;
  }
}));



