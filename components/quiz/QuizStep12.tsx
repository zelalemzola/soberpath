"use client";

import { useState } from "react";
import { QuizData } from "@/app/quiz/page";

interface QuizStep18Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
}

const traumaOptions = [
  { id: "yes", label: "Yes" },
  { id: "no", label: "No" },
  { id: "not-sure", label: "Not sure" },
];

export function QuizStep12({ onNext, updateData }: QuizStep18Props) {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelect = (optionId: string) => {
    setSelectedOption(optionId);
    updateData({ pastTrauma: optionId });
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
            Do you have <span className="italic">past trauma</span> in your life
            that you haven't dealt with?
          </h1>
        </div>

        <div className="space-y-3">
          {traumaOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`w-full flex items-center justify-center p-4 rounded-lg border-2 transition-all duration-200 hover:border-green-300 hover:bg-green-50 ${
                selectedOption === option.id
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <span className="text-center font-medium text-gray-900">
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
}
