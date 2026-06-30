import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes with conflict resolution */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Clamp a number between min and max */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Linear interpolation */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

/** Format number with optional suffix */
export function formatStat(value: number, suffix: string): string {
  return `${value}${suffix}`;
}

/** Generate JSON-LD structured data for SEO */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Umair Babar",
    jobTitle: "Machine Learning Engineer",
    url: "https://umairbabar.dev",
    sameAs: [
      "https://github.com/Umair-Babar-7",
      "https://www.linkedin.com/in/umair-babar-6577a53ba/",
    ],
    knowsAbout: [
      "Machine Learning",
      "Artificial Intelligence",
      "Data Science",
      "Python",
    ],
  };
}
