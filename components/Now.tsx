import type { SiteContent } from "@/content/types";
import Marked from "./Marked";

export default function Now({ c }: { c: SiteContent }) {
  const { now } = c;

  return (
    <section className="now-section" aria-labelledby="ahora-titulo">
      <div className="wrap now-grid">
        <div className="rv">
          <p className="label"><span className="now-dot" aria-hidden="true" />{now.label} · <time>{now.updated}</time></p>
          <h2 id="ahora-titulo"><Marked text={now.title} /></h2>
        </div>
        <ul className="now-list">
          {now.items.map((item) => (
            <li className="rv" key={item.label}><span className="label">{item.label}</span><p>{item.text}</p></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
