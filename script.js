// =========================
// HAMBURGER MENU
// =========================

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// =========================
// TUTUP MENU SAAT LINK DIKLIK
// =========================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// =========================
// ANIMASI SCROLL
// =========================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// =========================
// FALLBACK GAMBAR
// =========================

const images = document.querySelectorAll(".image-fallback");

images.forEach(img => {
  img.addEventListener("error", function () {

    this.style.display = "none";

    const fallback = document.createElement("div");

    fallback.classList.add("fallback-style");

    fallback.innerText = "Gambar belum ditambahkan";

    this.parentElement.appendChild(fallback);
  });
});