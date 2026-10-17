"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { TechnologyLogo } from "@/components/TechnologyLogo";
import { TECH_STACK } from "@/constants";
import { useMotionPreferences } from "@/components/MotionPreferences";

const colors = [
  "#e6b75c",
  "#d79d70",
  "#7396c4",
  "#9992d0",
  "#7eafc2",
  "#78a9bd",
  "#d69d78",
  "#cf8a78",
  "#a9b2bd",
];

export function TechStack() {
  const { reduceMotion } = useMotionPreferences();
  return (
    <section id="tech-stack" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          subtitle="The toolkit"
          title="Good work. Great tools."
          description="The technologies behind the experiments, the insights, and everything in between."
        />
        <div className="toolkit-grid">
          {TECH_STACK.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={reduceMotion ? {} : { y: -5 }}
              className="toolkit-item"
            >
              <span
                className="technology-logo-plate"
                style={{
                  color: colors[index],
                  borderColor: `${colors[index]}30`,
                  background: `${colors[index]}0c`,
                }}
              >
                <TechnologyLogo name={tech.name} />
              </span>
              <p>{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
