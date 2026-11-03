"use client";

import { useEffect, useState } from "react";
import type { SiteContent } from "@/content/types";

export default function Header({ c }: { c: SiteContent }) {
  const { ui } = c;
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
        <nav id="nav" className={`nav${open ? " open" : ""}`} aria-label={ui.navLabel}>
          {ui.nav.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>{link.label}</a>
          ))}
          <a className="nav-contact" href="#contacto" onClick={close}>{ui.talk}</a>
        </nav>
        <div className="top-actions">
          <a className="lang" href={ui.switchTo.href} hrefLang={ui.switchTo.lang} lang={ui.switchTo.lang} aria-label={ui.switchTo.name}>
            {ui.switchTo.short}
          </a>
          <a className="pill" href="#contacto" onClick={close}>{ui.talk}</a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="nav"
            aria-label={open ? ui.menuClose : ui.menuOpen}
            onClick={() => setOpen(!open)}
          >
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
