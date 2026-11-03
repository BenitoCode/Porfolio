import type { NextConfig } from "next";

// Exportación estática: `npm run build` genera la web completa en /out, sin servidor.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
