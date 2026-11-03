import { site } from "@/content/site";
import SectionHead from "./SectionHead";

export default function Timeline() {
  const entries = site.timeline.filter((entry) => entry.visible);

  return (
    <section className="section" id="trayectoria" aria-labelledby="trayectoria-titulo">
      <div className="wrap">
        <SectionHead
          label="Mi trayectoria"
          id="trayectoria-titulo"
          title={<>Cada etapa, <mark>una versión</mark> mejor preparada.</>}
          lead="Mi formación y mi camino profesional, de lo más antiguo a lo más reciente."
        />
        <ol className="log">
          {entries.map((entry) => (
            <li className={`entry rv${entry.current ? " current" : ""}`} key={entry.title}>
              <span className="entry-dot" aria-hidden="true" />
              <div className="entry-card">
                <span className="entry-kind">{entry.kind} · {entry.level}</span>
                {entry.years ? <span className="entry-years">{entry.years}</span> : null}
                <h3>{entry.title}</h3>
                <p className="entry-meta">
                  <span>{entry.focus}</span>
                  {entry.place ? <span>{entry.place}</span> : null}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
