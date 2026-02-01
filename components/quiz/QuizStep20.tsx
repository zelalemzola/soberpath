
"use client";

interface QuizStep29Props {
  onNext: () => void;
  onBack: () => void;
}

export default function QuizStep20({ onNext, onBack }: QuizStep29Props) {
  const options = ["less than 1 year", "1-3 years", "4-9 years", "10 years+"];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">


      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center space-y-8">
          <h1 className="text-3xl font-bold text-gray-800">
            How long have you had a{" "}
            <em>
              problem
              <br />
              with alcohol?
            </em>
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
     
    </div>
  );
}
