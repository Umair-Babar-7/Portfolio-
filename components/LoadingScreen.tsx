"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const letterMotion: Variants = {
  hidden: { y: "115%", rotate: 5 },
  visible: {
    y: 0,
    rotate: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const skipRef = useRef<HTMLButtonElement>(null);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    setInteractive(true);
    const timer = setTimeout(onComplete, 2300);
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onComplete();
      if (event.key === "Tab") {
        event.preventDefault();
        skipRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [onComplete]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Umair Babar's portfolio"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.7, duration: 0.1 } }}
      className="intro-screen"
    >
      <motion.div
        className="intro-curtain intro-curtain-top"
        exit={{ y: "-101%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="intro-curtain intro-curtain-bottom"
        exit={{ y: "101%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="intro-content"
        exit={{ opacity: 0, y: -20, transition: { duration: 0.25 } }}
      >
        <div className="intro-topbar">
          <span className="intro-terminal-address">
            <span className="terminal-window-controls" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>{" "}
            umair@portfolio:~
          </span>
          <button
            ref={skipRef}
            type="button"
            disabled={!interactive}
            onClick={onComplete}
            className="intro-skip"
          >
            Skip intro <ArrowUpRight size={14} />
          </button>
        </div>
        <div className="intro-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="intro-eyebrow"
          >
            <span>❯</span> hello, world. meet
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.045, delayChildren: 0.15 },
              },
            }}
            className="intro-name"
            aria-label="Umair Babar"
          >
            {["UMAIR", "BABAR"].map((word) => (
              <span className="intro-word" aria-hidden="true" key={word}>
                {word.split("").map((letter, index) => (
                  <span
                    className="intro-letter-mask"
                    key={`${letter}-${index}`}
                  >
                    <motion.span variants={letterMotion}>{letter}</motion.span>
                  </span>
                ))}
              </span>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="intro-subtitle"
          >
            MACHINE LEARNING ENGINEER <span>·</span> DATA SCIENTIST
          </motion.p>
        </div>
        <div className="intro-bottom">
          <div>
            <span>CURIOUS MIND. PURPOSEFUL CODE.</span>
            <span>WELCOME TO MY WORLD</span>
          </div>
          <div className="intro-progress">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.1, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
