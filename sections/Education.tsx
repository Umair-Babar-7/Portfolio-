"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { EDUCATION } from "@/constants";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

const icons = [GraduationCap, BookOpen, Award];

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          subtitle="Education"
          title="Learning & Certifications"
          description="Continuous learning through formal education and industry certifications."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-3"
        >
          {EDUCATION.map((item, index) => {
            const Icon = icons[index] ?? GraduationCap;
            return (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="glass-card group relative overflow-hidden p-6 transition-all duration-300 hover:shadow-glow hover:border-primary/20"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-primary">{item.period}</span>
                <h3 className="mt-2 font-heading text-lg font-bold text-navy-900 dark:text-white">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate dark:text-navy-400">
                  {item.institution}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate dark:text-navy-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
