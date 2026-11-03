import type { Metadata } from "next";
import { es } from "@/content/es";
import { person, siteUrl } from "@/content/shared";
import { getPost, getPosts } from "@/lib/blog";
import { formatDate } from "@/lib/date";
import PageShell from "@/components/PageShell";

export const dynamicParams = false;

/* Con exportación estática hace falta al menos una página. Si todos los
   artículos son borradores (en producción no se generan), se crea una de
   reserva que no se indexa y remite al blog. */
const PLACEHOLDER = "pronto";

export function generateStaticParams() {
  const posts = getPosts();
  return posts.length > 0 ? posts.map((post) => ({ slug: post.slug })) : [{ slug: PLACEHOLDER }];
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return { title: "Blog · Benito Gallardo", robots: { index: false, follow: true } };
  const url = `/blog/${post.slug}/`;
  return {
    title: `${post.title} · Benito Gallardo`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: { type: "article", locale: "es_ES", url, title: post.title, description: post.description, publishedTime: post.date },
    ...(post.draft ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function BlogPost({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) {
    return (
      <PageShell c={es}>
        <section className="wrap article">
          <a className="article-back" href="/blog/"><span aria-hidden="true">←</span> {es.blog.back}</a>
          <p className="lead">{es.blog.empty}</p>
        </section>
      </PageShell>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    inLanguage: "es",
    url: `${siteUrl}/blog/${post.slug}/`,
    author: { "@type": "Person", name: person.fullName, url: siteUrl },
  };

  return (
    <PageShell c={es}>
      <article className="wrap article">
        <a className="article-back" href="/blog/"><span aria-hidden="true">←</span> {es.blog.back}</a>
        <p className="label">
          <time dateTime={post.date}>{formatDate(post.date, "es")}</time> · {es.blog.minutes.replace("{n}", String(post.minutes))}
          {post.draft ? <span className="draft-tag">{es.blog.draft}</span> : null}
        </p>
        <h1>{post.title}</h1>
        <p className="lead">{post.description}</p>
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </PageShell>
  );
}
