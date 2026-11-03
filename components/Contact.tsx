import { site } from "@/content/site";
import CopyEmail from "./CopyEmail";

export default function Contact() {
  const { person, contact } = site;

  return (
    <section className="section contact" id="contacto" aria-labelledby="contacto-titulo">
      <div className="wrap">
        <p className="label">Contacto</p>
        <h2 id="contacto-titulo">¿<span>Hablamos</span>?</h2>
        <p className="lead">{contact.text}</p>
        <div className="contact-row">
          {person.email ? <CopyEmail email={person.email} /> : null}
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
