import { es } from "@/content/es";
import { fontVariables } from "@/lib/fonts";
import { buildMetadata } from "@/lib/metadata";
import "../globals.css";

export { viewport } from "@/lib/metadata";
export const metadata = buildMetadata(es);

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
