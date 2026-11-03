import { site } from "@/content/site";

export default function About() {
  const { about } = site;
  const [before, highlight, after] = about.statement;

  return (
    <section className="section" id="sobre-mi" aria-labelledby="sobre-mi-titulo">
      <div className="wrap about-grid">
        <div className="rv">
          <h2 className="label" id="sobre-mi-titulo">Sobre mí</h2>
          <p className="statement">{before}<mark>{highlight}</mark>{after}</p>
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
