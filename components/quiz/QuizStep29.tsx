"use client";

import { Button } from "@/components/ui/button";

interface QuizStep20Props {
  onNext: () => void;
  onBack: () => void;
}

export default function QuizStep29({ onNext, onBack }: QuizStep20Props) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Progress bar */}
      
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center space-y-8">
          <h1 className="text-3xl font-bold text-gray-800">
            What would improve about your life
            <br />
            if you did not drink?
          </h1>

          <div className="space-y-4">
            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">My relationships</span>
              </div>
              <div className="text-2xl">🤝</div>
            </label>

            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">My career/business</span>
              </div>
              <div className="text-2xl">📈</div>
            </label>

            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">My health</span>
              </div>
              <div className="text-2xl">🏥</div>
            </label>

            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">My Look</span>
              </div>
              <div className="text-2xl">👤</div>
            </label>

            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">My Energy</span>
              </div>
              <div className="text-2xl">⚡</div>
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
      <div className="p-4 text-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">U</span>
          </div>
          <span className="font-bold">Ultiself</span>
        </div>
      </div>
    </div>
  );
}

