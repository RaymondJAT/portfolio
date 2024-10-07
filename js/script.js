const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

// Variables for image source paths
const defaultSrc = "/portfolio/assets/myLogo.png"; // Default logo source
const scrollSrc = "/portfolio/assets/myLogo1.png"; // Logo source when scrolling or on small screens

// Function to update styles based on screen size
const updateHeaderStyles = () => {
  if (window.innerWidth <= 768) {
    // For small screens, change the navbar background color and set the logo to myLogo1
    header.style.backgroundColor = "#b0372e";
    navbar.style.backgroundColor = "#b0372e";
    logo.src = scrollSrc; // Set logo to myLogo1 on small screens
  } else {
    // For larger screens, revert back to default styles
    header.style.backgroundColor = ""; // Remove inline styles for background color
    navbar.style.backgroundColor = "";

    // Check if the header is sticky to decide which logo to display
    if (window.scrollY > 60) {
      logo.src = scrollSrc; // Display myLogo1 when scrolled
    } else {
      logo.src = defaultSrc; // Default logo when not scrolled
    }
  }
};

// Change header appearance and logo on scroll
window.addEventListener("scroll", () => {
  const isScrolled = window.scrollY > 60;
  header.classList.toggle("sticky", isScrolled);

  // Update logo based on scroll position and screen size
  if (window.innerWidth > 768) {
    if (isScrolled) {
      logo.src = scrollSrc;
    } else {
      logo.src = defaultSrc;
    }
  }
});

// Update header styles and logo on window resize
window.addEventListener("resize", updateHeaderStyles);

// Initial call to set styles on page load
updateHeaderStyles();

// Handle menu icon click
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

// Close the sidebar when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
  });
});
