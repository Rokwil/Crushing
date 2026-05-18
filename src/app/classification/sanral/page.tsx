import Link from "next/link";
import { VisualClassificationCards } from "@/components/classification/VisualClassificationCards";
import {
  sanralClassificationSteps,
  sanralGuideReferences,
} from "@/data/sanral-visual-classification";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: "SANRAL material classification guide",
  description:
    "Field visual identification and classification workflow for SANRAL and SA roadworks materials",
};

export default function SanralClassificationPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 prose-sa">
      <FadeIn>
        <Link href="/classification" className="text-sm text-muted hover:text-amber-400">
          ← Classification
        </Link>
        <h1 className="mt-4 text-3xl font-bold">SANRAL material classification guide</h1>
        <p className="mt-4 text-slate-300">
          On SANRAL and provincial projects, materials must meet{" "}
          <strong>COTO</strong> limits — but on site you classify by{" "}
          <strong>what you see</strong>, then confirm in the lab. This guide follows
          common SA practice (TRH14, SAPEM Chapter 6, and SANRAL investigation
          workflows) in plain language for students.
        </p>
      </FadeIn>

      <FadeIn delay={0.05} className="mt-10 space-y-10">
        <section>
          <h2>Four-step field workflow</h2>
          <ol className="not-prose space-y-4">
            {sanralClassificationSteps.map((s) => (
              <li
                key={s.step}
                className="flex gap-4 rounded-xl border border-card-border bg-card p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-sm font-bold text-amber-400">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2>Visual material types</h2>
          <p>
            Select a type below. These are simplified field descriptions — laboratory
            grading, CBR, and Atterberg limits always govern acceptance.
          </p>
          <div className="not-prose mt-6">
            <VisualClassificationCards />
          </div>
        </section>

        <section>
          <h2>Trench and reinstatement note</h2>
          <p>
            SANRAL often requires reinstatement materials of <strong>G8 or better</strong>{" "}
            (G1–G7) in the road reserve — judged by bearing capacity (e.g. DCP / CBR),
            not appearance alone. Weak fine soil can look firm when dry.
          </p>
        </section>

        <section>
          <h2>Official references used on SANRAL projects</h2>
          <ul className="not-prose space-y-3">
            {sanralGuideReferences.map((ref) => (
              <li
                key={ref.title}
                className="rounded-lg border border-card-border bg-card/50 p-4 text-sm"
              >
                <strong className="text-amber-400">{ref.title}</strong>
                <p className="mt-1 text-muted">{ref.note}</p>
              </li>
            ))}
          </ul>
          <p>
            <Link href="/resources">Download links →</Link>
          </p>
        </section>

        <section>
          <h2>Related on this site</h2>
          <ul>
            <li>
              <Link href="/classification/trh14">TRH14 classification</Link> — G-families
              and DCP table
            </li>
            <li>
              <Link href="/learn/tests">Material tests</Link> — ACV, FACT, CBR, PI
            </li>
            <li>
              <Link href="/grades">Stone grades</Link> — full COTO limit tables
            </li>
          </ul>
        </section>
      </FadeIn>
    </div>
  );
}
