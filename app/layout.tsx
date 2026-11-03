import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

// Las fuentes se descargan al compilar y se sirven desde el propio dominio.
const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-display", display: "swap" });
const body = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url), alternates: { canonical: "/" } } : {}),
  title: site.seo.title,
  description: site.seo.description,
  authors: [{ name: site.person.fullName }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "profile",
    locale: "es_ES",
    title: site.seo.title,
    description: site.seo.description,
    ...(site.url ? { url: site.url } : {}),
  },
  twitter: { card: "summary" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F3F4F1" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1113" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
