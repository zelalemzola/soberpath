"use client";

import { useState } from "react";
import { QuizData } from "@/app/quiz/page";

interface QuizStep6Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
}

const sources = [
  { id: "on-my-own", label: "On my own", icon: "👤" },
  { id: "psychologist", label: "Psychologist", icon: "🧠" },
  {
    id: "substance-abuse-counselor",
    label: "Substance abuse counselor",
    icon: "🩺",
  },
  { id: "life-coach", label: "Life coach", icon: "🎯" },
  { id: "performance-coach", label: "Performance coach", icon: "📈" },
];

export function QuizStep5({ onNext, updateData }: QuizStep6Props) {
  const [selectedSource, setSelectedSource] = useState<string>("");

  const handleSelect = (sourceId: string) => {
    setSelectedSource(sourceId);
    updateData({ howFoundUs: sourceId });
    // Auto-advance after selection
    setTimeout(() => {
      onNext();
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100">
      <div className="w-full max-w-md space-y-6">
        {/* Recommendation badge */}
        <div className="text-center mb-8">
          <div className="bg-green-100 border-2 border-dashed border-green-400 rounded-lg p-4 inline-block">
            <div className="text-2xl mb-2">💰</div>
            <p className="text-green-800 font-medium text-sm">
              <span className="italic font-semibold">
                Ultiself is recommended
              </span>{" "}
              by a<br />
              growing number of psychologists
            </p>
          </div>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">
            How did you find out about us?
          </h1>
        </div>

        <div className="space-y-3">
          {sources.map((source) => (
            <button
              key={source.id}
              onClick={() => handleSelect(source.id)}
              className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 hover:border-green-300 hover:bg-green-50 ${
                selectedSource === source.id
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <span className="text-left font-medium text-gray-900">
                {source.label}
              </span>
              <span className="text-2xl">{source.icon}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
