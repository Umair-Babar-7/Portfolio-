"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMotionPreferences } from "@/components/MotionPreferences";
import { useLoadingScreen } from "@/hooks";

export function LoadingScreen() {
  const isLoading = useLoadingScreen(700);
  const { reduceMotion } = useMotionPreferences();
  if (reduceMotion) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950"
        >
          {/* Animated logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border-2 border-transparent border-t-primary border-r-primary/50"
            />
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-orange-amber text-2xl font-bold text-white shadow-glow-lg">
              UB
            </div>
          </motion.div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-heading text-xl font-semibold text-white"
          >
            Umair Babar
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-2 text-sm text-navy-400"
          >
            Machine Learning Engineer
          </motion.p>

          {/* Progress bar */}
          <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-navy-800">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="h-full rounded-full bg-gradient-orange-amber"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
