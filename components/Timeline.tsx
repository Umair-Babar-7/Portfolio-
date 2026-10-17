"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useMotionPreferences } from "@/components/MotionPreferences";
import type { ExperienceItem } from "@/types";

export function Timeline({ items }: { items: readonly ExperienceItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { reduceMotion } = useMotionPreferences();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 75%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className="relative mx-auto max-w-4xl">
      <div
        className="absolute bottom-0 left-5 top-0 w-px bg-navy-200 dark:bg-white/10 md:left-1/2"
        aria-hidden="true"
      />
      <motion.div
        style={{ scaleY: reduceMotion ? 1 : progress, originY: 0 }}
        className="absolute bottom-0 left-5 top-0 w-px bg-primary md:left-1/2"
        aria-hidden="true"
      />
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={
            reduceMotion ? false : { opacity: 0, x: index % 2 === 0 ? -28 : 28 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className={`relative mb-10 flex items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
          <div className="absolute left-5 top-7 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary ring-[5px] ring-primary/10 md:left-1/2" />
          <div
            className={`ml-12 min-w-0 flex-1 md:ml-0 md:max-w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
          >
            <div className="glass-card p-6 transition-colors hover:border-primary/30 sm:p-7">
              <span className="font-mono text-[10px] tracking-wider text-primary">
                {item.period}
              </span>
              <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight text-navy-900 dark:text-white">
                {item.role}
              </h3>
              <p className="mt-1 text-xs font-medium text-slate dark:text-navy-400">
                {item.company}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate dark:text-navy-400">
                {item.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span key={tech} className="project-tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
