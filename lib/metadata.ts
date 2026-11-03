import type { Metadata, Viewport } from "next";
import type { SiteContent } from "@/content/types";
import { person, siteUrl } from "@/content/shared";

export function buildMetadata(c: SiteContent): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: c.seo.title,
    description: c.seo.description,
    authors: [{ name: person.fullName }],
    icons: { icon: "/favicon.svg" },
    alternates: {
      canonical: c.path,
      languages: { es: "/", en: "/en/", "x-default": "/" },
    },
    openGraph: {
      type: "profile",
      locale: c.ogLocale,
      url: c.path,
      title: c.seo.title,
      description: c.seo.description,
    },
    twitter: { card: "summary" },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0B10" },
  ],
};
