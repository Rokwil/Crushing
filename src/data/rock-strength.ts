import type { RockStrengthRow } from "./types";

/** COTO Ch.4 Table A4.1.5-6 — G1–G3 strength by rock group */
export const rockStrengthG1G3: RockStrengthRow[] = [
  {
    rockGroup: "Arenaceous rocks with siliceous cement (quartzitic sandstone)",
    fact10DryMinKn: 110,
    acvMaxPercent: 29,
  },
  {
    rockGroup: "Arenaceous rocks with non-siliceous cement",
    fact10DryMinKn: 140,
    acvMaxPercent: 27,
  },
  { rockGroup: "Diamictites", fact10DryMinKn: 200, acvMaxPercent: 21 },
  { rockGroup: "Calcrete", fact10DryMinKn: 80, acvMaxPercent: 29 },
  {
    rockGroup: "All other compliant rock groups",
    fact10DryMinKn: 110,
    acvMaxPercent: 29,
  },
];
