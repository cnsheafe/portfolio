let homeLink = document.getElementById("link-home");
let projectLink = document.getElementById("link-projects");
let contactLink = document.getElementById("link-contact");
let homePage = document.getElementById("home");
let projectsPage = document.getElementById("projects");
let contactPage = document.getElementById("contact");

projectLink.addEventListener("click", event => {
    event.preventDefault();
    projectsPage.classList.remove("hide");
    homePage.classList.add("hide");
    contactPage.classList.add("hide");
});

contactLink.addEventListener("click", event => {
    event.preventDefault();
    contactPage.classList.remove("hide");
    projectsPage.classList.add("hide");
    homePage.classList.add("hide");
});

homeLink.addEventListener("click", event => {
    event.preventDefault();
    homePage.classList.remove("hide");
    contactPage.classList.add("hide");
    projectsPage.classList.add("hide");
});