import type { SiteContent } from "@/content/types";
import { person, siteUrl } from "@/content/shared";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Timeline from "./Timeline";
import Projects from "./Projects";
import Skills from "./Skills";
import Beyond from "./Beyond";
import Vision from "./Vision";
import Contact from "./Contact";
import Footer from "./Footer";
import Reveal from "./Reveal";

// Datos estructurados: persona fundadora de Benitek.
function personJsonLd(c: SiteContent) {
  const benitek = c.projects.items.find((project) => project.id === "benitek");
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.fullName,
    jobTitle: c.seo.jobTitle,
    url: `${siteUrl}${c.path}`,
    address: { "@type": "PostalAddress", addressLocality: person.city, addressCountry: "ES" },
    ...(person.email ? { email: `mailto:${person.email}` } : {}),
    sameAs: person.links.map((link) => link.url),
    ...(benitek?.url ? { worksFor: { "@type": "Organization", name: "Benitek", url: benitek.url } } : {}),
  };
}

export default function SitePage({ c }: { c: SiteContent }) {
  return (
    <>
      <a className="skip-link" href="#main">{c.ui.skip}</a>
      <Header c={c} />
      <main id="main">
        <Hero c={c} />
        <About c={c} />
        <Timeline c={c} />
        <Projects c={c} />
        <Skills c={c} />
        <Beyond c={c} />
        <Vision c={c} />
        <Contact c={c} />
      </main>
      <Footer c={c} />
      <Reveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(c)) }} />
    </>
  );
}
