"use client";

import { useState } from "react";
import { QuizStep1 } from "@/components/quiz/QuizStep1";
import { QuizStep2 } from "@/components/quiz/QuizStep2";
import { QuizStep3 } from "@/components/quiz/QuizStep3";
import { QuizStep4 } from "@/components/quiz/QuizStep4";
import { QuizStep5 } from "@/components/quiz/QuizStep5";
import { QuizStep6 } from "@/components/quiz/QuizStep6";
import { QuizStep7 } from "@/components/quiz/QuizStep7";
import { QuizStep8 } from "@/components/quiz/QuizStep8";
import { QuizStep9 } from "@/components/quiz/QuizStep9";
import { QuizStep10 } from "@/components/quiz/QuizStep10";
import { QuizStep11 } from "@/components/quiz/QuizStep11";
import { QuizStep12 } from "@/components/quiz/QuizStep12";
import { QuizStep13 } from "@/components/quiz/QuizStep13";
import { QuizStep14 } from "@/components/quiz/QuizStep14";
import { QuizStep15 } from "@/components/quiz/QuizStep15";
import { QuizStep16 } from "@/components/quiz/QuizStep16";
import { QuizStep17 } from "@/components/quiz/QuizStep17";
import { QuizStep18 } from "@/components/quiz/QuizStep18";
import { QuizStep19 } from "@/components/quiz/QuizStep19";
import QuizStep20 from "@/components/quiz/QuizStep20";
import QuizStep21 from "@/components/quiz/QuizStep21";
import QuizStep22 from "@/components/quiz/QuizStep22";
import QuizStep23 from "@/components/quiz/QuizStep23";
import QuizStep24 from "@/components/quiz/QuizStep24";
import QuizStep25 from "@/components/quiz/QuizStep25";
import QuizStep26 from "@/components/quiz/QuizStep26";
import QuizStep27 from "@/components/quiz/QuizStep27";
import QuizStep28 from "@/components/quiz/QuizStep28";
import QuizStep29 from "@/components/quiz/QuizStep29";
import QuizStep30 from "@/components/quiz/QuizStep30";
import QuizStep31 from "@/components/quiz/QuizStep31";
import QuizStep32 from "@/components/quiz/QuizStep32";
import QuizStep33 from "@/components/quiz/QuizStep33";
import QuizStep34 from "@/components/quiz/QuizStep34";
import QuizStep35 from "@/components/quiz/QuizStep35";
import QuizStep37 from "@/components/quiz/QuizStep37";
import PricingStep from "@/components/quiz/PricingStep";

export interface QuizData {
  mainReason?: string;
  otherProblems?: string[];
  affectedAreas?: string[];
  drinksPerWeek?: string;
  howFoundUs?: string;
  whyCurbDrinking?: string[];
  ageGroup?: string;
  gender?: string;
  goal?: string;
  alcoholRuined?: string[];
  moneySpent?: string;
  drinkingFrequency?: string;
  socialDrinking?: string;
  alcoholConfidence?: string;
  pastTrauma?: string;
  stressLevel?: string;
  userName?: string;
  userEmail?: string;
}

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [quizData, setQuizData] = useState<QuizData>({});

  const updateQuizData = (data: Partial<QuizData>) => {
    setQuizData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const nextStep4 = () => {
    setCurrentStep((prev) => prev + 2);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <QuizStep1 onNext={nextStep} updateData={updateQuizData} />;
      case 2:
        return <QuizStep2 onNext={nextStep} updateData={updateQuizData} />;
      case 3:
        return (
          <QuizStep3
            onNext={nextStep}
            updateData={updateQuizData}
            quizData={quizData}
          />
        );
      case 4:
        return <QuizStep4 onNext={nextStep4} updateData={updateQuizData} />;
      case 6:
        return <QuizStep6 onNext={nextStep} updateData={updateQuizData} />;
      case 7:
        return <QuizStep7 onNext={nextStep} updateData={updateQuizData} />;
      case 8:
        return <QuizStep9 onNext={nextStep} updateData={updateQuizData} />;
      case 9:
        return <QuizStep8 onNext={nextStep} updateData={updateQuizData} />;
      case 10:
        return <QuizStep10 onNext={nextStep} updateData={updateQuizData} />;
      case 11:
        return <QuizStep11 onNext={nextStep} updateData={updateQuizData} />;
      case 12:
        return <QuizStep12 onNext={nextStep} updateData={updateQuizData} />;
      case 13:
        return <QuizStep13 onNext={nextStep} updateData={updateQuizData} />;
      case 14:
        return <QuizStep14 onNext={nextStep} updateData={updateQuizData} />;
      case 15:
        return <QuizStep15 onNext={nextStep} updateData={updateQuizData} />;
      case 16:
        return <QuizStep16 onNext={nextStep} updateData={updateQuizData} />;
      case 17:
        return <QuizStep17 onNext={nextStep} updateData={updateQuizData} />;
      case 18:
        return <QuizStep18 onNext={nextStep} updateData={updateQuizData} />;
      case 19:
        return <QuizStep19 onNext={nextStep} updateData={updateQuizData} />;
      case 20:
        return (
          <QuizStep20 onNext={nextStep} onBack={() => setCurrentStep(19)} />
        );
      case 21:
        return (
          <QuizStep21 onNext={nextStep} onBack={() => setCurrentStep(20)} />
        );
      case 22:
        return (
          <QuizStep22 onNext={nextStep} onBack={() => setCurrentStep(21)} />
        );
      case 23:
        return (
          <QuizStep23 onNext={nextStep} onBack={() => setCurrentStep(22)} />
        );
      case 24:
        return (
          <QuizStep24 onNext={nextStep} onBack={() => setCurrentStep(23)} />
        );
      case 25:
        return (
          <QuizStep25 onNext={nextStep} onBack={() => setCurrentStep(24)} />
        );
      case 26:
        return (
          <QuizStep26 onNext={nextStep} onBack={() => setCurrentStep(25)} />
        );
      case 27:
        return (
          <QuizStep27 onNext={nextStep} onBack={() => setCurrentStep(26)} />
        );
      case 28:
        return (
          <QuizStep28 onNext={nextStep} onBack={() => setCurrentStep(27)} />
        );
      case 29:
        return (
          <QuizStep29 onNext={nextStep} onBack={() => setCurrentStep(28)} />
        );
      case 30:
        return (
          <QuizStep30 onNext={nextStep} onBack={() => setCurrentStep(29)} />
        );
      case 31:
        return (
          <QuizStep31 onNext={nextStep} onBack={() => setCurrentStep(30)} />
        );
      case 32:
        return (
          <QuizStep32 onNext={nextStep} onBack={() => setCurrentStep(31)} />
        );
      case 33:
        return (
          <QuizStep33 onNext={nextStep} onBack={() => setCurrentStep(32)} />
        );
      case 34:
        return (
          <QuizStep34
            onNext={nextStep}
            onBack={() => setCurrentStep(33)}
            updateData={updateQuizData}
          />
        );
      case 35:
        return (
          <QuizStep35
            onNext={() => setCurrentStep(37)}
            onBack={() => setCurrentStep(34)}
            updateData={updateQuizData}
          />
        );

      case 37:
        return (
          <QuizStep37 onNext={nextStep} onBack={() => setCurrentStep(35)} />
        );
      case 38:
        return (
          <PricingStep
            quizData={quizData}
            onBack={() => setCurrentStep(37)}
          />
        );
      default:
        return <QuizStep1 onNext={nextStep} updateData={updateQuizData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Progress bar */}
      <div className="w-full bg-white">
        <div
          className="h-2 bg-green-500 transition-all duration-300"
          style={{ width: `${(currentStep / 37) * 100}%` }}
        />
      </div>

      {renderStep()}
    </div>
  );
}
