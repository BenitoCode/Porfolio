import type { SiteContent } from "@/content/types";
import type { Post } from "@/lib/blog";
import { formatDate } from "@/lib/date";
import SectionHead from "./SectionHead";
import Marked from "./Marked";

export function PostList({ posts, c }: { posts: Post[]; c: SiteContent }) {
  return (
    <ol className="posts">
      {posts.map((post) => (
        <li className="post-item rv" key={post.slug}>
          <a href={`/blog/${post.slug}/`}>
            <p className="label">
              <time dateTime={post.date}>{formatDate(post.date, "es")}</time> · {c.blog.minutes.replace("{n}", String(post.minutes))}
              {post.draft ? <span className="draft-tag">{c.blog.draft}</span> : null}
            </p>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </a>
        </li>
      ))}
    </ol>
  );
}

/* Últimos artículos en la portada. No aparece hasta que haya alguno publicado. */
export default function BlogTeaser({ c, posts }: { c: SiteContent; posts: Post[] }) {
  if (posts.length === 0) return null;
  const { blog } = c;

  return (
    <section className="section" id="blog" aria-labelledby="blog-titulo">
      <div className="wrap">
        <SectionHead label={blog.label} id="blog-titulo" title={<Marked text={blog.title} />} lead={blog.note ? `${blog.lead} ${blog.note}` : blog.lead} />
        <PostList posts={posts.slice(0, 3)} c={c} />
        <a className="btn btn-ghost blog-all" href="/blog/">{blog.all} <span aria-hidden="true">→</span></a>
      </div>
    </section>
  );
}
