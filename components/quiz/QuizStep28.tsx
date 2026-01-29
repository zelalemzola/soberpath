"use client";

import { Button } from "@/components/ui/button";

interface QuizStep21Props {
  onNext: () => void;
  onBack: () => void;
}

export default function QuizStep28({ onNext, onBack }: QuizStep21Props) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">


      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center space-y-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Which of the following activities
            <br />
            could you replace drinking with?
          </h1>

          <div className="space-y-4">
            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">Exercise</span>
              </div>
              <div className="text-2xl">🏋️</div>
            </label>

            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">Playing sports</span>
              </div>
              <div className="text-2xl">🏃</div>
            </label>

            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">Learning a new language</span>
              </div>
              <div className="text-2xl">🗣️</div>
            </label>

            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">Work</span>
              </div>
              <div className="text-2xl">💼</div>
            </label>

            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">Being in nature</span>
              </div>
              <div className="text-2xl">🌲</div>
            </label>

            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">Walking/biking</span>
              </div>
              <div className="text-2xl">🚴</div>
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
    </div>
  );
}

