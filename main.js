const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const navSearch = document.getElementById("nav-search");

const toggleMenu = (isOpen) => {
  navLinks.classList.toggle("open", isOpen);
  menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
};

menuBtn.addEventListener("click", () => toggleMenu(!navLinks.classList.contains("open")));
navLinks.addEventListener("click", () => toggleMenu(false));
navSearch.addEventListener("click", () => navSearch.classList.toggle("open"));

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const sr = ScrollReveal();

const revealElements = [
  { selector: ".header__image img", options: { ...scrollRevealOption, origin: "right" } },
  { selector: ".header__content div", options: { duration: 1000, delay: 500 } },
  { selector: ".header__content h1", options: { ...scrollRevealOption, delay: 1000 } },
  { selector: ".header__content p", options: { ...scrollRevealOption, delay: 1500 } },
  { selector: ".deals__card", options: { ...scrollRevealOption, interval: 500 } },
  { selector: ".about__image img", options: { ...scrollRevealOption, origin: "right" } },
  { selector: ".about__card", options: { duration: 1000, interval: 500, delay: 500 } },
];

revealElements.forEach(({ selector, options }) => sr.reveal(selector, options));

new Swiper(".swiper", { loop: true });