"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface QuizStep37Props {
  onNext: () => void;
  onBack: () => void;
}

export default function QuizStep37({ onNext, onBack }: QuizStep37Props) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-12">
        {/* Congratulations Section */}
        <div className="text-center space-y-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Congratulations{" "}
            <em>
              Your custom
              <br />
              PLAN
            </em>{" "}
            to control your drinking
            <br />
            is ready
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <Image
              src="/good-news-graph.png"
              alt="Progress chart showing improvement over 4 weeks from Today to After using Ultiself"
              width={400}
              height={250}
              className="w-full h-auto"
            />
          </div>

          <Button
            onClick={onNext}
            className="w-full max-w-md bg-green-600 hover:bg-green-700 text-white py-3 text-lg rounded-lg"
          >
            Continue
          </Button>
        </div>

        {/* Our AI Has Section */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Our AI has:</h2>

          <div className="space-y-4 max-w-2xl mx-auto text-left">
            <div className="flex items-center space-x-3">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-lg">
                <strong>Analyzed</strong> the answers to your quiz...
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-lg">
                <strong>Discovered</strong> the key psychological triggers
                making you drink
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-lg">
                <strong>Created</strong> the perfect plan to control your
                drinking in the next 40 days
              </span>
            </div>
          </div>

          <div className="my-8">
            <Image
              src="/mind.png"
              alt="Fiery brain representing neural transformation and change"
              width={400}
              height={250}
              className="w-full max-w-md h-auto mx-auto rounded-lg"
            />
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Follow your plan for{" "}
              <em>
                just 5 -<br />
                15 minutes a day
              </em>{" "}
              & you will:
            </h3>
          </div>
        </div>

        {/* Benefits List */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="flex items-center space-x-3">
            <span className="text-green-500 text-2xl">🌟</span>
            <span className="text-lg">
              Increase your{" "}
              <strong className="text-green-600">social confidence</strong>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-500 text-2xl">💪</span>
            <span className="text-lg">
              Build your{" "}
              <strong className="text-green-600">feeling of self worth</strong>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-500 text-2xl">🧘</span>
            <span className="text-lg">
              Mitigate your{" "}
              <strong className="text-green-600">stress levels</strong>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-500 text-2xl">🚫</span>
            <span className="text-lg">
              Eradicate your desire to drink excessively for{" "}
              <strong className="text-green-600">GOOD</strong>
            </span>
          </div>
        </div>

        {/* Plan Features */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Plan Features</h2>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-lg">
                    <strong>Actionable steps</strong> to build deep rooted{" "}
                    <strong>discipline & self control</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-lg">
                    <strong>Cutting edge training</strong> from our PhD level
                    behavioral & addiction experts
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-lg">
                    <strong>AI based App & routine</strong> that adapts as you
                    progress on your journey
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-lg">
                    Community <strong>over 10k strong</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <Button
            onClick={onNext}
            className="w-full max-w-md bg-green-600 hover:bg-green-700 text-white py-3 text-lg rounded-lg"
          >
            Continue
          </Button>
        </div>

        {/* Your Mission Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Your Mission</h2>
          <p className="text-xl text-gray-700">
            Take control of your drinking problem in the next 40 days
          </p>

          <div className="space-y-4">
            <div className="bg-green-100 border-2 border-green-300 border-dashed rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold mb-2">
                Properly integrate <em>5 core habits</em> into your life
              </h3>
              <p className="text-sm text-gray-700">
                These are your foundation for making any changes
              </p>
            </div>

            <div className="bg-green-100 border-2 border-green-300 border-dashed rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold mb-2">
                Face your internal <em>alcohol triggers</em>
              </h3>
              <p className="text-sm text-gray-700">
                Rewire your brain to take charge of your relationship with
                alcohol
              </p>
            </div>
          </div>
        </div>

        {/* Four Key Optimization Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-100 border-2 border-green-300 border-dashed rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-lg font-semibold mb-2">
              Cultivate a <em>disciplined mindset</em>
            </h3>
            <p className="text-sm text-gray-700">
              Practice key habits to build true self control
            </p>
          </div>

          <div className="bg-green-100 border-2 border-green-300 border-dashed rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🏠</div>
            <h3 className="text-lg font-semibold mb-2">
              Optimize your <em>environment</em>
            </h3>
            <p className="text-sm text-gray-700">
              Surround yourself with the right people and things to ensure
              success
            </p>
          </div>

          <div className="bg-green-100 border-2 border-green-300 border-dashed rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🥗</div>
            <h3 className="text-lg font-semibold mb-2">
              Optimize your <em>nutrition</em>
            </h3>
            <p className="text-sm text-gray-700">
              Give your brain the fuel it needs to make real change in your life
            </p>
          </div>

          <div className="bg-green-100 border-2 border-green-300 border-dashed rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="text-lg font-semibold mb-2">
              Lock in <em>success</em>
            </h3>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">U</span>
          </div>
          <span className="font-bold">Ultiself</span>
        </div>
        <div className="flex justify-center space-x-8 text-sm text-gray-600">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          © 2026, Ultiself. All rights reserved.
        </p>
      </div>
    </div>
  );
}
