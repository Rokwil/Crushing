export interface GlossaryEntry {
  term: string;
  slug: string;
  definition: string;
  tmh?: string;
}

export const glossary: GlossaryEntry[] = [
  {
    term: "ACV (Aggregate Crushing Value)",
    slug: "acv",
    definition:
      "A measure of aggregate strength under compression. Lower ACV generally indicates stronger aggregate. Used with 10% FACT for G1–G3 acceptance.",
    tmh: "TMH1 Method A14",
  },
  {
    term: "10% FACT (10% Fines Aggregate Crushing Test)",
    slug: "fact10",
    definition:
      "Force required to crush material so 10% passes 2.36 mm sieve. Higher kN values indicate stronger rock. Primary strength test for crushed stone.",
    tmh: "TMH1 Method A10",
  },
  {
    term: "CBR (California Bearing Ratio)",
    slug: "cbr",
    definition:
      "Penetration resistance of compacted material compared to a standard. Expressed as % of MDD at which the test is run (e.g. CBR ≥ 25% at 95% MDD).",
    tmh: "TMH1 Method A8",
  },
  {
    term: "COTO",
    slug: "coto",
    definition:
      "Committee of Transport Officials — publishes Standard Specifications for Road and Bridge Works used in South African public road contracts.",
  },
  {
    term: "COLTO",
    slug: "colto",
    definition:
      "Committee of Land Transport Officials — predecessor specification to COTO. Still referenced on older drawings and site notes.",
  },
  {
    term: "TRH14",
    slug: "trh14",
    definition:
      "Technical Recommendations for Highways 14 (1985) — Guidelines for Road Construction Materials. Introduced the G1–G10 classification system used in South Africa.",
  },
  {
    term: "DCP (Dynamic Cone Penetrometer)",
    slug: "dcp",
    definition:
      "Field device measuring penetration mm/blow, correlated to in-situ CBR and TRH14 class during pavement investigations (see SAPEM Ch.6).",
  },
  {
    term: "SAPEM",
    slug: "sapem",
    definition:
      "South African Pavement Engineering Manual — SANRAL reference for investigation, testing, and material classification on road projects.",
  },
  {
    term: "Flakiness Index",
    slug: "flakiness",
    definition:
      "Percentage of flaky particles in coarse aggregate fractions. Must not exceed 35 on fractions above 14 mm for many G-materials.",
    tmh: "TMH1 Method A9",
  },
  {
    term: "Fractured Faces",
    slug: "fractured-faces",
    definition:
      "Broken (not smooth) particle faces from crushing. At least 50% by mass on ≥ 5 mm fractions must have one fractured face for many crushed materials.",
  },
  {
    term: "Grading Modulus (GM)",
    slug: "grading-modulus",
    definition:
      "Sum of cumulative % retained on 0.075, 0.425, 2, 5, 10, 14, and 20 mm sieves, divided by 100. Used when no full grading envelope is specified.",
  },
  {
    term: "LL / PI",
    slug: "ll-pi",
    definition:
      "Liquid Limit and Plasticity Index — Atterberg limits describing fines plasticity. Lower PI means less moisture-sensitive fines.",
    tmh: "TMH1 Methods A2, A3",
  },
  {
    term: "MDD / MOD",
    slug: "mdd",
    definition:
      "Maximum Dry Density — reference density for compaction and CBR tests (often Mod AASHTO in SA practice).",
  },
  {
    term: "E80s",
    slug: "e80s",
    definition:
      "Cumulative equivalent standard axles over design life — traffic loading parameter affecting material requirements (e.g. G1 soil constants).",
  },
  {
    term: "Fuller Curve",
    slug: "fuller-curve",
    definition:
      "Ideal particle-size distribution for dense packing. G1 grading envelopes are bounded by Fuller curves (powers 0.3 and 0.5).",
  },
  {
    term: "Crusher-run",
    slug: "crusher-run",
    definition:
      "Single-stage crushed quarry product without controlled blending. NOT equivalent to G1 despite sometimes appearing dense.",
  },
  {
    term: "P0.425",
    slug: "p0425",
    definition: "Portion passing the 0.425 mm sieve — fines fraction used for PI and LS testing on gravel materials.",
  },
  {
    term: "LS / LSM",
    slug: "ls",
    definition:
      "Linear Shrinkage and Linear Shrinkage Modulus — important for calcrete and some gravel acceptance.",
  },
];
