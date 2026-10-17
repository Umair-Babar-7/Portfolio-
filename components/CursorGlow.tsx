"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMotionPreferences } from "@/components/MotionPreferences";

export function CursorGlow() {
  const { reduceMotion } = useMotionPreferences();
  const targetX = useMotionValue(-1000);
  const targetY = useMotionValue(-1000);
  const x = useSpring(targetX, { stiffness: 90, damping: 24 });
  const y = useSpring(targetY, { stiffness: 90, damping: 24 });

  useEffect(() => {
    if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;
    const move = (event: PointerEvent) => {
      targetX.set(event.clientX - 250);
      targetY.set(event.clientY - 250);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [reduceMotion, targetX, targetY]);

  if (reduceMotion) return null;
  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-[500px] w-[500px] rounded-full md:block"
      style={{
        x,
        y,
        background:
          "radial-gradient(circle, rgba(249,115,22,0.045), transparent 65%)",
      }}
      aria-hidden="true"
    />
  );
}
