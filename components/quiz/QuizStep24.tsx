"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface QuizStep25Props {
  onNext: () => void;
  onBack: () => void;
}

export default function QuizStep24({ onNext, onBack }: QuizStep25Props) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-4">
        <h1 className="md:text-2xl text-3xl font-bold text-gray-800">
          Simply trying to quit drinking will only leave you frustrated
        </h1>

        <div className="relative mx-auto">
          <Image
            src="/leave-you-frustrated.png"
            alt="Before and after comparison showing frustrated person vs happy person"
            width={300}
            height={300}
            className=" h-auto rounded-lg mx-auto"
          />
        </div>

        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            <strong>
              Soberpath uses cutting edge training & neuroscience exercises,
              right in our app, to
              <br />
              empower you.
            </strong>
          </p>

          <div className="bg-green-100 border-2 border-green-300 border-dashed rounded-lg p-4">
            <p className="text-lg font-semibold text-gray-800">
              Consider us your <em>24X7 sobriety coach</em>
            </p>
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
