"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, SOCIAL_LINKS } from "@/constants";
import { fadeInUp, defaultViewport } from "@/lib/animations";

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  mail: <Mail className="h-5 w-5" />,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-200/50 bg-white/50 dark:border-navy-800/50 dark:bg-navy-950/50">
      <div className="container-custom section-padding !py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="grid gap-10 md:grid-cols-3"
        >
          {/* Brand */}
          <div>
            <Link href="#home" className="font-heading text-xl font-bold text-navy-900 dark:text-white">
              Umair<span className="text-primary">.</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate dark:text-navy-400">
              Machine Learning Engineer crafting intelligent systems and data-driven solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-navy-900 dark:text-white">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate transition-colors hover:text-primary dark:text-navy-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-navy-900 dark:text-white">
              Connect
            </h4>
            <div className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-navy-200 text-navy-600 transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary dark:border-navy-700 dark:text-navy-300"
                  aria-label={social.name}
                >
                  {socialIcons[social.icon]}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-navy-200/50 pt-8 dark:border-navy-800/50 sm:flex-row">
          <p className="text-sm text-slate dark:text-navy-400">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-slate dark:text-navy-400">
            Made with <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
