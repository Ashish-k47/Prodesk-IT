// =========================================
// ELEMENT REFERENCES
// =========================================

const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuClose = document.getElementById("mobileMenuClose");
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

const themeToggle = document.getElementById("themeToggle");
const mobileThemeToggle = document.getElementById("mobileThemeToggle");
const htmlElement = document.documentElement;

// =========================================
// MOBILE MENU TOGGLE
// =========================================
function openMobileMenu() {
  mobileMenu.classList.add("open");
  mobileMenuOverlay.classList.add("open");
}

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  mobileMenuOverlay.classList.remove("open");
}

hamburgerBtn.addEventListener("click", openMobileMenu);
mobileMenuClose.addEventListener("click", closeMobileMenu);
mobileMenuOverlay.addEventListener("click", closeMobileMenu);


mobileNavLinks.forEach(function (link) {
  link.addEventListener("click", closeMobileMenu);
});

// =========================================
// DARK MODE TOGGLE
// =========================================

function loadSavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    htmlElement.setAttribute("data-theme", "dark");
  }
}

function toggleTheme() {
  const currentTheme = htmlElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    htmlElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    htmlElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

themeToggle.addEventListener("click", toggleTheme);
mobileThemeToggle.addEventListener("click", toggleTheme);

loadSavedTheme();

// =========================================
// ACTIVE NAV LINK ON SCROLL
// =========================================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveLink() {
  let currentSectionId = "";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSectionId) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);
