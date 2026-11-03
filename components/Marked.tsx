import type { Marked as MarkedText } from "@/content/types";

/** Pinta [antes, resaltado, después] con la parte central subrayada en amarillo. */
export default function Marked({ text, as: Tag = "mark" }: { text: MarkedText; as?: "mark" | "span" }) {
  const [before, highlight, after] = text;
  return <>{before}<Tag>{highlight}</Tag>{after}</>;
}
