"use client";

import { motion } from "framer-motion";
import { useMouseGlow } from "@/hooks";

export function CursorGlow() {
  const { x, y } = useMouseGlow();

  return (
    <motion.div
      className="pointer-events-none fixed z-[60] hidden h-[500px] w-[500px] rounded-full md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%)",
        left: x - 250,
        top: y - 250,
      }}
      animate={{ left: x - 250, top: y - 250 }}
      transition={{ type: "spring", stiffness: 50, damping: 20, mass: 0.5 }}
      aria-hidden="true"
    />
  );
}
