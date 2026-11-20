# Ficha — Portfolio Benito Gallardo

## Proyecto
- Nombre: Portfolio personal (repo BenitoCode/Porfolio)
- Tipo: portfolio personal · Skills: web-base
- Objetivo: mostrar quién soy, mi trayectoria, formación, proyectos y negocios; incluye blog.

## Tecnologías
- Next.js 16 (App Router, `output: "export"`), React 19, TypeScript 5.9, marked (blog).
- Web estática: sin servidor ni base de datos.
- Despliegue: Netlify (`npm run build` → publica `out/`), Node 24.

## Comandos
- `npm run dev` → http://localhost:3000
- `npm run build` → genera `out/`
- `npm run typecheck` → comprueba tipos (ejecutar antes de cada commit)

## Reglas de este proyecto
- Antes de cambiar contenido, lee README.md: explica dónde va cada cosa.
- El contenido vive en `content/es.ts` y `content/en.ts`: todo cambio en un idioma se replica en el otro.
- No uses funciones que requieran servidor (API routes, SSR dinámico): la web es estática.
- Imágenes en `.webp` y por debajo de 300 KB.
- Datos marcados `POR CONFIRMAR`: no los inventes, pregúntame.
- Git: una rama por cambio y Pull Request a `main`.

## Estado
- Publicado en Netlify. Versión 2.0.
- Rama actual: `libros-y-vision` (portadas de libros y nuevo objetivo).

## Decisiones aprobadas
- 2026-11: web estática con Next.js en Netlify, bilingüe ES/EN, blog en Markdown.

## Tareas pendientes
- Por definir.

## Próximo paso
- Por definir.
