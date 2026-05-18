import { officialResources } from "@/data/resources";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: "Official resources",
};

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <FadeIn>
        <h1 className="text-3xl font-bold">Official resources</h1>
        <p className="mt-4 text-slate-300">
          Download authoritative specifications from government and SANRAL. This
          site does not host full PDFs — use these links.
        </p>
      </FadeIn>
      <ul className="mt-10 space-y-4">
        {officialResources.map((r, i) => (
          <FadeIn key={r.url} delay={i * 0.05}>
            <li className="rounded-xl border border-card-border bg-card p-5">
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-amber-400 hover:underline"
              >
                {r.title} ↗
              </a>
              <p className="mt-2 text-sm text-muted">{r.source}</p>
              <p className="mt-2 text-sm text-slate-300">{r.description}</p>
            </li>
          </FadeIn>
        ))}
      </ul>
    </div>
  );
}
