"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface QuizStep23Props {
  onNext: () => void;
  onBack: () => void;
}

export default function QuizStep26({ onNext, onBack }: QuizStep23Props) {
  const [selectedDate, setSelectedDate] = useState<number | null>(29);
  const [currentMonth, setCurrentMonth] = useState("January 2026");

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const startDay = 3; // January 1st, 2026 starts on Wednesday (0=Sunday, 3=Wednesday)

  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const renderCalendar = () => {
    const calendar = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startDay; i++) {
      calendar.push(
        <div key={`empty-${i}`} className="p-2 text-gray-400">
          {i === 0 ? 29 : i === 1 ? 30 : 31}
        </div>,
      );
    }

    // Add days of the month
    daysInMonth.forEach((day) => {
      calendar.push(
        <button
          key={day}
          onClick={() => setSelectedDate(day)}
          className={`p-2 rounded-full hover:bg-gray-200 ${
            selectedDate === day
              ? "bg-gray-600 text-white"
              : day <= 29
                ? "text-gray-800"
                : "text-gray-400"
          }`}
        >
          {day}
        </button>,
      );
    });

    return calendar;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">


      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center space-y-8">
          <h1 className="text-3xl font-bold text-gray-800">
            When is the event?
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            {/* Calendar header */}
            <div className="flex items-center justify-between mb-4">
              <button className="p-2 hover:bg-gray-100 rounded">
                <span className="text-xl">‹</span>
              </button>
              <h2 className="text-lg font-semibold">{currentMonth}</h2>
              <button className="p-2 hover:bg-gray-100 rounded">
                <span className="text-xl">›</span>
              </button>
            </div>

            {/* Week days header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="p-2 text-sm font-medium text-gray-600 text-center"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
          </div>

          <Button
            onClick={onNext}
            className="w-full max-w-md bg-green-600 hover:bg-green-700 text-white py-3 text-lg rounded-lg"
          >
            Continue
          </Button>
        </div>
      </div>

      {/* Footer */}
     
    </div>
  );
}

