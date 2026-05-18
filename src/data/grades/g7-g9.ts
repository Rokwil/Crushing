import type { GradeSpec } from "../types";
import { labGravelSoil } from "./operator-lab-tests";

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
  cbrRequirements: [{ compactionPercent: 93, cbrMin: 15, label: "Contract minimum for G7" }],
  gradingControlNote:
    "No sieve envelope — GM 0,75–2,7 and CBR at 93% MDD control acceptance. Material may need crushing or grid rolling.",
  compaction: "Mod AASHTO; CBR tested at 93% MDD.",
  operatorGuide: {
    headline:
      "G7 gravel-soil: hit GM 0,75–2,7, CBR ≥ 15% at 93% MDD, PI ≤ 3×GM + 10 (non-calcrete), swell ≤ 1,5%. Crush or grid-roll lumps as required.",
    primaryControls: [
      "Grading modulus 0,75–2,7",
      "CBR ≥ 15% at 93% Mod AASHTO MDD",
      "PI ≤ 3×GM + 10 on P0,425 (calcrete PI ≤ 20)",
      "Swell ≤ 1,5% at 100% MDD",
      "Max particle per layer-thickness rule (often ≤ 100 mm)",
    ],
    plantSetup: [
      "Rip, crush oversize lumps, or grid roll before blending",
      "Mix borrow zones to centre GM — avoid hauling only fines or only cobbles",
    ],
    labTests: labGravelSoil,
    compactionNote:
      "93% MDD is the standard compaction level for G7–G9 CBR — not 95% or 100%.",
    adjustments: [
      {
        situation: "CBR below 15% at 93%",
        action: "Dry back to OMC; add coarse; reduce plastic fines; compact to correct energy.",
      },
      {
        situation: "GM out of range",
        action: "Coarsen or fine blend; crush oversize that skews sieve curve.",
      },
      {
        situation: "High swell",
        action: "Remove expansive fines; change borrow; consider lime stabilisation if design allows.",
      },
      {
        situation: "Uncrushed boulders in sample",
        action: "Crush or remove oversize per layer thickness before placing.",
      },
    ],
  },
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
  cbrRequirements: [{ compactionPercent: 93, cbrMin: 10, label: "Contract minimum for G8" }],
  gradingControlNote:
    "GM 0,75–2,7; CBR ≥ 10% at 93% MDD. No crushed-stone grading envelope.",
  compaction: "Mod AASHTO; CBR at 93% MDD.",
  operatorGuide: {
    headline:
      "G8 is lower gravel-soil: GM 0,75–2,7 and CBR ≥ 10% at 93% MDD. Less demanding than G7 but same PI–GM relationship.",
    primaryControls: [
      "Grading modulus 0,75–2,7",
      "CBR ≥ 10% at 93% Mod AASHTO MDD",
      "PI ≤ 3×GM + 10 (non-calcrete)",
      "Swell ≤ 1,5% at 100% MDD",
    ],
    plantSetup: [
      "Blend pit run; light crushing of oversize if needed",
      "Confirm layer is subbase/selected — not structural base",
    ],
    labTests: labGravelSoil,
    compactionNote: "Always report and compare CBR at 93% MDD on the lab sheet.",
    adjustments: [
      {
        situation: "CBR 7–9% at 93%",
        action:
          "Moisture and compaction first; then coarsen blend or reduce PI fines.",
      },
      {
        situation: "GM too fine",
        action: "Add gravel or sand fraction; re-check PI limit with new GM.",
      },
      {
        situation: "Used in base layer by mistake",
        action: "Stop — G8 is not a crushed stone base; verify pavement design.",
      },
    ],
  },
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
  cbrRequirements: [{ compactionPercent: 93, cbrMin: 7, label: "Contract minimum for G9" }],
  gradingControlNote:
    "Lowest standard gravel-soil: GM 0,75–2,7; CBR ≥ 7% at 93% MDD.",
  compaction: "Mod AASHTO; CBR at 93% MDD.",
  operatorGuide: {
    headline:
      "G9 is the lowest standard gravel-soil in the G-series: GM 0,75–2,7 and CBR ≥ 7% at 93% MDD — for the least demanding pavement layers only.",
    primaryControls: [
      "Grading modulus 0,75–2,7",
      "CBR ≥ 7% at 93% Mod AASHTO MDD",
      "PI ≤ 3×GM + 10; swell ≤ 1,5%",
      "Max particle per layer-thickness rule",
    ],
    plantSetup: [
      "Minimal processing — blend and compact; crush only oversize that exceeds max size",
      "Do not use in base or high-traffic structural layers",
    ],
    labTests: labGravelSoil,
    compactionNote:
      "Low CBR target still requires proper moisture and 93% MDD compaction in the lab.",
    adjustments: [
      {
        situation: "CBR just below 7%",
        action:
          "Small moisture or GM correction often enough — re-test before rejecting full stockpile.",
      },
      {
        situation: "Material used as base",
        action: "Reject for layer — upgrade to G5/G4 or crushed stone per design.",
      },
      {
        situation: "GM fails",
        action: "Blend coarser or finer fraction from adjacent stockpiles.",
      },
    ],
  },
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
