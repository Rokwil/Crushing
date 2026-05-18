import type { GradingLimit } from "@/data/types";
import { rockStrengthG1G3 } from "@/data/rock-strength";

export function GradingTable({ grading }: { grading: GradingLimit[] }) {
  if (grading.length === 0) {
    return (
      <p className="text-sm text-muted">
        No sieve envelope — control by grading modulus (GM) or other limits in COTO.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-card-border">
      <table className="w-full min-w-[320px] text-left text-sm">
        <thead className="bg-card">
          <tr>
            <th className="sticky left-0 bg-card px-4 py-3 font-medium">Sieve (mm)</th>
            <th className="px-4 py-3 font-medium">Min % passing</th>
            <th className="px-4 py-3 font-medium">Max % passing</th>
          </tr>
        </thead>
        <tbody>
          {grading.map((row) => (
            <tr key={row.sieveMm} className="border-t border-card-border">
              <td className="sticky left-0 bg-background px-4 py-2 font-mono">{row.sieveMm}</td>
              <td className="px-4 py-2">{row.minPass ?? "—"}</td>
              <td className="px-4 py-2">{row.maxPass ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function RockStrengthTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-card-border">
      <table className="w-full min-w-[400px] text-left text-sm">
        <thead className="bg-card">
          <tr>
            <th className="px-4 py-3 font-medium">Rock group</th>
            <th className="px-4 py-3 font-medium">10% FACT min (kN)</th>
            <th className="px-4 py-3 font-medium">ACV max (%)</th>
          </tr>
        </thead>
        <tbody>
          {rockStrengthG1G3.map((row) => (
            <tr key={row.rockGroup} className="border-t border-card-border">
              <td className="px-4 py-2">{row.rockGroup}</td>
              <td className="px-4 py-2 font-mono">{row.fact10DryMinKn}</td>
              <td className="px-4 py-2 font-mono">{row.acvMaxPercent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
