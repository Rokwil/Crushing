"use client";

import { useState } from "react";
import type { Quiz } from "@/data/quizzes";

export function QuizBlock({ quiz }: { quiz: Quiz }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = quiz.questions.reduce(
    (acc, q, i) => acc + (answers[i] === q.correctIndex ? 1 : 0),
    0,
  );

  return (
    <div className="rounded-xl border border-card-border bg-card p-6">
      <h3 className="text-lg font-semibold">{quiz.title} — Quick check</h3>
      <ol className="mt-6 space-y-6">
        {quiz.questions.map((q, qi) => (
          <li key={q.question}>
            <p className="font-medium">
              {qi + 1}. {q.question}
            </p>
            <ul className="mt-3 space-y-2">
              {q.options.map((opt, oi) => {
                const selected = answers[qi] === oi;
                const showResult = submitted;
                const correct = oi === q.correctIndex;
                let cls =
                  "block w-full rounded-lg border px-3 py-2 text-left text-sm transition ";
                if (!showResult) {
                  cls += selected
                    ? "border-amber-500 bg-amber-500/10"
                    : "border-card-border hover:border-amber-500/40";
                } else if (correct) {
                  cls += "border-emerald-500/50 bg-emerald-500/10";
                } else if (selected) {
                  cls += "border-red-500/50 bg-red-500/10";
                } else {
                  cls += "border-card-border opacity-60";
                }
                return (
                  <li key={opt}>
                    <button
                      type="button"
                      className={cls}
                      disabled={submitted}
                      onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                    >
                      {opt}
                    </button>
                  </li>
                );
              })}
            </ul>
            {submitted && (
              <p className="mt-2 text-sm text-muted">{q.explanation}</p>
            )}
          </li>
        ))}
      </ol>
      {!submitted ? (
        <button
          type="button"
          className="mt-6 rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-amber-400"
          onClick={() => setSubmitted(true)}
          disabled={Object.keys(answers).length < quiz.questions.length}
        >
          Check answers
        </button>
      ) : (
        <p className="mt-6 text-lg font-medium text-amber-400">
          Score: {score} / {quiz.questions.length}
        </p>
      )}
    </div>
  );
}
