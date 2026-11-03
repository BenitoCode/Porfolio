import { site } from "@/content/site";
import SectionHead from "./SectionHead";

export default function Beyond() {
  const { beyond } = site;

  return (
    <section className="section beyond" id="fuera" aria-labelledby="fuera-titulo">
      <div className="wrap">
        <SectionHead label="Más allá del código" id="fuera-titulo" title={beyond.title} lead={beyond.intro} />
        <div className="interests">
          {beyond.interests.map((interest) => (
            <article className={`interest rv${interest.big ? " big" : ""}`} key={interest.title}>
              <span className="label">{interest.label}</span>
              <h3>{interest.title}</h3>
              <p>{interest.text}</p>
            </article>
          ))}
        </div>
        {beyond.books.length > 0 ? (
          <div className="books rv">
            <h3 className="label">Libros que me han marcado</h3>
            <ul>
              {beyond.books.map((book) => <li key={book.title}><strong>{book.title}</strong> · {book.author}</li>)}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
