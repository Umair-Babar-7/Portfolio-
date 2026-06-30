"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { fadeInUp, defaultViewport } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInUp}
      transition={{ delay: index * 0.08 }}
      className={cn("group relative", project.featured && "lg:col-span-2")}
    >
      <div className="glass-card relative h-full overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-glow-lg">
        <div className={cn("grid h-full", project.featured ? "lg:grid-cols-2" : "grid-cols-1")}>
          <div className="relative aspect-video overflow-hidden lg:min-h-[250px]">
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes={project.featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
          </div>

          <div className="relative flex flex-col justify-between p-6 lg:p-8">
            <div>
              <h3 className="font-heading text-xl font-bold text-navy-900 dark:text-white lg:text-2xl">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate dark:text-navy-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-navy-200 px-4 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:border-primary hover:text-primary dark:border-navy-600 dark:text-navy-200"
              >
                <Github className="h-4 w-4" />
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-orange-amber px-4 py-2.5 text-sm font-medium text-white shadow-glow"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
