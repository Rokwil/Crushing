/** SANS 3001 / lab practice — verify against your contract and method statement */

export const sansGradingModulus = {
  title: "Grading modulus (GM) on lab reports",
  method: "SANS 3001-GR1 (and related parts)",
  formula:
    "Labs calculate GM from the sieve analysis using the method in SANS 3001-GR1. Do not mix this with older TRH14/COLTO retained-sieve formulas unless your contract explicitly says so.",
  plain:
    "GM is a single number summarising how coarse or fine the overall blend is. Higher GM → coarser overall grading. G4B and G5B must fall inside the COTO band (typically 1,5–2,5). G4A and G5A have **no GM limit in COTO** — the lab may still print GM for comparison.",
  cotoNote:
    "COTO Table A4.1.5-4: grading modulus is specified for G4B, G5B, and G6 — not for G4A or G5A (processed hard-rock gravels).",
};
