"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, FolderOpen, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/Button";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { HERO_ROLES, SITE_CONFIG } from "@/constants";
import { useTypingAnimation } from "@/hooks";
import { fadeInUp, slideInRight, textReveal, staggerContainer } from "@/lib/animations";

export function Hero() {
  const typedText = useTypingAnimation(HERO_ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden section-padding pt-32"
    >
      <AnimatedBackground />

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <motion.p
              variants={textReveal}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              variants={textReveal}
              className="font-heading text-4xl font-bold leading-tight tracking-tight text-navy-900 dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Umair Babar</span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="mt-6 h-8">
              <span className="font-heading text-xl font-medium text-navy-700 dark:text-navy-300 sm:text-2xl">
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-0.5 inline-block h-6 w-0.5 bg-primary align-middle"
                />
              </span>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-lg text-lg leading-relaxed text-slate dark:text-navy-400"
            >
              I build machine learning and data science projects with clean Python
              workflows, careful preprocessing, and practical model evaluation.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                href={SITE_CONFIG.resumeUrl}
                external
                icon={<Download className="h-4 w-4" />}
              >
                Download Resume
              </Button>
              <Button
                href="#projects"
                variant="outline"
                icon={<FolderOpen className="h-4 w-4" />}
              >
                View Projects
              </Button>
              <Button
                href="#contact"
                variant="ghost"
                icon={<Mail className="h-4 w-4" />}
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex items-center gap-2 text-sm text-slate dark:text-navy-400"
            >
              <MapPin className="h-4 w-4 text-primary" />
              {SITE_CONFIG.location}
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            variants={slideInRight}
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="relative">
              {/* Decorative rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-dashed border-primary/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border border-primary/10"
              />

              <div className="relative h-64 w-64 overflow-hidden rounded-3xl border-2 border-primary/20 shadow-glow-lg sm:h-80 sm:w-80">
                <Image
                  src="/Umair Babar.jpeg"
                  alt="Umair Babar - Machine Learning Engineer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 rounded-2xl glass-card px-4 py-3 shadow-glow"
              >
                <p className="text-xs text-slate dark:text-navy-400">Available for</p>
                <p className="font-heading text-sm font-bold text-primary">New Projects</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-navy-300 p-1 dark:border-navy-600"
          >
            <motion.div className="h-2 w-1 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
