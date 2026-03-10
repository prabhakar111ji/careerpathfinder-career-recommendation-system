export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">CareerPathfinder</h1>

      <div className="flex gap-6">
        <a href="/" className="hover:text-blue-400">Home</a>
        <a href="#" className="hover:text-blue-400">Careers</a>
        <a href="#" className="hover:text-blue-400">Dashboard</a>
        <a href="#" className="hover:text-blue-400">Login</a>
      </div>
    </nav>
  );
}