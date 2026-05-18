"use client";

import { useMemo, useState } from "react";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Area,
} from "recharts";
import { crushedGrades } from "@/data/grades";
import type { GradeId } from "@/data/types";

const sieveSizes = [37.5, 28, 20, 14, 5, 2, 0.425, 0.075];

function buildEnvelopeData(gradeIds: GradeId[]) {
  return sieveSizes.map((sieve) => {
    const point: Record<string, number | string | undefined> = {
      sieve: String(sieve),
    };
    for (const id of gradeIds) {
      const grade = crushedGrades.find((g) => g.id === id);
      const limit = grade?.grading.find((r) => r.sieveMm === sieve);
      if (limit) {
        if (limit.minPass !== undefined) point[`${id}Min`] = limit.minPass;
        if (limit.maxPass !== undefined) point[`${id}Max`] = limit.maxPass;
        if (limit.minPass !== undefined && limit.maxPass !== undefined) {
          point[`${id}Mid`] = (limit.minPass + limit.maxPass) / 2;
        }
      }
    }
    return point;
  });
}

const COLORS: Record<string, string> = {
  g1: "#f59e0b",
  g2: "#34d399",
  g3: "#60a5fa",
};

export function GradingChart() {
  const [active, setActive] = useState<GradeId[]>(["g1", "g2", "g3"]);
  const data = useMemo(() => buildEnvelopeData(active), [active]);

  const toggle = (id: GradeId) => {
    setActive((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
    <div className="rounded-xl border border-card-border bg-card p-4">
      <div className="mb-4 flex flex-wrap gap-2">
        {(["g1", "g2", "g3"] as GradeId[]).map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => toggle(id)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium uppercase transition ${
              active.includes(id)
                ? "bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/50"
                : "bg-background text-muted"
            }`}
          >
            {id}
          </button>
        ))}
      </div>
      <p className="mb-2 text-xs text-muted">
        % passing vs sieve (mm). Bands show COTO min–max envelopes. Educational only.
      </p>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2d3a4f" />
            <XAxis
              dataKey="sieve"
              scale="log"
              domain={["auto", "auto"]}
              label={{ value: "Sieve (mm)", position: "insideBottom", offset: -4 }}
              stroke="#94a3b8"
            />
            <YAxis
              domain={[0, 100]}
              label={{ value: "% passing", angle: -90, position: "insideLeft" }}
              stroke="#94a3b8"
            />
            <Tooltip
              contentStyle={{ background: "#1a2332", border: "1px solid #2d3a4f" }}
            />
            {active.map((id) => (
              <Area
                key={`${id}-band`}
                type="monotone"
                dataKey={`${id}Max`}
                stroke="none"
                fill={COLORS[id]}
                fillOpacity={0.12}
                connectNulls
              />
            ))}
            {active.map((id) => (
              <Line
                key={id}
                type="monotone"
                dataKey={`${id}Mid`}
                stroke={COLORS[id]}
                strokeWidth={2}
                dot={{ r: 3 }}
                connectNulls
                name={id.toUpperCase()}
              />
            ))}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
