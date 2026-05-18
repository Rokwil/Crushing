import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-card-border bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-sm text-muted">
          Educational guide for South African roadworks students. Not a substitute for
          contract documents or Engineer acceptance. Spec data transcribed from COTO
          Chapter 4 (2020).
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link href="/about" className="text-amber-400 hover:underline">
            About & disclaimer
          </Link>
          <Link href="/resources" className="text-amber-400 hover:underline">
            Official resources
          </Link>
          <Link href="/learn/g1-not-crusher-run" className="text-amber-400 hover:underline">
            G1 ≠ crusher-run
          </Link>
        </div>
      </div>
    </footer>
  );
}
