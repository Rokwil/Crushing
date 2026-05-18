"use client";

import Link from "next/link";
import { useState } from "react";
import { SearchDialog } from "@/components/search/SearchDialog";

const nav = [
  { href: "/learn", label: "Learn" },
  { href: "/grades", label: "Grades" },
  { href: "/compare", label: "Compare" },
  { href: "/glossary", label: "Glossary" },
  { href: "/coto-vs-colto", label: "COTO vs COLTO" },
  { href: "/resources", label: "Resources" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-card-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-sm text-amber-400">
              G
            </span>
            <span>
              SA Stone <span className="text-amber-400">Grades</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-card hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="ml-2 rounded-lg border border-card-border px-3 py-2 text-sm text-muted hover:border-amber-500/50 hover:text-foreground"
              aria-label="Search"
            >
              Search
            </button>
          </nav>
          <button
            type="button"
            className="rounded-lg border border-card-border px-3 py-2 text-sm md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            Menu
          </button>
        </div>
        {open && (
          <nav className="border-t border-card-border px-4 py-3 md:hidden">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-slate-300"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              className="mt-2 w-full rounded-lg border border-card-border px-3 py-2 text-sm"
              onClick={() => {
                setOpen(false);
                setSearchOpen(true);
              }}
            >
              Search
            </button>
          </nav>
        )}
      </header>
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
