import Link from "next/link";
import { trh14Families } from "@/data/trh14-classification";

export function MaterialFamilyCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {trh14Families.map((family) => (
        <Link
          key={family.grades}
          href={family.href}
          className="rounded-xl border border-card-border bg-card p-5 transition hover:border-amber-500/40"
        >
          <p className="text-sm font-semibold text-amber-400">{family.grades}</p>
          <h3 className="mt-1 font-medium">{family.title}</h3>
          <p className="mt-2 text-sm text-muted">{family.description}</p>
          <p className="mt-3 text-xs text-slate-400">{family.typicalCbrNote}</p>
        </Link>
      ))}
    </div>
  );
}
