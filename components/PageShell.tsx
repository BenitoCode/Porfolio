import type { SiteContent } from "@/content/types";
import Header from "./Header";
import Footer from "./Footer";
import Reveal from "./Reveal";

/* Cabecera y pie compartidos por las páginas que no son la portada (blog). */
export default function PageShell({ c, children }: { c: SiteContent; children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">{c.ui.skip}</a>
      <Header c={c} />
      <main id="main">{children}</main>
      <Footer c={c} />
      <Reveal />
    </>
  );
}
