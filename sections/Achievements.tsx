"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { ACHIEVEMENTS } from "@/constants";
import { useCounter, useInView } from "@/hooks";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

function AchievementCounter({
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
  const count = useCounter(value, 2500, isInView);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="relative overflow-hidden rounded-2xl p-8 text-center"
    >
      <div className="absolute inset-0 bg-gradient-orange-navy opacity-90" />
      <div className="relative">
        <p className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          {count}
          {suffix}
        </p>
        <p className="mt-3 text-sm font-medium uppercase tracking-wider text-white/80">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-navy-950">
      <div className="container-custom">
        <SectionTitle
          subtitle="Achievements"
          title="By the Numbers"
          description="Milestones that reflect dedication and passion for machine learning."
          className="[&_h2]:text-white [&_p]:text-navy-400"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {ACHIEVEMENTS.map((item) => (
            <AchievementCounter
              key={item.label}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
