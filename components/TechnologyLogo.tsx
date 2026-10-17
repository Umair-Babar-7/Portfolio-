import Image from "next/image";
import { cn } from "@/lib/utils";

export const technologyLogos: Record<string, string> = {
  Python: "python",
  "Scikit-Learn": "scikit-learn",
  NumPy: "numpy",
  Pandas: "pandas",
  Matplotlib: "matplotlib",
  Seaborn: "seaborn",
  Jupyter: "jupyter",
  "Jupyter Notebook": "jupyter",
  Git: "git",
  GitHub: "github",
};

export function TechnologyLogo({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const logo = technologyLogos[name];
  if (!logo) return null;
  return (
    <Image
      src={`/logos/${logo}.svg`}
      alt={`${name} logo`}
      width={40}
      height={40}
      className={cn("technology-logo", className)}
      unoptimized
    />
  );
}
