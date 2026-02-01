"use client";

import { useState } from "react";
import { QuizData } from "@/app/quiz/page";

interface QuizStep15Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
}

const socialFrequencies = [
  { id: "hardly-ever", label: "Hardly ever" },
  { id: "sometimes", label: "Sometimes" },
  { id: "often", label: "Often" },
  { id: "regularly", label: "Regularly" },
];

export function QuizStep15({ onNext, updateData }: QuizStep15Props) {
  const [selectedFrequency, setSelectedFrequency] = useState<string>("");

  const handleSelect = (frequencyId: string) => {
    setSelectedFrequency(frequencyId);
    updateData({ socialDrinking: frequencyId });
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
            How often do the people you spend time with drink?
          </h1>
        </div>

        <div className="space-y-3">
          {socialFrequencies.map((frequency) => (
            <button
              key={frequency.id}
              onClick={() => handleSelect(frequency.id)}
              className={`w-full flex items-center justify-center p-4 rounded-lg border-2 transition-all duration-200 hover:border-green-300 hover:bg-green-50 ${
                selectedFrequency === frequency.id
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <span className="text-center font-medium text-gray-900">
                {frequency.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
}
