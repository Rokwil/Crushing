"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { allGrades } from "@/data/grades";

const categoryColors = {
  crushed: "from-amber-500 to-amber-700",
  gravel: "from-emerald-500 to-emerald-700",
  "gravel-soil": "from-sky-500 to-sky-700",
};

export function QualityLadder() {
  const reduce = useReducedMotion();
  const sorted = [...allGrades].sort((a, b) => a.qualityTier - b.qualityTier);

  return (
    <div className="relative mx-auto max-w-lg">
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-card-border" aria-hidden />
      <ul className="space-y-3">
        {sorted.map((grade, i) => {
          const inner = (
            <Link
              href={`/grades/${grade.id}`}
              className="group ml-12 flex items-center gap-4 rounded-xl border border-card-border bg-card p-4 transition hover:border-amber-500/40 hover:bg-card/80"
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${categoryColors[grade.category]} text-sm font-bold uppercase text-white`}
              >
                {grade.id.replace("g", "G").toUpperCase()}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-medium group-hover:text-amber-400">{grade.title}</p>
                <p className="truncate text-sm text-muted">{grade.summary}</p>
              </div>
              <span className="text-muted">→</span>
            </Link>
          );

          if (reduce) {
            return (
              <li key={grade.id} className="relative">
                <span className="absolute left-4 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-amber-500 ring-4 ring-background" />
                {inner}
              </li>
            );
          }

          return (
            <motion.li
              key={grade.id}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
            >
              <span className="absolute left-4 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-amber-500 ring-4 ring-background" />
              {inner}
            </motion.li>
          );
        })}
      </ul>
      <p className="mt-6 text-center text-xs text-muted">
        G1 = highest quality crushed stone · G9 = lowest standard gravel-soil
      </p>
    </div>
  );
}
