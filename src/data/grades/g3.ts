import type { GradeSpec } from "../types";

export const g3: GradeSpec = {
  id: "g3",
  title: "G3 — Crushed Stone",
  category: "crushed",
  qualityTier: 3,
  summary:
    "Graded crushed stone with a smaller maximum size (28 mm) and additional strength checks (CBR, swell) for subbase use.",
  pavementUse: ["Subbase and selected lower structural layers", "Where 28 mm maximum aggregate is specified"],
  parentMaterial:
    "Sound, clean rock and boulders, or coarse gravel. Up to 15% approved natural fines (LL ≤ 25, PI ≤ 6).",
  maxParticleMm: 28,
  grading: [
    { sieveMm: 28, minPass: 100, maxPass: 100 },
    { sieveMm: 20, minPass: 73, maxPass: 86 },
    { sieveMm: 14, minPass: 61, maxPass: 76 },
    { sieveMm: 5, minPass: 37, maxPass: 54 },
    { sieveMm: 2, minPass: 23, maxPass: 40 },
    { sieveMm: 0.425, minPass: 11, maxPass: 24 },
    { sieveMm: 0.075, minPass: 4, maxPass: 12 },
  ],
  strength: {
    cbrMinAtMdd: 80,
    cbrMddPercent: 100,
    notes: "10% FACT and ACV per rock group — Table A4.1.5-6",
  },
  soilConstants: { llMax: 25, piMax: 6, lsMax: 3, notes: "0.075 mm: PI ≤ 12" },
  flakinessMax: 35,
  fracturedFaces:
    "At least 50% by mass on each fraction ≥ 5 mm shall have at least one fractured face.",
  swellMaxPercent: 0.2,
  commonMistakes: [
    "Using 37.5 mm maximum aggregate when G3 specifies 28 mm",
    "Ignoring CBR at 100% MDD requirement",
  ],
  whyLimits: [
    "Smaller maximum size suits subbase thickness and compaction equipment",
    "CBR and swell limits control long-term deformation under moisture",
  ],
  cotoRef: "Table A4.1.5-5",
};
