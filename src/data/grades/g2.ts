import type { GradeSpec } from "../types";
import { labCrushedStone } from "./operator-lab-tests";

export const g2: GradeSpec = {
  id: "g2",
  title: "G2 — Crushed Stone",
  category: "crushed",
  qualityTier: 2,
  summary:
    "High-quality graded crushed stone with slightly wider limits than G1; used in base and subbase layers.",
  pavementUse: ["Base and subbase layers", "Structural crushed stone where G1 is not specified"],
  parentMaterial:
    "Sound, clean rock and boulders. May contain up to 10% approved natural fines not from the same parent rock (LL ≤ 25, PI ≤ 6).",
  maxParticleMm: 37.5,
  grading: [
    { sieveMm: 37.5, minPass: 100, maxPass: 100 },
    { sieveMm: 28, minPass: 86, maxPass: 95 },
    { sieveMm: 20, minPass: 73, maxPass: 86 },
    { sieveMm: 14, minPass: 61, maxPass: 76 },
    { sieveMm: 5, minPass: 37, maxPass: 54 },
    { sieveMm: 2, minPass: 23, maxPass: 40 },
    { sieveMm: 0.425, minPass: 11, maxPass: 24 },
    { sieveMm: 0.075, minPass: 4, maxPass: 12 },
  ],
  strength: { notes: "10% FACT and ACV per rock group — Table A4.1.5-6" },
  soilConstants: {
    llMax: 25,
    piMax: 6,
    lsMax: 3,
    notes: "0.075 mm: PI ≤ 12",
  },
  flakinessMax: 35,
  fracturedFaces:
    "At least 50% by mass on each fraction ≥ 5 mm shall have at least one fractured face.",
  operatorGuide: {
    headline:
      "G2 is still a full graded crushed stone — wider limits than G1, but you must hit every sieve and strength test. Up to 10% approved natural fines are allowed if they meet LL/PI limits.",
    primaryControls: [
      "All sieves in Table A4.1.5-5 within G2 min/max % passing",
      "10% FACT and ACV per rock group — Table A4.1.5-6",
      "≥ 50% fractured faces on each fraction ≥ 5 mm",
      "Flakiness ≤ 35 on +14 mm fractions",
      "Natural fines ≤ 10% by mass, LL ≤ 25, PI ≤ 6 (only if approved)",
    ],
    plantSetup: [
      "Multi-stage crush and screen with re-blending — same workflow as G1, slightly wider targets",
      "Track natural fines separately; do not exceed 10% without engineer approval",
      "Same prohibited rock types as G1",
    ],
    labTests: labCrushedStone,
    adjustments: [
      {
        situation: "Grading fails high on 0,425 or 0,075",
        action:
          "Reduce fines generation or natural fines in blend; wash or screen if contract allows.",
      },
      {
        situation: "Grading fails coarse (e.g. 28 mm or 20 mm low)",
        action:
          "Add coarse stockpile to blend; check primary crusher setting.",
      },
      {
        situation: "FACT/ACV fail",
        action:
          "Review rock quality — G2 does not allow weak parent rock to be compensated by density alone.",
      },
      {
        situation: "Using G2 where contract specifies G1",
        action:
          "Do not substitute — heavy pavements need G1 envelope and stricter fines rules.",
      },
    ],
  },
  restrictions: [
    "Same prohibited rock groups as G1 (arenaceous except quartzitic sandstone, argillaceous, pedogenic/calcrete)",
  ],
  commonMistakes: [
    "Treating G2 as interchangeable with G1 on very heavy pavements",
    "Exceeding 10% natural fines without approval",
  ],
  whyLimits: [
    "Wider envelope than G1 but still enforces continuous grading for interlock",
    "Allows limited natural fines where parent rock alone cannot meet grading",
  ],
  cotoRef: "Table A4.1.5-5",
};
