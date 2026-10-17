"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/LoadingScreen";
import { useMotionPreferences } from "@/components/MotionPreferences";

const EntranceContext = createContext({ ready: true });
export const usePortfolioEntrance = () => useContext(EntranceContext);

export function PortfolioEntrance({ children }: { children: ReactNode }) {
  const [complete, setComplete] = useState(false);
  const { reduceMotion } = useMotionPreferences();
  const ready = complete || reduceMotion;
  const finish = useCallback(() => setComplete(true), []);

  useEffect(() => {
    if (ready) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [ready]);

  return (
    <EntranceContext.Provider value={{ ready }}>
      <div className="portfolio-surface" inert={!ready}>
        {children}
      </div>
      <AnimatePresence>
        {!ready && <LoadingScreen key="intro" onComplete={finish} />}
      </AnimatePresence>
    </EntranceContext.Provider>
  );
}
