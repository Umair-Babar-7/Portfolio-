"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, defaultViewport } from "@/lib/animations";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInUp}
      className={cn(
        "mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {subtitle && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
          {subtitle}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-slate dark:text-navy-400">
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-1 w-16 rounded-full bg-gradient-orange-amber",
          align === "center" && "mx-auto"
        )}
      />
    </motion.div>
  );
}
