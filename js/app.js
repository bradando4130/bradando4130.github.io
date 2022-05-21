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
    technologiesUsed: ["SASS", "HTML", "CSS"],
    githubHref: "https://github.com/bradando4130/techdegree-project-4.",
    liveHref: "https://bradando4130.github.io/Techdegree-project-4./"
  },
  {
    projectName: "Web App Dashboard",
    projectImage: "img/webapp.PNG",
    projectDescription: "This web application uses multiple data visualisations to display detailed user information. Designed to be scalable through different display sizes through use of CSS grid",
    technologiesUsed: ["HTML", "CSS", "SASS", "JavsScript"],
    githubHref: "https://github.com/bradando4130/techdegree-project-7",
    liveHref: "https://bradando4130.github.io/techdegree-project-7/"
  },
  {
    projectName: "Fetch API Employee Directory",
    projectImage: "img/fetch.PNG",
    projectDescription: "Through use of the Fetch API and JavaScript, the project acessed the Random User Generator API to dynamically build an employee employee directory. Employees can be filtered through a search bar and acess extra information through a modal display",
    technologiesUsed: ["JavaScript", "SASS", "HTML", "CSS"],
    githubHref: "https://github.com/bradando4130/techdegree-project-8",
    liveHref: "https://bradando4130.github.io/Techdegree-project-8/"
  },
  {
    projectName: "Game Show App",
    projectImage: "img/wheelofsucess.PNG",
    projectDescription: "Using JavaScript to show a random phrase from a list to the DOM, the player usinng on screen click events ettempts to solve the phrase. Results are dynamically displayed on the screen. Player is allowed five incorrect guessess before game over",
    technologiesUsed: ["JavaScript", "HTML", "CSS"],
    githubHref: "https://github.com/bradando4130/techdegree-project-6",
    liveHref: "https://bradando4130.github.io/Techdegree-project-6/"
  },
  {
    projectName: "Interactive Photo Gallery",
    projectImage: "img/photo-gallery.PNG",
    projectDescription: "Photo gallery project where photos are displayed in grid format. Images can be filtered using pre-allocated tags, photos are displayed in a Lightbox display.",
    technologiesUsed: ["JavaScript", "HTML", "CSS"],
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
