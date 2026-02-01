"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuizData } from "@/app/quiz/page";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

interface QuizStep10Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
}

export function QuizStep1({ onNext, updateData }: QuizStep10Props) {
  const [selectedGoal, setSelectedGoal] = useState<string>("");

  const handleSelect = (goal: string) => {
    setSelectedGoal(goal);
    updateData({ goal });

    // Auto-advance after selection with a slight delay
    setTimeout(() => {
      onNext();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl space-y-12 text-center"
        >
          {/* Progress indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-white rounded-full px-6 py-2 shadow-sm border">
              <span className="text-sm text-gray-600">Question 1 of 35</span>
            </div>
          </motion.div>

          {/* Header Section */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight"
            >
              What's your main goal?
            </motion.h1>

            {/* Stats badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-800 px-4 py-2 rounded-full text-sm font-medium"
            >
              <span className="text-red-500">⚠️</span>
              2.6M people die from alcohol-related causes yearly
            </motion.div>
          </div>

          {/* Goal Selection Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            {/* Quit Completely Option */}
            <motion.button
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect("quit")}
              className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 text-left ${
                selectedGoal === "quit"
                  ? "border-green-500 bg-green-50 shadow-lg shadow-green-500/20"
                  : "border-gray-200 bg-white hover:border-green-300 hover:bg-green-50/50 shadow-lg hover:shadow-xl"
              }`}
            >
              {selectedGoal === "quit" && (
                <div className="absolute top-4 right-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
              )}

              <div className="space-y-4 w-fit flex flex-col items-center mx-auto">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-3xl">
                  🚫
                </div>

                <div>
                  <h3 className="text-lg text-center font-bold text-gray-900 mb-2">
                    Quit Completely
                  </h3>
                </div>

                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Most effective
                  </span>
                </div>
              </div>
            </motion.button>

            {/* Reduce Intake Option */}
            <motion.button
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect("reduce")}
              className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 text-left ${
                selectedGoal === "reduce"
                  ? "border-green-500 bg-green-50 shadow-lg shadow-green-500/20"
                  : "border-gray-200 bg-white hover:border-green-300 hover:bg-green-50/50 shadow-lg hover:shadow-xl"
              }`}
            >
              {selectedGoal === "reduce" && (
                <div className="absolute top-4 right-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
              )}

              <div className="space-y-4 flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-3xl">
                  📉
                </div>

                <div>
                  <h3 className="text-lg text-center font-bold text-gray-900 mb-2">
                    Reduce Intake
                  </h3>
                </div>

                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Gradual approach
                  </span>
                </div>
              </div>
            </motion.button>
          </motion.div>

          {/* Selection feedback */}
          {selectedGoal && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-3 text-green-600"
            >
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">
                Great choice! Moving to next question...
              </span>
            </motion.div>
          )}

          {/* Time indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-sm text-gray-500"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Takes less than 2 minutes
          </motion.div>
        </motion.div>

        {/* Footer branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-6 left-6 flex items-center space-x-3"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-sm font-medium text-gray-700">SoberPath</span>
        </motion.div>
      </div>
    </div>
  );
}
