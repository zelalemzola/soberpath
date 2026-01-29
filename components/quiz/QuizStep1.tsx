"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuizData } from "@/app/quiz/page";

interface QuizStep10Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
}

export function QuizStep1({ onNext, updateData }: QuizStep10Props) {
  const [selectedGoal, setSelectedGoal] = useState<string>("");

  const handleSelect = (goal: string) => {
    setSelectedGoal(goal);
    updateData({ goal });
  };

  const handleContinue = () => {
    if (selectedGoal) {
      onNext();
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url(/window.svg)" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-lg space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-white leading-tight">
              Take control of your drinking
              <br />
              with this custom plan
            </h1>

            {/* Info badge */}
            <div className="bg-red-100 border border-red-300 rounded-lg p-3 inline-block">
              <p className="text-red-800 text-sm font-medium">
                🏥 Alcohol kills 2.6 million
                <br />
                people per year!
              </p>
            </div>

            {/* Quiz badge */}
            <div className="bg-green-500 text-white px-3 py-1 rounded-full inline-block text-sm font-medium">
              2 minute quiz
            </div>

            <h2 className="text-xl font-semibold text-white">
              Do you want to?
            </h2>
          </div>

          <div className="flex justify-center gap-6">
            <button
              onClick={() => handleSelect("quit")}
              className={`flex flex-col items-center p-6 rounded-lg border-2 transition-all duration-200 min-w-[140px] ${
                selectedGoal === "quit"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300 bg-white hover:border-green-300 hover:bg-green-50"
              }`}
            >
              <div className="text-4xl mb-2">🚫</div>
              <div className="bg-green-600 text-white px-4 py-2 rounded font-medium">
                Quit
                <br />
                Completely
              </div>
            </button>

            <button
              onClick={() => handleSelect("reduce")}
              className={`flex flex-col items-center p-6 rounded-lg border-2 transition-all duration-200 min-w-[140px] ${
                selectedGoal === "reduce"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300 bg-white hover:border-green-300 hover:bg-green-50"
              }`}
            >
              <div className="text-4xl mb-2">🍷</div>
              <div className="bg-green-600 text-white px-4 py-2 rounded font-medium">
                Reduce
                <br />
                Intake
              </div>
            </button>
          </div>

          {selectedGoal && (
            <Button
              onClick={handleContinue}
              className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-medium text-lg"
            >
              Continue
            </Button>
          )}
        </div>

        {/* Media logos at bottom */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="flex justify-center items-center space-x-4 opacity-70">
            <span className="text-white text-xs">As featured in:</span>
            {/* You can add actual media logo images here */}
            <div className="flex space-x-3 text-white text-xs">
              <span>Yahoo!</span>
              <span>CBS</span>
              <span>MELTZER</span>
              <span>FOX</span>
              <span>Entrepreneur</span>
              <span>The New York Times</span>
              <span>WIRED</span>
              <span>Forbes</span>
              <span>Healthline</span>
              <span>WSJ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

