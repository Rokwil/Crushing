/** Field identification guidance synthesised from SA industry practice (TRH14, SAPEM Ch.6, SANRAL trench reinstatement guides) */

export interface VisualMaterialType {
  id: string;
  title: string;
  whatYouSee: string[];
  likelyClass: string;
  fieldChecks: string[];
  cautions: string[];
}

export const sanralVisualTypes: VisualMaterialType[] = [
  {
    id: "crushed-stone",
    title: "Crushed stone / hard rock aggregate",
    whatYouSee: [
      "Angular, freshly fractured faces on most particles",
      "Uniform blend of stone sizes from coarse to fine",
      "Little or no plastic fines when rubbed wet",
    ],
    likelyClass: "G1 – G3 (if lab grading and strength tests pass)",
    fieldChecks: [
      "Check for quarry stockpile segregation",
      "Confirm single-source parent rock for G1 fines",
      "Request grading analysis and 10% FACT / ACV",
    ],
    cautions: [
      "Dense crusher-run is NOT automatically G1 — grading envelope must be verified",
    ],
  },
  {
    id: "natural-gravel",
    title: "Natural gravel with cobbles",
    whatYouSee: [
      "Rounded to sub-angular pebbles and cobbles in a sandy or silty matrix",
      "Visible stone content; stones often varied in size",
      "May need crushing or grid rolling if oversized",
    ],
    likelyClass: "G4 – G6 or G7 (after processing and testing)",
    fieldChecks: [
      "Estimate stone content and maximum particle size vs layer thickness",
      "Check PI on P0.425 fraction",
      "CBR at 93–100% MDD per specification",
    ],
    cautions: [
      "Weathered or plastic fines can fail PI limits even if gravel looks ‘good’",
    ],
  },
  {
    id: "gravel-soil",
    title: "Gravel-soil / selected fill",
    whatYouSee: [
      "Mix of fines and gravel; may include lumps requiring breaking",
      "Can look acceptable dry but weak when wet",
      "Shrinkage cracks on fines when dry may indicate clay",
    ],
    likelyClass: "G7 – G9 (sometimes G10 for fill)",
    fieldChecks: [
      "DCP or CBR on compacted layer — do not judge by appearance alone",
      "Record in-situ moisture (dry / optimum / wet) with DCP readings",
      "Grading modulus and PI ≤ 3×GM + 10 (non-calcrete) on COTO",
    ],
    cautions: [
      "A hard dry layer can still be G9 or G10 when soaked — test at specification moisture",
    ],
  },
  {
    id: "fine-soil",
    title: "Fine soil (silty / clayey)",
    whatYouSee: [
      "Little or no gravel retained on 5 mm sieve",
      "Sticky or weak when wet; often smooth, uniform appearance",
      "May show cracks and curling when dry if clayey",
    ],
    likelyClass: "Below G7 unless stabilised — not a structural base without treatment",
    fieldChecks: [
      "Atterberg limits on P0.425",
      "Swell and CBR after soaking",
      "Consider lime or cement stabilisation if design allows",
    ],
    cautions: [
      "Never assume trench backfill or borrow material is G8 ‘because it was hard in the pit’",
    ],
  },
];

export const sanralClassificationSteps = [
  {
    step: 1,
    title: "Describe what you see",
    detail:
      "Record colour, stone content, maximum particle size, moisture, and whether particles are angular (crushed) or rounded (natural).",
  },
  {
    step: 2,
    title: "Estimate material family",
    detail:
      "Use visual type (crushed stone, natural gravel, gravel-soil, fine soil) to narrow which G-range is realistic.",
  },
  {
    step: 3,
    title: "Sample and test",
    detail:
      "Classification is confirmed by grading, Atterberg limits, CBR, FACT/ACV, and swell per COTO/TRH14 — not field appearance alone.",
  },
  {
    step: 4,
    title: "Match to contract spec",
    detail:
      "On SANRAL and provincial projects, COTO Chapter 4 limits govern acceptance; TRH14 and SAPEM support investigation and design.",
  },
];

export const sanralGuideReferences = [
  {
    title: "SAPEM — South African Pavement Engineering Manual",
    note: "Chapter 6 covers pavement investigation, DCP use, and classifying materials (including TRH14).",
  },
  {
    title: "TRH14 — Guidelines for Road Construction Materials",
    note: "Foundational G1–G10 classification system and material requirements (1985, reprinted 1989).",
  },
  {
    title: "COTO Chapter 4 — Materials",
    note: "Current acceptance limits for G-materials on new public-sector contracts.",
  },
  {
    title: "TMH1 / TMH5",
    note: "Standard test methods and sampling of materials for laboratory classification.",
  },
];
