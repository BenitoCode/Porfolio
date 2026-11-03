import { en } from "@/content/en";
import { fontVariables } from "@/lib/fonts";
import { buildMetadata } from "@/lib/metadata";
import "../../globals.css";

export { viewport } from "@/lib/metadata";
export const metadata = buildMetadata(en);

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
