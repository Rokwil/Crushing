import type { GradeSpec } from "../types";
import { labCrushedStone } from "./operator-lab-tests";

export const g1: GradeSpec = {
  id: "g1",
  title: "G1 — Crushed Stone Base",
  category: "crushed",
  qualityTier: 1,
  summary:
    "The highest-quality graded crushed stone, used as the structural base layer on heavy-traffic roads. Not the same as crusher-run.",
  pavementUse: [
    "Uppermost structural base layer on high-traffic pavements",
    "Requires strict grading envelope and very high interlock after compaction",
  ],
  parentMaterial:
    "Sound, clean, unweathered high-quality rock. Only fines crushed from the same parent rock may be added (max 15% by mass; LL ≤ 25, PI ≤ 4).",
  additionalFines:
    "Fines from same parent rock only, for grading correction. LL ≤ 25, PI ≤ 4, max 15% by mass.",
  maxParticleMm: 37.5,
  grading: [
    { sieveMm: 37.5, minPass: 100, maxPass: 100 },
    { sieveMm: 28, minPass: 86, maxPass: 90 },
    { sieveMm: 20, minPass: 73, maxPass: 80 },
    { sieveMm: 14, minPass: 61, maxPass: 71 },
    { sieveMm: 5, minPass: 37, maxPass: 49 },
    { sieveMm: 2, minPass: 23, maxPass: 36 },
    { sieveMm: 0.425, minPass: 11, maxPass: 20 },
    { sieveMm: 0.075, minPass: 4, maxPass: 10 },
  ],
  strength: {
    notes: "10% FACT and ACV per rock group — see Table A4.1.5-6",
  },
  soilConstants: {
    llMax: 25,
    piMax: 4,
    lsMax: 2,
    notes: "0.075 mm fraction: PI ≤ 8 (E80s > 15M) or PI ≤ 12 (E80s ≤ 15M)",
  },
  flakinessMax: 35,
  fracturedFaces:
    "All faces fractured. At least 50% by mass on each fraction ≥ 5 mm shall have at least one fractured face.",
  compaction: "Minimum 88% apparent relative density (ARD) typical for acceptance",
  operatorGuide: {
    headline:
      "G1 is a controlled blend through a tight sieve envelope — not whatever comes out of the crusher in one pass. Every fraction must sit inside the COTO band and strength tests must pass for your rock type.",
    primaryControls: [
      "Every sieve in Table A4.1.5-5 within min/max % passing (Fuller-type continuity)",
      "10% FACT (min kN) and ACV (max %) per rock group — Table A4.1.5-6",
      "≥ 50% by mass on each fraction ≥ 5 mm with at least one fractured face; all faces fractured on parent rock",
      "Flakiness index ≤ 35 on fractions above 14 mm",
      "Added fines only from same parent rock, max 15% by mass, LL ≤ 25, PI ≤ 4",
      "Typical acceptance: ≥ 88% apparent relative density (ARD) after specialised compaction",
    ],
    plantSetup: [
      "Primary, secondary, and tertiary crushing with screening between stages",
      "Separate stockpiles per size; re-blend to stay inside the envelope — do not ship crusher-run",
      "Do not add borrow fines, crusher dust from another rock, or natural soil to “fill the gap”",
      "Keep parent rock sound, clean, and unweathered — no argillaceous, pedogenic, or soft arenaceous rock (except quartzitic sandstone)",
    ],
    labTests: [
      ...labCrushedStone,
      "Atterberg on added fines and 0,075 mm fraction when PI limits apply",
    ],
    compactionNote:
      "Site compaction for G1 often uses methods that achieve high interlock (including historical “slush” compaction on some contracts). Lab grading and FACT/ACV are decided on dry specimens; field density targets ARD, not CBR.",
    adjustments: [
      {
        situation: "Fails one or two sieves (e.g. too much on 5 mm or 0,075)",
        action:
          "Adjust blend: pull from the stockpile that is oversupplied, add the missing fraction, re-screen. Re-sample before continuing production.",
      },
      {
        situation: "10% FACT below minimum or ACV too high",
        action:
          "Change parent rock or borrow; weaker weathered rock cannot be “fixed” by grading. Verify correct rock group on the test report.",
      },
      {
        situation: "Fractured faces fail on +5 mm",
        action:
          "Use impact or cone crushing, choke-feed, avoid double-handling that rounds particles; check screening so rounded oversize is not recycled unchanged.",
      },
      {
        situation: "Flakiness > 35",
        action:
          "Cubicalise (cone with choke feed), remove flat chips, or change crusher configuration on +14 mm fractions.",
      },
      {
        situation: "PI on fines fails",
        action:
          "Stop foreign fines; use only same-parent rock fines; reduce P0,075 if PI is driven by clay contamination.",
      },
    ],
  },
  restrictions: [
    "Shall not be processed from arenaceous rocks (except quartzitic sandstone), argillaceous rocks, or pedogenic materials including calcrete",
  ],
  commonMistakes: [
    "Calling dense crusher-run “G1” — G1 requires a continuous Fuller-type grading envelope, not single-stage run-of-crusher product",
    "Assuming high Mod AASHTO density alone proves G1 quality — interlock and grading continuity matter more",
    "Using added fines from a different source than the parent rock",
  ],
  whyLimits: [
    "Tight grading creates particle interlock so the layer behaves almost like intact rock under traffic",
    "Low PI fines prevent moisture-sensitive weakening in the base",
    "Fractured faces improve shear resistance between particles",
  ],
  cotoRef: "Table A4.1.5-5",
};
