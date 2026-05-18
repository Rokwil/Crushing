import { dcpTrh14Table } from "@/data/trh14-classification";

export function DcpTrh14Table() {
  return (
    <div className="overflow-x-auto rounded-xl border border-card-border">
      <table className="w-full min-w-[520px] text-left text-sm">
        <thead className="bg-card">
          <tr>
            <th className="px-4 py-3 font-medium">DCP (mm/blow)</th>
            <th className="px-4 py-3 font-medium">Inferred in-situ CBR</th>
            <th className="px-4 py-3 font-medium">TRH14 class</th>
            <th className="px-4 py-3 font-medium">Typical layer role</th>
          </tr>
        </thead>
        <tbody>
          {dcpTrh14Table.map((row) => (
            <tr key={row.trh14Class + row.dcpMmPerBlow} className="border-t border-card-border">
              <td className="px-4 py-2 font-mono">{row.dcpMmPerBlow}</td>
              <td className="px-4 py-2">{row.inferredCbr}</td>
              <td className="px-4 py-2 font-semibold text-amber-400">{row.trh14Class}</td>
              <td className="px-4 py-2 text-muted">{row.typicalLayer}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-card-border px-4 py-2 text-xs text-muted">
        Indicative field correlation — SAPEM Chapter 6, Table 19. Moisture condition affects DCP; calibrate to project requirements.
      </p>
    </div>
  );
}
