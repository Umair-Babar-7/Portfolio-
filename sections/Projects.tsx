"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/constants";

const filters = [
  "All work",
  "Machine learning",
  "Data science",
  "NLP",
] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All work");
  const visible = PROJECTS.filter(
    (project) =>
      filter === "All work" ||
      (filter === "Data science"
        ? project.id.includes("cleaning")
        : filter === "NLP"
          ? project.id.includes("sentiment")
          : !project.id.includes("cleaning") &&
            !project.id.includes("sentiment")),
  );
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="projects-heading">
          <SectionTitle
            subtitle="Selected work"
            title="Built with curiosity. Backed by data."
            description="A collection of ideas turned into practical machine learning and data science projects."
            align="left"
          />
          <span className="section-index" aria-hidden="true">
            02 / WORK
          </span>
        </div>
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects"
        >
          {filters.map((label) => (
            <button
              key={label}
              type="button"
              aria-pressed={filter === label}
              onClick={() => setFilter(label)}
              className={filter === label ? "is-active" : ""}
            >
              {filter === label && (
                <motion.span
                  layoutId="project-filter"
                  className="filter-indicator"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">
          {visible.length} projects shown
        </p>
        <motion.div layout className="project-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={PROJECTS.indexOf(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
