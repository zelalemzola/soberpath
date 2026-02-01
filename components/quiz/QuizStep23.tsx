
"use client";

import { Button } from "@/components/ui/button";

interface QuizStep26Props {
  onNext: () => void;
  onBack: () => void;
}

export default function QuizStep23({ onNext, onBack }: QuizStep26Props) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">


      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center space-y-8">
          <h1 className="text-3xl font-bold text-gray-800">
            What have you done to try to quit
            <br />
            drinking previously?
          </h1>

          <div className="space-y-4">
            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">Cold turkey</span>
              </div>
              <div className="text-2xl">🚫</div>
            </label>

            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">Rehab</span>
              </div>
              <div className="text-2xl">🏥</div>
            </label>

            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">Coaching</span>
              </div>
              <div className="text-2xl">👥</div>
            </label>

            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">Hypnosis</span>
              </div>
              <div className="text-2xl">🌀</div>
            </label>

            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">Other</span>
              </div>
            </label>
          </div>

          <Button
            onClick={onNext}
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
