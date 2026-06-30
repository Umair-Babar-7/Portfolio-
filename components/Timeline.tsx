"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";
import type { ExperienceItem } from "@/types";

interface TimelineProps {
  items: readonly ExperienceItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={staggerContainer}
      className="relative mx-auto max-w-3xl"
    >
      {/* Vertical line */}
      <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-1/2 md:-translate-x-px" />

      {items.map((item, index) => (
        <motion.div
          key={item.id}
          variants={fadeInUp}
          className={`relative mb-12 flex items-start gap-8 md:gap-0 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Dot */}
          <div className="absolute left-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
            <motion.div
              whileInView={{ scale: [0, 1.2, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-3 w-3 rounded-full bg-primary shadow-glow ring-4 ring-primary/20"
            />
          </div>

          {/* Content card */}
          <div
            className={`ml-12 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
              index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
            }`}
          >
            <div className="glass-card p-6 transition-all duration-300 hover:shadow-glow hover:border-primary/20">
              <span className="text-sm font-medium text-primary">{item.period}</span>
              <h3 className="mt-1 font-heading text-lg font-bold text-navy-900 dark:text-white">
                {item.role}
              </h3>
              <p className="text-sm font-medium text-slate dark:text-navy-400">
                {item.company}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate dark:text-navy-400">
                {item.description}
              </p>
              <div
                className={`mt-4 flex flex-wrap gap-2 ${
                  index % 2 === 0 ? "md:justify-end" : ""
                }`}
              >
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-navy-100 px-2.5 py-1 text-xs font-medium text-navy-600 dark:bg-navy-800 dark:text-navy-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
