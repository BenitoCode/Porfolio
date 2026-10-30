# Benito Gallardo · Web personal

Web de marca personal: quién soy, qué negocios estoy construyendo y hacia dónde voy.
HTML, CSS y JavaScript sin frameworks ni proceso de compilación. Para verla, abre `index.html`.

## Cómo editar el contenido

Todo el contenido está en **`data/content.js`**. No hace falta tocar el HTML.

| Quiero… | Qué cambiar en `data/content.js` |
|---|---|
| Añadir un negocio o proyecto | Copia un bloque dentro de `businesses` y cambia los textos |
| Ocultar algo sin borrarlo | `visible: false` (SIFT está oculto así) |
| Cambiar el estado de un proyecto | `status`: `"activo"`, `"desarrollo"`, `"exploracion"` o `"entregado"` |
| Poner mis fotos | Copia la imagen en `assets/img/fotos/` y pon la ruta en `photos.hero.src` o `photos.about.src` |
| Poner una captura de un negocio | Copia la imagen en `assets/img/negocios/` y pon la ruta en `image.src` del negocio |
| Contar mi historia | Edita `story.chapters` (un capítulo por etapa) |
| Añadir formación o experiencia | Añade una línea en `timeline` |
| Actualizar "En qué estoy ahora" | Edita `now.items` y la fecha `now.updated` |
| Publicar vídeos de YouTube | Pon `youtube.channelUrl` y añade vídeos en `youtube.videos` con su `youtubeId` |
| Añadir artículos o una galería | Rellena `articles` o `gallery`: la sección aparece sola |
| Añadir Instagram, YouTube… | Añádelo a `person.links` |

Mientras una foto no tenga `src`, se muestra un espacio reservado neutro.

**Tamaños de foto recomendados:** portada y "Sobre mí" en vertical 4:5 (1200 × 1500 px), capturas de negocios en
horizontal 21:8 (2100 × 800 px). Mejor en `.webp` y por debajo de 300 KB.

## Estructura

```
index.html               Estructura y portada (texto de portada y SEO aquí)
data/content.js          Todo el contenido editable
assets/css/styles.css    Sistema visual
assets/js/components.js  Componentes que pintan el contenido
assets/js/main.js        Menú, animaciones y copiar email
assets/img/fotos/        Fotografías personales
assets/img/negocios/     Capturas de negocios y proyectos
```

El texto de la portada está escrito directamente en `index.html` para que Google lo lea sin esperar a JavaScript.
