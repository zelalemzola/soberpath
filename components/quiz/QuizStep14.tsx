

"use client";

import { Button } from "@/components/ui/button";
import { QuizData } from "@/app/quiz/page";
import Image from "next/image";

interface QuizStep16Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
}

export function QuizStep14({ onNext, updateData }: QuizStep16Props) {
  const handleContinue = () => {
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100">
      <div className="w-full max-w-lg space-y-8 text-center">
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            Typically drinking is caused by{" "}
            <span className="italic font-bold">internal triggers</span>
          </h1>

          <p className="text-lg text-gray-700 max-w-md mx-auto">
            Ultiself uses AI to determine these triggers & attacks it at its
            core
          </p>

          <p className="text-lg text-gray-900">
            Giving{" "}
            <span className="underline">you control of your drinking</span>
          </p>

          <div className="bg-green-500 text-white px-4 py-2 rounded-lg inline-block font-bold">
            FAST, FOR GOOD
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-sm mx-auto h-48">
          <Image
            src="/internal-triggers.png"
            alt="Internal triggers illustration"
            fill
            className="object-contain rounded-lg"
          />
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
