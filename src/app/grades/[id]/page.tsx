import { notFound } from "next/navigation";
import { GradePageTemplate } from "@/components/grades/GradePageTemplate";
import { allGrades, getGrade } from "@/data/grades";
export function generateStaticParams() {
  return allGrades.map((g) => ({ id: g.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const grade = getGrade(id);
  if (!grade) return { title: "Grade not found" };
  return {
    title: grade.title,
    description: grade.summary,
  };
}

export default async function GradePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const grade = getGrade(id);
  if (!grade) notFound();
  return <GradePageTemplate grade={grade} />;
}
