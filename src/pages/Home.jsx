import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiHeart, FiSearch, FiShield, FiUsers } from "react-icons/fi";

const Home = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: <FiSearch className="text-3xl text-rose-500" />,
      title: "Smart Matching",
      desc: "Our algorithm finds compatible profiles based on your preferences, religion, and location.",
    },
    {
      icon: <FiShield className="text-3xl text-rose-500" />,
      title: "Verified Profiles",
      desc: "We ensure authenticity with profile verification to keep our community trusted.",
    },
    {
      icon: <FiHeart className="text-3xl text-rose-500" />,
      title: "Express Interest",
      desc: "Send interests to profiles you like and start meaningful conversations.",
    },
    {
      icon: <FiUsers className="text-3xl text-rose-500" />,
      title: "Private Messaging",
      desc: "Chat securely with your matches once both parties show mutual interest.",
    },
  ];

  const successStories = [
    {
      names: "Hasan & Ayesha",
      story: "We found each other on NikahMatch and got married within 6 months. The platform made it so easy to connect with the right person!",
      location: "Dhaka",
    },
    {
      names: "Raj & Priya",
      story: "After searching for months, NikahMatch helped us find our perfect match. We are happily married now!",
      location: "Chittagong",
    },
    {
      names: "Arif & Fatima",
      story: "The matching system was accurate. We shared similar values and interests. Thank you NikahMatch!",
      location: "Sylhet",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Find Your <span className="text-rose-500">Perfect</span> Life
              Partner
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of families who found their soulmate on NikahMatch.
              Our trusted platform connects hearts with shared values, culture,
              and aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <Link
                  to="/browse"
                  className="bg-rose-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-rose-600 transition shadow-lg shadow-rose-200"
                >
                  Browse Profiles
                </Link>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="bg-rose-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-rose-600 transition shadow-lg shadow-rose-200"
                  >
                    Get Started Free
                  </Link>
                  <Link
                    to="/login"
                    className="bg-white text-rose-500 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-50 transition border border-rose-200"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-rose-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-rose-500">10K+</div>
              <div className="text-gray-500 mt-1">Active Profiles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-500">5K+</div>
              <div className="text-gray-500 mt-1">Successful Matches</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-500">2K+</div>
              <div className="text-gray-500 mt-1">Marriages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-500">50+</div>
              <div className="text-gray-500 mt-1">Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose <span className="text-rose-500">NikahMatch</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Success <span className="text-rose-500">Stories</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="bg-rose-50 p-6 rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center">
                    <FiHeart className="text-rose-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-800">
                      {story.names}
                    </h4>
                    <p className="text-xs text-gray-500">{story.location}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  &ldquo;{story.story}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {!user && (
        <section className="py-16 bg-gradient-to-r from-rose-500 to-pink-500">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Find Your Soulmate?
            </h2>
            <p className="text-rose-100 mb-8">
              Join NikahMatch today and begin your journey to finding the
              perfect life partner.
            </p>
            <Link
              to="/register"
              className="bg-white text-rose-500 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition"
            >
              Register Now
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
