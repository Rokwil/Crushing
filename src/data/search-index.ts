import { allGrades } from "./grades";
import { glossary } from "./glossary";

export interface SearchItem {
  title: string;
  href: string;
  excerpt: string;
  category: string;
}

export const searchIndex: SearchItem[] = [
  {
    title: "Learn — Start here",
    href: "/learn",
    excerpt: "Beginner path for road pavement, crushing, and material tests",
    category: "Learn",
  },
  {
    title: "G1 is not crusher-run",
    href: "/learn/g1-not-crusher-run",
    excerpt: "Why dense crusher-run is not the same as G1 crushed stone base",
    category: "Learn",
  },
  {
    title: "Road pavement layers",
    href: "/learn/road-pavement",
    excerpt: "Base, subbase, subgrade, and surfacing explained",
    category: "Learn",
  },
  {
    title: "Crushing basics",
    href: "/learn/crushing-basics",
    excerpt: "Quarry, blast, crush, screen, stockpile",
    category: "Learn",
  },
  {
    title: "Material tests",
    href: "/learn/tests",
    excerpt: "ACV, 10% FACT, CBR, PI, flakiness, fractured faces",
    category: "Learn",
  },
  {
    title: "All stone grades",
    href: "/grades",
    excerpt: "G1 through G9 quality ladder",
    category: "Grades",
  },
  {
    title: "Compare grades",
    href: "/compare",
    excerpt: "Side-by-side comparison of G-materials",
    category: "Tools",
  },
  {
    title: "COTO vs COLTO",
    href: "/coto-vs-colto",
    excerpt: "What changed from COLTO to COTO specifications",
    category: "Reference",
  },
  {
    title: "Glossary",
    href: "/glossary",
    excerpt: "Terms and TMH1 test methods",
    category: "Reference",
  },
  {
    title: "Official resources",
    href: "/resources",
    excerpt: "DoT and SANRAL PDF downloads",
    category: "Reference",
  },
  ...allGrades.map((g) => ({
    title: g.title,
    href: `/grades/${g.id}`,
    excerpt: g.summary,
    category: "Grades",
  })),
  ...glossary.map((g) => ({
    title: g.term,
    href: `/glossary#${g.slug}`,
    excerpt: g.definition,
    category: "Glossary",
  })),
];
