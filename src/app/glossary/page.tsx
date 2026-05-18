import Link from "next/link";
import { glossary } from "@/data/glossary";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: "Glossary",
};

export default function GlossaryPage() {
  const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <FadeIn>
        <h1 className="text-3xl font-bold">Glossary</h1>
        <p className="mt-4 text-slate-300">
          Road materials terms used in South African COTO specifications and on
          site.
        </p>
      </FadeIn>
      <dl className="mt-10 space-y-6">
        {sorted.map((entry, i) => (
          <FadeIn key={entry.slug} delay={i * 0.03}>
            <div id={entry.slug} className="scroll-mt-24 rounded-xl border border-card-border bg-card p-5">
              <dt className="text-lg font-semibold text-amber-400">{entry.term}</dt>
              <dd className="mt-2 text-slate-300">{entry.definition}</dd>
              {entry.tmh && (
                <dd className="mt-2 text-xs text-muted">Reference: {entry.tmh}</dd>
              )}
            </div>
          </FadeIn>
        ))}
      </dl>
      <p className="mt-10 text-sm">
        <Link href="/learn/tests" className="text-amber-400 hover:underline">
          Material tests module →
        </Link>
      </p>
    </div>
  );
}
