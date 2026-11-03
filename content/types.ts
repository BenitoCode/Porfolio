/* Forma del contenido. Cada idioma (es.ts, en.ts) la rellena entera,
   así TypeScript avisa si a una traducción le falta algo. */

export type Locale = "es" | "en";
export type Status = "activo" | "publicado" | "desarrollo" | "idea";
export type ProjectKind = "negocio" | "cliente" | "personal";

/** Texto con una parte resaltada: [antes, resaltado, después]. */
export type Marked = readonly [string, string, string];

export type Image = { src: string; alt: string };

export type Project = {
  id: string;
  visible: boolean;
  kind: ProjectKind;
  label: string;
  name: string;
  status: Status | null;
  summary: string;
  role: string | null;
  tech: string[] | null;
  url: string | null;
  urlLabel?: string;
  image: Image | null;
  wide?: boolean;
};

export type TimelineEntry = {
  visible: boolean;
  tag: string;
  title: string;
  focus: string;
  place: string | null;
  years: string | null;
  current?: boolean;
};

export type SiteContent = {
  locale: Locale;
  path: "/" | "/en/";
  ogLocale: string;
  seo: { title: string; description: string; jobTitle: string };

  ui: {
    skip: string;
    nav: { href: string; label: string }[];
    navLabel: string;
    talk: string;
    menuOpen: string;
    menuClose: string;
    switchTo: { href: "/" | "/en/"; short: string; name: string; lang: Locale };
    ctaProjects: string;
    ctaContact: string;
    now: string;
    status: Record<Status, string>;
    role: string;
    tech: string;
    visit: string;
    goal: string;
    aiLabel: string;
    copy: string;
    copied: string;
    footer: string;
  };

  hero: {
    version: string;
    greeting: readonly [string, string];
    subtitle: string;
    photo: Image | null;
    now: string;
  };

  about: {
    label: string;
    statement: Marked;
    facts: { term: string; value: string }[];
    chapters: { title: string; text: string }[];
  };

  timeline: {
    label: string;
    title: Marked;
    lead: string;
    entries: TimelineEntry[];
  };

  projects: {
    label: string;
    title: Marked;
    lead: string;
    filters: Record<ProjectKind | "all", string>;
    filterLabel: string;
    items: Project[];
    nextSlot: { visible: boolean; label: string; name: string; text: string };
  };

  skills: {
    label: string;
    title: Marked;
    groups: { id: string; title: string; text: string; items: string[] }[];
    aiNote: string;
  };

  beyond: {
    label: string;
    title: string;
    intro: string;
    interests: { label: string; title: string; text: string; big?: boolean }[];
    booksTitle: string;
    readingNow: string;
    books: { title: string; author: string; reading?: boolean }[];
  };

  vision: {
    label: string;
    title: Marked;
    intro: string;
    goals: { title: string; text: string; highlight?: boolean }[];
  };

  contact: {
    label: string;
    title: Marked;
    text: string;
  };
};
