"use client";

import { Button } from "@/components/ui/button";
import {motion} from 'framer-motion'
interface QuizStep21Props {
  onNext: () => void;
  onBack: () => void;
}

export default function QuizStep28({ onNext, onBack }: QuizStep21Props) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">


      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center space-y-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Which of the following activities
            <br />
            could you replace drinking with?
          </h1>

          <div className="space-y-4">
            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">Exercise</span>
              </div>
              <div className="text-2xl">🏋️</div>
            </label>

            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">Playing sports</span>
              </div>
              <div className="text-2xl">🏃</div>
            </label>

            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">Learning a new language</span>
              </div>
              <div className="text-2xl">🗣️</div>
            </label>

            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">Work</span>
              </div>
              <div className="text-2xl">💼</div>
            </label>

            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">Being in nature</span>
              </div>
              <div className="text-2xl">🌲</div>
            </label>

            <label className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-lg">Walking/biking</span>
              </div>
              <div className="text-2xl">🚴</div>
            </label>
          </div>

          <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <Button
                    onClick={onNext}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Continue →
                  </Button>
                </motion.div>
        </div>
      </div>
    </div>
  );
}

