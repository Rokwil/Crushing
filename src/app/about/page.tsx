import Link from "next/link";
import { SPEC_VERSION } from "@/data/types";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: "About & disclaimer",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 prose-sa">
      <FadeIn>
        <h1 className="text-3xl font-bold">About this site</h1>
        <p className="mt-4">
          <strong>SA Stone Grades</strong> is a free educational resource for
          students entering South African road construction and crushing. It
          explains COTO stone grades, tests, and pavement context in plain
          language.
        </p>
      </FadeIn>

      <FadeIn delay={0.05} className="mt-8">
        <h2>Disclaimer</h2>
        <ul>
          <li>
            This is an <strong>educational guide</strong>, not a contract
            document.
          </li>
          <li>
            Material acceptance is always subject to the Engineer and the
            project-specific specifications.
          </li>
          <li>
            Limit tables are transcribed from COTO Chapter 4 ({SPEC_VERSION}).
            Errors may occur — report via your project channel or repository
            issues if applicable.
          </li>
          <li>We do not host or redistribute government PDFs.</li>
        </ul>

        <h2>How data was prepared</h2>
        <ol>
          <li>Source: COTO Standard Specifications, Chapter 4 — Materials.</li>
          <li>Tables A4.1.5-3 through A4.1.5-6 transcribed into structured data.</li>
          <li>Student explanations written separately from numeric limits.</li>
        </ol>

        <p>
          <Link href="/resources">Official resources →</Link>
        </p>
      </FadeIn>
    </div>
  );
}
