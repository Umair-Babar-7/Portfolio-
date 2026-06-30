"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className={cn("h-10 w-10 rounded-xl bg-navy-100 dark:bg-navy-800", className)} />
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-xl",
        "border border-navy-200 bg-white/80 text-navy-700 backdrop-blur-sm",
        "transition-colors hover:border-primary/30 hover:text-primary",
        "dark:border-navy-700 dark:bg-navy-800/80 dark:text-navy-200",
        "dark:hover:border-primary/30 dark:hover:text-primary",
        className
      )}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180, scale: theme === "dark" ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon className="h-4 w-4" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: theme === "light" ? 0 : -180, scale: theme === "light" ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun className="h-4 w-4" />
      </motion.div>
    </motion.button>
  );
}
