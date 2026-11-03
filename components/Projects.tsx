"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project, ProjectKind, SiteContent } from "@/content/types";
import SectionHead from "./SectionHead";
import Marked from "./Marked";

const kinds: (ProjectKind | "all")[] = ["all", "negocio", "cliente", "personal"];

function ProjectCard({ project, ui }: { project: Project; ui: SiteContent["ui"] }) {
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
          {project.status ? <span className={`status status-${project.status}`}>{ui.status[project.status]}</span> : null}
        </div>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        {project.role || project.tech ? (
          <dl className="specs">
            {project.role ? (<><dt>{ui.role}</dt><dd>{project.role}</dd></>) : null}
            {project.tech ? (<><dt>{ui.tech}</dt><dd>{project.tech.join(", ")}</dd></>) : null}
          </dl>
        ) : null}
        {project.url ? (
          <a className="link" href={project.url} target="_blank" rel="noopener">
            {project.urlLabel ?? ui.visit} <span aria-hidden="true">↗</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function Projects({ c }: { c: SiteContent }) {
  const { projects, ui } = c;
  const items = projects.items.filter((project) => project.visible);
  const [active, setActive] = useState<ProjectKind | "all">("all");
  const available = kinds.filter((kind) => kind === "all" || items.some((project) => project.kind === kind));
  const shown = active === "all" ? items : items.filter((project) => project.kind === active);

  return (
    <section className="section" id="proyectos" aria-labelledby="proyectos-titulo">
      <div className="wrap">
        <SectionHead label={projects.label} id="proyectos-titulo" title={<Marked text={projects.title} />} lead={projects.lead} />
        {available.length > 2 ? (
          <div className="filters" role="group" aria-label={projects.filterLabel}>
            {available.map((kind) => (
              <button key={kind} type="button" className="chip" aria-pressed={active === kind} onClick={() => setActive(kind)}>
                {projects.filters[kind]}
              </button>
            ))}
          </div>
        ) : null}
        <div className="projects">
          {shown.map((project) => <ProjectCard key={project.id} project={project} ui={ui} />)}
          {projects.nextSlot.visible && active === "all" ? (
            <article className="project empty rv">
              <div className="project-body">
                <span className="label">{projects.nextSlot.label}</span>
                <h3>{projects.nextSlot.name}</h3>
                <p>{projects.nextSlot.text}</p>
              </div>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
}
