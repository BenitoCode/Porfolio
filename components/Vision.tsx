import type { SiteContent } from "@/content/types";
import SectionHead from "./SectionHead";
import Marked from "./Marked";

export default function Vision({ c }: { c: SiteContent }) {
  const { vision, ui } = c;

  return (
    <section className="section" id="vision" aria-labelledby="vision-titulo">
      <div className="wrap">
        <SectionHead label={vision.label} id="vision-titulo" title={<Marked text={vision.title} />} lead={vision.intro} />
        <ol className="roadmap">
          {vision.goals.map((goal) => (
            <li className={`goal rv${goal.highlight ? " highlight" : ""}`} key={goal.title}>
              <div><h3>{goal.title}</h3><p>{goal.text}</p></div>
              <span className="label">{ui.goal}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
