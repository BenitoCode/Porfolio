import type { SiteContent } from "@/content/types";
import { person } from "@/content/shared";
import CopyEmail from "./CopyEmail";
import Marked from "./Marked";

export default function Contact({ c }: { c: SiteContent }) {
  const { contact, ui } = c;

  return (
    <section className="section contact" id="contacto" aria-labelledby="contacto-titulo">
      <div className="wrap">
        <p className="label">{contact.label}</p>
        <h2 id="contacto-titulo"><Marked text={contact.title} as="span" /></h2>
        <p className="lead">{contact.text}</p>
        <div className="contact-row">
          {person.email ? <CopyEmail email={person.email} copy={ui.copy} copied={ui.copied} /> : null}
          <ul className="socials">
            {person.links.map((link) => (
              <li key={link.url}><a href={link.url} target="_blank" rel="noopener">{link.label} <span aria-hidden="true">↗</span></a></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
