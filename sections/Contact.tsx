"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { ContactForm } from "@/components/ContactForm";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/constants";
import { fadeInUp, slideInLeft, slideInRight, defaultViewport } from "@/lib/animations";

const contactInfo = [
  { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
  { icon: Github, label: "GitHub", value: "github.com/Umair-Babar-7", href: SITE_CONFIG.github },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/umair-babar-6577a53ba",
    href: SITE_CONFIG.linkedin,
  },
  { icon: MapPin, label: "Location", value: SITE_CONFIG.location, href: undefined },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-navy-50/50 dark:bg-navy-900/30">
      <div className="container-custom">
        <SectionTitle
          subtitle="Contact"
          title="Let's Work Together"
          description="Have a machine learning, data cleaning, or Python analytics project in mind? I would love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={slideInLeft}
            className="space-y-6 lg:col-span-2"
          >
            <p className="text-base leading-relaxed text-slate dark:text-navy-400">
              Whether you need a predictive model, a cleaned dataset, an analysis
              notebook, or a polished dashboard, send the details and I will get
              back to you.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate dark:text-navy-500">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-navy-900 transition-colors hover:text-primary dark:text-white"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-navy-900 dark:text-white">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-4">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-navy-200 text-navy-600 transition-all hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-glow dark:border-navy-600 dark:text-navy-300"
                  aria-label={social.name}
                >
                  {social.name === "GitHub" && <Github className="h-5 w-5" />}
                  {social.name === "LinkedIn" && <Linkedin className="h-5 w-5" />}
                  {social.name === "Email" && <Mail className="h-5 w-5" />}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={slideInRight}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
