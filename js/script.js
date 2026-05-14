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

    document.body.classList.toggle("menu-open");
});

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");

        if (href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const navbar = document.querySelector(".navbar");
                const offset = navbar.offsetHeight + 30;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }

            navMenu.classList.remove("active");
            toggle.classList.remove("open");
            document.body.classList.remove("menu-open");
        }
    });
});


// ================= NAVBAR SCROLL EFFECT =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(6, 7, 11, 0.92)";
        navbar.style.borderBottom = "1px solid rgba(255,255,255,0.08)";
    } else {
        navbar.style.background = "rgba(6, 7, 11, 0.7)";
        navbar.style.borderBottom = "1px solid rgba(255,255,255,0.06)";
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
        const sectionTop = section.offsetTop - 180;
        if (window.scrollY >= sectionTop) {
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