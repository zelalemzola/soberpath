"use client";

import { useState, useEffect } from "react";
import { QuizData } from "@/app/quiz/page";
import Image from "next/image";
import { motion } from "framer-motion";

interface QuizStep8Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
  quizData: QuizData;
}

export function QuizStep3({ onNext, updateData, quizData }: QuizStep8Props) {
  const [selectedAge, setSelectedAge] = useState<string>("")

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
    }, 800);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              How old are you?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-600 text-lg"
            >
              Age-specific strategies work better for recovery
            </motion.p>
          </div>

          {/* Age Selection Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 gap-6 max-w-2xl mx-auto scale-75 -mt-25"
          >
            {ageGroups.slice(0, 4).map((age, index) => (
              <motion.button
                key={age.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSelect(age.id)}
                className={`group relative overflow-hidden rounded-2xl border-4 transition-all duration-300 hover:shadow-2xl ${
                  selectedAge === age.id
                    ? "border-blue-500 shadow-blue-500/25 shadow-2xl"
                    : "border-gray-200 hover:border-blue-300 shadow-lg"
                }`}
              >
                <div className="aspect-square relative">
                  <Image
                    src={age.image}
                    alt={`Person in their ${age.label}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {selectedAge === age.id && (
                    <div className="absolute inset-0 bg-blue-500/20" />
                  )}
                </div>
                <div
                  className={`py-3 text-center font-semibold text-lg transition-all duration-300 ${
                    selectedAge === age.id
                      ? "bg-blue-500 text-white"
                      : "bg-blue-600 text-white group-hover:bg-blue-500"
                  }`}
                >
                  {age.label}
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* 60s option centered below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleSelect("60s")}
              className={`group relative overflow-hidden rounded-2xl border-4 transition-all duration-300 hover:shadow-2xl w-48 ${
                selectedAge === "60s"
                  ? "border-blue-500 shadow-blue-500/25 shadow-2xl"
                  : "border-gray-200 hover:border-blue-300 shadow-lg"
              }`}
            >
              <div className="aspect-square relative">
                <Image
                  src={`/${imagePrefix}60s.png`}
                  alt="Person in their 60's"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {selectedAge === "60s" && (
                  <div className="absolute inset-0 bg-blue-500/20" />
                )}
              </div>
              <div
                className={`py-3 text-center font-semibold text-lg transition-all duration-300 ${
                  selectedAge === "60s"
                    ? "bg-blue-500 text-white"
                    : "bg-blue-600 text-white group-hover:bg-blue-500"
                }`}
              >
                60's+
              </div>
            </motion.button>
          </motion.div>

          {/* Progress indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm text-gray-500">Question 3 of 35</p>
            <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                style={{ width: "8.5%" }}
              ></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    
    </>
  );
}
