export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 text-center">
      <p className="text-lg">CareerPathfinder</p>

      <p className="mt-2">
        Helping students discover the right career path.
      </p>

      <p className="mt-4 text-sm">
        © {new Date().getFullYear()} CareerPathfinder. All rights reserved.
      </p>
    </footer>
  );
}