import type { CbrRequirement } from "@/data/types";

export function CbrRequirementsTable({ rows }: { rows: CbrRequirement[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-card-border">
      <table className="w-full min-w-[320px] text-left text-sm">
        <thead className="bg-card">
          <tr>
            <th className="px-4 py-3 font-medium">Compaction (% of MDD)</th>
            <th className="px-4 py-3 font-medium">CBR minimum</th>
            <th className="px-4 py-3 font-medium">Note</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.compactionPercent} className="border-t border-card-border">
              <td className="px-4 py-2 font-mono">{row.compactionPercent}%</td>
              <td className="px-4 py-2 font-mono">≥ {row.cbrMin}%</td>
              <td className="px-4 py-2 text-muted">{row.label ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
