"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import { ProjectVisual } from "@/components/ProjectVisual";
import { useMotionPreferences } from "@/components/MotionPreferences";
import type { Project } from "@/types";

export const ProjectCard = forwardRef<
  HTMLElement,
  { project: Project; index?: number }
>(function ProjectCard({ project, index = 0 }, ref) {
  const { reduceMotion } = useMotionPreferences();
  return (
    <motion.article
      ref={ref}
      layout={!reduceMotion}
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: Math.min(index, 2) * 0.07 }}
      className="project-article"
    >
      <TiltCard className="project-card">
        <ProjectVisual id={project.id} />
        <div className="project-content">
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="project-kicker">
              {project.id.includes("cleaning")
                ? "DATA SCIENCE"
                : project.id.includes("sentiment")
                  ? "NATURAL LANGUAGE"
                  : "MACHINE LEARNING"}
            </span>
            <span className="font-mono text-xs text-navy-400">
              0{index + 1}
            </span>
          </div>
          <h3 className="font-heading text-2xl font-semibold tracking-tight text-navy-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate dark:text-navy-400">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="project-tech">
                {tech}
              </span>
            ))}
          </div>
          <div className="project-links">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
            >
              <Github size={16} /> Source code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-demo"
              aria-label={`View ${project.title} demo`}
            >
              View project <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </TiltCard>
    </motion.article>
  );
});
