"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-[3px] origin-left bg-gradient-orange-amber"
      style={{ scaleX: progress, width: "100%" }}
      aria-hidden="true"
    />
  );
}
