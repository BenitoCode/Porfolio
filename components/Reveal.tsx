"use client";

import { useEffect } from "react";

/* Revelado al hacer scroll. El contenido es visible por defecto: solo se
   desplaza un poco lo que aún está por debajo de la pantalla, y nada si el
   visitante prefiere reducir el movimiento. */
export default function Reveal() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("pre");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    document.querySelectorAll(".rv").forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("pre");
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
