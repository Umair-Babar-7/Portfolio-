export interface NavLink {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  category: string;
  items: readonly SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: readonly string[];
  github: string;
  demo: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: readonly string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type SectionId =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "education"
  | "achievements"
  | "tech-stack"
  | "contact";
