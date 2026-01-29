"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

interface QuizStep31Props {
  onNext: () => void;
  onBack: () => void;
}

export default function QuizStep34({ onNext, onBack }: QuizStep31Props) {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Enter your email to get the
          <br />
          custom plan to{" "}
          <em>
            take control
            <br />
            of your drinking
          </em>
        </h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full max-w-md mx-auto p-4 rounded-lg border border-gray-300 text-lg"
          />

          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <span>🔒</span>
            <span>
              We respect your privacy and do not send spam.{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </span>
          </div>

          <Button
            onClick={onNext}
            className="w-full max-w-md bg-green-500 hover:bg-green-600 text-white py-3 text-lg rounded-lg"
          >
            Continue
          </Button>

          <p className="text-sm text-gray-600">
            By entering your email you comply with our{" "}
            <a href="#" className="underline">
              terms of service
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              privacy policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
