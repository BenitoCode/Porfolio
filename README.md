# Benito Gallardo · Portafolio personal

Web personal: quién soy, mi historia, mi formación, mis proyectos y negocios, lo que hago fuera del código y hacia dónde voy.
Hecha con Next.js y exportada como web estática: no necesita servidor ni base de datos.

## Cómo editar el contenido

Todo el contenido está en **`content/site.ts`**. No hace falta tocar los componentes.

| Quiero… | Qué cambiar en `content/site.ts` |
|---|---|
| Añadir un negocio, proyecto o trabajo para cliente | Copia un bloque dentro de `projects` (`kind`: `"negocio"`, `"cliente"` o `"personal"`) |
| Ocultar algo sin borrarlo | `visible: false` |
| Cambiar el estado de un proyecto | `status`: `"activo"`, `"publicado"`, `"desarrollo"`, `"idea"` o `null` para no mostrarlo |
| Poner mi foto de portada | Copia la imagen en `public/img/fotos/` y rellena `hero.photo` con `{ src: "/img/fotos/….webp", alt: "…" }` |
| Poner una captura de un proyecto | Copia la imagen en `public/img/proyectos/` y rellena `image` del proyecto |
| Añadir formación o experiencia | Añade una línea en `timeline` |
| Mostrar mi correo | Rellena `person.email` |
| Añadir libros | Rellena `beyond.books`: la lista aparece sola |
| Poner el dominio definitivo | Rellena `url`: activa canonical y sitemap |

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

Para publicar, sube el contenido de `out/` a cualquier alojamiento estático (Netlify, Hostinger…).

## Estructura

```
app/layout.tsx         Fuentes, metadatos y SEO
app/page.tsx           Orden de las secciones y datos estructurados
app/globals.css        Sistema visual (colores, tipografía, animaciones)
components/            Una pieza por sección (Hero, About, Timeline, Projects…)
content/site.ts        Todo el contenido editable
public/img/            Fotos y capturas
pdf/                   CV (no se publica con la web)
```
