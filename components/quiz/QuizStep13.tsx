
"use client";

import { useState } from "react";
import { QuizData } from "@/app/quiz/page";

interface QuizStep17Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
}

const confidenceLevels = [
  { id: "yes-very-much", label: "Yes very much" },
  { id: "somewhat", label: "Somewhat" },
  { id: "not-really", label: "Not really" },
  { id: "not-at-all", label: "Not at all" },
];

export function QuizStep13({ onNext, updateData }: QuizStep17Props) {
  const [selectedLevel, setSelectedLevel] = useState<string>("");

  const handleSelect = (levelId: string) => {
    setSelectedLevel(levelId);
    updateData({ alcoholConfidence: levelId });
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
            Do you feel like alcohol gives you more confidence?
          </h1>
        </div>

        <div className="space-y-3">
          {confidenceLevels.map((level) => (
            <button
              key={level.id}
              onClick={() => handleSelect(level.id)}
              className={`w-full flex items-center justify-center p-4 rounded-lg border-2 transition-all duration-200 hover:border-green-300 hover:bg-green-50 ${
                selectedLevel === level.id
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <span className="text-center font-medium text-gray-900">
                {level.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-4 left-4 flex items-center space-x-2">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">U</span>
        </div>
        <span className="text-sm font-medium text-gray-700">Ultiself</span>
        <div className="flex space-x-4 ml-8">
          <a href="#" className="text-xs text-gray-500 hover:text-gray-700">
            Privacy Policy
          </a>
          <a href="#" className="text-xs text-gray-500 hover:text-gray-700">
            Terms of Use
          </a>
        </div>
      </div>
      <div className="fixed bottom-4 left-4">
        <p className="text-xs text-gray-400">
          © 2024, Ultiself. All rights reserved.
        </p>
      </div>
    </div>
  );
}
