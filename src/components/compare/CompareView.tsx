"use client";

import { useState } from "react";
import { allGrades } from "@/data/grades";
import type { GradeId } from "@/data/types";
import { GradingTable } from "@/components/grades/SpecTable";

export function CompareView() {
  const [left, setLeft] = useState<GradeId>("g1");
  const [right, setRight] = useState<GradeId>("g3");

  const a = allGrades.find((g) => g.id === left)!;
  const b = allGrades.find((g) => g.id === right)!;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4">
        <label className="flex flex-col gap-1 text-sm">
          <span className="text-muted">Grade A</span>
          <select
            value={left}
            onChange={(e) => setLeft(e.target.value as GradeId)}
            className="rounded-lg border border-card-border bg-card px-3 py-2"
          >
            {allGrades.map((g) => (
              <option key={g.id} value={g.id}>
                {g.title}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="text-muted">Grade B</span>
          <select
            value={right}
            onChange={(e) => setRight(e.target.value as GradeId)}
            className="rounded-lg border border-card-border bg-card px-3 py-2"
          >
            {allGrades.map((g) => (
              <option key={g.id} value={g.id}>
                {g.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {[a, b].map((grade) => (
          <div
            key={grade.id}
            className="rounded-xl border border-card-border bg-card p-4"
          >
            <h3 className="font-semibold text-amber-400">{grade.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{grade.summary}</p>
            <dl className="mt-4 space-y-2 text-sm">
              <div>
                <dt className="text-muted">Category</dt>
                <dd>{grade.category}</dd>
              </div>
              <div>
                <dt className="text-muted">Max size</dt>
                <dd className="font-mono">{grade.maxParticleMm} mm</dd>
              </div>
              {grade.strength?.cbrMinAtMdd && (
                <div>
                  <dt className="text-muted">CBR</dt>
                  <dd>
                    ≥ {grade.strength.cbrMinAtMdd}% @ {grade.strength.cbrMddPercent}% MDD
                  </dd>
                </div>
              )}
              {grade.gradingModulus && (
                <div>
                  <dt className="text-muted">GM</dt>
                  <dd>
                    {grade.gradingModulus.min} – {grade.gradingModulus.max}
                  </dd>
                </div>
              )}
            </dl>
            <h4 className="mt-4 text-sm font-medium">Grading</h4>
            <div className="mt-2">
              <GradingTable grading={grade.grading} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
