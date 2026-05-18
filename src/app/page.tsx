import Link from "next/link";
import { CrusherFlow } from "@/components/home/CrusherFlow";
import { FadeIn } from "@/components/ui/FadeIn";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-card-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-widest text-amber-400">
              South Africa · COTO Chapter 4
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Learn stone grades the way roadworks actually uses them
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              A free guide to G1–G9 materials, crushing, grading envelopes, and lab
              tests — written for students starting in construction and roadworks.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/learn"
                className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-amber-400"
              >
                Start learning
              </Link>
              <Link
                href="/grades"
                className="rounded-lg border border-card-border px-5 py-2.5 text-sm font-medium hover:border-amber-500/50"
              >
                Browse grades G1–G9
              </Link>
            </div>
          </FadeIn>
          <CrusherFlow />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Beginner path",
              desc: "Road layers → crushing → tests → grades",
              href: "/learn",
            },
            {
              title: "TRH14 & SANRAL class",
              desc: "Field identification and G1–G10 framework",
              href: "/classification",
            },
            {
              title: "G1 ≠ crusher-run",
              desc: "The #1 misconception on SA sites",
              href: "/learn/g1-not-crusher-run",
            },
            {
              title: "Compare grades",
              desc: "Side-by-side limits and grading tables",
              href: "/compare",
            },
          ].map((card, i) => (
            <FadeIn key={card.href} delay={i * 0.08}>
              <Link
                href={card.href}
                className="block h-full rounded-xl border border-card-border bg-card p-6 transition hover:border-amber-500/40"
              >
                <h2 className="text-lg font-semibold text-amber-400">{card.title}</h2>
                <p className="mt-2 text-sm text-muted">{card.desc}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
