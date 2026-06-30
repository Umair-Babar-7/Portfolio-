"use client";

import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-navy-950 px-4">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-amber-400/10 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center"
      >
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-heading text-8xl font-bold gradient-text sm:text-9xl"
        >
          404
        </motion.p>

        <h1 className="mt-4 font-heading text-2xl font-bold text-white sm:text-3xl">
          Page Not Found
        </h1>
        <p className="mt-3 max-w-md text-navy-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" icon={<Home className="h-4 w-4" />}>
            Back to Home
          </Button>
          <Button href="/#projects" variant="outline" icon={<ArrowLeft className="h-4 w-4" />}>
            View Projects
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
