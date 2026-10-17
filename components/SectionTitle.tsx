"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMotionPreferences } from "@/components/MotionPreferences";

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
  const { reduceMotion } = useMotionPreferences();
  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.055 } },
      }}
      className={cn(
        "section-title mb-14 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {subtitle && (
        <motion.span
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="section-eyebrow"
        >
          <span />
          {subtitle}
        </motion.span>
      )}
      <h2 className="font-heading text-3xl font-semibold leading-[1.13] tracking-[-0.045em] text-navy-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title.split(" ").map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="inline-block overflow-hidden align-top pb-[0.13em] -mb-[0.13em]"
          >
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "110%", rotate: 3 },
                visible: {
                  y: 0,
                  rotate: 0,
                  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              {word}
            </motion.span>
            {index < title.split(" ").length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </h2>
      {description && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="mt-5 text-base leading-relaxed text-slate dark:text-navy-400 sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
