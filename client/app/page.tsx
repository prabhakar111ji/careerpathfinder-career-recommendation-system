import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <h1 className="text-5xl font-bold mb-6">
          CareerPathfinder
        </h1>

        <p className="text-lg text-gray-300 mb-8 text-center max-w-xl">
          Discover the best career path based on your skills, interests, and goals.
          Get personalized career recommendations, skill roadmaps, and job insights.
        </p>

        <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Start Career Quiz
        </button>
      </main>
    </>
  );
}