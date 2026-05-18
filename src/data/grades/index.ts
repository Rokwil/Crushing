import type { GradeId, GradeSpec } from "../types";
import { g1 } from "./g1";
import { g2 } from "./g2";
import { g3 } from "./g3";
import { g4a, g4b } from "./g4a";
import { g5a, g5b } from "./g5";
import { g6 } from "./g6";
import { g7, g8, g9 } from "./g7-g9";

export const allGrades: GradeSpec[] = [
  g1,
  g2,
  g3,
  g4a,
  g4b,
  g5a,
  g5b,
  g6,
  g7,
  g8,
  g9,
];

export const gradesById: Record<GradeId, GradeSpec> = Object.fromEntries(
  allGrades.map((g) => [g.id, g]),
) as Record<GradeId, GradeSpec>;

export function getGrade(id: string): GradeSpec | undefined {
  return gradesById[id as GradeId];
}

export const crushedGrades = allGrades.filter((g) => g.category === "crushed");
export const gravelGrades = allGrades.filter((g) => g.category === "gravel");
export const gravelSoilGrades = allGrades.filter(
  (g) => g.category === "gravel-soil",
);
