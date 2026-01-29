"use client";

import Image from "next/image";
import { Button } from "../ui/button";

interface QuizStep32Props {
  onNext: () => void;
  onBack: () => void;
}

export default function QuizStep33({ onNext, onBack }: QuizStep32Props) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Ultiself is the ONLY tool you
          <br />
          need to build discipline &<br />
          <em>Take control of your drinking</em>
        </h1>

        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-8 border-gray-300 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center relative">
                <span className="text-white text-2xl font-bold">25%</span>
                <div
                  className="absolute inset-0 rounded-full border-8 border-green-500"
                  style={{
                    background: `conic-gradient(#22c55e 0deg 90deg, #d1d5db 90deg 360deg)`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <p className="text-lg font-semibold text-gray-800">
            AI powered App to keep you disciplined
          </p>

          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/final-curcular-progress.png"
              alt="Professional man in suit"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
       <Button
            onClick={onNext}
            className="w-full max-w-md bg-green-500 hover:bg-green-600 text-white py-3 text-lg rounded-lg"
          >
            Continue
          </Button>
    </div>
  );
}
