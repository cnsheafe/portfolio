const aboutLink = document.getElementById("link-about");
const projectsLink = document.getElementById("link-projects");
const contactLink = document.getElementById("link-contact");

const nav = document.getElementsByTagName("NAV")[0];
const navBar = document.getElementById("links");

window.addEventListener("scroll", event => {
    if(window.scrollY >= window.innerHeight) {
        nav.classList.add("nav-fixed");
        navBar.classList.remove("navbar");
        navBar.classList.add("navbar-fixed");

        navBar.querySelectorAll("i").forEach(icons => {
            icons.classList.add("hide");
        });
        navBar.querySelector("img").classList.add("hide");
    }
})