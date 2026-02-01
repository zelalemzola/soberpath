

"use client";

interface QuizStep33Props {
  onNext: () => void;
  onBack: () => void;
}

export default function QuizStep32({ onNext, onBack }: QuizStep33Props) {
  const options = [
    { text: "Yes", icon: "✓" },
    { text: "No", icon: "✗" },
    { text: "Not Sure", icon: "" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Progress bar */}
      <div className="w-full bg-gray-200 h-2">
        <div className="bg-green-500 h-2" style={{ width: "94%" }}></div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center space-y-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Can you commit <em>15 minutes a day</em>
            <br />
            to finally taking control of your
            <br />
            drinking & life?
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
     
    </div>
  );
}
