import type { GradeSpec } from "../types";
import { labGravelCbr } from "./operator-lab-tests";

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
  gradingControlNote:
    "COTO does not specify a sieve envelope for G6 — control is by grading modulus 1,2–2,6, CBR at 95% MDD, and PI ≤ 2×GM + 10 on P0,425. Labs still print sieve analysis; use G5B envelope as a blending guide if helpful.",
  referenceGradingGradeId: "g5b",
  strength: { cbrMinAtMdd: 25, cbrMddPercent: 95 },
  cbrRequirements: [{ compactionPercent: 95, cbrMin: 25, label: "Contract minimum for G6" }],
  soilConstants: { piFormula: "PI ≤ 2×GM + 10", lsMax: 7 },
  swellMaxPercent: 0.5,
  compaction:
    "Mod AASHTO. Max particle: lesser of 100 mm or two-thirds of compacted layer thickness.",
  operatorGuide: {
    headline:
      "G6 is lower subbase gravel: no COTO sieve band — you must hit GM 1,2–2,6, CBR ≥ 25% at 95% MDD, and PI ≤ 2×GM + 10. Oversize must respect layer thickness.",
    primaryControls: [
      "Grading modulus 1,2–2,6",
      "CBR ≥ 25% at 95% Mod AASHTO MDD",
      "PI ≤ 2×GM + 10 on P0,425; LS ≤ 7%",
      "Swell ≤ 0,5% at 100% MDD",
      "Max size ≤ 100 mm and ≤ two-thirds of compacted layer thickness",
    ],
    plantSetup: [
      "Crush or break oversize cobbles; grid roll where specified",
      "Blend borrow pits to move GM — coarser blend raises PI allowance",
      "Alternative materials only with engineer approval",
    ],
    labTests: labGravelCbr,
    compactionNote:
      "Check layer thickness on drawings before accepting +100 mm stone in the load.",
    adjustments: [
      {
        situation: "GM too low (fine)",
        action: "Add coarse cobbles or crushed stone; re-test PI limit with new GM.",
      },
      {
        situation: "GM too high (coarse)",
        action: "Add fines within PI rule; watch CBR does not drop.",
      },
      {
        situation: "Oversize in sample",
        action:
          "Break or screen out; max size is the smaller of 100 mm or ⅔ layer thickness.",
      },
      {
        situation: "CBR fails at 95%",
        action: "Moisture to OMC; coarsen blend; check swell and deleterious fines.",
      },
    ],
  },
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
