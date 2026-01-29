

"use client";

interface QuizStep27Props {
  onNext: () => void;
  onBack: () => void;
}

export default function QuizStep22({ onNext, onBack }: QuizStep27Props) {
  const options = ["Never", "Only once", "1-3 times", "4-7 times", "8+ times"];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center space-y-8">
          <h1 className="text-3xl font-bold text-gray-800">
            How many times have you tried to
            <br />
            take control of your drinking before?
          </h1>

          <div className="space-y-4">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={onNext}
                className="w-full bg-white p-4 rounded-lg border hover:bg-gray-50 text-left text-lg"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 text-center">
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
