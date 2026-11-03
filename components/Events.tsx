import Image from "next/image";
import type { SiteContent } from "@/content/types";
import SectionHead from "./SectionHead";
import Marked from "./Marked";
import { formatDate } from "@/lib/date";

export default function Events({ c }: { c: SiteContent }) {
  const { events, ui } = c;
  if (events.items.length === 0) return null;

  return (
    <section className="section" id="eventos" aria-labelledby="eventos-titulo">
      <div className="wrap">
        <SectionHead label={events.label} id="eventos-titulo" title={<Marked text={events.title} />} lead={events.lead} />
        <ol className="events">
          {events.items.map((event) => (
            <li className="event rv" key={`${event.date}-${event.title}`}>
              {event.image ? <Image src={event.image.src} alt={event.image.alt} width={800} height={600} /> : null}
              <div>
                <p className="label"><time dateTime={event.date}>{formatDate(event.date, c.locale)}</time> · {event.kind}</p>
                <h3>{event.title}</h3>
                {event.place ? <p className="event-place">{event.place}</p> : null}
                <p>{event.text}</p>
                {event.url ? <a className="link" href={event.url} target="_blank" rel="noopener">{ui.visit} <span aria-hidden="true">↗</span></a> : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
