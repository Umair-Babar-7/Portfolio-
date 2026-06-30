"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { TECH_STACK } from "@/constants";
import { fadeInUp, staggerContainerFast, defaultViewport } from "@/lib/animations";

function TechIcon({ name }: { name: string }) {
  const logoMap: Record<string, string> = {
    Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "Scikit-Learn": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
    NumPy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    Pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    Matplotlib: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
    Seaborn: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
    Jupyter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    Git: "https://cdn.simpleicons.org/git/F05032",
    GitHub: "https://cdn.simpleicons.org/github/181717",
  };

  const logo = logoMap[name];

  if (!logo) {
    return (
      <span className="font-heading text-lg font-bold tracking-wide text-slate-700 dark:text-slate-200">
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <img
      src={logo}
      alt={`${name} logo`}
      className="h-8 w-8 object-contain"
      loading="lazy"
    />
  );
}

export function TechStack() {
  return (
    <section id="tech-stack" className="section-padding overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          subtitle="Tech Stack"
          title="Tools & Technologies"
          description="The technologies I use to build intelligent, data-driven applications."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainerFast}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {TECH_STACK.map((tech) => (
            <motion.div
              key={tech.name}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-navy-200/70 bg-white/80 p-4 shadow-sm transition-all duration-300 hover:border-primary hover:bg-white hover:shadow-[0_0_0_2px_rgba(255,153,0,0.3),0_0_30px_rgba(255,153,0,0.25),0_18px_45px_rgba(255,153,0,0.2)] dark:border-navy-700/80 dark:bg-navy-900/70 dark:hover:bg-navy-900"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-navy-200/70 bg-gradient-to-br from-slate-50 to-slate-100 text-primary shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(255,153,0,0.18)] dark:border-navy-700 dark:from-navy-800 dark:to-navy-900">
                <TechIcon name={tech.name} />
              </div>
              <div className="relative min-w-0">
                <h4 className="text-sm font-semibold text-navy-900 transition-colors group-hover:text-primary dark:text-white">
                  {tech.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee-style infinite scroll */}
        <div className="relative mt-16 overflow-hidden">
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-surface-light to-transparent dark:from-navy-950" />
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-surface-light to-transparent dark:from-navy-950" />
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <span
                key={`${tech.name}-${i}`}
                className="inline-flex items-center gap-2 rounded-full border border-navy-200 px-5 py-2.5 text-sm font-medium text-navy-600 dark:border-navy-700 dark:text-navy-300"
              >
                <span className="h-2 w-2 rounded-full bg-primary" />
                {tech.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
