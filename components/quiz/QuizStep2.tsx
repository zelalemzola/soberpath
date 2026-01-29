"use client";

import { useState } from "react";
import { QuizData } from "@/app/quiz/page";
import Image from "next/image";

interface QuizStep9Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
}

export function QuizStep2({ onNext, updateData }: QuizStep9Props) {
  const [selectedGender, setSelectedGender] = useState<string>("");

  const handleSelect = (gender: string) => {
    setSelectedGender(gender);
    updateData({ gender });
    // Auto-advance after selection
    setTimeout(() => {
      onNext();
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100">
      <div className="w-full max-w-lg space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900">You are?</h1>
        </div>

        <div className="flex justify-center gap-6">
          <button
            onClick={() => handleSelect("male")}
            className={`relative overflow-hidden rounded-lg border-4 transition-all duration-200 hover:border-green-300 w-48 ${
              selectedGender === "male" ? "border-green-500" : "border-gray-200"
            }`}
          >
            <div className="aspect-square relative">
              <Image src="/male.png" alt="Male" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-green-600 text-white py-3 text-center font-medium text-lg">
              Male
            </div>
          </button>

          <button
            onClick={() => handleSelect("female")}
            className={`relative overflow-hidden rounded-lg border-4 transition-all duration-200 hover:border-green-300 w-48 ${
              selectedGender === "female"
                ? "border-green-500"
                : "border-gray-200"
            }`}
          >
            <div className="aspect-square relative">
              <Image
                src="/female.png"
                alt="Female"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-green-600 text-white py-3 text-center font-medium text-lg">
              Female
            </div>
          </button>
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


