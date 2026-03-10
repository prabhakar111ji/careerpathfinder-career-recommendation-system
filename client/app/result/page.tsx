"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function ResultPage() {

  const [career, setCareer] = useState("");

  useEffect(() => {

    const score = Number(localStorage.getItem("careerScore"));

    if (score >= 5) {
      setCareer("Software Engineer");
    } else if (score >= 3) {
      setCareer("Data Analyst");
    } else {
      setCareer("Creative Designer");
    }

  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

        <h1 className="text-4xl font-bold mb-8">
          Your Career Recommendation
        </h1>

        <div className="bg-gray-900 p-8 rounded-xl text-center max-w-xl">

          <h2 className="text-2xl font-semibold mb-4">
            {career}
          </h2>

          <p className="text-gray-400">
            Based on your answers, this career path may suit your interests and skills.
          </p>

        </div>

      </main>
    </>
  );
}