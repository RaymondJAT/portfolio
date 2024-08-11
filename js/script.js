const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 60);

  const logo = document.querySelector(".logo");
  const defaultSrc = "/portfolio/assets/myLogo.png";
  const scrollSrc = "/portfolio/assets/myLogo1.png";

  if (window.scrollY > 60) {
    logo.src = scrollSrc;
  } else {
    logo.src = defaultSrc;
  }
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

// Close the sidebar when a link is clicked
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
  });
});
