import type { GradeSpec } from "@/data/types";

export function OperatorGuideSection({ grade }: { grade: GradeSpec }) {
  const guide = grade.operatorGuide;
  if (!guide) return null;

  return (
    <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
      <h2 className="text-xl font-semibold text-amber-400">For the crushing operator</h2>
      <p className="mt-2 text-slate-300">{guide.headline}</p>

      <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-amber-400/90">
        What actually decides pass/fail
      </h3>
      <ul className="mt-2 list-disc space-y-1.5 pl-6 text-slate-300">
        {guide.primaryControls.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-amber-400/90">
        Plant setup
      </h3>
      <ul className="mt-2 list-disc space-y-1.5 pl-6 text-slate-300">
        {guide.plantSetup.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-amber-400/90">
        Tests your lab should run
      </h3>
      <ul className="mt-2 list-disc space-y-1.5 pl-6 text-slate-300">
        {guide.labTests.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {guide.compactionNote && (
        <p className="mt-4 rounded-lg border border-card-border bg-card/60 p-3 text-sm text-slate-300">
          <strong className="text-amber-400">Compaction on site:</strong> {guide.compactionNote}
        </p>
      )}

      <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-amber-400/90">
        If results are out — try this
      </h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-card-border">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead className="bg-card">
            <tr>
              <th className="px-3 py-2 font-medium">What you see</th>
              <th className="px-3 py-2 font-medium">What to do at the plant</th>
            </tr>
          </thead>
          <tbody>
            {guide.adjustments.map((row) => (
              <tr key={row.situation} className="border-t border-card-border">
                <td className="px-3 py-2 text-slate-300">{row.situation}</td>
                <td className="px-3 py-2 text-slate-300">{row.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
