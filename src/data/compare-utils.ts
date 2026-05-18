import { gradesById } from "./grades";
import type { GradeSpec, GradingLimit } from "./types";

export interface EffectiveGrading {
  grading: GradingLimit[];
  note?: string;
}

export function getEffectiveGrading(grade: GradeSpec): EffectiveGrading {
  if (grade.grading.length > 0) {
    return { grading: grade.grading };
  }
  if (grade.referenceGradingGradeId) {
    const ref = gradesById[grade.referenceGradingGradeId];
    return {
      grading: ref.grading,
      note: `Blend guide from ${ref.title} — not necessarily pass/fail for ${grade.id.toUpperCase()}`,
    };
  }
  return {
    grading: [],
    note: grade.gradingControlNote ?? "No COTO sieve envelope — GM and/or CBR control grading",
  };
}

export function mergeSieveSizes(a: GradingLimit[], b: GradingLimit[]): number[] {
  const sizes = new Set([...a.map((r) => r.sieveMm), ...b.map((r) => r.sieveMm)]);
  return [...sizes].sort((x, y) => y - x);
}

export function formatGradingCell(row?: GradingLimit): string {
  if (!row) return "—";
  const min = row.minPass ?? "—";
  const max = row.maxPass ?? "—";
  if (min === "—" && max === "—") return "—";
  return `${min} – ${max}`;
}

export interface SpecRow {
  label: string;
  a: string;
  b: string;
  different: boolean;
}

function fmt(value: string | number | undefined | null): string {
  if (value === undefined || value === null || value === "") return "—";
  return String(value);
}

export function buildSpecRows(left: GradeSpec, right: GradeSpec): SpecRow[] {
  const rows: { label: string; a: string; b: string }[] = [
    {
      label: "Quality tier",
      a: String(left.qualityTier),
      b: String(right.qualityTier),
    },
    {
      label: "Category",
      a: left.category.replace("-", " "),
      b: right.category.replace("-", " "),
    },
    {
      label: "Max particle",
      a: `${left.maxParticleMm} mm`,
      b: `${right.maxParticleMm} mm`,
    },
    {
      label: "Grading control",
      a: left.grading.length > 0 ? "Sieve envelope" : left.referenceGradingGradeId ? "CBR / GM (ref. envelope)" : "GM / CBR (no envelope)",
      b: right.grading.length > 0 ? "Sieve envelope" : right.referenceGradingGradeId ? "CBR / GM (ref. envelope)" : "GM / CBR (no envelope)",
    },
    {
      label: "Grading modulus",
      a: left.gradingModulus ? `${left.gradingModulus.min} – ${left.gradingModulus.max}` : "Not specified (COTO)",
      b: right.gradingModulus ? `${right.gradingModulus.min} – ${right.gradingModulus.max}` : "Not specified (COTO)",
    },
    {
      label: "CBR (contract)",
      a: left.strength?.cbrMinAtMdd
        ? `≥ ${left.strength.cbrMinAtMdd}% @ ${left.strength.cbrMddPercent}% MDD`
        : "FACT / ACV (see rock group)",
      b: right.strength?.cbrMinAtMdd
        ? `≥ ${right.strength.cbrMinAtMdd}% @ ${right.strength.cbrMddPercent}% MDD`
        : "FACT / ACV (see rock group)",
    },
    {
      label: "Strength (crushed)",
      a: left.category === "crushed" ? "10% FACT min + ACV max by rock group" : "—",
      b: right.category === "crushed" ? "10% FACT min + ACV max by rock group" : "—",
    },
    {
      label: "Swell max @ 100% MDD",
      a: left.swellMaxPercent !== undefined ? `${left.swellMaxPercent}%` : "—",
      b: right.swellMaxPercent !== undefined ? `${right.swellMaxPercent}%` : "—",
    },
    {
      label: "LL max (P0,425)",
      a: fmt(left.soilConstants?.llMax),
      b: fmt(right.soilConstants?.llMax),
    },
    {
      label: "PI (P0,425)",
      a: left.soilConstants?.piFormula ?? fmt(left.soilConstants?.piMax),
      b: right.soilConstants?.piFormula ?? fmt(right.soilConstants?.piMax),
    },
    {
      label: "Linear shrinkage max",
      a: left.soilConstants?.lsMax !== undefined ? `${left.soilConstants.lsMax}%` : "—",
      b: right.soilConstants?.lsMax !== undefined ? `${right.soilConstants.lsMax}%` : "—",
    },
    {
      label: "Flakiness index max",
      a: left.flakinessMax !== undefined ? `${left.flakinessMax}` : "—",
      b: right.flakinessMax !== undefined ? `${right.flakinessMax}` : "—",
    },
    {
      label: "Fractured faces",
      a: left.fracturedFaces ? "Required" : "—",
      b: right.fracturedFaces ? "Required" : "—",
    },
    {
      label: "Compaction note",
      a: left.compaction ?? "—",
      b: right.compaction ?? "—",
    },
  ];

  return rows.map((row) => ({
    ...row,
    different: row.a !== row.b,
  }));
}

export function gradingBandsOverlap(
  a?: GradingLimit,
  b?: GradingLimit,
): "same" | "overlap" | "gap" | "missing" {
  if (!a || !b) return "missing";
  const aMin = a.minPass ?? 0;
  const aMax = a.maxPass ?? 100;
  const bMin = b.minPass ?? 0;
  const bMax = b.maxPass ?? 100;
  if (aMin === bMin && aMax === bMax) return "same";
  if (aMax >= bMin && bMax >= aMin) return "overlap";
  return "gap";
}
