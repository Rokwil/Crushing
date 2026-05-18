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

export const g4a: GradeSpec = {
  id: "g4a",
  title: "G4A — Processed Gravel (Hard Rock)",
  category: "gravel",
  qualityTier: 4,
  summary:
    "Medium to hard rock or boulders requiring multi-stage crushing and screening; used in base/subbase with strict CBR.",
  pavementUse: ["Base layer (CBR ≥ 80% at 100% MDD)", "Subbase on high-quality processed gravel"],
  parentMaterial:
    "Medium to hard rock or boulders requiring multi-stage crushing and screening.",
  maxParticleMm: 50,
  grading: [],
  gradingModulus: { min: 1.5, max: 2.5 },
  strength: { cbrMinAtMdd: 80, cbrMddPercent: 100 },
  soilConstants: { llMax: 25, piMax: 6, lsMax: 3 },
  flakinessMax: 35,
  fracturedFaces:
    "Crushed material: ≥ 50% by mass retained on each ≥ 5 mm sieve shall have at least one fractured face.",
  swellMaxPercent: 0.2,
  commonMistakes: [
    "Confusing G4A (multi-stage crushed hard rock) with natural gravel G4B",
    "Missing flakiness index on fractions above 14 mm",
  ],
  whyLimits: [
    "Multi-stage processing produces a controlled blend for base layer strength",
    "High CBR at 100% MDD aligns with structural base requirements",
  ],
  cotoRef: "Table A4.1.5-4",
};

export const g4b: GradeSpec = {
  id: "g4b",
  title: "G4B — Gravel / Soft Rock",
  category: "gravel",
  qualityTier: 4,
  summary:
    "Natural gravel, cobbles, soft rock (single/two-stage crushing), or pedogenic materials requiring ripping.",
  pavementUse: ["Base and subbase where specified", "Gravel with processing or grid rolling"],
  parentMaterial:
    "Gravel with pebbles/cobbles, soft rock (single- or two-stage crushing), or pedogenic materials requiring dozer ripping.",
  maxParticleMm: 50,
  grading: gravelGrading,
  gradingModulus: { min: 1.5, max: 2.5 },
  strength: {
    cbrMinAtMdd: 45,
    cbrMddPercent: 95,
    notes: "Dry western areas (Weinert N ≥ 10) with E80s < 3M: subbase CBR ≥ 25% at 95% if base ≥ 150 mm",
  },
  soilConstants: { llMax: 30, piMax: 10, lsMax: 5 },
  fracturedFaces:
    "Crushed gravels/boulders: ≥ 50% by mass on each ≥ 5 mm sieve with at least one fractured face.",
  swellMaxPercent: 0.5,
  commonMistakes: [
    "Using G4B grading envelope without checking PI limits on P0.425",
    "Skipping fractured-face checks when material is crushed in place",
  ],
  whyLimits: [
    "Grading envelope controls voids and stability for natural/modified gravels",
    "Lower CBR than G4A reflects less consistent parent material",
  ],
  cotoRef: "Table A4.1.5-4",
};
