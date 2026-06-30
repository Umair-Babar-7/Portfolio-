"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/Magnetic";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-orange-amber text-white shadow-glow hover:shadow-glow-lg border-transparent",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 dark:bg-navy-800 dark:hover:bg-navy-700 border-transparent",
  outline:
    "border-2 border-primary/30 text-primary hover:border-primary hover:bg-primary/5 bg-transparent",
  ghost:
    "text-navy-600 hover:text-primary hover:bg-primary/5 dark:text-navy-300 border-transparent",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2.5",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  onClick,
  type = "button",
  disabled,
  icon,
}: ButtonProps) {
  const classes = cn(
    "relative inline-flex items-center justify-center rounded-xl font-medium",
    "transition-all duration-300 overflow-hidden group",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full skew-x-12" />
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <Magnetic>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            href={href}
            className={classes}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            {content}
          </Link>
        </motion.div>
      </Magnetic>
    );
  }

  return (
    <Magnetic>
      <motion.button
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className={classes}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {content}
      </motion.button>
    </Magnetic>
  );
}
