import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiMenu, FiX, FiHeart, FiUser, FiMessageSquare, FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <FiHeart className="text-rose-500 text-2xl" />
              <span className="text-xl font-bold text-gray-800">
                Nikah<span className="text-rose-500">Match</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-rose-500 transition"
            >
              Home
            </Link>
            {user ? (
              <>
                <Link
                  to="/browse"
                  className="text-gray-600 hover:text-rose-500 transition"
                >
                  Browse
                </Link>
                <Link
                  to="/interests"
                  className="text-gray-600 hover:text-rose-500 transition"
                >
                  Interests
                </Link>
                <Link
                  to="/messages"
                  className="text-gray-600 hover:text-rose-500 transition"
                >
                  <FiMessageSquare className="inline mr-1" />
                  Messages
                </Link>
                <Link
                  to="/profile"
                  className="text-gray-600 hover:text-rose-500 transition"
                >
                  <FiUser className="inline mr-1" />
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-600 hover:text-rose-500 transition"
                >
                  <FiLogOut className="mr-1" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-rose-500 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-rose-500"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <Link
              to="/"
              className="block text-gray-600 hover:text-rose-500"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            {user ? (
              <>
                <Link
                  to="/browse"
                  className="block text-gray-600 hover:text-rose-500"
                  onClick={() => setIsOpen(false)}
                >
                  Browse Profiles
                </Link>
                <Link
                  to="/interests"
                  className="block text-gray-600 hover:text-rose-500"
                  onClick={() => setIsOpen(false)}
                >
                  My Interests
                </Link>
                <Link
                  to="/messages"
                  className="block text-gray-600 hover:text-rose-500"
                  onClick={() => setIsOpen(false)}
                >
                  Messages
                </Link>
                <Link
                  to="/profile"
                  className="block text-gray-600 hover:text-rose-500"
                  onClick={() => setIsOpen(false)}
                >
                  My Profile
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="block text-gray-600 hover:text-rose-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block text-gray-600 hover:text-rose-500"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block bg-rose-500 text-white text-center px-4 py-2 rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
