"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Sparkles, Shield } from "lucide-react";
import type { QuizData } from "@/app/quiz/page";
import { saveReportDraft } from "@/lib/report-utils";

const PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: 27,
    description: "Your personalized 40-day plan",
    features: [
      "Personalized plan based on your answers",
      "Daily 5–15 min exercises",
      "Trigger & mindset training",
      "Email support",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: 47,
    description: "Most popular",
    popular: true,
    features: [
      "Everything in Basic",
      "Priority support",
      "Progress tracking",
      "Community access",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 67,
    description: "Full support",
    features: [
      "Everything in Standard",
      "1:1 check-in (optional)",
      "Lifetime plan access",
      "Bonus resources",
    ],
  },
] as const;

interface PricingStepProps {
  quizData: QuizData;
  onBack: () => void;
}

export default function PricingStep({ quizData, onBack }: PricingStepProps) {
  const [name, setName] = useState(quizData.userName ?? "");
  const [email, setEmail] = useState(quizData.userEmail ?? "");
  const [error, setError] = useState("");

  const handleSelectPlan = (planId: string, planName: string, amount: number) => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName) {
      setError("Please enter your name.");
      return;
    }
    if (!trimmedEmail) {
      setError("Please enter your email.");
      return;
    }
    setError("");

    saveReportDraft({
      answers: { ...quizData, userName: trimmedName, userEmail: trimmedEmail } as Record<string, unknown>,
      email: trimmedEmail,
      userName: trimmedName,
      plan: planName,
      amount: String(amount),
    });

    const params = new URLSearchParams({
      plan: planName,
      amount: String(amount),
    });
    window.location.href = `/payment?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full bg-white">
        <div className="h-2 bg-green-500" style={{ width: "100%" }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Your plan is ready
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Choose your plan
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Based on your answers, we’ve prepared a personalized 40-day plan. Select a plan below to get started.
          </p>
        </motion.div>

        {/* Name & Email */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8 max-w-xl mx-auto"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Your details
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              />
            </div>
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-600">{error}</p>
          )}
        </motion.div>

        {/* Plan cards */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl border-2 bg-white p-6 shadow-sm transition-all hover:shadow-md ${
                plan.popular
                  ? "border-green-500 ring-2 ring-green-500/20"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most popular
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  ${plan.price}
                </span>
                <span className="text-gray-500"> one-time</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => handleSelectPlan(plan.id, plan.name, plan.price)}
                className={`w-full rounded-xl py-3 font-semibold ${
                  plan.popular
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
              >
                Get this plan — ${plan.price}
              </Button>
            </div>
          ))}
        </motion.div>

        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
          <Shield className="h-4 w-4" />
          Secure payment via Stripe. No subscription.
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={onBack}
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}
