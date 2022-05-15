// Modal popup for more additional project info

// Global variables
let closeModalBtn = document.querySelector(".close-modal");
let modal = document.getElementById("modal");
let moreInfo = document.querySelectorAll(".modal-btn");

// Open modal
moreInfo.forEach(btn => btn.addEventListener("click", () => {
  modal.classList.remove("hidden");
}))

// Close modal
closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// close modal if clicking outside the modal-content

window.onclick = (e) => {
    if (e.target.id === "modal") {
      modal.classList.add("hidden");
    }
}


// declare data to pull from in Object 
let projectData = [
  {
    projectName: "Custom Web Style Guide",
    projectImage: "img/styleguide.PNG",
    projectDescription: "Made using Sass, and modeled after Bootstrap, this style guide is designed to be dropped into projects for quicker webpage styling",
    technologiesUsed: ["SASS, HTML, CSS"],
    githubHref: "https://github.com/bradando4130/techdegree-project-4.",
    liveHref: "https://bradando4130.github.io/Techdegree-project-4./"
  },
  {
    projectName: "Web App Dashboard",
    projectImage: "img/webapp.PNG",
    projectDescription: "This web application uses multiple data visualisations to convey user information. Designed to be scalable through different display sizes through use of CSS grid",
    technologiesUsed: ["HTML, CSS, SASS, JavsScript"],
    githubHref: "https://github.com/bradando4130/techdegree-project-7",
    liveHref: "https://bradando4130.github.io/techdegree-project-7/"
  },
  {
    projectName: "Fetch API Employee Directory",
    projectImage: "img/fetch.PNG",
    projectDescription: "Through use of the Fetch API and JavaScript, random employees are selected from a database and displayed on the page",
    technologiesUsed: ["JavaScript, SASS, HTML, CSS"],
    githubHref: "https://github.com/bradando4130/techdegree-project-8",
    liveHref: "https://bradando4130.github.io/Techdegree-project-8/"
  },
  {
    projectName: "Game Show App",
    projectImage: "img/wheelofsucess.PNG",
    projectDescription: "Using JavaScript to pull a random phrase from a list, the player will then click on letter tiles on the screen to try guess the phrase. results are dynamically displayed on the screen",
    technologiesUsed: ["JavaScript, HTML, CSS"],
    githubHref: "https://github.com/bradando4130/techdegree-project-6",
    liveHref: "https://bradando4130.github.io/Techdegree-project-6/"
  },

]

// Build content for modal

let modalHtml = `
  <div class="modal">
    <div class="modal-content">
      <span class="close-modal">&times</span>
      <h3>Modular Web Style Guide</h3>
      <img class="project-image" src="img/styleguide.PNG" alt="Web Style Guide">
      <p>Made using Sass, and modeled after Bootstrap, this style guide is designed to be dropped into projects for quicker webpage styling</p>
      <ul class="tech-list-modal">
        <li class="tech-list-modal-item">SASS</li>
        <li class="tech-list-modal-item">HTML</li>
        <li class="tech-list-modal-item">CSS</li>
      </ul>
      <div class="project-links">
        <a class="btn-project" href="https://github.com/bradando4130/techdegree-project-4." target="_blank">
          <span>View GitHub Repo</span>
        </a>
        <a class="btn-project" href="https://bradando4130.github.io/Techdegree-project-4./" target="_blank">
          <span>View Page in Action</span>
        </a>
      </div>
    </div>
  </div>
`







