import type { GradeSpec } from "../types";

export const g6: GradeSpec = {
  id: "g6",
  title: "G6 — Gravel Subbase",
  category: "gravel",
  qualityTier: 6,
  summary:
    "Gravel with cobbles or alternative materials for lower-quality subbase and selected layers.",
  pavementUse: ["Subbase", "Selected lower pavement layers", "Alternative materials when approved"],
  parentMaterial: "Gravel with cobbles, or approved alternative materials.",
  maxParticleMm: 100,
  grading: [],
  gradingModulus: { min: 1.2, max: 2.6 },
  strength: { cbrMinAtMdd: 25, cbrMddPercent: 95 },
  soilConstants: { piFormula: "PI ≤ 2×GM + 10", lsMax: 7 },
  swellMaxPercent: 0.5,
  commonMistakes: [
    "Exceeding maximum particle size (two-thirds layer thickness or 100 mm, whichever is smaller)",
    "Forgetting GM range 1.2–2.6 when no grading envelope applies",
  ],
  whyLimits: [
    "GM controls overall grading character when no sieve envelope is specified",
    "Lower CBR reflects use in less critical pavement positions",
  ],
  cotoRef: "Table A4.1.5-4",
};
