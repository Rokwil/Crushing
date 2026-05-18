"use client";

import Fuse from "fuse.js";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { searchIndex } from "@/data/search-index";

const fuse = new Fuse(searchIndex, {
  keys: ["title", "excerpt", "category"],
  threshold: 0.35,
});

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return searchIndex.slice(0, 8);
    return fuse.search(query).map((r) => r.item);
  }, [query]);

  useEffect(() => {
    if (!open) setQuery("");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 p-4 pt-[15vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-xl border border-card-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="search"
          autoFocus
          placeholder="Search grades, tests, glossary…"
          className="w-full border-b border-card-border bg-transparent px-4 py-3 text-foreground outline-none placeholder:text-muted"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul className="max-h-80 overflow-y-auto p-2">
          {results.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg px-3 py-2 hover:bg-background"
                onClick={onClose}
              >
                <span className="font-medium">{item.title}</span>
                <span className="ml-2 text-xs text-amber-400">{item.category}</span>
                <p className="text-sm text-muted line-clamp-1">{item.excerpt}</p>
              </Link>
            </li>
          ))}
          {results.length === 0 && (
            <li className="px-3 py-4 text-sm text-muted">No results</li>
          )}
        </ul>
      </div>
    </div>
  );
}
