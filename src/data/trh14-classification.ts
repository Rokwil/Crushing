/** Educational summary aligned with CSRA TRH14 (1985) and SAPEM references — verify on official documents */

export interface Trh14MaterialFamily {
  grades: string;
  title: string;
  description: string;
  typicalCbrNote: string;
  href: string;
}

export const trh14Families: Trh14MaterialFamily[] = [
  {
    grades: "G1 – G3",
    title: "Graded crushed stone",
    description:
      "Crushed sound rock, boulders, or coarse gravel with controlled grading envelopes, strength (10% FACT / ACV), and fractured faces. G1 is the premium base material.",
    typicalCbrNote: "Structural bases — strength by FACT/ACV and density, not CBR alone",
    href: "/grades/g1",
  },
  {
    grades: "G4 – G6",
    title: "Natural and processed gravels",
    description:
      "Natural gravel that may be blended, crushed, or modified (including pedogenic materials). Grading modulus and CBR at specified compaction are key controls.",
    typicalCbrNote: "e.g. G4 base CBR ≥ 80% at ~98% Mod AASHTO; G5 subbase CBR ≥ 45% at 95%",
    href: "/grades/g4b",
  },
  {
    grades: "G7 – G10",
    title: "Gravel-soil materials",
    description:
      "Soils and gravels with cobbles; may require crushing or grid rolling. Classified mainly by CBR at 93% Mod AASHTO, PI vs GM, and swell.",
    typicalCbrNote: "G7 ≥ 15%; G8 ≥ 10%; G9 ≥ 7% CBR at 93% MDD (TRH14 typical values)",
    href: "/grades/g7",
  },
];

/** SAPEM Ch.6 Table 19 — DCP interpretation linked to TRH14 class (indicative field use) */
export interface DcpTrh14Row {
  dcpMmPerBlow: string;
  inferredCbr: string;
  trh14Class: string;
  typicalLayer: string;
}

export const dcpTrh14Table: DcpTrh14Row[] = [
  { dcpMmPerBlow: "25 – 40", inferredCbr: "3 – 7", trh14Class: "G10", typicalLayer: "Fill" },
  { dcpMmPerBlow: "15 – 25", inferredCbr: "7 – 15", trh14Class: "G9", typicalLayer: "Lower selected layer" },
  { dcpMmPerBlow: "7 – 15", inferredCbr: "25 – 45", trh14Class: "G7", typicalLayer: "Upper selected layer" },
  { dcpMmPerBlow: "3 – 7", inferredCbr: "45 – 150", trh14Class: "G5", typicalLayer: "Subbase (uncemented)" },
  { dcpMmPerBlow: "< 1", inferredCbr: "> 150", trh14Class: "G2", typicalLayer: "Base / cemented subbase" },
];

export const trh14GradingModulus = {
  formula: "GM = (P₂₀ + P₁₄ + P₅ + P₂ + P₀,₄₂₅ + P₀,₀₇₅ + P₀,₀₇₅) / 100",
  plain:
    "In TRH14, grading modulus uses the sum of cumulative percentages **retained** on selected sieves (2 mm, 0.425 mm, 0.075 mm in older summaries), divided by 100.",
  cotoNote:
    "COTO Chapter 4 uses a grading modulus based on **passing** percentages on more sieves. Always use the GM definition in your contract document — they are not interchangeable.",
};

export const trh14KeyPoints = [
  "TRH14 (1985, CSRA/COLTO era) introduced the G1–G10 naming system for pavement materials used across South Africa.",
  "Classification combines grading, Atterberg limits (PI, LL, LS), CBR, swell, and strength tests depending on material type.",
  "COTO (2020+) is the current specification for public roadworks; it refines G-types (e.g. G4A/G4B) and uses metric sieves.",
  "TRH14 remains essential background for understanding why G-grades exist and how field tools like the DCP relate to class.",
];
