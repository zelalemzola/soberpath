"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuizData } from "@/app/quiz/page";
import { AnalysisModal } from "./AnalysisModal";
import {motion} from 'framer-motion'
interface QuizStep12Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
}

export function QuizStep18({ onNext, updateData }: QuizStep12Props) {
  const [showModal, setShowModal] = useState(false);

  const handleContinue = () => {
    // Show modal first, then advance
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    onNext();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100">
        <div className="w-full max-w-lg space-y-8 text-center">
          {/* Green speech bubble */}
          <div className="relative">
            <div className="bg-green-500 text-white px-4 py-2 rounded-lg inline-block relative">
              <span className="font-bold text-lg">0</span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-500"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">
              <span className="italic">According to research</span>
              <br />
              regular alcohol use:
            </h1>

            <div className="space-y-3 text-left max-w-md mx-auto">
              <div className="flex items-start space-x-2">
                <span className="text-gray-600">•</span>
                <p className="text-gray-700">
                  <span className="font-semibold">Reduces life expectancy</span>{" "}
                  by 5 years
                </p>
              </div>

              <div className="flex items-start space-x-2">
                <span className="text-gray-600">•</span>
                <p className="text-gray-700">
                  <span className="font-semibold">
                    Makes you look 10 years older
                  </span>{" "}
                  than you are
                </p>
              </div>

              <div className="flex items-start space-x-2">
                <span className="text-gray-600">•</span>
                <p className="text-gray-700">
                  Makes you{" "}
                  <span className="font-semibold">
                    4X more likely to get depressed
                  </span>
                </p>
              </div>

              <div className="flex items-start space-x-2">
                <span className="text-gray-600">•</span>
                <p className="text-gray-700">
                  <span className="font-semibold">
                    Increases risk of dementia
                  </span>{" "}
                  by 3X
                </p>
              </div>

              <div className="flex items-start space-x-2">
                <span className="text-gray-600">•</span>
                <p className="text-gray-700">
                  <span className="font-semibold">Increases cancer risk</span>{" "}
                  by 15%
                </p>
              </div>

              <div className="flex items-start space-x-2">
                <span className="text-gray-600">•</span>
                <p className="text-gray-700">
                  <span className="font-semibold">
                    Increases risk of accidents
                  </span>{" "}
                  by 2.7X
                </p>
              </div>

              <div className="flex items-start space-x-2">
                <span className="text-gray-600">•</span>
                <p className="text-gray-700">
                  <span className="font-semibold">Increases risk of death</span>{" "}
                  by 20%
                </p>
              </div>

              <div className="flex items-start space-x-2">
                <span className="text-gray-600">•</span>
                <p className="text-gray-700">
                  <span className="font-semibold">
                    Ruins your relationships
                  </span>
                </p>
              </div>
            </div>

            {/* Call to action box */}
            <div className="bg-green-100 border-2 border-dashed border-green-400 rounded-lg p-4 mx-auto max-w-sm">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-2xl">🎯</span>
                <span className="text-2xl">🎯</span>
              </div>
              <p className="text-green-800 font-semibold">
                The time to take <span className="italic">control is now!</span>
              </p>
            </div>
          </div>

        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <Button
          onClick={handleContinue}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
        >
          Continue →
        </Button>
      </motion.div>
        </div>
      </div>

      <AnalysisModal
        isOpen={showModal}
        onClose={handleModalClose}
        type="progress"
        userResponse="Acknowledged health risks"
      />
    </>
  );
}
