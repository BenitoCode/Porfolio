"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Sin acceso al portapapeles: el correo sigue visible y seleccionable.
    }
  };

  return (
    <div className="email-row">
      <a className="email" href={`mailto:${email}`}>{email}</a>
      <button className="copy" type="button" onClick={copy} aria-live="polite">{copied ? "Copiado" : "Copiar correo"}</button>
    </div>
  );
}
