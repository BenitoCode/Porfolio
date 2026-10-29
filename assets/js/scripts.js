/*===== MENÚ MÓVIL =====*/
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

const setMenu = (open) => {
  navMenu.classList.toggle("show", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.innerHTML = open ? '<i class="bx bx-x"></i>' : '<i class="bx bx-menu"></i>';
};
navToggle.addEventListener("click", () => setMenu(!navMenu.classList.contains("show")));
navLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));

/*===== HEADER CON BORDE AL HACER SCROLL =====*/
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/*===== ENLACE ACTIVO SEGÚN LA SECCIÓN =====*/
const sections = ["inicio", "proyectos", "sobre-mi", "contacto"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) =>
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`)
      );
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => activeObserver.observe(s));

/*===== MODO OSCURO / CLARO =====*/
const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = () => root.getAttribute("data-theme") || (prefersDark.matches ? "dark" : "light");
const paintIcon = () => {
  themeToggle.innerHTML = currentTheme() === "dark" ? '<i class="bx bx-sun"></i>' : '<i class="bx bx-moon"></i>';
};

themeToggle.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) { }
  paintIcon();
});
prefersDark.addEventListener("change", paintIcon);
paintIcon();

/*===== COPIAR EMAIL =====*/
const copyBtn = document.getElementById("copy");
const toast = document.getElementById("toast");

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("benito.gallardoperal@outlook.com");
    toast.textContent = "Email copiado";
  } catch (e) {
    toast.textContent = "No se pudo copiar";
  }
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
});

/*===== ANIMACIÓN AL APARECER =====*/
const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  revealObserver.observe(el);
});

/*===== AÑO DEL FOOTER =====*/
document.getElementById("year").textContent = new Date().getFullYear();
