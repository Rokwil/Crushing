import type { GradeSpec } from "../types";
import { labGravelCbr } from "./operator-lab-tests";

/** COTO Table A4.1.5-4 — G4B/G5B/G6 sieve envelope (shared) */
export const gravelGradingEnvelope = [
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
    "Multi-stage crushed hard rock or boulders for structural base. COTO acceptance is by CBR at 100% Mod AASHTO MDD — not by a fixed sieve envelope.",
  pavementUse: [
    "Base layer — CBR ≥ 80% at 100% of Mod AASHTO maximum dry density (MDD)",
    "Subbase only where the pavement design specifies G4A (check layer thickness vs max particle size)",
  ],
  parentMaterial:
    "Medium to hard rock or boulders requiring multi-stage crushing and screening (primary, secondary, and often tertiary stages).",
  maxParticleMm: 50,
  grading: [],
  gradingControlNote:
    "COTO Table A4.1.5-4 does **not** specify a grading envelope or grading modulus for G4A. Your lab will still print sieve analysis and GM — use those to tune the plant, but pass/fail for G4A base is driven mainly by CBR @ 100% MDD, swell, soil constants on the P0,425 fraction, and flakiness on fractions above 14 mm.",
  referenceGradingGradeId: "g4b",
  strength: { cbrMinAtMdd: 80, cbrMddPercent: 100 },
  cbrRequirements: [
    {
      compactionPercent: 100,
      cbrMin: 80,
      label: "Contract minimum for G4A base (COTO)",
    },
  ],
  soilConstants: {
    llMax: 25,
    piMax: 6,
    lsMax: 3,
    notes: "Measured on material passing the 0,425 mm sieve (P0,425 fraction)",
  },
  flakinessMax: 35,
  swellMaxPercent: 0.2,
  compaction:
    "Mod AASHTO compaction for CBR and MDD/OMC (SANS 3001-GR30 / GR40). Target moisture near lab OMC when compacting test specimens.",
  restrictions: [
    "Maximum particle size in base: 50 mm; in other pavement layers: the lesser of 100 mm or two-thirds of compacted layer thickness",
    "Flakiness index ≤ 35 on each individual fraction retained above 14 mm",
  ],
  operatorGuide: {
    headline:
      "You are not trying to hit a single crusher-run gradation. You are building a blend that compacts to ≥ 80% CBR at 100% MDD while keeping fines plasticity low.",
    primaryControls: [
      "CBR ≥ 80% at 100% Mod AASHTO MDD (this is the main G4A base requirement)",
      "Swell ≤ 0,2% at 100% MDD",
      "On P0,425: LL ≤ 25, PI ≤ 6, linear shrinkage ≤ 3%",
      "Flakiness index ≤ 35 on each +14 mm fraction",
      "Max particle ≤ 50 mm in base (check layer thickness rule for subbase)",
    ],
    plantSetup: [
      "Multi-stage crushing and screening — not single-pass crusher-run",
      "Maintain separate stockpiles for coarse and fine fractions; re-blend to move the lab grading curve",
      "Control dust/fines at the tertiary stage — excess P0,075 hurts PI and CBR",
      "Keep stockpiles moist enough to limit segregation but near OMC before haul if possible",
    ],
    labTests: labGravelCbr,
    compactionNote:
      "Use the MDD and OMC from your latest GR30 test (e.g. 2240 kg/m³ and 4,4% OMC on sandstone gravel). If field moisture is far below OMC, CBR at 100% MDD will drop even if grading looks fine.",
    adjustments: [
      {
        situation: "CBR below 80% at 100% MDD but grading looks OK",
        action:
          "Check compaction moisture (add water toward OMC), verify Mod AASHTo effort in the lab, and increase coarse interlock — slightly less fines, more +5 mm stone.",
      },
      {
        situation: "Too much passing 0,075 mm or PI failing on P0,425",
        action:
          "Reduce fines generation (tertiary crusher gap, washing if allowed), blend in more coarse fraction, avoid dirty overburden.",
      },
      {
        situation: "CBR OK at 100% but fails swell",
        action:
          "Investigate clayey fines or weathered sandstone; reduce P0,425 or change borrow.",
      },
      {
        situation: "Flakiness > 35 on +14 mm fractions",
        action:
          "Change crusher type or circuit (e.g. choke-feed cone), add a cubicalising stage, or remove flat screenings.",
      },
      {
        situation: "Grading too coarse (low % passing 5 mm and 2 mm)",
        action:
          "Increase fines fraction in the blend or close tertiary crusher — watch PI and CBR after each change.",
      },
      {
        situation: "Grading too fine (high % passing 0,425)",
        action:
          "Blend in more coarse stockpile; open secondary/tertiary gaps slightly.",
      },
    ],
  },
  commonMistakes: [
    "Treating G4A like G4B and only chasing GM 1,5–2,5 — G4A has no GM limit in COTO",
    "Shipping single-stage crusher-run and expecting G4A CBR at 100% MDD",
    "Ignoring OMC from the MDD test when interpreting low CBR",
    "Confusing G4A (multi-stage hard rock) with natural gravel G4B",
  ],
  whyLimits: [
    "CBR at full Mod AASHTO density proves the processed blend can carry base traffic loads",
    "Low plasticity fines prevent moisture-sensitive weakening",
    "Multi-stage processing gives a controllable blend without relying on a fixed sieve band",
  ],
  cotoRef: "Table A4.1.5-4 (G4A column)",
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
  grading: gravelGradingEnvelope,
  gradingModulus: { min: 1.5, max: 2.5 },
  strength: {
    cbrMinAtMdd: 45,
    cbrMddPercent: 95,
    notes: "Dry western areas (Weinert N ≥ 10) with E80s < 3M: subbase CBR ≥ 25% at 95% if base ≥ 150 mm",
  },
  cbrRequirements: [{ compactionPercent: 95, cbrMin: 45, label: "Contract minimum for G4B base" }],
  soilConstants: { llMax: 30, piMax: 10, lsMax: 5 },
  fracturedFaces:
    "Crushed gravels/boulders: ≥ 50% by mass on each ≥ 5 mm sieve with at least one fractured face.",
  swellMaxPercent: 0.5,
  compaction:
    "Mod AASHTO MDD/OMC for CBR at 95%. Moisture near OMC when compacting test specimens.",
  operatorGuide: {
    headline:
      "G4B is natural or lightly processed gravel: every sieve and GM 1,5–2,5 must pass, plus CBR ≥ 45% at 95% MDD. This is not the same as G4A (no fixed envelope on G4A).",
    primaryControls: [
      "Every sieve in Table A4.1.5-4 within min/max % passing",
      "Grading modulus 1,5–2,5 (SANS 3001-GR1)",
      "CBR ≥ 45% at 95% Mod AASHTO MDD (base)",
      "Swell ≤ 0,5% at 100% MDD",
      "On P0,425: LL ≤ 30, PI ≤ 10, LS ≤ 5%",
      "Where crushed: ≥ 50% fractured faces on each fraction ≥ 5 mm",
      "Max particle 50 mm in base; layer-thickness rule in other layers",
    ],
    plantSetup: [
      "Single- or two-stage crushing, grid rolling, or ripping pedogenic material — blend to envelope",
      "Combine natural pit run with crushed oversize to correct GM and individual sieves",
      "Rip and blend calcrete or soft rock only where approved in the borrow approval",
    ],
    labTests: labGravelCbr,
    compactionNote:
      "Western dry-area exception: subbase may accept CBR ≥ 25% at 95% if base ≥ 150 mm and Weinert N ≥ 10 — confirm on your contract.",
    adjustments: [
      {
        situation: "GM below 1,5 (too fine overall)",
        action:
          "Add coarse cobbles or crushed +19 mm fraction; reduce fines in blend; re-check every sieve.",
      },
      {
        situation: "GM above 2,5 (too coarse)",
        action:
          "Add crusher fines or natural sand within PI limits; watch 0,075 does not exceed max.",
      },
      {
        situation: "CBR low at 95% MDD, grading OK",
        action:
          "Moisture toward OMC; more coarse fraction; check PI and swell on P0,425.",
      },
      {
        situation: "Fails one sieve only (e.g. 0,075 high)",
        action:
          "Screen or wash fines; blend with coarser stockpile; re-test GM and CBR together.",
      },
      {
        situation: "Fractured faces fail on crushed gravel",
        action:
          "Crush oversize through impactor or cone; do not place rounded river cobbles uncrushed.",
      },
      {
        situation: "PI or LS fail on P0,425",
        action:
          "Reduce clay fines; change borrow; avoid pedogenic material with high plasticity.",
      },
    ],
  },
  commonMistakes: [
    "Using G4B grading envelope without checking PI limits on P0,425",
    "Skipping fractured-face checks when material is crushed in place",
    "Assuming G4B and G4A have the same acceptance rules",
  ],
  whyLimits: [
    "Grading envelope controls voids and stability for natural/modified gravels",
    "Lower CBR than G4A reflects less consistent parent material",
  ],
  cotoRef: "Table A4.1.5-4 (G4B column)",
};
