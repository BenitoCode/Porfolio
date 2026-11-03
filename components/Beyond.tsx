import type { SiteContent } from "@/content/types";
import SectionHead from "./SectionHead";

export default function Beyond({ c }: { c: SiteContent }) {
  const { beyond } = c;

  return (
    <section className="section beyond" id="fuera" aria-labelledby="fuera-titulo">
      <div className="wrap">
        <SectionHead label={beyond.label} id="fuera-titulo" title={beyond.title} lead={beyond.intro} />
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
            <h3 className="label">{beyond.booksTitle}</h3>
            <ol className="book-list">
              {beyond.books.map((book) => (
                <li key={book.title} className={book.reading ? "reading" : undefined}>
                  {book.reading ? <span className="book-now">{beyond.readingNow}</span> : null}
                  <cite>{book.title}</cite>
                  <span className="book-author">{book.author}</span>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
      </div>
    </section>
  );
}
