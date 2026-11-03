import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>© {new Date().getFullYear()} {site.person.name} · {site.person.city}</span>
        <span>{site.hero.version.split(" · ").slice(1).join(" · ")}</span>
      </div>
    </footer>
  );
}
