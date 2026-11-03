import type { SiteContent } from "@/content/types";
import Marked from "./Marked";

export default function About({ c }: { c: SiteContent }) {
  const { about } = c;

  return (
    <section className="section" id="sobre-mi" aria-labelledby="sobre-mi-titulo">
      <div className="wrap about-grid">
        <div className="rv">
          <h2 className="label" id="sobre-mi-titulo">{about.label}</h2>
          <p className="statement"><Marked text={about.statement} /></p>
          <dl className="facts">
            {about.facts.map((fact) => (
              <div key={fact.term}><dt className="label">{fact.term}</dt><dd>{fact.value}</dd></div>
            ))}
          </dl>
        </div>
        <ol className="chapters">
          {about.chapters.map((chapter, index) => (
            <li className="chapter rv" key={chapter.title}>
              <span className="chapter-n" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{chapter.title}</h3><p>{chapter.text}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
