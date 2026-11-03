import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

// Hasta que site.url tenga el dominio definitivo, el sitemap sale vacío.
export default function sitemap(): MetadataRoute.Sitemap {
  return site.url ? [{ url: `${site.url}/`, changeFrequency: "monthly", priority: 1 }] : [];
}
