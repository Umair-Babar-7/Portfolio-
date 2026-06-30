"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillCard } from "@/components/SkillCard";
import { SKILLS } from "@/constants";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-navy-50/50 dark:bg-navy-900/30">
      <div className="container-custom">
        <SectionTitle
          subtitle="Skills"
          title="Technical Expertise"
          description="A comprehensive toolkit for machine learning, data science, and modern development."
        />

        <div className="space-y-12">
          {SKILLS.map((category) => (
            <motion.div
              key={category.category}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={staggerContainer}
            >
              <motion.h3
                variants={fadeInUp}
                className="mb-6 font-heading text-xl font-bold text-navy-900 dark:text-white"
              >
                {category.category}
              </motion.h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {category.items.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
