import { QualityLadder } from "@/components/grades/QualityLadder";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

export const metadata = {
  title: "Stone grades G1–G9",
  description: "COTO Chapter 4 pavement material grades for South Africa",
};

export default function GradesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <FadeIn>
        <h1 className="text-3xl font-bold">Stone grades</h1>
        <p className="mt-4 text-slate-300">
          G1 is the highest quality crushed stone; G9 is the lowest standard
          gravel-soil. Tap a grade for full COTO limits, tables, and common
          mistakes.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-amber-500/20 px-2 py-1 text-amber-400">
            Crushed G1–G3
          </span>
          <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-emerald-400">
            Gravel G4–G6
          </span>
          <span className="rounded-full bg-sky-500/20 px-2 py-1 text-sky-400">
            Gravel-soil G7–G9
          </span>
        </div>
      </FadeIn>

      <div className="mt-12">
        <QualityLadder />
      </div>

      <p className="mt-10 text-center text-sm">
        <Link href="/compare" className="text-amber-400 hover:underline">
          Compare two grades side by side →
        </Link>
      </p>
    </div>
  );
}
