/* =============================================================
   CONTENIDO EN ESPAÑOL
   -------------------------------------------------------------
   - Ocultar algo sin borrarlo: visible: false
   - Un dato a null no se muestra en la web.
   - Fotos y capturas: copia la imagen en public/img/... y pon la
     ruta empezando por /img/...
   - Si cambias algo aquí, cámbialo también en en.ts.
   ============================================================= */

import type { SiteContent } from "./types";
import { tech } from "./shared";

export const es: SiteContent = {
  locale: "es",
  path: "/",
  ogLocale: "es_ES",
  seo: {
    title: "Benito Gallardo · Desarrollador y emprendedor en Málaga",
    description:
      "Soy Benito Gallardo, desarrollador de aplicaciones y emprendedor de Málaga. Mi historia, mi formación, mis proyectos y negocios, y lo que estoy construyendo.",
    jobTitle: "Desarrollador de aplicaciones y emprendedor",
  },

  ui: {
    skip: "Saltar al contenido",
    nav: [
      { href: "#sobre-mi", label: "Sobre mí" },
      { href: "#trayectoria", label: "Trayectoria" },
      { href: "#proyectos", label: "Proyectos" },
      { href: "#habilidades", label: "Habilidades" },
      { href: "#fuera", label: "Fuera del código" },
      { href: "#vision", label: "Visión" },
    ],
    navLabel: "Principal",
    talk: "Hablemos",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    switchTo: { href: "/en/", short: "EN", name: "English", lang: "en" },
    ctaProjects: "Ver proyectos y negocios",
    ctaContact: "Escríbeme",
    now: "Ahora",
    status: { activo: "Activo", publicado: "Publicado", desarrollo: "En desarrollo", idea: "Idea" },
    role: "Mi papel",
    tech: "Tecnologías",
    visit: "Visitar",
    goal: "Objetivo",
    aiLabel: "Sobre la IA:",
    copy: "Copiar correo",
    copied: "Copiado",
    footer: "Versión 2026 · en construcción",
  },

  hero: {
    version: "Málaga · versión 2026 · en construcción",
    greeting: ["Hola,", "soy Benito"],
    subtitle: "Desarrollador, emprendedor y una persona que nunca deja de aprender y construir.",
    /* Retrato vertical 4:5 (1200 × 1500 px, .webp). Mientras sea null se muestra la inicial. */
    photo: null,
    now: "Construyendo Benitek y aprendiendo a llevar un negocio.",
  },

  about: {
    label: "Sobre mí",
    statement: [
      "Empecé por la electricidad, seguí con los ordenadores y aprendí a crear aplicaciones. Hoy lo que más me motiva es usar lo que sé para ",
      "construir algo propio",
      ".",
    ],
    facts: [
      { term: "Base", value: "Málaga, España" },
      { term: "Oficio", value: "Aplicaciones y webs" },
      { term: "Construyendo", value: "Benitek" },
      { term: "Familia", value: "Somos 14 hermanos" },
      { term: "Entreno", value: "Calistenia y fuerza" },
      { term: "Leyendo", value: "El hombre en busca de sentido" },
    ],
    chapters: [
      {
        title: "De dónde vengo",
        text: "Vengo de una familia numerosa: somos catorce hermanos. Mi madre nos inculcó el esfuerzo, la humildad, la responsabilidad y la perseverancia. Son los valores con los que intento hacer todo lo demás, desde estudiar hasta sacar adelante un negocio.",
      },
      {
        title: "Primero, la electricidad y las máquinas",
        text: "Mi primera formación fue la FP Básica de Electricidad en los Salesianos. Después pasé a los ordenadores con el Grado Medio en Sistemas Microinformáticos y Redes, donde aprendí cómo funciona un equipo por dentro y cómo se conectan los sistemas.",
      },
      {
        title: "Una etapa en Italia",
        text: "En 2022 trabajé en Fantozzi, una empresa de Isernia. Añadía productos a su web, editaba imágenes con Photoshop y me ocupaba del mantenimiento de las impresoras: cambio de tóner y revisiones.",
      },
      {
        title: "Después, aprender a crear",
        text: "Con el Grado Superior en Desarrollo de Aplicaciones Multiplataforma descubrí lo que más me gustaba: empezar algo desde cero y verlo funcionar. Trabajé con Kotlin, C#, Angular y .NET. En 2024 lo puse en práctica en Haleteo, con diseño web y aplicaciones Android, y en 2025 terminé el Grado Superior en Desarrollo de Aplicaciones Web.",
      },
      {
        title: "Y entonces, los negocios",
        text: "Con el tiempo, programar dejó de ser lo único que me interesaba. Quería entender cómo funciona una empresa: cómo se consigue un cliente, cómo se pone un precio y cómo se cumple lo que se promete. De esa curiosidad nació Benitek, mi proyecto empresarial, que ahora mismo estoy desarrollando.",
      },
      {
        title: "Ahora",
        text: "Sigo aprendiendo en las dos direcciones, como desarrollador y como empresario. Esta web es el registro de ese camino y la iré actualizando a medida que avance.",
      },
    ],
  },

  timeline: {
    label: "Mi trayectoria",
    title: ["Cada etapa, ", "una versión", " mejor preparada."],
    lead: "Mi formación y mi experiencia, de lo más antiguo a lo más reciente.",
    /* POR CONFIRMAR: centros de SMR, DAM y DAW (place). */
    entries: [
      {
        visible: true,
        tag: "Formación · FP Básica",
        title: "Electricidad",
        focus: "Mi primera formación técnica",
        place: "Salesianos, Málaga",
        years: "2018 – 2020",
      },
      {
        visible: true,
        tag: "Formación · Grado Medio",
        title: "Sistemas Microinformáticos y Redes (SMR)",
        focus: "Hardware, sistemas operativos y redes",
        place: null,
        years: "2020 – 2022",
      },
      {
        visible: true,
        tag: "Experiencia · Italia",
        title: "Diseño web y soporte técnico",
        focus: "Productos en la web, edición de imágenes con Photoshop y mantenimiento de impresoras",
        place: "Fantozzi, Isernia",
        years: "2022",
      },
      {
        visible: true,
        tag: "Formación · Grado Superior",
        title: "Desarrollo de Aplicaciones Multiplataforma (DAM)",
        focus: "Kotlin, C#, Angular y .NET",
        place: null,
        years: "2022 – 2024",
      },
      {
        visible: true,
        tag: "Experiencia",
        title: "Diseño web y aplicaciones móviles",
        focus: "Diseño web y aplicaciones Android con Android Studio",
        place: "Haleteo, Estepona",
        years: "2024",
      },
      {
        visible: true,
        tag: "Formación · Grado Superior",
        title: "Desarrollo de Aplicaciones Web (DAW)",
        focus: "Desarrollo web de cliente y servidor",
        place: null,
        years: "2024 – 2025",
      },
      {
        visible: true,
        tag: "Ahora · Proyecto propio",
        title: "Fundador de Benitek",
        focus: "Mi proyecto empresarial de diseño y desarrollo web, en desarrollo",
        place: null,
        years: null,
        current: true,
      },
    ],
  },

  projects: {
    label: "Mis proyectos y negocios",
    title: ["Lo que estoy ", "construyendo", "."],
    lead: "Negocios propios, trabajos para clientes y proyectos personales, cada uno con su estado real.",
    filters: { all: "Todos", negocio: "Negocios propios", cliente: "Para clientes", personal: "Personales" },
    filterLabel: "Filtrar proyectos",
    items: [
      {
        id: "benitek",
        visible: true,
        kind: "negocio",
        label: "Proyecto empresarial propio",
        name: "Benitek",
        status: "desarrollo",
        summary:
          "Mi proyecto de diseño y desarrollo web. Su objetivo es ayudar a empresas y profesionales a tener una web moderna, hecha a medida y que funcione: diseño, desarrollo frontend, animaciones, optimización y funcionalidades adicionales cuando el proyecto las necesita.",
        role: "Fundador. Diseño, desarrollo y trato con los clientes.",
        tech: tech.benitek,
        url: "https://benitek.es/",
        urlLabel: "Visitar benitek.es",
        image: null, // Captura 21:8 (2100 × 800 px) en /img/proyectos/benitek.webp
        wide: true,
      },
      {
        id: "jt-rent",
        visible: true,
        kind: "cliente",
        label: "Web para cliente",
        name: "JT Rent",
        status: "publicado",
        summary:
          "Web para una empresa de alquiler de motos y scooters en Málaga. Los clientes consultan modelos y precios y reservan por WhatsApp.",
        role: "Diseño y desarrollo web",
        tech: tech.jtRent,
        url: "https://jt-rent.com/",
        urlLabel: "Visitar jt-rent.com",
        image: null, // POR CONFIRMAR: permiso del cliente para mostrar capturas (16:9)
      },
    ],
    nextSlot: {
      visible: true,
      label: "Próximo proyecto",
      name: "Lo siguiente",
      text: "Aquí irá el próximo negocio, proyecto tecnológico o idea.",
    },
  },

  skills: {
    label: "Habilidades",
    title: ["Lo que sé, lo que uso y ", "lo que estoy aprendiendo", "."],
    groups: [
      {
        id: "domino",
        title: "Lo que domino",
        text: "Lo que uso en proyectos reales.",
        items: ["HTML", "CSS", "JavaScript", "Desarrollo frontend", "Diseño web responsive", "Git y GitHub"],
      },
      {
        id: "trabajo",
        title: "Con lo que trabajo",
        text: "Mi día a día. Next.js lo estoy aprendiendo con ayuda de la IA.",
        items: ["Next.js", "Desarrollo de aplicaciones", "Integración y despliegue web", "IA para apoyar el desarrollo"],
      },
      {
        id: "experiencia",
        title: "Con lo que he trabajado",
        text: "Durante mi formación y en empresas.",
        items: ["Kotlin", "C#", "Angular", ".NET", "Android Studio", "Photoshop"],
      },
      {
        id: "aprendo",
        title: "Lo que estoy aprendiendo",
        text: "Lo que quiero dominar en los próximos años.",
        items: ["Emprendimiento", "Creación de negocios", "Marketing digital", "Ventas", "Inteligencia artificial", "Productividad", "Gestión de proyectos"],
      },
    ],
    aiNote:
      "la uso para avanzar más rápido en tareas concretas, como revisar código, explorar soluciones o aprender una herramienta nueva. La estrategia, las decisiones y el resultado final son míos.",
  },

  beyond: {
    label: "Más allá del código",
    title: "Lo que hago cuando cierro el portátil.",
    intro: "Casi todo lo que me interesa fuera del trabajo tiene algo en común: mejorar poco a poco y que se note.",
    interests: [
      {
        label: "Deporte",
        title: "Calistenia y fuerza",
        text: "Entreno con mi propio peso y trabajo la fuerza. Me gusta porque el progreso no se puede fingir: la repetición sale o no sale. Esa forma de medir avances la aplico también a todo lo demás.",
        big: true,
      },
      {
        label: "Desarrollo personal",
        title: "Disciplina y hábitos",
        text: "Trabajo la organización, los hábitos y la forma de pensar. Con varios proyectos a la vez, el orden es lo que me permite avanzar en todos.",
        big: true,
      },
      {
        label: "Lectura",
        title: "Negocios, finanzas y mente",
        text: "Leo para aprender lo que no se enseña en clase. Abajo están los libros que más me han aportado.",
      },
      {
        label: "Idiomas",
        title: "Inglés, en progreso",
        text: "Lo estoy estudiando para mejorar mi nivel. Buena parte de lo que merece la pena aprender en tecnología y negocios está en inglés.",
      },
      {
        label: "Emprendimiento",
        title: "Ver oportunidades",
        text: "Me fijo en cómo funcionan los negocios que me rodean: qué venden, cómo cobran y por qué unos funcionan y otros no.",
      },
    ],
    booksTitle: "Libros que me han marcado",
    readingNow: "Leyendo ahora",
    books: [
      { title: "Hábitos atómicos", author: "James Clear" },
      { title: "Invicto", author: "Marcos Vázquez" },
      { title: "Padre rico, padre pobre", author: "Robert Kiyosaki y Sharon Lechter" },
      { title: "Los secretos de la mente millonaria", author: "T. Harv Eker" },
      { title: "El hombre en busca de sentido", author: "Viktor Frankl", reading: true },
    ],
  },

  vision: {
    label: "Mi visión",
    title: ["Nada de esto está hecho. ", "Es hacia donde voy.", ""],
    intro: "Mi principal motivación es crecer como persona y como empresario.",
    goals: [
      { title: "Hacer crecer Benitek", text: "Terminar de construirlo y convertirlo en un negocio estable, con clientes que vuelvan." },
      { title: "Crear más negocios propios", text: "Lanzar nuevos proyectos, también fuera del desarrollo web, y aprender de cada uno." },
      { title: "Seguir creciendo en tecnología", text: "Profundizar en inteligencia artificial y en el desarrollo de productos digitales." },
      { title: "Independencia económica", text: "Construir algo que me dé libertad y me permita ayudar a mi familia." },
      {
        title: "Devolverle a mi madre lo que nos ha dado",
        text: "Es uno de mis mayores sueños: recompensarla por todo lo que ha hecho por nosotros y ofrecerle una vida mejor.",
        highlight: true,
      },
    ],
  },

  contact: {
    label: "Contacto",
    title: ["¿", "Hablamos", "?"],
    text: "Si quieres colaborar, compartir una idea, proponerme un proyecto o simplemente conocerme, escríbeme. Te respondo yo.",
  },
};
