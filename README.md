# Benito Gallardo · Portafolio personal

Web personal: quién soy, mi historia, mi formación, mis proyectos y negocios, lo que hago fuera del código y hacia dónde voy.
Hecha con Next.js y exportada como web estática, en español (`/`) e inglés (`/en/`). No necesita servidor ni base de datos.

## Cómo editar el contenido

El contenido está en **`content/es.ts`** (español) y **`content/en.ts`** (inglés); lo que no depende del idioma (dominio, correo, redes, tecnologías verificadas) está en **`content/shared.ts`**. No hace falta tocar los componentes. Si cambias algo en un idioma, cámbialo también en el otro: TypeScript avisa si a una traducción le falta un campo.

| Quiero… | Qué cambiar en `content/es.ts` y `content/en.ts` |
|---|---|
| Añadir un negocio, proyecto o trabajo para cliente | Copia un bloque dentro de `projects` (`kind`: `"negocio"`, `"cliente"` o `"personal"`) |
| Ocultar algo sin borrarlo | `visible: false` |
| Cambiar el estado de un proyecto | `status`: `"activo"`, `"publicado"`, `"desarrollo"`, `"idea"` o `null` para no mostrarlo |
| Poner mi foto de portada | Copia la imagen en `public/img/fotos/` y rellena `hero.photo` con `{ src: "/img/fotos/….webp", alt: "…" }` |
| Poner una captura de un proyecto | Copia la imagen en `public/img/proyectos/` y rellena `image` del proyecto |
| Añadir formación o experiencia | Añade una línea en `timeline.entries` |
| Cambiar mi correo o redes | `person` en `content/shared.ts` |
| Añadir libros | `beyond.books` (`reading: true` marca el que estoy leyendo) |
| Cambiar el dominio | `siteUrl` en `content/shared.ts` (canonical, hreflang y sitemap) |

Un dato a `null` no se muestra. Los marcados con `POR CONFIRMAR` esperan a que se confirmen.

**Tamaños de imagen recomendados:** portada en vertical 4:5 (1200 × 1500 px); capturas en 16:9 (1600 × 900 px)
o 21:8 para la tarjeta ancha (2100 × 800 px). Mejor en `.webp` y por debajo de 300 KB.

## Trabajar en local

Requiere Node.js 20 o superior.

```sh
npm install
npm run dev        # http://localhost:3000
npm run build      # genera la web estática en /out
npm run typecheck  # comprueba los tipos
```

Se publica en Netlify: `netlify.toml` le indica que ejecute `npm run build` y publique la carpeta `out/`.

## Estructura

```
app/(es)/          Página en español (/)
app/(en)/en/       Página en inglés (/en/)
app/globals.css    Sistema visual (colores, tipografía, animaciones)
app/sitemap.ts     Sitemap con las dos versiones; robots.ts al lado
lib/               Fuentes y metadatos SEO compartidos
components/        Una pieza por sección (Hero, About, Timeline, Projects…)
content/           Contenido editable: es.ts, en.ts, shared.ts y types.ts
public/img/        Fotos y capturas
pdf/               CV (no se publica con la web)
```
