"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/navigation";

export default function QuizPage() {

  const router = useRouter();

  const questions = [
    {
      question: "Do you enjoy solving logical problems?",
      options: ["Yes", "Sometimes", "No"]
    },
    {
      question: "Do you enjoy working with computers?",
      options: ["Yes", "Sometimes", "No"]
    },
    {
      question: "Do you like analyzing data and patterns?",
      options: ["Yes", "Sometimes", "No"]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer: string) => {

    if (answer === "Yes") {
      setScore(score + 2);
    } else if (answer === "Sometimes") {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      localStorage.setItem("careerScore", String(score));
      router.push("/result");
    }

  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

        <h1 className="text-4xl font-bold mb-10">
          Career Discovery Quiz
        </h1>

        <div className="bg-gray-900 p-8 rounded-xl w-full max-w-xl">

          <h2 className="text-xl mb-6">
            {questions[currentQuestion].question}
          </h2>

          <div className="flex flex-col gap-4">

            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="bg-gray-800 hover:bg-blue-600 p-4 rounded-lg transition"
              >
                {option}
              </button>
            ))}

          </div>

        </div>

      </main>
    </>
  );
}