"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const points = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  left: `${(index * 19 + 7) % 100}%`,
  top: `${(index * 29 + 11) % 100}%`,
  delay: index * 0.18,
}));

export function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.35]);

  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(249,115,22,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.22) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0)_0%,rgba(248,250,252,0.82)_100%)] dark:bg-[linear-gradient(180deg,rgba(2,6,23,0)_0%,rgba(2,6,23,0.86)_100%)]" />

      {points.map((point) => (
        <motion.span
          key={point.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-primary/50"
          style={{ left: point.left, top: point.top }}
          animate={{ y: [0, -12, 0], opacity: [0.25, 0.75, 0.25] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            delay: point.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}
