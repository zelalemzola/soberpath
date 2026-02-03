"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { QuizData } from "@/app/quiz/page";

interface QuizStep35Props {
  onNext: () => void;
  onBack: () => void;
  updateData?: (data: Partial<QuizData>) => void;
}

export default function QuizStep35({ onNext, updateData }: QuizStep35Props) {
  const [name, setName] = useState("");
  const handleContinue = () => {
    if (updateData && name.trim()) updateData({ userName: name.trim() });
    onNext();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">
          What's your <em>name?</em>
        </h1>

        <div className="flex justify-center">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-500 text-2xl">👤</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full max-w-md mx-auto p-4 rounded-lg border border-gray-300 text-lg bg-gray-200"
          />

          <Button
            onClick={handleContinue}
            className="w-full max-w-md bg-green-500 hover:bg-green-600 text-white py-3 text-lg rounded-lg"
          >
            Continue
          </Button>
        </div>
      </div>

      {/* Footer */}
     
    </div>
  );
}

