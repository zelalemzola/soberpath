"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getReportDraft, saveReportDraft } from "@/lib/report-utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Shield, Sparkles, ArrowRight } from "lucide-react";

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

export default function PricingPage() {
  const [draft, setDraft] = useState<ReturnType<typeof getReportDraft>>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const d = getReportDraft();
    setDraft(d);
    if (d?.userName) setName(d.userName);
    if (d?.email) setEmail(d.email);
  }, []);

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
      answers: draft?.answers ?? {},
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

  if (draft === null) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="animate-pulse text-gray-500">Loading…</div>
      </div>
    );
  }

  if (!draft?.answers || Object.keys(draft.answers).length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <h1 className="text-xl font-bold text-gray-900 mb-2">
            Complete your assessment first
          </h1>
          <p className="text-gray-600 mb-6">
            Your personalized plan is generated from your quiz answers. Take the short assessment to see pricing.
          </p>
          <Link href="/quiz">
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 py-3">
              <ArrowRight className="h-4 w-4 mr-2" />
              Start assessment
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
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
            Based on your answers, we’ve prepared a personalized 40-day plan.
          </p>
        </motion.div>

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
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </motion.div>

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
                "popular" in plan && plan.popular
                  ? "border-green-500 ring-2 ring-green-500/20"
                  : "border-gray-200"
              }`}
            >
              {"popular" in plan && plan.popular && (
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
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => handleSelectPlan(plan.id, plan.name, plan.price)}
                className={`w-full rounded-xl py-3 font-semibold ${
                  "popular" in plan && plan.popular
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
          <Link
            href="/quiz"
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            ← Back to assessment
          </Link>
        </div>
      </div>
    </div>
  );
}
