"use client";

import { useState } from "react";
import Image from "next/image";
import { site, statusLabel, type Project, type ProjectKind } from "@/content/site";
import SectionHead from "./SectionHead";

const filters: { id: ProjectKind | "all"; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "negocio", label: "Negocios propios" },
  { id: "cliente", label: "Para clientes" },
  { id: "personal", label: "Personales" },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project rv${project.wide ? " wide" : ""}`}>
      {project.image ? (
        <div className="shot">
          <Image src={project.image.src} alt={project.image.alt} width={project.wide ? 2100 : 1600} height={project.wide ? 800 : 900} />
        </div>
      ) : (
        <div className={`shot shot-empty shot-${project.id}`} aria-hidden="true"><span>{project.name}</span></div>
      )}
      <div className="project-body">
        <div className="project-top">
          <span className="label">{project.label}</span>
          {project.status ? <span className={`status status-${project.status}`}>{statusLabel[project.status]}</span> : null}
        </div>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        {project.role || project.tech ? (
          <dl className="specs">
            {project.role ? (<><dt>Mi papel</dt><dd>{project.role}</dd></>) : null}
            {project.tech ? (<><dt>Tecnologías</dt><dd>{project.tech.join(", ")}</dd></>) : null}
          </dl>
        ) : null}
        {project.url ? (
          <a className="link" href={project.url} target="_blank" rel="noopener">
            {project.urlLabel ?? "Visitar"} <span aria-hidden="true">↗</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function Projects() {
  const projects = site.projects.filter((project) => project.visible);
  const [active, setActive] = useState<ProjectKind | "all">("all");
  const available = filters.filter((filter) => filter.id === "all" || projects.some((project) => project.kind === filter.id));
  const shown = active === "all" ? projects : projects.filter((project) => project.kind === active);

  return (
    <section className="section" id="proyectos" aria-labelledby="proyectos-titulo">
      <div className="wrap">
        <SectionHead
          label="Mis proyectos y negocios"
          id="proyectos-titulo"
          title={<>Lo que estoy <mark>construyendo</mark>.</>}
          lead="Negocios propios, trabajos para clientes y proyectos personales, cada uno con su estado real."
        />
        {available.length > 2 ? (
          <div className="filters" role="group" aria-label="Filtrar proyectos">
            {available.map((filter) => (
              <button key={filter.id} type="button" className="chip" aria-pressed={active === filter.id} onClick={() => setActive(filter.id)}>
                {filter.label}
              </button>
            ))}
          </div>
        ) : null}
        <div className="projects">
          {shown.map((project) => <ProjectCard key={project.id} project={project} />)}
          {site.nextSlot.visible && active === "all" ? (
            <article className="project empty rv">
              <div className="project-body">
                <span className="label">{site.nextSlot.label}</span>
                <h3>{site.nextSlot.name}</h3>
                <p>{site.nextSlot.text}</p>
              </div>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
}
