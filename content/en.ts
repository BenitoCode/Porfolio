/* =============================================================
   ENGLISH CONTENT
   Mirrors es.ts. If you change something there, change it here too.
   ============================================================= */

import type { SiteContent } from "./types";
import { tech } from "./shared";

export const en: SiteContent = {
  locale: "en",
  path: "/en/",
  ogLocale: "en_US",
  seo: {
    title: "Benito Gallardo · Developer and entrepreneur in Málaga",
    description:
      "I'm Benito Gallardo, an application developer and entrepreneur from Málaga, Spain. My story, my education, my projects and businesses, and what I'm building next.",
    jobTitle: "Application developer and entrepreneur",
  },

  ui: {
    skip: "Skip to content",
    nav: [
      { href: "#sobre-mi", label: "About" },
      { href: "#trayectoria", label: "Journey" },
      { href: "#proyectos", label: "Projects" },
      { href: "#habilidades", label: "Skills" },
      { href: "#fuera", label: "Beyond code" },
      { href: "#vision", label: "Vision" },
      { href: "/blog/", label: "Blog (ES)" },
    ],
    navLabel: "Main",
    talk: "Let's talk",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    switchTo: { href: "/", short: "ES", name: "Español", lang: "es" },
    ctaProjects: "See projects and businesses",
    ctaContact: "Write to me",
    now: "Now",
    status: { activo: "Active", publicado: "Live", desarrollo: "In development", idea: "Idea" },
    role: "My role",
    tech: "Technologies",
    visit: "Visit",
    goal: "Goal",
    aiLabel: "On AI:",
    copy: "Copy email",
    copied: "Copied",
    footer: "Version 2026 · under construction",
  },

  now: {
    label: "Now",
    title: ["What I'm doing ", "this month", "."],
    updated: "November 2026",
    items: [
      { label: "Building", text: "Benitek: defining the brand, the services and the way I work." },
      { label: "Learning", text: "Next.js, with the help of AI, on real projects like this site." },
      { label: "Reading", text: "Man's Search for Meaning, by Viktor Frankl." },
      { label: "Training", text: "Calisthenics and strength." },
      { label: "Studying", text: "English, to improve my level." },
    ],
  },

  hero: {
    version: "Málaga · version 2026 · under construction",
    greeting: ["Hi,", "I'm Benito"],
    subtitle: "Developer, entrepreneur and someone who never stops learning and building.",
    photo: null,
    now: "Building Benitek and learning how to run a business.",
  },

  about: {
    label: "About me",
    statement: [
      "I started with electricity, moved on to computers and learned to build applications. Today, what drives me most is using what I know to ",
      "build something of my own",
      ".",
    ],
    facts: [
      { term: "Based in", value: "Málaga, Spain" },
      { term: "Craft", value: "Apps and websites" },
      { term: "Building", value: "Benitek" },
      { term: "Family", value: "One of 14 siblings" },
      { term: "Training", value: "Calisthenics and strength" },
      { term: "Reading", value: "Man's Search for Meaning" },
    ],
    chapters: [
      {
        title: "Where I come from",
        text: "I come from a big family: there are fourteen of us siblings. My mother taught us effort, humility, responsibility and perseverance. Those are the values I try to bring to everything else, from studying to getting a business off the ground.",
      },
      {
        title: "First, electricity and machines",
        text: "My first training was a basic vocational course in Electricity at the Salesianos school. Then I moved on to computers with a vocational diploma in Microcomputer Systems and Networks, where I learned how a computer works inside and how systems connect to each other.",
      },
      {
        title: "A stint in Italy",
        text: "In 2022 I worked at Fantozzi, a company in Isernia. I added products to their website, edited images in Photoshop and looked after their printers: toner changes and maintenance checks.",
      },
      {
        title: "Then, learning to build",
        text: "With my higher diploma in Multiplatform Application Development I found what I enjoyed most: starting something from scratch and seeing it work. I worked with Kotlin, C#, Angular and .NET. In 2024 I put it into practice at Haleteo, doing web design and Android apps, and in 2025 I finished my higher diploma in Web Application Development.",
      },
      {
        title: "And then, business",
        text: "Over time, coding stopped being the only thing I cared about. I wanted to understand how a company works: how you win a client, how you set a price and how you deliver on what you promise. That curiosity led to Benitek, my own business project, which I'm building right now.",
      },
      {
        title: "Now",
        text: "I keep learning in both directions, as a developer and as a business owner. This site is the log of that journey, and I'll keep updating it as I go.",
      },
    ],
  },

  timeline: {
    label: "My journey",
    title: ["Every stage, ", "a better-prepared version", "."],
    lead: "My education and experience, from oldest to most recent.",
    entries: [
      {
        visible: true,
        tag: "Education · Basic vocational course",
        title: "Electricity",
        focus: "My first technical training",
        place: "Salesianos, Málaga",
        years: "2018 – 2020",
      },
      {
        visible: true,
        tag: "Education · Vocational diploma",
        title: "Microcomputer Systems and Networks (SMR)",
        focus: "Hardware, operating systems and networks",
        place: null,
        years: "2020 – 2022",
      },
      {
        visible: true,
        tag: "Experience · Italy",
        title: "Web design and technical support",
        focus: "Website products, image editing in Photoshop and printer maintenance",
        place: "Fantozzi, Isernia",
        years: "2022",
      },
      {
        visible: true,
        tag: "Education · Higher diploma",
        title: "Multiplatform Application Development (DAM)",
        focus: "Kotlin, C#, Angular and .NET",
        place: null,
        years: "2022 – 2024",
      },
      {
        visible: true,
        tag: "Experience",
        title: "Web design and mobile apps",
        focus: "Web design and Android apps with Android Studio",
        place: "Haleteo, Estepona",
        years: "2024",
      },
      {
        visible: true,
        tag: "Education · Higher diploma",
        title: "Web Application Development (DAW)",
        focus: "Client-side and server-side web development",
        place: null,
        years: "2024 – 2025",
      },
      {
        visible: true,
        tag: "Now · My own project",
        title: "Founder of Benitek",
        focus: "My web design and development business, in development",
        place: null,
        years: null,
        current: true,
      },
    ],
  },

  projects: {
    label: "My projects and businesses",
    title: ["What I'm ", "building", "."],
    lead: "My own businesses, client work and personal projects, each with its real status.",
    filters: { all: "All", negocio: "My businesses", cliente: "Client work", personal: "Personal" },
    filterLabel: "Filter projects",
    items: [
      {
        id: "benitek",
        visible: true,
        kind: "negocio",
        label: "My own business project",
        name: "Benitek",
        status: "desarrollo",
        summary:
          "My web design and development project. Its goal is to help companies and professionals get a modern, made-to-measure website that works: design, frontend development, animation, optimisation and extra features when a project needs them.",
        role: "Founder. Design, development and client relations.",
        tech: tech.benitek,
        url: "https://benitek.es/",
        urlLabel: "Visit benitek.es",
        image: null,
        wide: true,
      },
      {
        id: "jt-rent",
        visible: true,
        kind: "cliente",
        label: "Client website",
        name: "JT Rent",
        status: "publicado",
        summary:
          "Website for a motorbike and scooter rental company in Málaga. Customers browse models and prices and book through WhatsApp.",
        role: "Web design and development",
        tech: tech.jtRent,
        url: "https://jt-rent.com/",
        urlLabel: "Visit jt-rent.com",
        image: null,
      },
    ],
    nextSlot: {
      visible: true,
      label: "Next project",
      name: "What's next",
      text: "My next business, tech project or idea will go here.",
    },
  },

  skills: {
    label: "Skills",
    title: ["What I know, what I use and ", "what I'm learning", "."],
    groups: [
      {
        id: "domino",
        title: "What I master",
        text: "What I use in real projects.",
        items: ["HTML", "CSS", "JavaScript", "Frontend development", "Responsive web design", "Git and GitHub"],
      },
      {
        id: "trabajo",
        title: "What I work with",
        text: "My day to day. I'm learning Next.js with the help of AI.",
        items: ["Next.js", "Application development", "Web integration and deployment", "AI-assisted development"],
      },
      {
        id: "experiencia",
        title: "What I've worked with",
        text: "During my studies and at companies.",
        items: ["Kotlin", "C#", "Angular", ".NET", "Android Studio", "Photoshop"],
      },
      {
        id: "aprendo",
        title: "What I'm learning",
        text: "What I want to master over the next few years.",
        items: ["Entrepreneurship", "Building businesses", "Digital marketing", "Sales", "Artificial intelligence", "Productivity", "Project management"],
      },
    ],
    aiNote:
      "I use it to move faster on specific tasks, like reviewing code, exploring solutions or learning a new tool. The strategy, the decisions and the final result are mine.",
  },

  beyond: {
    label: "Beyond code",
    title: "What I do when I close the laptop.",
    intro: "Almost everything I care about outside work has one thing in common: getting a little better and being able to see it.",
    interests: [
      {
        label: "Sport",
        title: "Calisthenics and strength",
        text: "I train with my own bodyweight and work on strength. I like it because progress can't be faked: either you get the rep or you don't. I apply that way of measuring progress to everything else too.",
        big: true,
      },
      {
        label: "Personal growth",
        title: "Discipline and habits",
        text: "I work on organisation, habits and mindset. With several projects at once, order is what lets me move all of them forward.",
        big: true,
      },
      {
        label: "Reading",
        title: "Business, money and mindset",
        text: "I read to learn what isn't taught in class. The books that have given me the most are below.",
      },
      {
        label: "Languages",
        title: "English, in progress",
        text: "I'm studying to improve my level. A lot of what's worth learning in tech and business is in English.",
      },
      {
        label: "Entrepreneurship",
        title: "Spotting opportunities",
        text: "I pay attention to how the businesses around me work: what they sell, how they charge and why some succeed and others don't.",
      },
    ],
    booksTitle: "Books that shaped me",
    readingNow: "Reading now",
    books: [
      { title: "Atomic Habits", author: "James Clear" },
      { title: "Invicto", author: "Marcos Vázquez" },
      { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki and Sharon Lechter" },
      { title: "Secrets of the Millionaire Mind", author: "T. Harv Eker" },
      { title: "Man's Search for Meaning", author: "Viktor Frankl", reading: true },
    ],
  },

  events: {
    label: "Events and collaborations",
    title: ["Where I've ", "been", "."],
    lead: "Talks, networking events, interviews and collaborations.",
    items: [],
  },

  blog: {
    label: "Blog",
    title: ["What I'm ", "learning", "."],
    lead: "I write about how I build my projects: what works, what doesn't and what I learn along the way.",
    note: "Articles are written in Spanish.",
    all: "See all articles",
    minutes: "{n} min read",
    draft: "Draft · not published",
    back: "Back to the blog",
    empty: "The first article is coming soon.",
  },

  vision: {
    label: "My vision",
    title: ["None of this is done yet. ", "It's where I'm heading.", ""],
    intro: "My main motivation is to grow as a person and as a business owner.",
    goals: [
      { title: "Grow Benitek", text: "Finish building it and turn it into a stable business with clients who come back." },
      { title: "Start more businesses of my own", text: "Launch new projects, including outside web development, and learn from each one." },
      { title: "Keep growing in tech", text: "Go deeper into artificial intelligence and digital product development." },
      { title: "Financial independence", text: "Build something that gives me freedom and lets me help my family." },
      {
        title: "Give back to my mother",
        text: "It's one of my biggest dreams: to repay her for everything she has done for us and give her a better life.",
        highlight: true,
      },
    ],
  },

  contact: {
    label: "Contact",
    title: ["", "Let's talk", "."],
    text: "If you'd like to collaborate, share an idea, pitch me a project or just get to know me, write to me. I'll reply myself.",
  },
};
