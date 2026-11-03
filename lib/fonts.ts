import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";

// Las fuentes se descargan al compilar y se sirven desde el propio dominio.
const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-display", display: "swap" });
const body = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const fontVariables = `${display.variable} ${body.variable} ${mono.variable}`;
