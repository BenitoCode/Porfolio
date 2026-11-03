import { site } from "@/content/site";
import SectionHead from "./SectionHead";

export default function Skills() {
  const { skills } = site;

  return (
    <section className="section" id="habilidades" aria-labelledby="habilidades-titulo">
      <div className="wrap">
        <SectionHead
          label="Habilidades"
          id="habilidades-titulo"
          title={<>Lo que sé, lo que uso y <mark>lo que estoy aprendiendo</mark>.</>}
        />
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
        <p className="ai-note rv"><strong>Sobre la IA:</strong> {skills.aiNote}</p>
      </div>
    </section>
  );
}
