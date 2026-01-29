"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuizData } from "@/app/quiz/page";

interface QuizStep11Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
}

const ruinedAreas = [
  { id: "marriage", label: "Your marriage", icon: "💔" },
  {
    id: "kids-relationship",
    label: "The relationship with your kids",
    icon: "👨‍👩‍👧‍👦",
  },
  { id: "career-success", label: "Career success", icon: "💼" },
  { id: "health", label: "Your health", icon: "🏥" },
  {
    id: "parents-relationship",
    label: "The relationship with your parents",
    icon: "👨‍👩‍👧‍👦",
  },
  { id: "other", label: "Other", icon: "" },
];

export function QuizStep19({ onNext, updateData }: QuizStep11Props) {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const handleToggle = (areaId: string) => {
    setSelectedAreas((prev) => {
      const updated = prev.includes(areaId)
        ? prev.filter((id) => id !== areaId)
        : [...prev, areaId];
      updateData({ alcoholRuined: updated });
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
            What has alcohol ruined for you?
          </h1>
        </div>

        <div className="space-y-3">
          {ruinedAreas.map((area) => (
            <button
              key={area.id}
              onClick={() => handleToggle(area.id)}
              className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 hover:border-green-300 hover:bg-green-50 ${
                selectedAreas.includes(area.id)
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    selectedAreas.includes(area.id)
                      ? "border-green-500 bg-green-500"
                      : "border-gray-300"
                  }`}
                >
                  {selectedAreas.includes(area.id) && (
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
                  {area.label}
                </span>
              </div>
              {area.icon && <span className="text-2xl">{area.icon}</span>}
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
    </div>
  );
}
