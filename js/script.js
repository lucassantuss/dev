// ================= REVEAL ANIMATION =================

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.15
});

reveals.forEach(el => observer.observe(el));


// ================= MENU HAMBURGUER =================

const toggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

toggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    toggle.classList.toggle("open");
});

// Fecha ao clicar no link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        toggle.classList.remove("open");
    });
});


// ================= NAVBAR SCROLL EFFECT =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(11,17,32,0.95)";
    } else {
        navbar.style.background = "rgba(11,17,32,0.7)";
    }
});

// ================= ANO AUTOMÁTICO =================

const ano = new Date().getFullYear();
document.getElementById("ano").textContent = ano;

// ================= MENU ATIVO =================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === `#${current}`) {
            a.classList.add("active");
        }
    });
});