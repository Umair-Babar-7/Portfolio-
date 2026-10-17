"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/Button";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { useMotionPreferences } from "@/components/MotionPreferences";
import { HERO_ROLES, SITE_CONFIG } from "@/constants";
import { fadeInUp, staggerContainer, textReveal } from "@/lib/animations";

function RotatingRole() {
  const [index, setIndex] = useState(0);
  const { reduceMotion } = useMotionPreferences();
  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(
      () => setIndex((current) => (current + 1) % HERO_ROLES.length),
      3200,
    );
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <div className="hero-role" aria-label={HERO_ROLES[0]}>
      <span className="text-primary" aria-hidden="true">
        &lt;
      </span>
      <span className="relative block overflow-hidden" aria-hidden="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={reduceMotion ? "static" : index}
            initial={reduceMotion ? false : { y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="block"
          >
            {HERO_ROLES[reduceMotion ? 0 : index]}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="text-primary" aria-hidden="true">
        /&gt;
      </span>
    </div>
  );
}

export function Hero() {
  const { reduceMotion } = useMotionPreferences();
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 850], [0, 90]);

  return (
    <section id="home" className="hero-section">
      <AnimatedBackground />
      <div className="container-custom relative z-10 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="hero-layout"
        >
          <div className="min-w-0">
            <motion.div variants={fadeInUp} className="availability-label">
              <span className="status-dot" /> Available for new projects
            </motion.div>
            <motion.p variants={textReveal} className="hero-intro">
              Hello, I&apos;m Umair Babar.
            </motion.p>
            <motion.h1 variants={textReveal} className="hero-heading">
              Turning data
              <br />
              into{" "}
              <span className="hero-heading-accent">
                real
                <br className="hidden xl:block" /> impact.
              </span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="mt-6">
              <RotatingRole />
            </motion.div>
            <motion.p variants={fadeInUp} className="hero-description">
              I bring clarity to complex data. Building thoughtful machine
              learning solutions, from the first messy dataset to the final
              insight.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button
                href="#projects"
                size="lg"
                icon={<ArrowUpRight size={18} />}
              >
                Explore my work
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Let&apos;s talk
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp} className="hero-socials">
              <span className="flex items-center gap-2">
                <MapPin size={14} /> Based in {SITE_CONFIG.location}
              </span>
              <span className="hero-social-divider" />
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Umair on GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Umair on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={textReveal}
            style={{ y: reduceMotion ? 0 : portraitY }}
            className="hero-portrait-area"
          >
            <div className="portrait-orbit" aria-hidden="true" />
            <div className="portrait-frame">
              <div className="portrait-topline">
                <span>THE HUMAN BEHIND THE MODELS</span>
                <span>01 / UB</span>
              </div>
              <div className="portrait-image">
                <Image
                  src="/Umair Babar.jpeg"
                  alt="Umair Babar, Machine Learning Engineer"
                  fill
                  priority
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 440px, 420px"
                  className="object-cover object-top"
                />
                <div className="portrait-image-shade" />
                <div className="portrait-caption">
                  <span>Curiosity. Code. Clarity.</span>
                  <Sparkles size={19} />
                </div>
              </div>
              <div className="portrait-bottomline">
                <span>
                  <i /> Open to collaboration
                </span>
                <span>PK · WORLDWIDE</span>
              </div>
            </div>
            <motion.div
              animate={reduceMotion ? { y: 0 } : { y: [0, -9, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="hero-code-card"
            >
              <div className="code-card-header">
                <span className="flex gap-1.5">
                  <i />
                  <i />
                  <i />
                </span>
                <span>workflow.py</span>
              </div>
              <p>
                <span className="text-primary">def</span>{" "}
                build_something_meaningful():
              </p>
              <p className="pl-4">
                <span className="text-navy-400">data</span> = curiosity + code
              </p>
              <p className="pl-4">
                <span className="text-primary">return</span> real_world_impact
              </p>
              <span className="code-card-cursor" />
            </motion.div>
            <span className="portrait-side-note" aria-hidden="true">
              ALWAYS LEARNING. ALWAYS BUILDING.
            </span>
          </motion.div>
        </motion.div>
        <div className="hero-footer">
          <a href="#about" className="group flex items-center gap-3">
            <span className="scroll-arrow">
              <ArrowDown size={15} />
            </span>{" "}
            Scroll to discover
          </a>
          <span className="hidden sm:block">
            A little curiosity can change everything.
          </span>
          <span className="font-mono text-xs">PORTFOLIO / 01</span>
        </div>
      </div>
    </section>
  );
}
