/* -- Modal popup for more additional project info -- */

// Global variables
let closeModalBtn = document.getElementById("close-modal");
const modal = document.getElementById("modal");
const moreInfo = document.querySelectorAll(".modal-btn");
let currentModalInfo;
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const navLink = document.getElementsByClassName("nav-link");

// declare data to pull from in Object
const projectData = [
  {
    projectName: "Web App Dashboard",
    projectImage: "img/webapp1.png",
    projectDescription:
      "This web application uses multiple data visualisations to display detailed user information. Graphs displayed through use of Chart.js plugin, and can be dynamically changed through different datasets. Designed to be scalable through different display sizes through use of CSS grid. Project layout and design was derived and matched to pre allocated mockups.",
    technologiesUsed: ["JavsScript", "SASS", "HTML"],
    technologyImages: {
      image: [
        "img/javascript-svgrepo-com.svg",
        "img/sass-svgrepo-com.svg",
        "img/html5-svgrepo-com.svg",
      ],
      alt: ["JavaScript SVG", "Sass SVG", "HTML SVG"],
    },
    githubHref: "https://github.com/bradando4130/techdegree-project-7",
    liveHref: "https://bradando4130.github.io/techdegree-project-7/",
  },
  {
    projectName: "Awesome Employee Startup API App",
    projectImage: "img/apiapp.png",
    projectDescription:
      "App for a fictional startup compant to view employee contact details. Built with JavaScript, this app will fetch random employee data from Random User Generator API and display to page. Employees can be filtered by name via a search bar input. Employees can also be clicked on for a modal popup to display extra information, from this modal they can be toggled between using click buttons and keyboard arrow input.",
    technologiesUsed: ["JavaScript", "CSS", "HTML"],
    technologyImages: {
      image: [
        "img/javascript-svgrepo-com.svg",
        "img/css3-svgrepo-com.svg",
        "img/html5-svgrepo-com.svg",
      ],
      alt: ["JavaScript SVG", "CSS SVG", "HTML SVG"],
    },
    githubHref: "https://github.com/bradando4130/awesome-startup-api-app",
    liveHref: "https://bradando4130.github.io/awesome-startup-api-app/",
  },
  {
    projectName: "OOP Game Show App",
    projectImage: "img/phrasehunter.png",
    projectDescription:
      "Using Object Oriented JavaScript to show a random phrase from a list to the DOM, the player using on screen click events attempts to solve the phrase. Results are dynamically displayed on the screen. Player is allowed five incorrect guesses before game over.",
    technologiesUsed: ["JavaScript", "CSS", "HTML"],
    technologyImages: {
      image: [
        "img/javascript-svgrepo-com.svg",
        "img/css3-svgrepo-com.svg",
        "img/html5-svgrepo-com.svg",
      ],
      alt: ["JavaScript SVG", "CSS SVG", "HTML SVG"],
    },
    githubHref: "https://github.com/bradando4130/OOP-Game-Show-App",
    liveHref: "https://bradando4130.github.io/OOP-Game-Show-App/",
  },
  {
    projectName: "Interactive Form Validation",
    projectImage: "img/formvalidation.png",
    projectDescription:
      "Custom interactive JavaScript form validation for a fictional event sign-up page. Regular Expressions used to validate certain fields, along with enabling of sub fields based on selections of main fields. Featuring helpful conditional error messages on invalid submits, along with disabling of events if time schedule conflicts arise.",
    technologiesUsed: ["JavaScript", "CSS", "HTML"],
    technologyImages: {
      image: [
        "img/javascript-svgrepo-com.svg",
        "img/css3-svgrepo-com.svg",
        "img/html5-svgrepo-com.svg",
      ],
      alt: ["JavaScript SVG", "CSS SVG", "HTML SVG"],
    },
    githubHref: "https://github.com/bradando4130/Interactive-Form-Validation",
    liveHref: "https://bradando4130.github.io/Interactive-Form-Validation/",
  },
];
// close modal if clicking outside the modal-content

window.onclick = (e) => {
  if (e.target.id === "modal") {
    modal.classList.add("hidden");
  }
};

// Open modal and gather project title from page - run getProject()
moreInfo.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    modal.classList.remove("hidden");
    let currentProject =
      e.target.closest(".card-text").firstElementChild.innerHTML;
    getProject(currentProject);
  })
);

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
  const name = currentModalInfo.projectName;
  const img = currentModalInfo.projectImage;
  const desc = currentModalInfo.projectDescription;
  const tech = currentModalInfo.technologiesUsed;
  const techImage = currentModalInfo.technologyImages;
  const repo = currentModalInfo.githubHref;
  const live = currentModalInfo.liveHref;

  let modalHTML = "";

  modalHTML += `
          <div class="modal-content">
            <span id="close-modal" class="close-modal">&times</span>
            <h3>${name}</h3>
            <img class="project-image" src="${img}">
            <p>${desc}</p>
            <ul class="tech-list-modal">
              <li class="tech-list-modal-item">
                <img class="modal-tech-image" src='${techImage.image[0]}' alt='${techImage.alt[0]}'>
                <p>${tech[0]}</p>
              </li>
              <li class="tech-list-modal-item">
                <img class="modal-tech-image" src='${techImage.image[1]}' alt='${techImage.alt[1]}'>
                <p>${tech[1]}</p>
              </li>
              <li class="tech-list-modal-item">
                <img class="modal-tech-image" src='${techImage.image[2]}' alt='${techImage.alt[2]}'>
                <p>${tech[2]}</p>
              </li>
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
        `;

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
  hamburger.classList.toggle("change");
  navList.classList.toggle("hidden");
});

// hide hamburger nav when clicked through a link
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    navList.classList.toggle("hidden");
    hamburger.classList.toggle("change");
  });
}

// onresize to remove class="hidden" from nav
window.addEventListener("resize", () => {
  if (window.innerWidth >= 700) {
    navList.classList.remove("hidden");
  } else {
    navList.classList.add("hidden");
  }
});

/* Form Validation */
// re-used variables
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let messageInput = document.getElementById("message");
let myForm = document.getElementById("myForm");

// clear inputs on page reload
window.onunload = function () {
  nameInput.value = "";
  messageInput.value = "";
  emailInput.value = "";
};

// custom submit - running validations -  and prevent submit on fail
myForm.addEventListener("submit", function (e) {
  // validate form inputs
  let isUsernameValid = checkName(),
    isEmailValid = checkEmail(),
    isMessageValid = checkMessage();

  // check if all valid
  let isFormValid = isUsernameValid && isEmailValid && isMessageValid;

  // submit if all inputs valid
  if (isFormValid) {
  } else {
    // prevent submit
    e.preventDefault();
  }
});

// check if email valid using regular expression
const validateEmail = (email) => {
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// function to validate if field is empty
const isEmpty = (value) => (value === "" ? true : false);

// function to validate if value is between two lengths
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

// show error function to highlight input red and display error message
const showError = (input, message) => {
  const formPair = input.parentElement;
  // add error class and remove sucess
  formPair.classList.remove("input-sucess");
  formPair.classList.add("input-error");
  // display error message to user
  const error = formPair.querySelector("small");
  error.textContent = message;
};

// show sucess function to highlight input green
const showSuccess = (input) => {
  const formPair = input.parentElement;
  // remove error class and add sucess
  formPair.classList.remove("input-error");
  formPair.classList.add("input-sucess");
  // hide error message
  const error = formPair.querySelector("small");
  error.textContent = "";
};

// function to check if username is valid
const checkName = () => {
  // default false
  let valid = false;
  const min = 3,
    max = 25;
  const userNameTrim = nameInput.value.trim();

  // if username is blank
  if (isEmpty(userNameTrim)) {
    showError(nameInput, "Username cannot be empty.");
    // if username is bwtween desired length
  } else if (!isBetween(userNameTrim.length, min, max)) {
    showError(
      nameInput,
      `Username must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(nameInput);
    valid = true;
  }
  return valid;
};

// function to check email is valid
const checkEmail = () => {
  // default false
  let valid = false;
  const emailTrim = emailInput.value.trim();

  if (isEmpty(emailTrim)) {
    showError(emailInput, "Email cannot be empty.");
  } else if (!validateEmail(emailTrim)) {
    showError(emailInput, "Email is not valid.");
  } else {
    showSuccess(emailInput);
    valid = true;
  }
  return valid;
};

// function to check is message valid
const checkMessage = () => {
  // default false
  let valid = false;
  const messageTrim = messageInput.value.trim();

  // if message blank return invalid
  if (isEmpty(messageTrim)) {
    showError(messageInput, "Please leave a message.");
  } else {
    showSuccess(messageInput);
    valid = true;
  }
  return valid;
};

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
      fn.apply(null, args);
    }, delay);
  };
};

// instant feedback event listener on form
myForm.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "name":
        checkName();
        break;
      case "email":
        checkEmail();
        break;
      case "message":
        checkMessage();
        break;
    }
  })
);

// Hero shadow effect - full credit to WesBos and his JavaScript 30 course
// for not only teaching me this method, but instilling the importance of
// repetition for this never ending learning journey of software delevlopment
// I will continue down

const hero = document.querySelector(".header");
const text = document.querySelector("h1");
const walk = 12; // 100px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 #757575`;
}

hero.addEventListener("mousemove", shadow);

// hide and show Nav on scroll
const nav = document.querySelector(".nav");

let oldOffset = 0;
let newOffset = 0;
window.addEventListener("scroll", (e) => {
  newOffset = window.pageYOffset;
  if (oldOffset < newOffset) {
    nav.classList.add("nav-hide");
  } else {
    nav.classList.remove("nav-hide");
  }
  oldOffset = newOffset;
});
