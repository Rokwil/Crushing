import type { GradeSpec } from "../types";

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
