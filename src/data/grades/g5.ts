import type { GradeSpec } from "../types";

const gravelGrading = [
  { sieveMm: 50, minPass: 100, maxPass: 100 },
  { sieveMm: 37.5, minPass: 85, maxPass: 100 },
  { sieveMm: 20, minPass: 61, maxPass: 91 },
  { sieveMm: 14, minPass: 48, maxPass: 82 },
  { sieveMm: 5, minPass: 31, maxPass: 66 },
  { sieveMm: 2, minPass: 20, maxPass: 50 },
  { sieveMm: 0.425, minPass: 10, maxPass: 30 },
  { sieveMm: 0.075, minPass: 5, maxPass: 15 },
];

export const g5a: GradeSpec = {
  id: "g5a",
  title: "G5A — Processed Gravel (Hard Rock)",
  category: "gravel",
  qualityTier: 5,
  summary:
    "Similar to G4A but for subbase applications — multi-stage crushed hard rock or boulders.",
  pavementUse: ["Subbase layers", "Processed gravel subbase on medium-traffic roads"],
  parentMaterial:
    "Medium to hard rock or boulders requiring multi-stage crushing and screening.",
  maxParticleMm: 50,
  grading: [],
  gradingModulus: { min: 1.5, max: 2.5 },
  strength: { cbrMinAtMdd: 45, cbrMddPercent: 95 },
  soilConstants: { llMax: 25, piMax: 6, lsMax: 3 },
  flakinessMax: 35,
  fracturedFaces:
    "Crushed material: ≥ 50% by mass on each ≥ 5 mm sieve with at least one fractured face.",
  swellMaxPercent: 0.5,
  commonMistakes: ["Specifying G5A where only subbase CBR 25% is needed — may be over-designed"],
  whyLimits: [
    "Subbase strength (CBR 45% at 95% MDD) balances cost and performance",
    "GM and flakiness still apply to processed fractions",
  ],
  cotoRef: "Table A4.1.5-4",
};

export const g5b: GradeSpec = {
  id: "g5b",
  title: "G5B — Natural / Modified Gravel",
  category: "gravel",
  qualityTier: 5,
  summary:
    "Natural or modified gravel subbase with defined grading envelope and moderate plasticity limits.",
  pavementUse: ["Subbase", "Lower structural layers"],
  parentMaterial:
    "Gravel with pebbles/cobbles, soft rock, or pedogenic materials requiring ripping or light crushing.",
  maxParticleMm: 50,
  grading: gravelGrading,
  gradingModulus: { min: 1.5, max: 2.5 },
  strength: { cbrMinAtMdd: 25, cbrMddPercent: 95 },
  soilConstants: { piFormula: "PI ≤ 2×GM + 10", lsMax: 7 },
  fracturedFaces:
    "Where crushed: ≥ 50% by mass on each ≥ 5 mm sieve with at least one fractured face.",
  swellMaxPercent: 0.5,
  commonMistakes: [
    "Ignoring PI ≤ 2×GM + 10 relationship on P0.425 fraction",
    "Using material with excessive linear shrinkage",
  ],
  whyLimits: [
    "Grading envelope and GM together stabilise natural gravel blends",
    "PI linked to GM prevents overly plastic fines in subbase",
  ],
  cotoRef: "Table A4.1.5-4",
};
