"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuizData } from "@/app/quiz/page";
import Image from "next/image";
import { motion } from "framer-motion";

interface QuizStep5Props {
  onNext: () => void;
  updateData: (data: Partial<QuizData>) => void;
}

const testimonials = [
  {
    name: "Sarah M.",
    age: "34",
    text: "I've been sober for 8 months now thanks to SoberPath. The personalized approach really worked for me where other programs failed.",
    rating: 5,
    location: "California",
  },
  {
    name: "Michael R.",
    age: "42",
    text: "The AI-driven insights helped me understand my triggers. I'm now 6 months alcohol-free and feeling the best I've felt in years.",
    rating: 5,
    location: "New York",
  },
  {
    name: "Jennifer L.",
    age: "29",
    text: "What I love about SoberPath is that it doesn't feel like a typical program. It's personalized and actually understands my lifestyle.",
    rating: 5,
    location: "Texas",
  },
  {
    name: "David K.",
    age: "38",
    text: "I tried AA and other programs but nothing stuck. SoberPath's behavioral science approach finally helped me break the cycle.",
    rating: 5,
    location: "Florida",
  },
  {
    name: "Lisa W.",
    age: "45",
    text: "The support system and daily check-ins kept me accountable. I'm now 1 year sober and my relationships have never been better.",
    rating: 5,
    location: "Oregon",
  },
];

export function QuizStep6({ onNext, updateData }: QuizStep5Props) {
  const handleContinue = () => {
    onNext();
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <div className="flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-lg space-y-8 text-center">
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold text-gray-900"
            >
              You are in the <span className="italic">right place</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-700 max-w-md mx-auto leading-relaxed"
            >
              SoberPath will use the latest in behavioral science & AI to
              eliminate alcohol dependency at its core and finally put you in
              charge of your life
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            {/* Success message box */}
            <div className="bg-green-100 border-2 border-dashed border-green-400 rounded-lg p-4 mb-6">
              <p className="text-green-800 font-medium">We have helped over</p>
              <p className="text-2xl font-bold text-green-800">
                256,712 People
              </p>
            </div>

            {/* People illustration */}
            <div className="relative w-full h-64 mb-8">
              <Image
                src="/over256712people.png"
                alt="Community of people we've helped"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Real Stories from Real People
            </h2>

            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-sm p-4 rounded-2xl shadow-lg ${
                      index % 2 === 0
                        ? "bg-blue-50 border-l-4 border-blue-500"
                        : "bg-green-50 border-r-4 border-green-500"
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">
                          ⭐
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm mb-3 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="text-xs text-gray-600">
                      <span className="font-semibold">{testimonial.name}</span>
                      <span className="mx-1">•</span>
                      <span>Age {testimonial.age}</span>
                      <span className="mx-1">•</span>
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional success metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">87%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">4.9/5</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Fixed Continue Button */}
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
  );
}
