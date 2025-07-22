import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Brand Name */}
          <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800">
            Phillip Rogers
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8 text-gray-700 font-medium">
            <Link
              to="/"
              className="hover:text-indigo-600 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="hover:text-indigo-600 transition-colors duration-200"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="hover:text-indigo-600 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

