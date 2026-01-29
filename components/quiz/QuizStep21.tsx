
"use client";

import { Button } from "@/components/ui/button";

interface QuizStep28Props {
  onNext: () => void;
  onBack: () => void;
}

export default function QuizStep21({ onNext, onBack }: QuizStep28Props) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">


      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center space-y-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Alcohol Problem
            <br />
            <span className="text-2xl">
              Assessment{" "}
              <span className="bg-green-500 text-white px-2 py-1 rounded">
                53/100
              </span>
            </span>
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-lg font-semibold italic">
                  Key drinking triggers
                </p>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <span className="text-2xl">🛋️</span>
                  <span className="text-lg">To relax</span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-medium">Severity</span>
                    <span className="text-lg font-bold">53/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 h-3 rounded-full relative">
                      <div className="absolute right-1/2 top-0 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-gray-600 transform translate-x-1/2"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-medium">
                      Social environment
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 relative">
                    <div className="bg-gradient-to-r from-green-400 to-red-500 h-3 rounded-full"></div>
                    <div className="absolute left-1/4 top-0 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-gray-600 transform translate-x-1/2"></div>
                    <div className="flex justify-between text-xs mt-1">
                      <span className="text-green-600 font-medium">SAFE</span>
                      <span className="text-red-600 font-medium">
                        DANGEROUS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              We will create your custom anti-
              <br />
              alcohol routine & use behavioral
              <br />
              science to ensure you{" "}
              <span className="text-green-600 font-bold italic">
                get results
                <br />
                FAST!
              </span>
            </p>

            <Button
              onClick={onNext}
              className="w-full max-w-md bg-green-500 hover:bg-green-600 text-white py-3 text-lg rounded-lg"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
