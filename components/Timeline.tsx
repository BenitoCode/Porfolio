import type { SiteContent } from "@/content/types";
import SectionHead from "./SectionHead";
import Marked from "./Marked";

export default function Timeline({ c }: { c: SiteContent }) {
  const { timeline } = c;
  const entries = timeline.entries.filter((entry) => entry.visible);

  return (
    <section className="section" id="trayectoria" aria-labelledby="trayectoria-titulo">
      <div className="wrap">
        <SectionHead label={timeline.label} id="trayectoria-titulo" title={<Marked text={timeline.title} />} lead={timeline.lead} />
        <ol className="log">
          {entries.map((entry) => (
            <li className={`entry rv${entry.current ? " current" : ""}`} key={entry.title}>
              <span className="entry-dot" aria-hidden="true" />
              <div className="entry-card">
                <span className="entry-kind">{entry.tag}</span>
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
