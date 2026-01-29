"use client";

import { useState } from "react";
import { QuizData } from "@/app/quiz/page";
import Image from "next/image";

interface QuizStep8Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
  quizData: QuizData;
}

export function QuizStep3({ onNext, updateData, quizData }: QuizStep8Props) {
  const [selectedAge, setSelectedAge] = useState<string>("");

  // Determine image prefix based on gender
  const imagePrefix = quizData.gender === "female" ? "female" : "male";

  const ageGroups = [
    { id: "20s", label: "20's", image: `/${imagePrefix}20s.png` },
    { id: "30s", label: "30's", image: `/${imagePrefix}30s.png` },
    { id: "40s", label: "40's", image: `/${imagePrefix}40s.png` },
    { id: "50s", label: "50's", image: `/${imagePrefix}50s.png` },
    { id: "60s", label: "60's", image: `/${imagePrefix}60s.png` },
  ];

  const handleSelect = (ageId: string) => {
    setSelectedAge(ageId);
    updateData({ ageGroup: ageId });
    // Auto-advance after selection
    setTimeout(() => {
      onNext();
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            How old are you?
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          {ageGroups.slice(0, 4).map((age) => (
            <button
              key={age.id}
              onClick={() => handleSelect(age.id)}
              className={`relative overflow-hidden rounded-lg border-4 transition-all duration-200 hover:border-green-300 ${
                selectedAge === age.id ? "border-green-500" : "border-gray-200"
              }`}
            >
              <div className="aspect-square relative">
                <Image
                  src={age.image}
                  alt={`Person in their ${age.label}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-green-600 text-white py-2 text-center font-medium">
                {age.label}
              </div>
            </button>
          ))}
        </div>

        {/* 60s option centered below */}
        <div className="flex justify-center">
          <button
            onClick={() => handleSelect("60s")}
            className={`relative overflow-hidden rounded-lg border-4 transition-all duration-200 hover:border-green-300 w-40 ${
              selectedAge === "60s" ? "border-green-500" : "border-gray-200"
            }`}
          >
            <div className="aspect-square relative">
              <Image
                src={`/${imagePrefix}60s.png`}
                alt="Person in their 60's"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-green-600 text-white py-2 text-center font-medium">
              60's
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
