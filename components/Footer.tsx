import type { SiteContent } from "@/content/types";
import { person } from "@/content/shared";

export default function Footer({ c }: { c: SiteContent }) {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>© {new Date().getFullYear()} {person.name} · {person.city}</span>
        <span>{c.ui.footer}</span>
      </div>
    </footer>
  );
}
