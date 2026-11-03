import type { Metadata } from "next";
import { es } from "@/content/es";
import { getPosts } from "@/lib/blog";
import PageShell from "@/components/PageShell";
import Marked from "@/components/Marked";
import { PostList } from "@/components/BlogTeaser";

export const metadata: Metadata = {
  title: "Blog · Benito Gallardo",
  description: es.blog.lead,
  alternates: { canonical: "/blog/" },
  openGraph: { type: "website", locale: "es_ES", url: "/blog/", title: "Blog · Benito Gallardo", description: es.blog.lead },
};

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <PageShell c={es}>
      <section className="wrap blog-head">
        <p className="label">{es.blog.label}</p>
        <h1><Marked text={es.blog.title} /></h1>
        <p className="lead">{es.blog.lead}</p>
      </section>
      <section className="wrap blog-body">
        {posts.length > 0 ? <PostList posts={posts} c={es} /> : <p className="lead">{es.blog.empty}</p>}
      </section>
    </PageShell>
  );
}
