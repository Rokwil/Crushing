import Link from "next/link";
import type { GradeSpec } from "@/data/types";
import { SPEC_VERSION } from "@/data/types";
import { gradesById } from "@/data/grades";
import { GradingTable, RockStrengthTable } from "./SpecTable";
import { GradingChart } from "./GradingChart";
import { OperatorGuideSection } from "./OperatorGuideSection";
import { CbrRequirementsTable } from "./CbrRequirementsTable";
import { FadeIn } from "@/components/ui/FadeIn";

export function GradePageTemplate({ grade }: { grade: GradeSpec }) {
  const showRockTable = grade.category === "crushed";
  const showChart = grade.id === "g1" || grade.id === "g2" || grade.id === "g3";
  const referenceGrade = grade.referenceGradingGradeId
    ? gradesById[grade.referenceGradingGradeId]
    : undefined;

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <FadeIn>
        <p className="text-sm font-medium uppercase tracking-wider text-amber-400">
          Tier {grade.qualityTier} · {grade.category.replace("-", " ")}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          {grade.title}
        </h1>
        <p className="mt-4 text-lg text-slate-300">{grade.summary}</p>
      </FadeIn>

      {grade.operatorGuide && (
        <FadeIn delay={0.03} className="mt-8">
          <OperatorGuideSection grade={grade} />
        </FadeIn>
      )}

      <FadeIn delay={0.05} className="mt-10 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-amber-400">Where it is used</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-300">
            {grade.pavementUse.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-400">Parent material</h2>
          <p className="mt-3 text-slate-300">{grade.parentMaterial}</p>
          {grade.additionalFines && (
            <p className="mt-2 text-sm text-muted">{grade.additionalFines}</p>
          )}
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-400">Limits at a glance</h2>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-card-border bg-card p-3">
              <dt className="text-xs text-muted">Max particle</dt>
              <dd className="font-mono text-lg">{grade.maxParticleMm} mm</dd>
            </div>
            {grade.flakinessMax && (
              <div className="rounded-lg border border-card-border bg-card p-3">
                <dt className="text-xs text-muted">Flakiness index max</dt>
                <dd className="font-mono text-lg">{grade.flakinessMax}</dd>
              </div>
            )}
            {grade.gradingModulus && (
              <div className="rounded-lg border border-card-border bg-card p-3">
                <dt className="text-xs text-muted">Grading modulus (GM)</dt>
                <dd className="font-mono text-lg">
                  {grade.gradingModulus.min} – {grade.gradingModulus.max}
                </dd>
              </div>
            )}
            {grade.strength?.cbrMinAtMdd && (
              <div className="rounded-lg border border-card-border bg-card p-3">
                <dt className="text-xs text-muted">CBR (contract)</dt>
                <dd className="font-mono text-lg">
                  ≥ {grade.strength.cbrMinAtMdd}% at {grade.strength.cbrMddPercent}% MDD
                </dd>
              </div>
            )}
            {grade.swellMaxPercent !== undefined && (
              <div className="rounded-lg border border-card-border bg-card p-3">
                <dt className="text-xs text-muted">Swell max @ 100% MDD</dt>
                <dd className="font-mono text-lg">{grade.swellMaxPercent}%</dd>
              </div>
            )}
            {grade.soilConstants?.llMax !== undefined && (
              <div className="rounded-lg border border-card-border bg-card p-3">
                <dt className="text-xs text-muted">LL max (P0,425)</dt>
                <dd className="font-mono text-lg">{grade.soilConstants.llMax}</dd>
              </div>
            )}
            {grade.soilConstants?.piMax !== undefined && (
              <div className="rounded-lg border border-card-border bg-card p-3">
                <dt className="text-xs text-muted">PI max (P0,425)</dt>
                <dd className="font-mono text-lg">{grade.soilConstants.piMax}</dd>
              </div>
            )}
            {grade.soilConstants?.lsMax !== undefined && (
              <div className="rounded-lg border border-card-border bg-card p-3">
                <dt className="text-xs text-muted">Linear shrinkage max</dt>
                <dd className="font-mono text-lg">{grade.soilConstants.lsMax}%</dd>
              </div>
            )}
            {grade.soilConstants?.piFormula && (
              <div className="rounded-lg border border-card-border bg-card p-3 sm:col-span-2">
                <dt className="text-xs text-muted">Plasticity (P0,425)</dt>
                <dd className="font-mono text-lg">{grade.soilConstants.piFormula}</dd>
              </div>
            )}
          </dl>
        </section>

        {grade.cbrRequirements && grade.cbrRequirements.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-amber-400">CBR requirements</h2>
            <p className="mt-2 text-sm text-muted">
              Mod AASHTO compaction. Labs often report CBR at several compaction levels — only
              the contract row is pass/fail.
            </p>
            <div className="mt-4">
              <CbrRequirementsTable rows={grade.cbrRequirements} />
            </div>
          </section>
        )}

        <section>
          <h2 className="text-xl font-semibold text-amber-400">Grading envelope</h2>
          {grade.gradingControlNote && (
            <p className="mt-2 text-sm text-slate-300">{grade.gradingControlNote}</p>
          )}
          <div className="mt-4">
            <GradingTable grading={grade.grading} />
          </div>
        </section>

        {referenceGrade && referenceGrade.grading.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-amber-400">
              Practical blend guide ({referenceGrade.title})
            </h2>
            <p className="mt-2 text-sm text-muted">
              Not always a COTO pass/fail for {grade.id.toUpperCase()} — use this sieve band to
              tune crushing and screening while you chase CBR and other limits.
            </p>
            <div className="mt-4">
              <GradingTable grading={referenceGrade.grading} />
            </div>
            {referenceGrade.gradingModulus && (
              <p className="mt-3 text-sm text-slate-300">
                Reference grading modulus for {referenceGrade.id.toUpperCase()}:{" "}
                <span className="font-mono text-amber-400">
                  {referenceGrade.gradingModulus.min} – {referenceGrade.gradingModulus.max}
                </span>
              </p>
            )}
          </section>
        )}

        {showChart && (
          <section>
            <h2 className="text-xl font-semibold text-amber-400">Compare G1–G3 envelopes</h2>
            <div className="mt-4">
              <GradingChart />
            </div>
          </section>
        )}

        {showRockTable && (
          <section>
            <h2 className="text-xl font-semibold text-amber-400">Strength by rock group</h2>
            <p className="mt-2 text-sm text-muted">COTO Table A4.1.5-6</p>
            <div className="mt-4">
              <RockStrengthTable />
            </div>
          </section>
        )}

        {(grade.fracturedFaces || grade.compaction) && (
          <section>
            <h2 className="text-xl font-semibold text-amber-400">Other requirements</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-300">
              {grade.fracturedFaces && <li>{grade.fracturedFaces}</li>}
              {grade.compaction && <li>{grade.compaction}</li>}
              {grade.strength?.notes && <li>{grade.strength.notes}</li>}
              {grade.soilConstants?.notes && <li>{grade.soilConstants.notes}</li>}
            </ul>
          </section>
        )}

        {grade.restrictions && grade.restrictions.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-amber-400">Restrictions</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-300">
              {grade.restrictions.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>
        )}

        <section>
          <h2 className="text-xl font-semibold text-amber-400">Why these limits exist</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-300">
            {grade.whyLimits.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-400">Common mistakes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-amber-300/90">
            {grade.commonMistakes.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-card-border bg-card/50 p-4 text-sm text-muted">
          <p>
            Source: COTO Chapter 4, {grade.cotoRef} · Data version {SPEC_VERSION}
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Link href="/resources" className="text-amber-400 hover:underline">
              Official PDFs →
            </Link>
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/grades"
            className="rounded-lg border border-card-border px-4 py-2 text-sm hover:border-amber-500/50"
          >
            ← All grades
          </Link>
          <Link
            href="/compare"
            className="rounded-lg bg-amber-500/20 px-4 py-2 text-sm text-amber-400 hover:bg-amber-500/30"
          >
            Compare grades
          </Link>
          <Link
            href="/learn/tests"
            className="rounded-lg border border-card-border px-4 py-2 text-sm hover:border-amber-500/50"
          >
            Material tests
          </Link>
        </div>
      </FadeIn>
    </article>
  );
}
