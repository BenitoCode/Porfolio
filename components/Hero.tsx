import Image from "next/image";
import type { SiteContent } from "@/content/types";

export default function Hero({ c }: { c: SiteContent }) {
  const { hero, ui } = c;
  const [first, second] = hero.greeting;

  return (
    <section className="wrap hero" id="inicio">
      <div>
        <p className="build">
          <span className="build-bar" aria-hidden="true"><i /></span>
          {hero.version}
        </p>
        <h1>
          <span className="w">{first}</span> <span className="w">{second}<span className="dot">.</span></span>
        </h1>
        <p className="lead">{hero.subtitle}</p>
        <div className="actions">
          <a className="btn btn-solid" href="#proyectos">{ui.ctaProjects} <span aria-hidden="true">↓</span></a>
          <a className="btn btn-ghost" href="#contacto">{ui.ctaContact}</a>
        </div>
      </div>
      <figure className="hero-photo">
        <span className="sun" aria-hidden="true" />
        {hero.photo ? (
          <div className="photo">
            <Image src={hero.photo.src} alt={hero.photo.alt} width={1200} height={1500} priority />
          </div>
        ) : (
          <div className="photo photo-empty" aria-hidden="true"><span>B.</span></div>
        )}
        <figcaption className="now"><span className="label">{ui.now}</span>{hero.now}</figcaption>
      </figure>
    </section>
  );
}
