import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

const modules = [
  {
    href: "/learn/road-pavement",
    title: "Road pavement layers",
    desc: "Where base, subbase, and subgrade fit — and which grades go where.",
    order: 1,
  },
  {
    href: "/learn/crushing-basics",
    title: "Crushing basics",
    desc: "From quarry blast to stockpile: how G-materials are produced.",
    order: 2,
  },
  {
    href: "/learn/tests",
    title: "Material tests",
    desc: "ACV, 10% FACT, CBR, PI, flakiness — what they mean on site.",
    order: 3,
  },
  {
    href: "/learn/g1-not-crusher-run",
    title: "G1 is not crusher-run",
    desc: "Why density alone does not make G1.",
    order: 4,
  },
  {
    href: "/grades",
    title: "Stone grades G1–G9",
    desc: "Full COTO limits for every G-type.",
    order: 5,
  },
];

export const metadata = {
  title: "Learn",
  description: "Beginner learning path for SA roadworks materials and crushing",
};

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <FadeIn>
        <h1 className="text-3xl font-bold">Learning path</h1>
        <p className="mt-4 text-slate-300">
          Work through these modules in order if you are new to roadworks. Each
          ends with a short quiz.
        </p>
      </FadeIn>
      <ol className="mt-10 space-y-4">
        {modules.map((m, i) => (
          <FadeIn key={m.href} delay={i * 0.06}>
            <li>
              <Link
                href={m.href}
                className="flex gap-4 rounded-xl border border-card-border bg-card p-5 transition hover:border-amber-500/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 font-bold text-amber-400">
                  {m.order}
                </span>
                <div>
                  <h2 className="font-semibold">{m.title}</h2>
                  <p className="mt-1 text-sm text-muted">{m.desc}</p>
                </div>
              </Link>
            </li>
          </FadeIn>
        ))}
      </ol>
    </div>
  );
}
