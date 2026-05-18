import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: "G1 is not crusher-run",
  description:
    "Why South African G1 crushed stone base is not the same as single-stage crusher-run",
};

export default function G1NotCrusherRunPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 prose-sa">
      <FadeIn>
        <Link href="/learn" className="text-sm text-muted hover:text-amber-400">
          ← Learning path
        </Link>
        <h1 className="mt-4 text-3xl font-bold">G1 is not crusher-run</h1>
      </FadeIn>

      <FadeIn delay={0.05} className="mt-8">
        <p>
          On many sites you will hear “put down G1” when the crew is actually
          placing <strong>single-stage crusher-run</strong> — everything that
          came out of the crusher in one pass, often without a controlled blend of
          size fractions.
        </p>

        <h2>What G1 actually requires</h2>
        <ul>
          <li>
            A <strong>continuous grading envelope</strong> between defined sieve
            limits (COTO Table A4.1.5-5) — like a Fuller-curve band, not a random
            crusher product.
          </li>
          <li>
            Sound, clean, unweathered parent rock with strict rules on added
            fines.
          </li>
          <li>
            High interlock after specialised compaction (historically including
            “slush” compaction on site).
          </li>
          <li>
            Strength tests (10% FACT / ACV) by rock type — not just “it looks
            dense”.
          </li>
        </ul>

        <h2>Why density misleads you</h2>
        <p>
          G1 targets can relate to <strong>relative density</strong> (e.g. ARD)
          and particle interlock. A crusher-run layer may test “hard” under a
          hammer but still lack the grading continuity and durability required
          for millions of standard axles.
        </p>

        <h2>Historical context</h2>
        <p>
          G1 was developed in SA from the 1950s–80s through research including
          Heavy Vehicle Simulator (HVS) testing — proving a properly built
          crushed stone base can carry very high traffic when done correctly.
        </p>

        <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm">
          Further reading: Eduard Kleyn, “Successful G1 Crushed Stone Basecourse
          Construction” (SATC 2012) — search the title for the public PDF.
        </p>

        <p>
          <Link href="/grades/g1">Full G1 specification →</Link>
        </p>
      </FadeIn>
    </div>
  );
}
