/* Datos que no cambian con el idioma. */

/* Dominio definitivo, sin barra final. Se usa para canonical, hreflang y sitemap. */
export const siteUrl = "https://benitogallardo.netlify.app";

export const person = {
  name: "Benito Gallardo",
  fullName: "Benito Gallardo Peral",
  city: "Málaga",
  email: "benito11gallardo@gmail.com" as string | null,
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/benito-gallardo-peral/" },
    { label: "GitHub", url: "https://github.com/BenitoCode" },
  ],
};

/* Tecnologías verificadas en el código de cada proyecto. */
export const tech = {
  benitek: ["HTML", "CSS", "JavaScript"],
  jtRent: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Hostinger"],
};
