"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { allGrades } from "@/data/grades";
import {
  buildSpecRows,
  formatGradingCell,
  getEffectiveGrading,
  gradingBandsOverlap,
  mergeSieveSizes,
} from "@/data/compare-utils";
import type { GradeId, GradeSpec } from "@/data/types";

function GradeSelect({
  label,
  value,
  onChange,
}: {
  label: string;
  value: GradeId;
  onChange: (id: GradeId) => void;
}) {
  return (
    <label className="flex min-w-[200px] flex-1 flex-col gap-1 text-sm">
      <span className="text-muted">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as GradeId)}
        className="rounded-lg border border-card-border bg-card px-3 py-2 text-foreground"
      >
        {allGrades.map((g) => (
          <option key={g.id} value={g.id}>
            {g.title}
          </option>
        ))}
      </select>
    </label>
  );
}

function OperatorCompare({ grade }: { grade: GradeSpec }) {
  const guide = grade.operatorGuide;
  if (!guide) {
    return (
      <p className="text-sm text-muted">No operator guide on this grade page yet.</p>
    );
  }

  return (
    <div className="space-y-3 text-sm">
      <p className="text-slate-300">{guide.headline}</p>
      <div>
        <p className="font-medium text-amber-400/90">Top pass/fail checks</p>
        <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-300">
          {guide.primaryControls.slice(0, 4).map((item) => (
            <li key={item}>{item}</li>
          ))}
          {guide.primaryControls.length > 4 && (
            <li className="text-muted">+ {guide.primaryControls.length - 4} more on grade page</li>
          )}
        </ul>
      </div>
      <Link
        href={`/grades/${grade.id}`}
        className="inline-block text-amber-400 hover:underline"
      >
        Full operator guide →
      </Link>
    </div>
  );
}

export function CompareView() {
  const [left, setLeft] = useState<GradeId>("g4a");
  const [right, setRight] = useState<GradeId>("g4b");

  const a = allGrades.find((g) => g.id === left)!;
  const b = allGrades.find((g) => g.id === right)!;

  const specRows = useMemo(() => buildSpecRows(a, b), [a, b]);
  const diffCount = specRows.filter((r) => r.different).length;

  const gradingA = getEffectiveGrading(a);
  const gradingB = getEffectiveGrading(b);
  const sieveSizes = useMemo(
    () => mergeSieveSizes(gradingA.grading, gradingB.grading),
    [gradingA.grading, gradingB.grading],
  );

  const swap = () => {
    setLeft(right);
    setRight(left);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end gap-4">
        <GradeSelect label="Grade A" value={left} onChange={setLeft} />
        <button
          type="button"
          onClick={swap}
          className="rounded-lg border border-card-border px-3 py-2 text-sm text-muted transition hover:border-amber-500/50 hover:text-amber-400"
          aria-label="Swap grades"
        >
          ⇄ Swap
        </button>
        <GradeSelect label="Grade B" value={right} onChange={setRight} />
      </div>

      {left === right && (
        <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm text-amber-200">
          Select two different grades to compare.
        </p>
      )}

      <section className="rounded-xl border border-card-border bg-card/40 p-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-lg font-semibold text-amber-400">Key limits</h2>
          <span className="text-sm text-muted">
            {diffCount} difference{diffCount === 1 ? "" : "s"} highlighted
          </span>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-card-border text-muted">
                <th className="py-2 pr-4 font-medium">Property</th>
                <th className="py-2 pr-4 font-medium text-amber-400/90">{a.title}</th>
                <th className="py-2 font-medium text-amber-400/90">{b.title}</th>
              </tr>
            </thead>
            <tbody>
              {specRows.map((row) => (
                <tr
                  key={row.label}
                  className={`border-b border-card-border/60 ${
                    row.different ? "bg-amber-500/5" : ""
                  }`}
                >
                  <td className="py-2.5 pr-4 text-muted">{row.label}</td>
                  <td className="py-2.5 pr-4 font-mono text-slate-200">{row.a}</td>
                  <td className="py-2.5 font-mono text-slate-200">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-card-border bg-card/40 p-4">
        <h2 className="text-lg font-semibold text-amber-400">Grading envelopes (% passing)</h2>
        <p className="mt-1 text-sm text-muted">
          Rows highlighted in amber differ between grades. Empty cell = no limit on that sieve for
          that grade.
        </p>
        {(gradingA.note || gradingB.note) && (
          <ul className="mt-2 space-y-1 text-xs text-slate-400">
            {gradingA.note && (
              <li>
                <strong className="text-amber-400/80">{a.id.toUpperCase()}:</strong> {gradingA.note}
              </li>
            )}
            {gradingB.note && (
              <li>
                <strong className="text-amber-400/80">{b.id.toUpperCase()}:</strong> {gradingB.note}
              </li>
            )}
          </ul>
        )}
        {sieveSizes.length === 0 ? (
          <p className="mt-4 text-sm text-muted">
            Neither grade has a COTO sieve table — compare GM and CBR in the table above.
          </p>
        ) : (
          <div className="mt-4 overflow-x-auto rounded-lg border border-card-border">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead className="bg-card">
                <tr>
                  <th className="px-3 py-2 font-medium">Sieve (mm)</th>
                  <th className="px-3 py-2 font-medium">{a.id.toUpperCase()} min–max</th>
                  <th className="px-3 py-2 font-medium">{b.id.toUpperCase()} min–max</th>
                  <th className="px-3 py-2 font-medium">Bands</th>
                </tr>
              </thead>
              <tbody>
                {sieveSizes.map((sieve) => {
                  const rowA = gradingA.grading.find((r) => r.sieveMm === sieve);
                  const rowB = gradingB.grading.find((r) => r.sieveMm === sieve);
                  const overlap = gradingBandsOverlap(rowA, rowB);
                  const cellA = formatGradingCell(rowA);
                  const cellB = formatGradingCell(rowB);
                  const different = cellA !== cellB;

                  return (
                    <tr
                      key={sieve}
                      className={`border-t border-card-border ${
                        different ? "bg-amber-500/5" : ""
                      }`}
                    >
                      <td className="px-3 py-2 font-mono">{sieve}</td>
                      <td className="px-3 py-2 font-mono">{cellA}</td>
                      <td className="px-3 py-2 font-mono">{cellB}</td>
                      <td className="px-3 py-2 text-xs text-muted">
                        {overlap === "same" && "Same band"}
                        {overlap === "overlap" && "Overlapping"}
                        {overlap === "gap" && (
                          <span className="text-amber-300">No overlap</span>
                        )}
                        {overlap === "missing" && "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section>
        <h2 className="text-lg font-semibold text-amber-400">For the crushing operator</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
            <h3 className="font-medium text-amber-400">{a.title}</h3>
            <div className="mt-3">
              <OperatorCompare grade={a} />
            </div>
          </div>
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
            <h3 className="font-medium text-amber-400">{b.title}</h3>
            <div className="mt-3">
              <OperatorCompare grade={b} />
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        {[a, b].map((grade) => (
          <div
            key={grade.id}
            className="rounded-xl border border-card-border bg-card p-4"
          >
            <h3 className="font-semibold text-amber-400">{grade.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{grade.summary}</p>
            <p className="mt-3 text-xs text-muted">Used for: {grade.pavementUse.join(" · ")}</p>
            <Link
              href={`/grades/${grade.id}`}
              className="mt-4 inline-block text-sm text-amber-400 hover:underline"
            >
              Open full specification →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
