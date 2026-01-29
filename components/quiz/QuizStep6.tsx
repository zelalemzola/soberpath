

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuizData } from "@/app/quiz/page";
import Image from "next/image";

interface QuizStep5Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
}

export function QuizStep6({ onNext, updateData }: QuizStep5Props) {
  const handleContinue = () => {
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100">
      <div className="w-full max-w-lg space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-gray-900">
            You are in the <span className="italic">right place</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-md mx-auto leading-relaxed">
            Ultiself will use the latest in behavioral science & AI to eliminate
            alcohol dependency at its core and finally put you in charge of your
            life
          </p>
        </div>

        <div className="relative">
          {/* Success message box */}
          <div className="bg-green-100 border-2 border-dashed border-green-400 rounded-lg p-4 mb-6">
            <p className="text-green-800 font-medium">We have helped over</p>
            <p className="text-2xl font-bold text-green-800">256 712 People</p>
          </div>

          {/* People illustration */}
          <div className="relative w-full h-64 mb-8">
            <Image
              src="/over256712people.png"
              alt="Community of people we've helped"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <Button
          onClick={handleContinue}
          className="w-full max-w-xs bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium text-lg"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
