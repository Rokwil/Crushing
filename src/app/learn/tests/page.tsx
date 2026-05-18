import Link from "next/link";
import { QuizBlock } from "@/components/learn/Quiz";
import { quizzes } from "@/data/quizzes";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: "Material tests",
};

export default function TestsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 prose-sa">
      <FadeIn>
        <Link href="/learn" className="text-sm text-muted hover:text-amber-400">
          ← Learning path
        </Link>
        <h1 className="mt-4 text-3xl font-bold">Material tests</h1>
        <p className="mt-4 text-slate-300">
          South African practice references <strong>TMH1</strong> methods. Below
          are the tests you will see most often for G-materials.
        </p>
      </FadeIn>

      <FadeIn delay={0.05} className="mt-8 space-y-8">
        <section id="fact10">
          <h2>10% FACT (10% Fines Aggregate Crushing Test)</h2>
          <p>
            Measures force (kN) to produce 10% fines passing 2.36 mm.{" "}
            <strong>Higher is stronger.</strong> Limits vary by rock group — see
            each G1–G3 grade page and Table A4.1.5-6.
          </p>
        </section>

        <section id="acv">
          <h2>ACV (Aggregate Crushing Value)</h2>
          <p>
            Maximum ACV is specified (e.g. 29%).{" "}
            <strong>Lower ACV means stronger aggregate.</strong> If FACT and ACV
            disagree, the Engineer decides which governs acceptance.
          </p>
        </section>

        <section id="cbr">
          <h2>CBR (California Bearing Ratio)</h2>
          <p>
            Used heavily for G3–G9. Always note the compaction level — e.g.{" "}
            <em>CBR ≥ 25% at 95% MDD</em>.
          </p>
        </section>

        <section id="atterberg">
          <h2>Atterberg limits (LL, PI, LS)</h2>
          <p>
            Describe fines plasticity. G1 allows very low PI on added fines (≤ 4).
            Gravel-soil grades link PI to grading modulus.
          </p>
        </section>

        <section id="flakiness">
          <h2>Flakiness index</h2>
          <p>
            Must not exceed 35 on fractions above 14 mm where specified. Flaky
            particles weaken interlock.
          </p>
        </section>

        <section id="fractured-faces">
          <h2>Fractured faces</h2>
          <p>
            Crushed fractions ≥ 5 mm: at least 50% by mass must have one fractured
            face (where required).
          </p>
        </section>

        <p>
          <Link href="/glossary">Full glossary →</Link> ·{" "}
          <Link href="/grades">Stone grades →</Link>
        </p>
      </FadeIn>

      <div className="mt-10">
        <QuizBlock quiz={quizzes.tests} />
      </div>
    </div>
  );
}
