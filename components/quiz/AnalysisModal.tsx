"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, TrendingUp, AlertCircle, X } from "lucide-react";

interface AnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "behavioral" | "progress" | "insight";
  userResponse?: string;
}

export function AnalysisModal({
  isOpen,
  onClose,
  type,
  userResponse,
}: AnalysisModalProps) {
  const [analysisStep, setAnalysisStep] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setAnalysisStep(0);
      const timer = setTimeout(() => setAnalysisStep(1), 1000);
      const timer2 = setTimeout(() => setAnalysisStep(2), 2500);
      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
      };
    }
  }, [isOpen]);

  const getModalContent = () => {
    switch (type) {
      case "behavioral":
        return {
          icon: <Brain className="w-8 h-8 text-purple-600" />,
          title: "Behavioral Pattern Detected",
          bgColor: "bg-purple-100",
          borderColor: "border-purple-200",
          buttonColor: "bg-purple-600 hover:bg-purple-700",
          dotColor: "bg-purple-500",
          analysis: [
            "Analyzing your drinking patterns...",
            "Cross-referencing with 50,000+ similar cases...",
            "Your response indicates a common trigger pattern. We're adjusting your personalized plan to address this specific behavior.",
          ],
          suggestion:
            "💡 Tip: People with similar patterns find success with our 'Trigger Replacement' technique.",
        };
      case "progress":
        return {
          icon: <TrendingUp className="w-8 h-8 text-green-600" />,
          title: "Progress Indicator",
          bgColor: "bg-green-100",
          borderColor: "border-green-200",
          buttonColor: "bg-green-600 hover:bg-green-700",
          dotColor: "bg-green-500",
          analysis: [
            "Calculating your readiness score...",
            "Comparing with successful recovery journeys...",
            "Great news! Your responses show high motivation levels. This significantly increases your success probability.",
          ],
          suggestion:
            "🎯 Your commitment level: 87% - This puts you in the top tier for successful outcomes!",
        };
      case "insight":
        return {
          icon: <AlertCircle className="w-8 h-8 text-orange-600" />,
          title: "AI Insight Generated",
          bgColor: "bg-orange-100",
          borderColor: "border-orange-200",
          buttonColor: "bg-orange-600 hover:bg-orange-700",
          dotColor: "bg-orange-500",
          analysis: [
            "Processing psychological markers...",
            "Identifying key intervention points...",
            "Your answer reveals important emotional connections. We're incorporating specialized support for this area.",
          ],
          suggestion:
            "🧠 Insight: Emotional drinking patterns require specific coping strategies. We've got you covered.",
        };
    }
  };

  const content = getModalContent();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className={`p-3 rounded-full ${content.bgColor}`}>
                {content.icon}
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {content.title}
            </h3>

            <div className="space-y-4 mb-6">
              {content.analysis.map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: analysisStep >= index ? 1 : 0.3,
                    x: 0,
                  }}
                  transition={{ delay: index * 0.8 }}
                  className={`flex items-center gap-3 ${
                    analysisStep >= index ? "text-gray-900" : "text-gray-400"
                  }`}
                >
                  {analysisStep >= index ? (
                    <div
                      className={`w-2 h-2 rounded-full ${content.dotColor}`}
                    />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" />
                  )}
                  <span className="text-sm">{text}</span>
                </motion.div>
              ))}
            </div>

            {analysisStep >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`${content.bgColor} ${content.borderColor} border rounded-lg p-4`}
              >
                <p className="text-sm text-gray-700">{content.suggestion}</p>
              </motion.div>
            )}

            {analysisStep >= 2 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={onClose}
                className={`w-full mt-6 ${content.buttonColor} text-white py-3 rounded-lg font-medium transition-colors`}
              >
                Continue Assessment
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
