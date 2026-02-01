"use client";

import { useState } from "react";
import { QuizData } from "@/app/quiz/page";

interface QuizStep4Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
}

const drinkRanges = [
  { id: "3-5", label: "3-5", icon: "🍺" },
  { id: "6-10", label: "6-10", icon: "🍻" },
  { id: "11-24", label: "11-24", icon: "🍷" },
  { id: "25+", label: "25+", icon: "🥃" },
];

export function QuizStep7({ onNext, updateData }: QuizStep4Props) {
  const [selectedRange, setSelectedRange] = useState<string>("");

  const handleSelect = (rangeId: string) => {
    setSelectedRange(rangeId);
    updateData({ drinksPerWeek: rangeId });
    // Auto-advance after selection
    setTimeout(() => {
      onNext();
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-600 italic">
            Let's assess your relationship with alcohol.
          </p>
          <h1 className="text-2xl font-semibold text-gray-900">
            How many drinks do you typically have per week?
          </h1>
        </div>

        <div className="space-y-3">
          {drinkRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => handleSelect(range.id)}
              className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 hover:border-green-300 hover:bg-green-50 ${
                selectedRange === range.id
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <span className="text-left font-medium text-gray-900">
                {range.label}
              </span>
              <span className="text-2xl">{range.icon}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
 
    </div>
  );
}
