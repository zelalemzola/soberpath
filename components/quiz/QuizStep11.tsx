"use client";

import { useState } from "react";
import { QuizData } from "@/app/quiz/page";

interface QuizStep19Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
}

const stressLevels = [
  { id: "very-high", label: "Very high", icon: "😰" },
  { id: "somewhat-high", label: "Somewhat high", icon: "😟" },
  { id: "medium", label: "Medium", icon: "😐" },
  { id: "fairly-low", label: "Fairly low", icon: "🙂" },
  { id: "low", label: "Low", icon: "😊" },
  { id: "not-sure", label: "Not sure", icon: "" },
];

export function QuizStep11({ onNext, updateData }: QuizStep19Props) {
  const [selectedLevel, setSelectedLevel] = useState<string>("");

  const handleSelect = (levelId: string) => {
    setSelectedLevel(levelId);
    updateData({ stressLevel: levelId });
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
            Please rate your daily level of{" "}
            <span className="italic">Stress</span>
          </h1>
        </div>

        <div className="space-y-3">
          {stressLevels.map((level) => (
            <button
              key={level.id}
              onClick={() => handleSelect(level.id)}
              className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 hover:border-green-300 hover:bg-green-50 ${
                selectedLevel === level.id
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <span className="text-left font-medium text-gray-900">
                {level.label}
              </span>
              {level.icon && <span className="text-2xl">{level.icon}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
    
    </div>
  );
}
