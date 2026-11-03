"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#fuera", label: "Fuera del código" },
  { href: "#vision", label: "Visión" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="top">
      <div className="wrap top-inner">
        <a className="wordmark" href="#inicio" onClick={close}>
          Benito Gallardo<span aria-hidden="true" />
        </a>
        <nav id="nav" className={`nav${open ? " open" : ""}`} aria-label="Principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>{link.label}</a>
          ))}
        </nav>
        <div className="top-actions">
          <a className="pill" href="#contacto" onClick={close}>Hablemos</a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen(!open)}
          >
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
