"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface QuizStep30Props {
  onNext: () => void;
  onBack: () => void;
}

export default function QuizStep35({ onNext, onBack }: QuizStep30Props) {
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">
          What's your <em>name?</em>
        </h1>

        <div className="flex justify-center">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-500 text-2xl">👤</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full max-w-md mx-auto p-4 rounded-lg border border-gray-300 text-lg bg-gray-200"
          />

          <Button
            onClick={onNext}
            className="w-full max-w-md bg-green-500 hover:bg-green-600 text-white py-3 text-lg rounded-lg"
          >
            Continue
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto p-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">U</span>
          </div>
          <span className="font-bold">Ultiself</span>
        </div>
        <div className="flex justify-center space-x-8 text-sm text-gray-600">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          © 2026, Ultiself. All rights reserved.
        </p>
      </div>
    </div>
  );
}

