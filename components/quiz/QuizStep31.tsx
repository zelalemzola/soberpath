
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {motion} from 'framer-motion'
interface QuizStep34Props {
  onNext: () => void;
  onBack: () => void;
}

export default function QuizStep31({ onNext, onBack }: QuizStep34Props) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
\

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Important{" "}
            <em>
              Ultiself will save you time
            </em>{" "}
            by building self discipline!
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <Image
              src="/good-news-graph.png"
              alt="Person holding a clock representing time and discipline"
              width={400}
              height={250}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="bg-green-100 border-2 border-green-300 border-dashed rounded-lg p-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
            </div>
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Incremental changes will turn to{" "}
              <em>
                real
                <br />
                results
              </em>
            </p>
          </div>

          <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
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
