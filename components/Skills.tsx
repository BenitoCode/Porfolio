import type { SiteContent } from "@/content/types";
import SectionHead from "./SectionHead";
import Marked from "./Marked";

export default function Skills({ c }: { c: SiteContent }) {
  const { skills, ui } = c;

  return (
    <section className="section" id="habilidades" aria-labelledby="habilidades-titulo">
      <div className="wrap">
        <SectionHead label={skills.label} id="habilidades-titulo" title={<Marked text={skills.title} />} />
        <div className="skills">
          {skills.groups.map((group) => (
            <div className={`skill-col skill-${group.id} rv`} key={group.id}>
              <h3>{group.title}</h3>
              <p>{group.text}</p>
              <ul className="tags">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="ai-note rv"><strong>{ui.aiLabel}</strong> {skills.aiNote}</p>
      </div>
    </section>
  );
}
