let homeLink = document.getElementById("link-home");
let contactLink = document.getElementById("link-contact");
let homePage = document.getElementById("home");
let projectSection = document.getElementById("projects");
let contactPage = document.getElementById("contact");


contactLink.addEventListener("click", event => {
    event.preventDefault();
    contactPage.classList.remove("hide");

    projectSection.classList.add("hide");
    homePage.classList.add("hide");
});

homeLink.addEventListener("click", event => {
    event.preventDefault();
    homePage.classList.remove("hide");
    projectSection.classList.remove("hide");

    contactPage.classList.add("hide");
});