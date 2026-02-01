"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuizData } from "@/app/quiz/page";
import { AnalysisModal } from "./AnalysisModal";
import { motion } from "framer-motion";

interface QuizStep7Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
}

const reasons = [
  {
    id: "improve-health",
    label: "Improve Health",
    icon: "🏥",
    description: "Better sleep, energy, and overall wellness",
  },
  {
    id: "improve-productivity",
    label: "Improve Productivity",
    icon: "⚙️",
    description: "Enhanced focus and work performance",
  },
  {
    id: "improve-relationships",
    label: "Improve Relationships",
    icon: "🤝",
    description: "Stronger connections with loved ones",
  },
  {
    id: "save-money",
    label: "Save Money",
    icon: "💰",
    description: "Reduce spending on alcohol",
  },
  {
    id: "mental-clarity",
    label: "Mental Clarity",
    icon: "🧠",
    description: "Clearer thinking and better decisions",
  },
];

export function QuizStep4({ onNext, updateData }: QuizStep7Props) {
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleToggle = (reasonId: string) => {
    setSelectedReasons((prev) => {
      const updated = prev.includes(reasonId)
        ? prev.filter((id) => id !== reasonId)
        : [...prev, reasonId];
      updateData({ whyCurbDrinking: updated });
      return updated;
    });
  };

  const handleContinue = () => {
    if (selectedReasons.length > 0) {
      // Show modal first, then advance
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    onNext();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl space-y-10"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight -mt-10"
            >
              Why do you want to curb your drinking?
            </motion.h1>
          </div>

          {/* Reasons Selection */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-3 mx-auto -mt-7"
          >
            {reasons.map((reason, index) => (
              <motion.button
                key={reason.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleToggle(reason.id)}
                className={`w-full flex items-center justify-between p-2 rounded-2xl border-3 transition-all duration-300 hover:shadow-lg ${
                  selectedReasons.includes(reason.id)
                    ? "border-purple-500 bg-purple-50 shadow-purple-500/20 shadow-lg"
                    : "border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50/50"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-6 h-6 rounded-full border-3 flex items-center justify-center transition-all duration-300 ${
                      selectedReasons.includes(reason.id)
                        ? "border-purple-500 bg-purple-500 scale-110"
                        : "border-gray-300 hover:border-purple-400"
                    }`}
                  >
                    {selectedReasons.includes(reason.id) && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </motion.svg>
                    )}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 ">
                      {reason.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {reason.description}
                    </div>
                  </div>
                </div>
                <span className="text-3xl">{reason.icon}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Continue Button */}
          {selectedReasons.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pt-6"
            >
              <Button
                onClick={handleContinue}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Continue Assessment ({selectedReasons.length} selected)
              </Button>
            </motion.div>
          )}

          {/* Progress indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm text-gray-500">Question 4 of 35</p>
            <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                style={{ width: "11.4%" }}
              ></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="fixed bottom-6 left-6 flex items-center space-x-3"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-700">
              SoberPath
            </span>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="fixed bottom-6 right-6"
        >
          <p className="text-xs text-gray-400">
            © 2024, SoberPath. All rights reserved.
          </p>
        </motion.div>
      </div>

      <AnalysisModal
        isOpen={showModal}
        onClose={handleModalClose}
        type="behavioral"
        userResponse={selectedReasons.join(", ")}
      />
    </>
  );
}
