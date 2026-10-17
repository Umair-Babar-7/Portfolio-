"use client";

import {
  createContext,
  useContext,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { MotionConfig } from "framer-motion";
import { Pause, Play } from "lucide-react";

const MotionContext = createContext({ reduceMotion: false });
export const useMotionPreferences = () => useContext(MotionContext);

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const getReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const getServerReducedMotion = () => false;

export function MotionPreferences({ children }: { children: ReactNode }) {
  // Keep the server and initial client tree identical, then apply the device setting.
  // The CSS media query already suppresses decorative animation before hydration.
  const systemReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotion,
    getServerReducedMotion,
  );
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
