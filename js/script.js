// const header = document.querySelector("header");

// window.addEventListener("scroll", () => {
//   header.classList.toggle("sticky", window.scrollY > 60);
// });

// let menu = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

// menu.onclick = () => {
//   menu.classList.toggle("bx-x");
//   navbar.classList.toggle("open");
// };

// Existing code for sticky header and menu toggle
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 60);

  // New code to change image on scroll
  const logo = document.querySelector(".logo");
  const defaultSrc = "/portfolio/assets/myLogo.png"; // Default image source
  const scrollSrc = "/portfolio/assets/myLogo1.png"; // Image source when scrolled

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
