"use client";

import { useState, useEffect } from "react";
import { QuizData } from "@/app/quiz/page";
import { AnalysisModal } from "./AnalysisModal";
import Image from "next/image";
import { motion } from "framer-motion";

interface QuizStep9Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
}

export function QuizStep2({ onNext, updateData }: QuizStep9Props) {
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [showModal, setShowModal] = useState(false);



  const handleSelect = (gender: string) => {
    setSelectedGender(gender);
    updateData({ gender });
    // Auto-advance after selection
    setTimeout(() => {
      onNext();
    }, 800);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-br from-gray-50 to-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              You are?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-600 text-lg"
            >
              This helps us personalize your recovery plan
            </motion.p>
          </div>

          {/* Gender Selection Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-row justify-center gap-8"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect("male")}
              className={`group relative overflow-hidden rounded-2xl border-4 transition-all duration-300 hover:shadow-2xl w-full sm:w-64 ${
                selectedGender === "male"
                  ? "border-green-500 shadow-green-500/25 shadow-2xl"
                  : "border-gray-200 hover:border-green-300 shadow-lg"
              }`}
            >
              <div className="aspect-square relative">
                <Image
                  src="/male.png"
                  alt="Male"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
                {selectedGender === "male" && (
                  <div className="absolute inset-0 bg-green-500/20" />
                )}
              </div>
              <div
                className={`py-4 text-center font-semibold text-xl transition-all duration-300 ${
                  selectedGender === "male"
                    ? "bg-green-500 text-white"
                    : "bg-green-600 text-white group-hover:bg-green-500"
                }`}
              >
                Male
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect("female")}
              className={`group relative overflow-hidden rounded-2xl border-4 transition-all duration-300 hover:shadow-2xl w-full sm:w-64 ${
                selectedGender === "female"
                  ? "border-green-500 shadow-green-500/25 shadow-2xl"
                  : "border-gray-200 hover:border-green-300 shadow-lg"
              }`}
            >
              <div className="aspect-square relative">
                <Image
                  src="/female.png"
                  alt="Female"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {selectedGender === "female" && (
                  <div className="absolute inset-0 bg-green-500/20" />
                )}
              </div>
              <div
                className={`py-4 text-center font-semibold text-xl transition-all duration-300 ${
                  selectedGender === "female"
                    ? "bg-green-500 text-white"
                    : "bg-green-600 text-white group-hover:bg-green-500"
                }`}
              >
                Female
              </div>
            </motion.button>
          </motion.div>

          {/* Progress indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm text-gray-500">Question 2 of 35</p>
          </motion.div>
        </motion.div>

        {/* Enhanced Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="fixed bottom-6 left-6 flex items-center space-x-3"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
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
          transition={{ delay: 1.4, duration: 0.6 }}
          className="fixed bottom-6 right-6"
        >
          <p className="text-xs text-gray-400">
            © 2024, SoberPath. All rights reserved.
          </p>
        </motion.div>
      </div>

      
    </>
  );
}
