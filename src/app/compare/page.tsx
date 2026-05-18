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
          Pick any two G-materials to compare summaries, CBR, grading modulus, and
          sieve tables side by side.
        </p>
      </FadeIn>
      <div className="mt-10">
        <CompareView />
      </div>
    </div>
  );
}
