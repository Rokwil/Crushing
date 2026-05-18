import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: "COTO vs COLTO",
};

const sieveNotes = [
  { colto: "1 inch", coto: "25 mm / 26.5 mm (context)", note: "Imperial sieves phased out" },
  { colto: "Various imperial", coto: "ISO metric sieves", note: "Grading tables use mm" },
];

export default function CotoVsColtoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 prose-sa">
      <FadeIn>
        <h1 className="text-3xl font-bold">COTO vs COLTO</h1>
        <p className="mt-4 text-slate-300">
          If you learned on older drawings, you may still see <strong>COLTO</strong>{" "}
          (Committee of Land Transport Officials). Current national specs are{" "}
          <strong>COTO</strong> (Committee of Transport Officials).
        </p>
      </FadeIn>

      <FadeIn delay={0.05} className="mt-8">
        <h2>What changed (high level)</h2>
        <ul>
          <li>
            <strong>Mandatory from 1 March 2021</strong> for new public-sector road
            contracts using COTO.
          </li>
          <li>
            <strong>Metric ISO sieves</strong> replace imperial sieve sizes in
            grading tables.
          </li>
          <li>
            More emphasis on <strong>testing at source</strong> (quarry/borrow
            pit) before delivery.
          </li>
          <li>
            G4/G5 split into <strong>G4A/G4B</strong> and <strong>G5A/G5B</strong>{" "}
            sub-types for clearer processing routes.
          </li>
        </ul>

        <h2>Sieve transition (examples)</h2>
        <div className="not-prose overflow-x-auto rounded-xl border border-card-border">
          <table className="w-full text-sm">
            <thead className="bg-card">
              <tr>
                <th className="px-4 py-2 text-left">COLTO (legacy)</th>
                <th className="px-4 py-2 text-left">COTO (current)</th>
                <th className="px-4 py-2 text-left">Note</th>
              </tr>
            </thead>
            <tbody>
              {sieveNotes.map((row) => (
                <tr key={row.colto} className="border-t border-card-border">
                  <td className="px-4 py-2">{row.colto}</td>
                  <td className="px-4 py-2">{row.coto}</td>
                  <td className="px-4 py-2 text-muted">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>G10 (legacy)</h2>
        <p>
          Older COLTO documents referenced <strong>G10</strong>. Current COTO
          Chapter 4 tables on this site cover <strong>G1–G9</strong>. If a tender
          still cites G10, treat it as a contract-specific legacy reference and
          confirm against the issued specification.
        </p>

        <h2>This site uses</h2>
        <p>
          All numeric limits are transcribed from <strong>COTO Chapter 4</strong>{" "}
          (Earthworks and Pavement Layers: Materials). Always verify against the
          PDF on your project.
        </p>

        <p>
          <Link href="/resources">Official downloads →</Link>
        </p>
      </FadeIn>
    </div>
  );
}
