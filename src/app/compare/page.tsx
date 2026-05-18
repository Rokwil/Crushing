import { CompareView } from "@/components/compare/CompareView";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: "Compare grades",
};

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <FadeIn>
        <h1 className="text-3xl font-bold">Compare grades</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Pick any two G-materials to compare key limits, sieve envelopes, and operator
          guidance side by side. Differences are highlighted — useful for G4A vs G4B,
          G1 vs G3, or subbase vs base choices.
        </p>
      </FadeIn>
      <div className="mt-10">
        <CompareView />
      </div>
    </div>
  );
}
