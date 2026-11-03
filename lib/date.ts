import type { Locale } from "@/content/types";

/** "2026-11-03" → "3 de noviembre de 2026" / "3 November 2026". */
export function formatDate(date: string, locale: Locale = "es") {
  return new Date(`${date}T12:00:00`).toLocaleDateString(locale === "es" ? "es-ES" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
}
