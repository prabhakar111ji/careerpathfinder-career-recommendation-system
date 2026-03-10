import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-6xl font-bold mb-6">
            Find Your Perfect Career Path
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mb-10">
            CareerPathfinder helps you discover the best career based on your
            skills, interests and goals. Get personalized career suggestions,
            skill roadmaps and job recommendations.
          </p>

          <Link
            href="/quiz"
            className="bg-blue-600 px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Start Career Quiz
          </Link>

        </section>

        {/* Features Section */}
        <section className="py-20 px-10">
          <h2 className="text-4xl font-bold text-center mb-16">
            Platform Features
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">
                AI Career Recommendation
              </h3>
              <p className="text-gray-400">
                Get personalized career suggestions based on your interests,
                skills and personality.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">
                Skill Roadmap Generator
              </h3>
              <p className="text-gray-400">
                Discover the exact skills you need to learn to succeed in your
                chosen career.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">
                Job Recommendations
              </h3>
              <p className="text-gray-400">
                Explore real job opportunities based on your skills and career
                path.
              </p>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}