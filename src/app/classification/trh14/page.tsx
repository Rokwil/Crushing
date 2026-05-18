import Link from "next/link";
import { DcpTrh14Table } from "@/components/classification/DcpTrh14Table";
import { MaterialFamilyCards } from "@/components/classification/MaterialFamilyCards";
import {
  trh14GradingModulus,
  trh14KeyPoints,
} from "@/data/trh14-classification";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: "TRH14 classification",
  description:
    "TRH14 Guidelines for Road Construction Materials — G1–G10 classification for South Africa",
};

export default function Trh14Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 prose-sa">
      <FadeIn>
        <Link href="/classification" className="text-sm text-muted hover:text-amber-400">
          ← Classification
        </Link>
        <h1 className="mt-4 text-3xl font-bold">TRH14 classification</h1>
        <p className="mt-4 text-slate-300">
          <strong>TRH14</strong> (Technical Recommendations for Highways 14, 1985 —
          <em> Guidelines for Road Construction Materials</em>) is the document that
          established the familiar <strong>G1–G10</strong> naming system for pavement
          materials in South Africa. Modern contracts use <strong>COTO</strong>, but
          TRH14 is still the language used on site and in SAPEM.
        </p>
      </FadeIn>

      <FadeIn delay={0.05} className="mt-10 space-y-10">
        <section>
          <h2>Key points</h2>
          <ul>
            {trh14KeyPoints.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Material families (TRH14)</h2>
          <p className="text-sm text-muted not-prose">
            Tap a family to open current COTO limit pages on this site.
          </p>
          <div className="not-prose mt-4">
            <MaterialFamilyCards />
          </div>
        </section>

        <section>
          <h2>Typical TRH14 CBR expectations (summary)</h2>
          <div className="not-prose overflow-x-auto rounded-xl border border-card-border text-sm">
            <table className="w-full min-w-[320px]">
              <thead className="bg-card">
                <tr>
                  <th className="px-4 py-2 text-left">Material</th>
                  <th className="px-4 py-2 text-left">Typical requirement (TRH14)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-card-border">
                  <td className="px-4 py-2">G3 / G4 (base quality)</td>
                  <td className="px-4 py-2">CBR ≥ 80% at 98% Mod AASHTO; swell ≤ 0.2%</td>
                </tr>
                <tr className="border-t border-card-border">
                  <td className="px-4 py-2">G5 (subbase)</td>
                  <td className="px-4 py-2">CBR ≥ 45% at 95% Mod AASHTO; swell ≤ 0.5%</td>
                </tr>
                <tr className="border-t border-card-border">
                  <td className="px-4 py-2">G6 / G7</td>
                  <td className="px-4 py-2">CBR ≥ 25% / 15% at 93% Mod AASHTO</td>
                </tr>
                <tr className="border-t border-card-border">
                  <td className="px-4 py-2">G8 / G9</td>
                  <td className="px-4 py-2">CBR ≥ 10% / 7% at 93% Mod AASHTO</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted">
            See individual{" "}
            <Link href="/grades">grade pages</Link> for current COTO tables.
          </p>
        </section>

        <section>
          <h2>Grading modulus (TRH14)</h2>
          <p>{trh14GradingModulus.plain}</p>
          <p className="rounded-lg border border-card-border bg-card p-3 font-mono text-sm not-prose">
            {trh14GradingModulus.formula}
          </p>
          <p className="text-amber-200/90">{trh14GradingModulus.cotoNote}</p>
        </section>

        <section>
          <h2>DCP and TRH14 class (field)</h2>
          <p>
            The Dynamic Cone Penetrometer (DCP) penetration rate (mm/blow) is often
            correlated to in-situ CBR and hence to a TRH14 class during investigations
            (SAPEM Chapter 6).
          </p>
          <div className="not-prose mt-4">
            <DcpTrh14Table />
          </div>
        </section>

        <section>
          <h2>TRH14 vs this site&apos;s grade pages</h2>
          <p>
            TRH14 includes <strong>G10</strong>; COTO Chapter 4 tables on this site
            cover <strong>G1–G9</strong> with G4/G5 sub-types. Always use the
            specification named in your tender.
          </p>
          <p>
            <Link href="/classification/sanral">SANRAL field classification guide →</Link>
          </p>
        </section>
      </FadeIn>
    </div>
  );
}
