import type { GradeSpec } from "../types";
import { labGravelCbr } from "./operator-lab-tests";
import { gravelGradingEnvelope } from "./g4a";

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
  gradingControlNote:
    "COTO does not specify a sieve envelope or grading modulus for G5A — acceptance is by CBR at 95% MDD and related limits. Use the G5B envelope as a practical blending guide.",
  referenceGradingGradeId: "g5b",
  strength: { cbrMinAtMdd: 45, cbrMddPercent: 95 },
  cbrRequirements: [{ compactionPercent: 95, cbrMin: 45, label: "Contract minimum for G5A subbase" }],
  soilConstants: { llMax: 25, piMax: 6, lsMax: 3 },
  flakinessMax: 35,
  fracturedFaces:
    "Crushed material: ≥ 50% by mass on each ≥ 5 mm sieve with at least one fractured face.",
  swellMaxPercent: 0.5,
  compaction:
    "Mod AASHTO for CBR at 95% MDD. Flakiness ≤ 35 on each +14 mm fraction where processed.",
  operatorGuide: {
    headline:
      "G5A is multi-stage crushed hard rock for subbase: CBR ≥ 45% at 95% MDD is the main gate — COTO does not give a sieve envelope or GM for G5A. Use the G5B table below to tune your blend.",
    primaryControls: [
      "CBR ≥ 45% at 95% Mod AASHTO MDD",
      "Swell ≤ 0,5% at 100% MDD",
      "On P0,425: LL ≤ 25, PI ≤ 6, LS ≤ 3%",
      "Flakiness ≤ 35 on each +14 mm fraction",
      "Max particle 50 mm (check layer-thickness rule)",
      "Where crushed: fractured faces on ≥ 5 mm fractions",
    ],
    plantSetup: [
      "Same multi-stage circuit as G4A but acceptance at 95% MDD CBR, not 100%",
      "Re-blend coarse and fine stockpiles using G5B envelope as a practical target",
      "Do not ship single-pass crusher-run for a G5A subbase",
    ],
    labTests: labGravelCbr,
    compactionNote:
      "Subbase layer — compare lab CBR at 95% MDD to the contract minimum. Moisture at OMC from GR30.",
    adjustments: [
      {
        situation: "CBR below 45% at 95% MDD",
        action:
          "Moisture toward OMC; increase coarse interlock; reduce P0,075; verify Mod AASHTo effort.",
      },
      {
        situation: "Grading too fine vs G5B guide",
        action:
          "Blend in coarse stockpile; open tertiary slightly; re-check PI and CBR.",
      },
      {
        situation: "Flakiness fails",
        action:
          "Cubicalise +14 mm fraction; remove flat screening.",
      },
      {
        situation: "Over-specifying G5A on a low-traffic road",
        action:
          "Confirm design — G5B or G6 may be sufficient and cheaper.",
      },
    ],
  },
  commonMistakes: ["Specifying G5A where only subbase CBR 25% is needed — may be over-designed"],
  whyLimits: [
    "Subbase strength (CBR 45% at 95% MDD) balances cost and performance",
    "Flakiness limits on +14 mm fractions still apply to processed hard rock",
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
  grading: gravelGradingEnvelope,
  gradingModulus: { min: 1.5, max: 2.5 },
  strength: { cbrMinAtMdd: 25, cbrMddPercent: 95 },
  cbrRequirements: [{ compactionPercent: 95, cbrMin: 25, label: "Contract minimum for G5B subbase" }],
  soilConstants: { piFormula: "PI ≤ 2×GM + 10", lsMax: 7 },
  fracturedFaces:
    "Where crushed: ≥ 50% by mass on each ≥ 5 mm sieve with at least one fractured face.",
  swellMaxPercent: 0.5,
  compaction: "Mod AASHTO MDD/OMC; CBR at 95% MDD.",
  operatorGuide: {
    headline:
      "G5B natural/modified gravel subbase: full sieve envelope, GM 1,5–2,5, CBR ≥ 25% at 95% MDD, and PI linked to GM on the P0,425 fraction.",
    primaryControls: [
      "All sieves in Table A4.1.5-4 within limits",
      "Grading modulus 1,5–2,5",
      "CBR ≥ 25% at 95% Mod AASHTO MDD",
      "PI ≤ 2×GM + 10 on P0,425 (calculate GM from lab first)",
      "LS ≤ 7%; swell ≤ 0,5% at 100% MDD",
      "Fractured faces where material is crushed",
    ],
    plantSetup: [
      "Light crushing, ripping, or grid rolling — blend pit material to envelope",
      "When PI is marginal, lowering GM (coarser blend) increases allowed PI — plan both together",
    ],
    labTests: labGravelCbr,
    compactionNote:
      "Always run GM before judging PI — the limit moves with GM.",
    adjustments: [
      {
        situation: "PI fails but GM is low",
        action:
          "Coarsen blend slightly (raises 2×GM + 10 allowance) if sieves still pass.",
      },
      {
        situation: "PI fails and GM already high",
        action:
          "Reduce clay fines, change borrow, or wash P0,425 fraction.",
      },
      {
        situation: "CBR low at 95%",
        action:
          "OMC moisture; more coarse; check swell.",
      },
      {
        situation: "GM out of band",
        action:
          "Same as G4B — add coarse or fines stockpile to shift GM and re-check all sieves.",
      },
    ],
  },
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
