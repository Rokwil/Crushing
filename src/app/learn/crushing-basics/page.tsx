import Link from "next/link";
import { CrusherFlow } from "@/components/home/CrusherFlow";
import { QuizBlock } from "@/components/learn/Quiz";
import { quizzes } from "@/data/quizzes";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: "Crushing basics",
};

export default function CrushingBasicsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 prose-sa">
      <FadeIn>
        <Link href="/learn" className="text-sm text-muted hover:text-amber-400">
          ← Learning path
        </Link>
        <h1 className="mt-4 text-3xl font-bold">Crushing basics</h1>
      </FadeIn>

      <CrusherFlow />

      <FadeIn delay={0.05} className="mt-8">
        <h2>1. Winning rock</h2>
        <p>
          Hard rock is blasted or ripped from a quarry face. The parent rock must
          be <strong>sound, clean, and unweathered</strong> for G1–G3.
        </p>

        <h2>2. Crushing stages</h2>
        <ul>
          <li>
            <strong>Primary crusher</strong> — reduces boulders to manageable
            sizes.
          </li>
          <li>
            <strong>Secondary / tertiary</strong> — needed for G4A/G5A hard-rock
            gravels and precise G1–G3 envelopes.
          </li>
          <li>
            <strong>Single-stage</strong> — may suit softer rock or lower grades;
            not sufficient alone for G1.
          </li>
        </ul>

        <h2>3. Screening</h2>
        <p>
          Screens split product into size fractions. These are re-blended to meet
          grading tables — % passing each sieve. Stockpile management prevents
          segregation.
        </p>

        <h2>4. Quality control</h2>
        <p>
          COTO emphasises testing at the source (quarry) before delivery. Typical
          tests: grading, ACV, 10% FACT, PI, flakiness, fractured faces.
        </p>

        <p>
          <Link href="/learn/tests">Material tests →</Link>
        </p>
      </FadeIn>

      <div className="mt-10">
        <QuizBlock quiz={quizzes.crushing} />
      </div>
    </div>
  );
}
