const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navbarItem = document.getElementsByClassName("navbar-item")[0];
// Navbar responsive
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
navbarItem.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
// Efect on scroll navbar
window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
  // header.classList.toggle("navbar-fixed", window.scrollY > 30);
});
