import Link from "next/link";
import { QuizBlock } from "@/components/learn/Quiz";
import { quizzes } from "@/data/quizzes";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: "Road pavement layers",
};

export default function RoadPavementPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 prose-sa">
      <FadeIn>
        <Link href="/learn" className="text-sm text-muted hover:text-amber-400">
          ← Learning path
        </Link>
        <h1 className="mt-4 text-3xl font-bold">Road pavement layers</h1>
      </FadeIn>

      <FadeIn delay={0.05} className="mt-8">
        <p>
          A paved road is a stack of layers. Each layer has a job: spread load,
          drain water, or provide a smooth riding surface. In South Africa,
          structural layers often use <strong>G-materials</strong> specified in
          COTO Chapter 4.
        </p>

        <h2>Typical structure (top to bottom)</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Surfacing</strong> — asphalt or seal (not a G-material).
          </li>
          <li>
            <strong>Base</strong> — highest structural layer below surfacing.
            Often <strong>G1</strong> or <strong>G2</strong> crushed stone on
            heavy roads.
          </li>
          <li>
            <strong>Subbase</strong> — spreads load to the subgrade. G3–G6
            common depending on design.
          </li>
          <li>
            <strong>Selected fill / improved subgrade</strong> — G7–G9 or
            specialised fills.
          </li>
          <li>
            <strong>Subgrade</strong> — natural ground, sometimes treated.
          </li>
        </ol>

        <h2>Traffic matters</h2>
        <p>
          Heavier design traffic (higher <strong>E80s</strong> — equivalent
          standard axles) demands higher-quality base materials. That is why G1
          has the tightest grading and strength rules.
        </p>

        <h2>Next step</h2>
        <p>
          <Link href="/learn/crushing-basics">Crushing basics →</Link> explains
          how quarries produce these layers.
        </p>
      </FadeIn>

      <div className="mt-10">
        <QuizBlock quiz={quizzes.pavement} />
      </div>
    </div>
  );
}
