import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

/* Blog en archivos Markdown: content/blog/<slug>.md
   Cabecera obligatoria entre líneas ---:
     title, description, date (AAAA-MM-DD) y, opcionalmente, draft: true y tags: a, b

   Los borradores (draft: true) se ven en local y en las vistas previas de
   Netlify, pero nunca en producción (Netlify define CONTEXT=production). */

const dir = path.join(process.cwd(), "content", "blog");
export const showDrafts = process.env.CONTEXT !== "production";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  draft: boolean;
  minutes: number;
  html: string;
};

function parse(file: string): Post {
  const raw = fs.readFileSync(path.join(dir, file), "utf8").replace(/\r\n/g, "\n");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`Falta la cabecera --- en content/blog/${file}`);

  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const index = line.indexOf(":");
    if (index > 0) meta[line.slice(0, index).trim()] = line.slice(index + 1).trim().replace(/^"(.*)"$/, "$1");
  }
  for (const key of ["title", "description", "date"]) {
    if (!meta[key]) throw new Error(`Falta «${key}» en content/blog/${file}`);
  }

  const body = match[2].trim();
  return {
    slug: file.replace(/\.md$/, ""),
    title: meta.title,
    description: meta.description,
    date: meta.date,
    tags: meta.tags ? meta.tags.split(",").map((tag) => tag.trim()).filter(Boolean) : [],
    draft: meta.draft === "true",
    minutes: Math.max(1, Math.round(body.split(/\s+/).length / 200)),
    html: marked.parse(body, { async: false }),
  };
}

export function getPosts(): Post[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map(parse)
    .filter((post) => showDrafts || !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}

