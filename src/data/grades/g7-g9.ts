import type { GradeSpec } from "../types";

const baseSoil = {
  gradingModulus: { min: 0.75, max: 2.7 },
  soilConstants: {
    piFormula: "PI ≤ 3×GM + 10 (non-calcrete); calcrete PI ≤ 20",
    notes: "Primary control on P0.425 fraction",
  },
  swellMaxPercent: 1.5,
};

export const g7: GradeSpec = {
  id: "g7",
  title: "G7 — Gravel-Soil",
  category: "gravel-soil",
  qualityTier: 7,
  summary:
    "Soil or gravel with cobbles/boulders that may need crushing or grid rolling — lowest structural gravel-soil with CBR 15%.",
  pavementUse: ["Subbase", "Selected layers", "Materials requiring crushing or grid rolling"],
  parentMaterial:
    "Soil, gravel with cobbles, boulders and lumps of hard material, or approved alternatives.",
  maxParticleMm: 100,
  grading: [],
  ...baseSoil,
  strength: { cbrMinAtMdd: 15, cbrMddPercent: 93 },
  commonMistakes: [
    "Applying crushed-stone grading envelopes to G7 — GM and PI rules apply instead",
    "Not crushing oversized lumps when required",
  ],
  whyLimits: [
    "GM defines overall particle distribution for gravel-soil blends",
    "CBR at 93% MDD is the primary strength acceptance test",
  ],
  cotoRef: "Table A4.1.5-3",
};

export const g8: GradeSpec = {
  id: "g8",
  title: "G8 — Gravel-Soil",
  category: "gravel-soil",
  qualityTier: 8,
  summary: "Soil or gravel for lower-quality pavement layers with CBR ≥ 10% at 93% MDD.",
  pavementUse: ["Subbase", "Lower selected layers"],
  parentMaterial: "Soil, gravel, or approved alternative materials.",
  maxParticleMm: 100,
  grading: [],
  ...baseSoil,
  strength: { cbrMinAtMdd: 10, cbrMddPercent: 93 },
  commonMistakes: ["Confusing G8 with selected fill — check layer design on drawings"],
  whyLimits: [
    "Progressively lower CBR reflects reduced structural demand",
    "Swell limit prevents expansive soils in pavement",
  ],
  cotoRef: "Table A4.1.5-3",
};

export const g9: GradeSpec = {
  id: "g9",
  title: "G9 — Gravel-Soil",
  category: "gravel-soil",
  qualityTier: 9,
  summary:
    "Lowest standard gravel-soil material (CBR ≥ 7% at 93% MDD) for the least demanding pavement layers.",
  pavementUse: ["Lower subbase", "Selected fill in pavement structure"],
  parentMaterial: "Soil, gravel, or approved alternative materials.",
  maxParticleMm: 100,
  grading: [],
  ...baseSoil,
  strength: { cbrMinAtMdd: 7, cbrMddPercent: 93 },
  commonMistakes: [
    "Using G9 in base layers — it is not a crushed stone base",
    "Ignoring maximum particle size relative to layer thickness",
  ],
  whyLimits: [
    "Minimum CBR still ensures some bearing capacity after compaction",
    "GM band keeps material workable and reasonably graded",
  ],
  cotoRef: "Table A4.1.5-3",
};
