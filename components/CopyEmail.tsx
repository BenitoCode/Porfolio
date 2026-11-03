"use client";

import { useState } from "react";

export default function CopyEmail({ email, copy, copied }: { email: string; copy: string; copied: string }) {
  const [done, setDone] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    } catch {
      // Sin acceso al portapapeles: el correo sigue visible y seleccionable.
    }
  };

  return (
    <div className="email-row">
      <a className="email" href={`mailto:${email}`}>{email}</a>
      <button className="copy" type="button" onClick={onCopy} aria-live="polite">{done ? copied : copy}</button>
    </div>
  );
}
