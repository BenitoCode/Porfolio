/* =============================================================
   CONTENIDO DE LA WEB
   -------------------------------------------------------------
   Todo lo que se puede editar está aquí. No hace falta tocar
   los componentes para cambiar textos, añadir proyectos o fotos.

   - Ocultar algo sin borrarlo: visible: false
   - Un dato a null no se muestra en la web. Los marcados con
     «POR CONFIRMAR» esperan a que Benito los confirme.
   - Fotos y capturas: copia la imagen en public/img/... y pon la
     ruta empezando por /img/...
   ============================================================= */

export type Status = "activo" | "publicado" | "desarrollo" | "idea";
export type ProjectKind = "negocio" | "cliente" | "personal";

export type Image = { src: string; alt: string };

export type Project = {
  id: string;
  visible: boolean;
  kind: ProjectKind;
  label: string;
  name: string;
  status: Status | null;
  summary: string;
  role: string | null;
  tech: string[] | null;
  url: string | null;
  urlLabel?: string;
  image: Image | null;
  wide?: boolean;
};

export type TimelineEntry = {
  visible: boolean;
  kind: "Formación" | "Experiencia";
  level: string;
  title: string;
  focus: string;
  place: string | null;
  years: string | null;
  current?: boolean;
};

export const site = {
  /* Dominio definitivo, sin barra final (ej.: "https://benitogallardo.es").
     POR CONFIRMAR: mientras esté vacío no se generan canonical ni sitemap. */
  url: "",

  person: {
    name: "Benito Gallardo",
    fullName: "Benito Gallardo Peral",
    city: "Málaga",
    /* POR CONFIRMAR: correo público. Mientras sea null no aparece. */
    email: null as string | null,
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/benito-gallardo-peral/" },
      { label: "GitHub", url: "https://github.com/BenitoCode" },
    ],
  },

  seo: {
    title: "Benito Gallardo · Desarrollador y emprendedor en Málaga",
    description:
      "Soy Benito Gallardo, desarrollador de aplicaciones y emprendedor de Málaga. Mi historia, mi formación, mis proyectos y negocios, y lo que estoy construyendo.",
  },

  hero: {
    version: "Málaga · versión 2026 · en construcción",
    greeting: ["Hola,", "soy Benito"],
    subtitle: "Desarrollador, emprendedor y una persona que nunca deja de aprender y construir.",
    /* Retrato vertical 4:5 (1200 × 1500 px, .webp). Mientras sea null se muestra el sol con la inicial. */
    photo: null as Image | null,
    now: "Construyendo Benitek y aprendiendo a llevar un negocio.",
  },

  about: {
    statement: [
      "Empecé estudiando cómo funcionan los ordenadores. Después aprendí a crear aplicaciones. Hoy lo que más me motiva es usar lo que sé para ",
      "construir algo propio",
      ".",
    ] as const,
    facts: [
      { term: "Base", value: "Málaga, España" },
      { term: "Oficio", value: "Aplicaciones y webs" },
      { term: "Construyendo", value: "Benitek" },
      { term: "Entreno", value: "Calistenia y fuerza" },
    ],
    chapters: [
      {
        title: "Primero, entender las máquinas",
        text: "Mi primer paso serio en la informática fue el Grado Medio en Sistemas Microinformáticos y Redes. Aprendí cómo funciona un equipo por dentro y cómo se conectan los sistemas entre sí. Fue la base de todo lo que vino después.",
      },
      {
        title: "Después, aprender a crear",
        text: "Con el Grado Superior en Desarrollo de Aplicaciones Multiplataforma descubrí lo que más me gustaba: empezar algo desde cero y verlo funcionar. Luego seguí con el de Desarrollo de Aplicaciones Web para centrarme en la web.",
      },
      {
        title: "Y entonces, los negocios",
        text: "Con el tiempo, programar dejó de ser lo único que me interesaba. Quería entender cómo funciona una empresa: cómo se consigue un cliente, cómo se pone un precio y cómo se cumple lo que se promete. De esa curiosidad nació Benitek, mi primer proyecto empresarial.",
      },
      {
        title: "Ahora",
        text: "Sigo aprendiendo en las dos direcciones, como desarrollador y como empresario. Esta web es el registro de ese camino y la iré actualizando a medida que avance.",
      },
    ],
  },

  /* Trayectoria, de la más antigua a la más reciente.
     POR CONFIRMAR: centros (place), años (years) y si DAW está terminado (current). */
  timeline: [
    {
      visible: true,
      kind: "Formación",
      level: "Grado Medio",
      title: "Sistemas Microinformáticos y Redes (SMR)",
      focus: "Hardware, sistemas operativos y redes",
      place: null,
      years: null,
    },
    {
      visible: true,
      kind: "Formación",
      level: "Grado Superior",
      title: "Desarrollo de Aplicaciones Multiplataforma (DAM)",
      focus: "Aplicaciones de escritorio y móviles",
      place: null,
      years: null,
    },
    {
      visible: true,
      kind: "Formación",
      level: "Grado Superior",
      title: "Desarrollo de Aplicaciones Web (DAW)",
      focus: "Desarrollo web de cliente y servidor",
      place: null,
      years: null,
      current: true,
    },
    /* Experiencia profesional: añade aquí solo trabajos confirmados. Ejemplo:
    { visible: true, kind: "Experiencia", level: "Empleo", title: "Programador", focus: "…", place: "…", years: "…" }, */
  ] satisfies TimelineEntry[] as TimelineEntry[],

  /* Proyectos y negocios. Para añadir uno, copia un bloque. */
  projects: [
    {
      id: "benitek",
      visible: true,
      kind: "negocio",
      label: "Negocio propio",
      name: "Benitek",
      status: null, // POR CONFIRMAR: "activo" o "desarrollo"
      summary:
        "Mi negocio de diseño y desarrollo web. Ayudo a empresas y profesionales a tener una web moderna, hecha a medida y que funcione: diseño, desarrollo frontend, animaciones, optimización y funcionalidades adicionales cuando el proyecto las necesita.",
      role: "Fundador. Diseño, desarrollo y trato con los clientes.",
      tech: ["HTML", "CSS", "JavaScript"],
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
      tech: null, // POR CONFIRMAR
      url: "https://jt-rent.com/",
      urlLabel: "Visitar jt-rent.com",
      image: null, // POR CONFIRMAR: permiso del cliente para mostrar capturas (16:9)
    },
  ] satisfies Project[] as Project[],

  /* Tarjeta reservada para el próximo proyecto. Pon visible: false para quitarla. */
  nextSlot: {
    visible: true,
    label: "Próximo proyecto",
    name: "Lo siguiente",
    text: "Aquí irá el próximo negocio, proyecto tecnológico o idea.",
  },

  skills: {
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
        text: "Herramientas y procesos de mi día a día.",
        items: ["Next.js", "Desarrollo de aplicaciones", "Integración y despliegue web", "IA para apoyar el desarrollo"],
      },
      {
        id: "aprendo",
        title: "Lo que estoy aprendiendo",
        text: "Lo que quiero dominar en los próximos años.",
        items: ["Emprendimiento", "Creación de negocios", "Marketing digital", "Ventas", "Inteligencia artificial", "Productividad", "Gestión de proyectos"],
      },
    ],
    aiNote:
      "la uso para avanzar más rápido en tareas concretas, como revisar código o explorar soluciones. La estrategia, las decisiones y el resultado final son míos.",
  },

  beyond: {
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
        title: "Negocios, finanzas y tecnología",
        text: "Leo para aprender lo que no se enseña en clase.",
      },
      {
        label: "Idiomas",
        title: "Inglés, en progreso",
        text: "Estoy trabajando para mejorarlo. Buena parte de lo que merece la pena aprender en tecnología y negocios está en inglés.",
      },
      {
        label: "Emprendimiento",
        title: "Ver oportunidades",
        text: "Me fijo en cómo funcionan los negocios que me rodean: qué venden, cómo cobran y por qué unos funcionan y otros no.",
      },
    ],
    /* POR CONFIRMAR: libros que te hayan marcado. La lista aparece cuando tenga contenido.
       Ejemplo: { title: "…", author: "…" } */
    books: [] as { title: string; author: string }[],
  },

  vision: {
    title: ["Nada de esto está hecho. ", "Es hacia donde voy."] as const,
    goals: [
      { title: "Hacer crecer Benitek", text: "Convertirlo en un negocio estable, con clientes que vuelvan y una forma de trabajar que pueda crecer." },
      { title: "Crear más negocios propios", text: "Lanzar nuevos proyectos, también fuera del desarrollo web, y aprender de cada uno." },
      { title: "Seguir creciendo en tecnología", text: "Profundizar en inteligencia artificial y en el desarrollo de productos digitales." },
      { title: "Independencia económica", text: "Construir algo que me dé libertad y cree oportunidades para mí y para mi familia." },
    ],
  },

  contact: {
    text: "Si quieres colaborar, compartir una idea, proponerme un proyecto o simplemente conocerme, escríbeme. Te respondo yo.",
  },
};

export const statusLabel: Record<Status, string> = {
  activo: "Activo",
  publicado: "Publicado",
  desarrollo: "En desarrollo",
  idea: "Idea",
};
