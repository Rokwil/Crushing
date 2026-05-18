"use client";

import { useState } from "react";
import { sanralVisualTypes } from "@/data/sanral-visual-classification";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function VisualClassificationCards() {
  const [active, setActive] = useState(sanralVisualTypes[0].id);
  const reduce = useReducedMotion();
  const item = sanralVisualTypes.find((t) => t.id === active)!;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {sanralVisualTypes.map((type) => (
          <button
            key={type.id}
            type="button"
            onClick={() => setActive(type.id)}
            className={`rounded-lg px-3 py-2 text-sm transition ${
              active === type.id
                ? "bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/50"
                : "border border-card-border text-muted hover:text-foreground"
            }`}
          >
            {type.title}
          </button>
        ))}
      </div>
      {reduce ? (
        <div className="mt-6 rounded-xl border border-card-border bg-card p-6">
          <VisualDetail item={item} />
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            className="mt-6 rounded-xl border border-card-border bg-card p-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <VisualDetail item={item} />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

function VisualDetail({ item }: { item: (typeof sanralVisualTypes)[0] }) {
  return (
    <>
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="text-sm font-medium text-amber-400">What you see in the field</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
            {item.whatYouSee.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium text-amber-400">Likely G-class range</h4>
          <p className="mt-2 text-sm text-slate-300">{item.likelyClass}</p>
          <h4 className="mt-4 text-sm font-medium text-amber-400">Field checks</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
            {item.fieldChecks.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-sm text-amber-200/90">
        <strong className="text-amber-400">Caution:</strong> {item.cautions.join(" ")}
      </div>
    </>
  );
}
