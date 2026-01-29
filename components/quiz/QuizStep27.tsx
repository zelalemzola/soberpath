"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface QuizStep22Props {
  onNext: () => void;
  onBack: () => void;
}

export default function QuizStep27({ onNext, onBack }: QuizStep22Props) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Good news! based on our
          <br />
          analysis you can get
          <br />
          control of your drinking by
          <br />
          <span className="bg-green-500 text-white px-2 py-1 rounded">
            02/26/2026
          </span>
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Image
            src="/good-news-graph.png"
            alt="Progress graph showing improvement over 4 weeks"
            width={500}
            height={300}
            className="w-full h-auto"
          />
        </div>

        <div className="bg-green-100 border-2 border-green-300 border-dashed rounded-lg p-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">🏆</span>
            </div>
          </div>
          <p className="text-lg font-semibold text-gray-800 mb-4">
            Let's turbo charge your plan so you
          </p>
          <Button
            onClick={onNext}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg rounded-lg"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
