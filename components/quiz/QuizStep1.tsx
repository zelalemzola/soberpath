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
      className="bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url(/landing.jpg)",
        backgroundAttachment: "fixed", // Keeps image quality intact on mobile
      }}
    >
      {/* Subtle overlay for text readability - adjust opacity as needed */}
      <div className="absolute inset-0 " />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-8 min-h-[calc(100vh-8px)]">
        <div className="w-full max-w-md space-y-6 text-center">
          <div className="space-y-3">
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-lg">
              Take control of your drinking
              <br />
              with this custom plan
            </h1>

            {/* Info badge */}
            <div className="bg-red-100 border border-red-300 rounded-lg p-2.5 inline-block shadow-lg mx-4">
              <p className="text-red-800 text-xs font-medium">
                🏥 Alcohol kills 2.6 million people per year!
              </p>
            </div>

            {/* Quiz badge */}
            <div className="bg-green-500 text-white px-3 py-1 rounded-full inline-block text-xs font-medium shadow-lg">
              2 minute quiz
            </div>

            <h2 className="text-lg md:text-xl font-semibold text-white drop-shadow-lg">
              Do you want to?
            </h2>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleSelect("quit")}
              className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 min-w-[120px] shadow-lg ${
                selectedGoal === "quit"
                  ? "border-green-500 bg-green-50 shadow-green-200"
                  : "border-gray-300 bg-white hover:border-green-300 hover:bg-green-50"
              }`}
            >
              <div className="text-3xl mb-2">🚫</div>
              <div className="bg-green-600 text-white px-3 py-1.5 rounded text-sm font-medium">
                Quit
                <br />
                Completely
              </div>
            </button>

            <button
              onClick={() => handleSelect("reduce")}
              className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 min-w-[120px] shadow-lg ${
                selectedGoal === "reduce"
                  ? "border-green-500 bg-green-50 shadow-green-200"
                  : "border-gray-300 bg-white hover:border-green-300 hover:bg-green-50"
              }`}
            >
              <div className="text-3xl mb-2">🍷</div>
              <div className="bg-green-600 text-white px-3 py-1.5 rounded text-sm font-medium">
                Reduce
                <br />
                Intake
              </div>
            </button>
          </div>
        </div>

        {/* Media logos at bottom */}
        <div className="mt-8">
          <div className="flex flex-col items-center space-y-2 opacity-80">
            <span className="text-white text-xs drop-shadow">
              As featured in:
            </span>
            <div className="flex flex-wrap justify-center gap-2 text-white text-xs max-w-sm drop-shadow">
              <span>Yahoo!</span>
              <span>CBS</span>
              <span>FOX</span>
              <span>Entrepreneur</span>
              <span>NYT</span>
              <span>WIRED</span>
              <span>Forbes</span>
              <span>WSJ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Continue Button */}
      {selectedGoal && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200">
          <Button
            onClick={handleContinue}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium shadow-lg"
          >
            Continue
          </Button>
        </div>
      )}
    </div>
  );
}
