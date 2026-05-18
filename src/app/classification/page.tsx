import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: "Material classification",
  description: "TRH14 and SANRAL field classification guides for South African road materials",
};

const sections = [
  {
    href: "/classification/trh14",
    title: "TRH14 classification",
    desc: "G1–G10 material families, DCP field correlations, grading modulus, and link to COTO.",
  },
  {
    href: "/classification/sanral",
    title: "SANRAL material classification guide",
    desc: "Visual field identification, sampling workflow, and how to confirm class in the lab.",
  },
];

export default function ClassificationHubPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <FadeIn>
        <h1 className="text-3xl font-bold">Material classification</h1>
        <p className="mt-4 text-slate-300">
          Stone <strong>grades</strong> (G1, G2, …) come from national classification
          systems. TRH14 defined the framework; COTO sets current limits; SANRAL and
          SAPEM show how to identify materials on site before testing.
        </p>
      </FadeIn>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {sections.map((s, i) => (
          <FadeIn key={s.href} delay={i * 0.06}>
            <Link
              href={s.href}
              className="block h-full rounded-xl border border-card-border bg-card p-6 transition hover:border-amber-500/40"
            >
              <h2 className="text-lg font-semibold text-amber-400">{s.title}</h2>
              <p className="mt-2 text-sm text-muted">{s.desc}</p>
            </Link>
          </FadeIn>
        ))}
      </div>
      <p className="mt-10 text-sm text-muted">
        For full limit tables per grade, see{" "}
        <Link href="/grades" className="text-amber-400 hover:underline">
          Stone grades G1–G9
        </Link>
        . For contract limits today, see{" "}
        <Link href="/coto-vs-colto" className="text-amber-400 hover:underline">
          COTO vs COLTO
        </Link>
        .
      </p>
    </div>
  );
}
