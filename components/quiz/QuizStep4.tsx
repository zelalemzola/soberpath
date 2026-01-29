"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuizData } from "@/app/quiz/page";

interface QuizStep7Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
}

const reasons = [
  { id: "improve-health", label: "Improve Health", icon: "🏥" },
  { id: "improve-productivity", label: "Improve Productivity", icon: "⚙️" },
  { id: "improve-relationships", label: "Improve Relationships", icon: "🤝" },
];

export function QuizStep4({ onNext, updateData }: QuizStep7Props) {
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);

  const handleToggle = (reasonId: string) => {
    setSelectedReasons((prev) => {
      const updated = prev.includes(reasonId)
        ? prev.filter((id) => id !== reasonId)
        : [...prev, reasonId];
      updateData({ whyCurbDrinking: updated });
      return updated;
    });
  };

  const handleContinue = () => {
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">
            Why do you want to curb your drinking?
          </h1>
        </div>

        <div className="space-y-3">
          {reasons.map((reason) => (
            <button
              key={reason.id}
              onClick={() => handleToggle(reason.id)}
              className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 hover:border-green-300 hover:bg-green-50 ${
                selectedReasons.includes(reason.id)
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    selectedReasons.includes(reason.id)
                      ? "border-green-500 bg-green-500"
                      : "border-gray-300"
                  }`}
                >
                  {selectedReasons.includes(reason.id) && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-left font-medium text-gray-900">
                  {reason.label}
                </span>
              </div>
              <span className="text-2xl">{reason.icon}</span>
            </button>
          ))}
        </div>

        <div className="pt-4">
          <Button
            onClick={handleContinue}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium"
          >
            Continue
          </Button>
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

