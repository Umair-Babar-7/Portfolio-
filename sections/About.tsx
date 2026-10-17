"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { ABOUT_STATS } from "@/constants";
import { useCounter, useInView } from "@/hooks";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const count = useCounter(value, 1600, isInView);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="glass-card group p-6 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-glow"
    >
      <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-slate dark:text-navy-400">{label}</p>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          subtitle="About Me"
          title="A curious mind. A practical approach."
          description="I build practical ML workflows from raw data to model-ready insights."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="space-y-5 text-base leading-relaxed text-slate dark:text-navy-400"
          >
            <p>
              I&apos;m{" "}
              <strong className="text-navy-900 dark:text-white">
                Umair Babar
              </strong>
              , a Machine Learning Engineer with hands-on experience in machine
              learning, data science, data cleaning, and Python libraries.
            </p>
            <p>
              I focus on end-to-end ML pipelines: preparing messy datasets,
              engineering useful features, training models, evaluating
              performance, and turning the results into clear notebooks,
              dashboards, or portfolio-ready applications.
            </p>
            <p>
              My toolkit includes Python, NumPy, Pandas, Matplotlib, Seaborn,
              Scikit-Learn, Jupyter, Git, and modern web tools for presenting
              work in a clean and professional way.
            </p>
            <p>
              I enjoy projects where clean data and thoughtful modeling can make
              a real difference, especially prediction, classification,
              recommendation, analysis, and automation workflows.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4"
          >
            {ABOUT_STATS.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
