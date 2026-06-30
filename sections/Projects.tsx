"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/constants";

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          subtitle="Projects"
          title="Featured Work"
          description="Real-world machine learning projects showcasing end-to-end development skills."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
