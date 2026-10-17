"use client";

import { motion } from "framer-motion";
import { useMotionPreferences } from "@/components/MotionPreferences";

const scatterPoints = [
  [75, 180],
  [105, 167],
  [126, 185],
  [148, 140],
  [173, 158],
  [201, 127],
  [223, 141],
  [247, 106],
  [273, 119],
  [300, 80],
  [323, 91],
  [349, 61],
  [380, 73],
  [404, 42],
];
const networkNodes = [
  [92, 70],
  [92, 130],
  [92, 190],
  [220, 50],
  [220, 103],
  [220, 157],
  [220, 210],
  [370, 97],
  [370, 164],
];

export function ProjectVisual({ id }: { id: string }) {
  const { reduceMotion } = useMotionPreferences();
  const draw = {
    initial: { pathLength: reduceMotion ? 1 : 0 },
    whileInView: { pathLength: 1 },
    viewport: { once: true },
    transition: { duration: 1.6, ease: "easeInOut" as const },
  };
  const type =
    id === "house-price-prediction"
      ? "regression"
      : id === "customer-churn-prediction"
        ? "network"
        : id === "sales-data-cleaning-dashboard"
          ? "bars"
          : id === "movie-recommendation"
            ? "similarity"
            : "sentiment";

  return (
    <div className={`project-visual project-visual-${type}`} aria-hidden="true">
      <div className="visual-topline">
        <span>
          {type === "regression"
            ? "01 / PREDICT"
            : type === "network"
              ? "02 / CLASSIFY"
              : type === "bars"
                ? "03 / REFINE"
                : type === "similarity"
                  ? "04 / RECOMMEND"
                  : "05 / UNDERSTAND"}
        </span>
        <span className="flex items-center gap-2">
          <i /> PYTHON WORKFLOW
        </span>
      </div>
      <svg viewBox="0 0 480 260" fill="none" className="project-chart">
        <defs>
          <linearGradient id={`fill-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="currentColor" stopOpacity="0.25" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[65, 110, 155, 200].map((y) => (
          <path
            key={y}
            d={`M50 ${y}H430`}
            stroke="currentColor"
            strokeOpacity="0.09"
          />
        ))}
        {type === "regression" && (
          <>
            <path d="M65 207L407 38V220H65Z" fill={`url(#fill-${id})`} />
            <motion.path
              {...draw}
              d="M65 207L407 38"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            {scatterPoints.map(([cx, cy], index) => (
              <motion.circle
                key={index}
                cx={cx}
                cy={cy}
                r="4"
                fill="currentColor"
                initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.7, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              />
            ))}
            <text x="55" y="246">
              OBSERVED → PREDICTED
            </text>
          </>
        )}
        {type === "network" && (
          <>
            {networkNodes
              .slice(0, 3)
              .flatMap(([x1, y1], i) =>
                networkNodes
                  .slice(3, 7)
                  .map(([x2, y2], j) => (
                    <motion.path
                      key={`a${i}${j}`}
                      {...draw}
                      d={`M${x1} ${y1}L${x2} ${y2}`}
                      stroke="currentColor"
                      strokeOpacity="0.2"
                    />
                  )),
              )}
            {networkNodes
              .slice(3, 7)
              .flatMap(([x1, y1], i) =>
                networkNodes
                  .slice(7)
                  .map(([x2, y2], j) => (
                    <motion.path
                      key={`b${i}${j}`}
                      {...draw}
                      d={`M${x1} ${y1}L${x2} ${y2}`}
                      stroke="currentColor"
                      strokeOpacity="0.3"
                    />
                  )),
              )}
            {networkNodes.map(([cx, cy], i) => (
              <g key={i}>
                <circle
                  cx={cx}
                  cy={cy}
                  r="15"
                  fill="var(--visual-panel)"
                  stroke="currentColor"
                  strokeOpacity="0.5"
                />
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r="5"
                  fill="currentColor"
                  animate={
                    reduceMotion
                      ? { opacity: 0.8 }
                      : { opacity: [0.35, 1, 0.35] }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.25,
                  }}
                />
              </g>
            ))}
            <text x="68" y="246">
              FEATURES
            </text>
            <text x="192" y="246">
              PATTERNS
            </text>
            <text x="347" y="246">
              INSIGHT
            </text>
          </>
        )}
        {type === "bars" && (
          <>
            {[60, 112, 85, 152, 130, 185, 162, 200, 176, 211].map(
              (height, i) => (
                <motion.rect
                  key={i}
                  x={61 + i * 36}
                  y={225 - height * 0.8}
                  width="21"
                  height={height * 0.8}
                  rx="4"
                  fill="currentColor"
                  opacity={0.25 + i * 0.07}
                  initial={reduceMotion ? false : { scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  style={{ originY: 1 }}
                  transition={{ delay: i * 0.07, duration: 0.7 }}
                />
              ),
            )}
            <text x="60" y="246">
              RAW DATA → CLEARER DECISIONS
            </text>
          </>
        )}
        {type === "similarity" && (
          <>
            <motion.path
              {...draw}
              d="M109 130C170 130 165 65 245 65M109 130H245M109 130C170 130 165 195 245 195M245 65H373M245 130H373M245 195H373"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="5 5"
            />
            <circle
              cx="109"
              cy="130"
              r="35"
              fill="var(--visual-panel)"
              stroke="currentColor"
              strokeOpacity="0.6"
            />
            <text x="89" y="134">
              YOU
            </text>
            {[65, 130, 195].map((y, i) => (
              <g key={y}>
                <rect
                  x="245"
                  y={y - 21}
                  width="130"
                  height="42"
                  rx="8"
                  fill="var(--visual-panel)"
                  stroke="currentColor"
                  strokeOpacity="0.4"
                />
                <text x="268" y={y + 4}>
                  MATCH 0{i + 1}
                </text>
                <circle cx="360" cy={y} r="3" fill="currentColor" />
              </g>
            ))}
            <text x="60" y="246">
              DISCOVER YOUR NEXT FAVORITE
            </text>
          </>
        )}
        {type === "sentiment" && (
          <>
            {[
              { x: 60, y: 55, w: 210, text: "Really loved this", color: 0.8 },
              {
                x: 145,
                y: 115,
                w: 255,
                text: "Could be a little better",
                color: 0.35,
              },
              {
                x: 85,
                y: 175,
                w: 260,
                text: "Exactly what I needed",
                color: 0.65,
              },
            ].map((item, i) => (
              <motion.g
                key={item.text}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, x: i % 2 === 0 ? -20 : 20 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <rect
                  x={item.x}
                  y={item.y}
                  width={item.w}
                  height="40"
                  rx="10"
                  fill="currentColor"
                  fillOpacity={item.color * 0.1}
                  stroke="currentColor"
                  strokeOpacity={item.color * 0.5}
                />
                <text x={item.x + 16} y={item.y + 25}>
                  {item.text}
                </text>
                <circle
                  cx={item.x + item.w - 18}
                  cy={item.y + 20}
                  r="4"
                  fill="currentColor"
                  opacity={item.color}
                />
              </motion.g>
            ))}
            <text x="60" y="246">
              FINDING MEANING IN LANGUAGE
            </text>
          </>
        )}
      </svg>
      <span className="visual-caption">CONCEPT VISUALIZATION</span>
    </div>
  );
}
