/* =============================================================
   CONTENIDO DE LA WEB
   -------------------------------------------------------------
   Todo lo que se puede editar está aquí. No hace falta tocar
   el HTML para añadir negocios, fotos, vídeos o experiencias.

   - Para ocultar algo sin borrarlo: visible: false
   - Para añadir una foto: copia la imagen en assets/img/... y
     pon su ruta en "src". Si "src" está vacío se muestra un
     espacio reservado.
   - Las secciones con listas vacías (artículos, galería...) no
     se muestran hasta que tengan contenido.
   ============================================================= */

window.SITE = {
  person: {
    name: "Benito Gallardo Peral",
    shortName: "Benito",
    city: "Málaga",
    email: "benito.gallardoperal@outlook.com",
    phone: "+34 722 84 69 18",
    phoneHref: "tel:+34722846918",
    cv: "./pdf/CV-BenitoGallardoDEV.pdf",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/benito-gallardo-peral/" },
      { label: "GitHub", url: "https://github.com/BenitoCode" },
      // { label: "YouTube", url: "https://www.youtube.com/@..." },
      // { label: "Instagram", url: "https://www.instagram.com/..." },
    ],
  },

  /* Fotografías personales. Deja src: "" hasta tenerlas.
     Tamaños recomendados: hero 1200×1500 (4:5), about 1200×1500. */
  photos: {
    hero: { src: "", alt: "Benito Gallardo en Málaga" },
    about: { src: "", alt: "Benito Gallardo trabajando" },
  },

  /* Franja animada bajo la portada */
  marquee: ["Emprendedor", "Desarrollador web", "Málaga", "Benitek", "JT Rent", "Construyendo en público"],

  /* 1. Presentación personal */
  intro: {
    statement:
      "Me llamo Benito Gallardo. Soy de Málaga, vengo del desarrollo web y ahora estoy usando lo que sé para construir mis propios negocios.",
    facts: [
      { term: "Base", value: "Málaga, España" },
      { term: "Oficio", value: "Diseño y desarrollo web" },
      { term: "Ahora", value: "Construyendo Benitek" },
    ],
  },

  /* 2. Visión. Reescríbela con tus palabras cuando quieras. */
  vision: {
    title: "Construir cosas que la gente use",
    principles: [
      {
        title: "Lo real antes que lo perfecto",
        text: "Prefiero un proyecto pequeño funcionando para un cliente de verdad que una idea perfecta guardada en un cajón.",
      },
      {
        title: "Aprender construyendo",
        text: "Cada negocio es también una forma de aprender lo que no se enseña en clase: vender, cobrar, cumplir plazos y escuchar al cliente.",
      },
      {
        title: "Contarlo tal como es",
        text: "Esta web enseña lo que hay: lo que está terminado, lo que está en marcha y lo que todavía es solo una idea.",
      },
    ],
  },

  /* 3. Negocios y proyectos.
     status: "activo" | "desarrollo" | "exploracion" | "entregado" */
  businesses: [
    {
      id: "benitek",
      visible: true,
      name: "Benitek",
      kind: "Mi negocio",
      color: "#2F5BFF", // color de la tarjeta
      colorInk: "#ffffff",
      status: "desarrollo",
      summary: "Mi propio negocio de diseño y desarrollo web. Ahora mismo estoy preparando la marca, los servicios y la forma de trabajar.",
      role: "Fundador",
      url: "",
      image: { src: "", alt: "" },
    },
    {
      id: "jt-rent",
      visible: true,
      name: "JT Rent",
      kind: "Proyecto para cliente",
      color: "#FFC83D",
      colorInk: "#0A1A3F",
      status: "entregado",
      summary: "Web para una empresa real de alquiler de motos y scooters en Málaga. Los clientes consultan modelos, precio y disponibilidad y reservan por WhatsApp.",
      role: "Diseño y desarrollo web",
      url: "https://jt-rent.com/",
      urlLabel: "Ver jt-rent.com",
      image: { src: "", alt: "Página de inicio de jt-rent.com" },
    },
    {
      id: "sift",
      visible: false, // Oculto por defecto. Cambia a true para mostrarlo.
      name: "SIFT",
      kind: "Idea de negocio",
      color: "#14A37F",
      colorInk: "#ffffff",
      status: "exploracion",
      summary: "Una idea empresarial que estoy explorando. Todavía no es un producto.",
      role: "Fundador",
      url: "",
      image: { src: "", alt: "" },
    },
  ],

  /* 4. Sobre mí: historia por capítulos.
     Reescribe los textos con tus palabras; ahora solo cuentan hechos de tu CV. */
  story: {
    title: "De los cables al código, y del código a los negocios",
    chapters: [
      {
        period: "2018 – 2020",
        title: "Empecé por la electricidad",
        text: "Mi primera formación fue Electricidad y Electrónica en los Salesianos de Málaga. Ahí aprendí a montar, a medir y a arreglar las cosas con las manos.",
      },
      {
        period: "2020 – 2024",
        title: "Del hardware al software",
        text: "Pasé a Sistemas Microinformáticos y Redes y después al Grado Superior de Desarrollo de Aplicaciones Multiplataforma en el CPIFP Alan Turing. Ahí descubrí que lo que más me gustaba era crear cosas desde cero.",
      },
      {
        period: "2022",
        title: "Mi primer trabajo, fuera de España",
        text: "Trabajé como diseñador web en una empresa de Isernia, en Italia, actualizando productos e imágenes de su web con WordPress y Photoshop.",
      },
      {
        period: "2024",
        title: "Programar para una empresa",
        text: "En Haleteo, en Estepona, trabajé como programador: aplicaciones móviles con Kotlin, diseño web y web scraping con C#.",
      },
      {
        period: "Hoy",
        title: "Construir lo mío",
        text: "Estudio el Grado Superior de Desarrollo de Aplicaciones Web en Digitech Málaga, he hecho la web de JT Rent y estoy montando Benitek, mi propio negocio.",
      },
    ],
  },

  /* 5. Formación y trayectoria (de más reciente a más antigua). */
  timeline: [
    { years: "2024 – hoy", type: "Formación", title: "Grado Superior en Desarrollo de Aplicaciones Web", place: "Digitech Málaga", current: true },
    { years: "2024", type: "Experiencia", title: "Programador", place: "Haleteo, Estepona" },
    { years: "2022 – 2024", type: "Formación", title: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma", place: "CPIFP Alan Turing, Málaga" },
    { years: "2022", type: "Experiencia", title: "Diseñador web", place: "Isernia, Italia" },
    { years: "2020 – 2022", type: "Formación", title: "Grado Medio en Sistemas Microinformáticos y Redes", place: "IES Cánovas del Castillo, Málaga" },
    { years: "2018 – 2020", type: "Formación", title: "FP Básica en Electricidad y Electrónica", place: "IES Salesianos, Málaga" },
  ],

  /* Proyectos de aprendizaje (se muestran dentro de Trayectoria). */
  learningProjects: [
    { name: "HomeSolution", stack: "Angular · .NET API REST", url: "https://github.com/AmandaCode1/HomeSolution" },
    { name: "ECommerceRazor", stack: ".NET Razor Pages · Entity Framework", url: "https://github.com/BenitoCode/EcommerceRazor" },
    { name: "Pokédex", stack: "Angular · API pública", url: "https://github.com/BenitoCode/Pokedex" },
    { name: "Happy Pets", stack: "HTML · CSS · JavaScript", url: "https://happypets-example.netlify.app/" },
    { name: "Knife-Up", stack: "HTML · CSS · JavaScript", url: "https://github.com/BenitoCode/Nkife-UP" },
  ],

  /* 6. En qué estoy trabajando. Actualiza la fecha al cambiarlo. */
  now: {
    updated: "Octubre de 2026",
    items: [
      { title: "Benitek", text: "Definiendo marca, servicios y precios.", status: "desarrollo" },
      { title: "Grado en Desarrollo de Aplicaciones Web", text: "Cursando en Digitech Málaga.", status: "activo" },
      { title: "Canal de YouTube", text: "Preparando los primeros vídeos.", status: "desarrollo" },
    ],
  },

  /* 7. YouTube. Cuando tengas canal, pon la URL y añade vídeos:
     { title: "...", youtubeId: "dQw4w9WgXcQ", date: "Noviembre 2026" } */
  youtube: {
    channelUrl: "",
    intro: "Voy a contar en vídeo cómo construyo mis negocios: lo que funciona, lo que no y lo que voy aprendiendo por el camino.",
    videos: [],
  },

  /* Futuras secciones: se muestran solas cuando tengan contenido. */
  articles: [
    // { title: "...", date: "Noviembre 2026", url: "...", excerpt: "..." }
  ],
  gallery: [
    // { src: "assets/img/fotos/....webp", alt: "..." }
  ],

  /* 8. Contacto y colaboraciones */
  contact: {
    title: "Hablemos",
    text: "Si tienes un proyecto, una propuesta de colaboración o quieres hablar de negocios, escríbeme. Contesto personalmente.",
    topics: ["Webs para negocios", "Colaboraciones", "Proyectos en equipo", "Contenido y entrevistas"],
  },
};
