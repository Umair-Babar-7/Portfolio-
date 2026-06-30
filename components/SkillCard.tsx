"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Network,
  BarChart3,
  Layers,
  Table,
  LineChart,
  Filter,
  Search,
  Eye,
  Sigma,
  BookOpen,
  GitBranch,
  Github,
  Code2,
  type LucideIcon,
} from "lucide-react";
import { useMousePosition, useInView } from "@/hooks";
import { fadeInUp, defaultViewport } from "@/lib/animations";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  network: Network,
  chart: BarChart3,
  layers: Layers,
  array: Layers,
  table: Table,
  "chart-bar": BarChart3,
  "chart-line": LineChart,
  filter: Filter,
  search: Search,
  eye: Eye,
  sigma: Sigma,
  book: BookOpen,
  git: GitBranch,
  github: Github,
  code: Code2,
  nextjs: Code2,
  react: Code2,
  tailwind: Code2,
};

interface SkillCardProps {
  name: string;
  level: number;
  icon: string;
  index?: number;
}

export function SkillCard({ name, level, icon, index = 0 }: SkillCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition(ref);
  const isInView = useInView(ref);
  const Icon = iconMap[icon] ?? Brain;

  const rotateX = (y / 300) * -10;
  const rotateY = (x / 300) * 10;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInUp}
      transition={{ delay: index * 0.05 }}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      className="group relative"
    >
      <div
        className={cn(
          "glass-card relative overflow-hidden p-5 transition-all duration-300",
          "hover:shadow-glow hover:border-primary/20"
        )}
      >
        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 transition-all duration-300 group-hover:from-primary/5 group-hover:to-transparent" />

        <div className="relative flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-heading text-sm font-semibold text-navy-900 dark:text-white">
              {name}
            </h4>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-navy-100 dark:bg-navy-700">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${level}%` } : { width: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="h-full rounded-full bg-gradient-orange-amber"
              />
            </div>
            <span className="mt-1.5 block text-xs text-slate dark:text-navy-400">
              {level}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
