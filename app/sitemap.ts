import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/shared";
import { getPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { es: `${siteUrl}/`, en: `${siteUrl}/en/` };
  const posts = getPosts().filter((post) => !post.draft);

  return [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: `${siteUrl}/en/`, changeFrequency: "monthly", priority: 0.8, alternates: { languages } },
    { url: `${siteUrl}/blog/`, changeFrequency: "weekly", priority: 0.7 },
    ...posts.map((post) => ({ url: `${siteUrl}/blog/${post.slug}/`, lastModified: post.date, priority: 0.6 })),
  ];
}
