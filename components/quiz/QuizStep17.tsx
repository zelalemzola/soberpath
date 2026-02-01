"use client";

import { useState } from "react";
import { QuizData } from "@/app/quiz/page";

interface QuizStep13Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
}

const moneyRanges = [
  { id: "0-99", label: "0-$99" },
  { id: "100-299", label: "$100-$299" },
  { id: "300-599", label: "$300-$599" },
  { id: "600+", label: "$600+" },
];

export function QuizStep17({ onNext, updateData }: QuizStep13Props) {
  const [selectedRange, setSelectedRange] = useState<string>("");

  const handleSelect = (rangeId: string) => {
    setSelectedRange(rangeId);
    updateData({ moneySpent: rangeId });
    // Auto-advance after selection
    setTimeout(() => {
      onNext();
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">
            Approximately, how much money do you waste on alcohol per week?
          </h1>
        </div>

        <div className="space-y-3">
          {moneyRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => handleSelect(range.id)}
              className={`w-full flex items-center justify-center p-4 rounded-lg border-2 transition-all duration-200 hover:border-green-300 hover:bg-green-50 ${
                selectedRange === range.id
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <span className="text-center font-medium text-gray-900">
                {range.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
     
    </div>
  );
}
