/* Comportamiento general: menú, cabecera, sección activa, animaciones y copiar email */
(function () {
  const root = document.documentElement;

  /* Entrada de la portada (una sola vez) */
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add("is-loaded")));

  /* Menú móvil */
  const btn = document.getElementById("menu-btn");
  const nav = document.getElementById("site-nav");
  const setMenu = (open) => {
    nav.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.querySelector(".menu-label").textContent = open ? "Cerrar" : "Menú";
    document.body.classList.toggle("menu-open", open);
  };
  btn.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); btn.focus(); } });

  /* Borde de la cabecera al hacer scroll */
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Sección activa en el menú */
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const targets = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.toggleAttribute("aria-current", a.getAttribute("href") === `#${e.target.id}`));
        links.forEach((a) => a.hasAttribute("aria-current") && a.setAttribute("aria-current", "true"));
      }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    targets.forEach((t) => spy.observe(t));

    /* Aparición discreta */
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
  }

  /* Copiar email */
  const toast = document.getElementById("toast");
  const show = (msg) => {
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(show.t);
    show.t = setTimeout(() => toast.classList.remove("is-visible"), 2000);
  };
  document.addEventListener("click", async (e) => {
    const b = e.target.closest("[data-copy]");
    if (!b) return;
    try { await navigator.clipboard.writeText(b.dataset.copy); show("Email copiado"); }
    catch { show("No se pudo copiar. Escríbelo a mano: " + b.dataset.copy); }
  });
})();
