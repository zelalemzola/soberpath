
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuizData } from "@/app/quiz/page";

interface QuizStep1Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
}

const reasons = [
  { id: "relax", label: "To relax", icon: "🛋️" },
  { id: "boredom", label: "Boredom", icon: "😴" },
  { id: "confidence", label: "More confidence", icon: "💪" },
  { id: "fit-in", label: "To fit in", icon: "👥" },
  { id: "fun", label: "To have fun", icon: "🎉" },
  { id: "habit", label: "Habit", icon: "🔄" },
  { id: "trauma", label: "Past Trauma", icon: "🧠" },
];

export function QuizStep10({ onNext, updateData }: QuizStep1Props) {
  const [selectedReason, setSelectedReason] = useState<string>("");

  const handleSelect = (reasonId: string) => {
    setSelectedReason(reasonId);
    updateData({ mainReason: reasonId });
    // Auto-advance after selection
    setTimeout(() => {
      onNext();
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">
            What is the <span className="italic">main reason</span> why you
            drink?
          </h1>
        </div>

        <div className="space-y-3">
          {reasons.map((reason) => (
            <button
              key={reason.id}
              onClick={() => handleSelect(reason.id)}
              className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 hover:border-green-300 hover:bg-green-50 ${
                selectedReason === reason.id
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <span className="text-left font-medium text-gray-900">
                {reason.label}
              </span>
              <span className="text-2xl">{reason.icon}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
