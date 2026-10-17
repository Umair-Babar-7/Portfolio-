"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";

const MotionContext = createContext({ reduceMotion: false });
export const useMotionPreferences = () => useContext(MotionContext);

export function MotionPreferences({ children }: { children: ReactNode }) {
  const systemReducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const reduceMotion = Boolean(systemReducedMotion || paused);

  return (
    <MotionContext.Provider value={{ reduceMotion }}>
      <MotionConfig reducedMotion={reduceMotion ? "always" : "never"}>
        <div data-motion={reduceMotion ? "reduced" : "full"}>
          {children}
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            disabled={Boolean(systemReducedMotion)}
            aria-label={
              systemReducedMotion
                ? "Reduced motion enabled by device settings"
                : paused
                  ? "Play animations"
                  : "Pause animations"
            }
            aria-pressed={reduceMotion}
            className="motion-control"
          >
            {reduceMotion ? <Play size={13} /> : <Pause size={13} />}
            <span>{reduceMotion ? "Motion off" : "Motion on"}</span>
          </button>
        </div>
      </MotionConfig>
    </MotionContext.Provider>
  );
}
