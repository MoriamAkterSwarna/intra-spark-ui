import { FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FiHeart className="text-rose-400 text-xl" />
              <span className="text-white text-lg font-bold">
                Nikah<span className="text-rose-400">Match</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Find your perfect life partner with our trusted matrimony platform.
              Connecting hearts, building families.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-rose-400 transition">Home</a></li>
              <li><a href="/browse" className="hover:text-rose-400 transition">Browse Profiles</a></li>
              <li><a href="/register" className="hover:text-rose-400 transition">Register</a></li>
              <li><a href="/login" className="hover:text-rose-400 transition">Login</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-rose-400 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-rose-400 transition">Safety Tips</a></li>
              <li><a href="#" className="hover:text-rose-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-rose-400 transition">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>support@nikahmatch.com</li>
              <li>+880 1234-567890</li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} NikahMatch. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
