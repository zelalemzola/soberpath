
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface QuizStep34Props {
  onNext: () => void;
  onBack: () => void;
}

export default function QuizStep31({ onNext, onBack }: QuizStep34Props) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
\

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center space-y-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Important{" "}
            <em>
              Ultiself will
              <br />
              save you time
            </em>{" "}
            by building
            <br />
            self discipline!
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <Image
              src="/good-news-graph.png"
              alt="Person holding a clock representing time and discipline"
              width={400}
              height={250}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="bg-green-100 border-2 border-green-300 border-dashed rounded-lg p-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
            </div>
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Incremental changes will turn to{" "}
              <em>
                real
                <br />
                results
              </em>
            </p>
          </div>

          <Button
            onClick={onNext}
            className="w-full max-w-md bg-green-500 hover:bg-green-600 text-white py-3 text-lg rounded-lg"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
