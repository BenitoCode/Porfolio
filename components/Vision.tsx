import { site } from "@/content/site";
import SectionHead from "./SectionHead";

export default function Vision() {
  const { vision } = site;
  const [first, second] = vision.title;

  return (
    <section className="section" id="vision" aria-labelledby="vision-titulo">
      <div className="wrap">
        <SectionHead label="Mi visión" id="vision-titulo" title={<>{first}<mark>{second}</mark></>} />
        <ol className="roadmap">
          {vision.goals.map((goal) => (
            <li className="goal rv" key={goal.title}>
              <div><h3>{goal.title}</h3><p>{goal.text}</p></div>
              <span className="label">Objetivo</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
