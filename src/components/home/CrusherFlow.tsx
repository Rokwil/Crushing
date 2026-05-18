"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  { label: "Blast / rip", icon: "💥" },
  { label: "Primary crush", icon: "⚙️" },
  { label: "Screen", icon: "▦" },
  { label: "Stockpile", icon: "▲" },
];

export function CrusherFlow() {
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-8 md:gap-4">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center gap-2 md:gap-4">
          {reduce ? (
            <div className="flex flex-col items-center rounded-xl border border-card-border bg-card px-4 py-3">
              <span className="text-2xl">{step.icon}</span>
              <span className="mt-1 text-xs font-medium text-muted">{step.label}</span>
            </div>
          ) : (
            <motion.div
              className="flex flex-col items-center rounded-xl border border-card-border bg-card px-4 py-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.4 }}
            >
              <motion.span
                className="text-2xl"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
              >
                {step.icon}
              </motion.span>
              <span className="mt-1 text-xs font-medium text-muted">{step.label}</span>
            </motion.div>
          )}
          {i < steps.length - 1 && (
            <span className="text-amber-500/60" aria-hidden>
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
