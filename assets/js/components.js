/* =============================================================
   Componentes: convierten data/content.js en HTML.
   Para añadir contenido, edita data/content.js, no este archivo.
   ============================================================= */
(function () {
  const S = window.SITE;
  if (!S) return;

  const esc = (v) =>
    String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const STATUS = {
    activo: "Activo",
    entregado: "Web publicada",
    desarrollo: "En desarrollo",
    exploracion: "En exploración",
  };
  const status = (key) => `<span class="status status--${esc(key)}">${esc(STATUS[key] || key)}</span>`;

  const isExternal = (url) => /^https?:\/\//.test(url || "");
  const linkAttrs = (url) => (isExternal(url) ? ' target="_blank" rel="noopener"' : "");

  /* Foto con espacio reservado si aún no existe */
  const photo = ({ src = "", alt = "" } = {}, { ratio = "4/5", mark = "B", wide = false, eager = false, color = "" } = {}) => {
    const style = `style="--ratio:${esc(ratio)}${color ? `;--ph:${esc(color)}` : ""}"`;
    if (src) {
      return `<div class="photo" ${style}><img src="${esc(src)}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></div>`;
    }
    return `<div class="photo photo--empty${wide ? " photo--wide" : ""}" ${style} aria-hidden="true"><span class="photo-mark">${esc(mark)}</span></div>`;
  };

  const R = {};

  /* Franja animada */
  R.marquee = () => {
    const items = (S.marquee || []).map((m) => `<span>${esc(m)}</span><i></i>`).join("");
    return items ? `<div class="marquee-track">${items}${items}</div>` : null;
  };

  /* 1. Presentación */
  R.intro = () => `
    <div class="intro reveal">
      <p class="intro-statement">${esc(S.intro.statement)}</p>
      <dl class="facts">
        ${S.intro.facts.map((f) => `<div><dt>${esc(f.term)}</dt><dd>${esc(f.value)}</dd></div>`).join("")}
      </dl>
    </div>`;

  /* 2. Visión */
  R.vision = () => `
    <div class="vision">
      <h2 class="h2" id="vision-title">${esc(S.vision.title)}</h2>
      <div class="principles">
        ${S.vision.principles
          .map((p) => `<article class="principle reveal"><h3 class="h3">${esc(p.title)}</h3><p>${esc(p.text)}</p></article>`)
          .join("")}
      </div>
    </div>`;

  /* 3. Negocios */
  R.businesses = () =>
    S.businesses
      .filter((b) => b.visible !== false)
      .map(
        (b) => `
      <article class="business reveal" id="${esc(b.id)}" aria-labelledby="${esc(b.id)}-name" style="--brand:${esc(b.color || "#2F5BFF")};--brand-ink:${esc(b.colorInk || "#ffffff")}">
        <div class="business-head">
          <h3 class="business-name" id="${esc(b.id)}-name">${esc(b.name)}</h3>
          <div class="business-meta">
            ${status(b.status)}
            <span class="business-kind">${esc(b.kind)}</span>
          </div>
        </div>
        ${photo(b.image, { ratio: "21/8", mark: b.name, wide: true, color: b.color })}
        <div class="business-body">
          <p class="business-summary">${esc(b.summary)}</p>
          <div class="business-side">
            <dl><dt>Mi papel</dt><dd>${esc(b.role)}</dd></dl>
            ${b.url ? `<a class="text-link" href="${esc(b.url)}"${linkAttrs(b.url)}>${esc(b.urlLabel || "Visitar web")}</a>` : ""}
          </div>
        </div>
      </article>`
      )
      .join("");

  /* 4. Sobre mí */
  R.story = () => `
    <div class="story">
      <figure class="story-photo">${photo(S.photos.about, { ratio: "4/5", mark: "G" })}</figure>
      <div class="story-main">
        <h2 class="h2" id="story-title">${esc(S.story.title)}</h2>
        <ol class="chapters">
          ${S.story.chapters
            .map(
              (c) => `
            <li class="chapter reveal">
              <p class="chapter-period">${esc(c.period)}</p>
              <h3 class="h3">${esc(c.title)}</h3>
              <p>${esc(c.text)}</p>
            </li>`
            )
            .join("")}
        </ol>
        <a class="text-link story-cta" href="${esc(S.person.cv)}" target="_blank" rel="noopener">Descargar mi CV (PDF)</a>
      </div>
    </div>`;

  /* 5. Trayectoria */
  R.timeline = () => `
    <ol class="timeline">
      ${S.timeline
        .map(
          (t) => `
        <li class="timeline-item${t.current ? " is-current" : ""}">
          <span class="timeline-years">${esc(t.years)}</span>
          <div class="timeline-what"><h3>${esc(t.title)}</h3><p>${esc(t.place)}</p></div>
          <span class="timeline-type type--${t.type === "Experiencia" ? "work" : "study"}">${esc(t.type)}</span>
        </li>`
        )
        .join("")}
    </ol>`;

  R.learning = () =>
    !S.learningProjects?.length
      ? ""
      : `
    <div class="learning">
      <h3 class="h3">Proyectos de aprendizaje</h3>
      <p>Lo que construí mientras estudiaba. El código está en GitHub.</p>
      <ul>
        ${S.learningProjects
          .map((p) => `<li><a href="${esc(p.url)}"${linkAttrs(p.url)}><span>${esc(p.name)}</span><span>${esc(p.stack)}</span></a></li>`)
          .join("")}
      </ul>
    </div>`;

  /* 6. Ahora */
  R.now = () => `
    <div class="now">
      <div class="now-head">
        <h2 class="h2" id="ahora-title">En qué estoy ahora</h2>
        <p>Actualizado: ${esc(S.now.updated)}</p>
      </div>
      <ul class="now-list">
        ${S.now.items
          .map((i) => `<li class="now-item"><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p>${status(i.status)}</li>`)
          .join("")}
      </ul>
    </div>`;

  /* 7. YouTube */
  R.youtube = () => {
    const y = S.youtube;
    const has = y.videos?.length > 0;
    const button = y.channelUrl
      ? `<a class="btn btn-solid" href="${esc(y.channelUrl)}" target="_blank" rel="noopener">Ver el canal</a>`
      : `<span class="btn btn-line" aria-disabled="true">Canal próximamente</span>`;
    const cards = has
      ? y.videos
          .map(
            (v) => `
        <a class="video" href="https://www.youtube.com/watch?v=${esc(v.youtubeId)}" target="_blank" rel="noopener">
          <div class="video-frame"><img src="https://i.ytimg.com/vi/${esc(v.youtubeId)}/hqdefault.jpg" alt="" loading="lazy"></div>
          <h3>${esc(v.title)}</h3>${v.date ? `<p>${esc(v.date)}</p>` : ""}
        </a>`
          )
          .join("")
      : [1, 2, 3].map(() => `<div class="video video--soon" aria-hidden="true"><div class="video-frame"><span class="play"></span><span>Próximo vídeo</span></div></div>`).join("");
    return `
      <div class="content-head">
        <h2 class="h2" id="contenido-title">${has ? "Vídeos" : "Contenido en camino"}</h2>
        <div class="content-head-side"><p>${esc(y.intro)}</p>${button}</div>
      </div>
      <div class="videos">${cards}</div>`;
  };

  /* Escritos (futuro) */
  R.articles = () =>
    !S.articles?.length
      ? null
      : `
    <header class="block-head"><h2 class="h2" id="escritos-title">Escritos</h2></header>
    <div class="articles">
      ${S.articles
        .map((a) => `<a class="article" href="${esc(a.url)}"${linkAttrs(a.url)}><p>${esc(a.date)}</p><h3 class="h3">${esc(a.title)}</h3><p>${esc(a.excerpt || "")}</p></a>`)
        .join("")}
    </div>`;

  /* Galería (futuro) */
  R.gallery = () =>
    !S.gallery?.length
      ? null
      : `
    <header class="block-head"><h2 class="h2" id="galeria-title">Fotografías</h2></header>
    <div class="gallery">${S.gallery.map((g) => photo(g, { ratio: g.ratio || "4/5" })).join("")}</div>`;

  /* 8. Contacto */
  R.contact = () => {
    const p = S.person;
    return `
    <div class="contact-grid">
      <h2 class="contact-title" id="contacto-title">${esc(S.contact.title)}</h2>
      <p class="contact-text">${esc(S.contact.text)}</p>
      <div class="contact-main">
        <a class="contact-mail" href="mailto:${esc(p.email)}">${esc(p.email)}</a>
        <div class="contact-actions">
          <a class="btn btn-solid" href="mailto:${esc(p.email)}">Escribirme</a>
          <button class="btn btn-line" type="button" data-copy="${esc(p.email)}">Copiar email</button>
        </div>
        <ul class="contact-list">
          <li><a href="${esc(p.phoneHref)}"><span>Teléfono</span><small>${esc(p.phone)}</small></a></li>
          ${p.links.map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener"><span>${esc(l.label)}</span><small>Abrir perfil</small></a></li>`).join("")}
        </ul>
      </div>
      <ul class="topics" aria-label="Temas de colaboración">
        ${S.contact.topics.map((t) => `<li>${esc(t)}</li>`).join("")}
      </ul>
    </div>`;
  };

  /* Pie */
  R.footer = () => `
    <span>© ${new Date().getFullYear()} ${esc(S.person.name)} · ${esc(S.person.city)}</span>
    <ul>${S.person.links.map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a></li>`).join("")}</ul>`;

  /* Montaje */
  document.querySelectorAll("[data-render]").forEach((el) => {
    const fn = R[el.dataset.render];
    if (!fn) return;
    const html = fn();
    const section = el.closest("section");
    if (html === null) { if (section) section.hidden = true; else el.hidden = true; return; }
    if (section && section.hidden) section.hidden = false;
    el.innerHTML = html;
  });

  document.querySelectorAll("[data-photo]").forEach((el) => {
    const key = el.dataset.photo;
    el.innerHTML = photo(S.photos[key], { ratio: el.dataset.ratio || "4/5", mark: "B", eager: key === "hero" });
  });
})();
