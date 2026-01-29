
"use client";

interface QuizStep35Props {
  onNext: () => void;
  onBack: () => void;
}

export default function QuizStep30({ onNext, onBack }: QuizStep35Props) {
  const options = [
    { text: "5-15 min", icon: "⏱️" },
    { text: "16 min - 30 min", icon: "⏰" },
    { text: "31 min +", icon: "⏲️" },
    { text: "Not Sure", icon: "" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center space-y-8">
          <h1 className="text-3xl font-bold text-gray-800">
            How much time{" "}
            <em>
              can you dedicate to
              <br />
              working on yourself
            </em>{" "}
            per day?
          </h1>

          <div className="space-y-4">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={onNext}
                className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 w-full text-left text-lg"
              >
                <span>{option.text}</span>
                {option.icon && <span className="text-2xl">{option.icon}</span>}
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
