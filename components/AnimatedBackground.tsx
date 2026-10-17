"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMotionPreferences } from "@/components/MotionPreferences";

export function AnimatedBackground() {
  const { reduceMotion } = useMotionPreferences();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 160]);

  return (
    <div className="hero-atmosphere" aria-hidden="true">
      <motion.div className="hero-grid" style={{ y: reduceMotion ? 0 : y }} />
      <div className="hero-aura hero-aura-orange" />
      <div className="hero-aura hero-aura-blue" />
      <svg className="hero-contours" viewBox="0 0 1000 800" fill="none">
        {Array.from({ length: 6 }, (_, index) => (
          <motion.ellipse
            key={index}
            cx="680"
            cy="380"
            rx={170 + index * 44}
            ry={110 + index * 36}
            stroke="currentColor"
            strokeWidth="0.7"
            initial={false}
            animate={
              reduceMotion ? { rotate: -25 } : { rotate: [-25, -15, -25] }
            }
            transition={{
              duration: 18 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
