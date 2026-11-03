import { site } from "@/content/site";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Beyond from "@/components/Beyond";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

// Datos estructurados: persona fundadora de Benitek.
function personJsonLd() {
  const benitek = site.projects.find((project) => project.id === "benitek");
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.person.fullName,
    jobTitle: "Desarrollador de aplicaciones y emprendedor",
    address: { "@type": "PostalAddress", addressLocality: site.person.city, addressCountry: "ES" },
    ...(site.url ? { url: site.url } : {}),
    ...(site.person.email ? { email: `mailto:${site.person.email}` } : {}),
    sameAs: site.person.links.map((link) => link.url),
    ...(benitek?.url ? { worksFor:{ "@type": "Organization", name: "Benitek", url: benitek.url } } : {}),
  };
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Beyond />
        <Vision />
        <Contact />
      </main>
      <Footer />
      <Reveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }} />
    </>
  );
}
