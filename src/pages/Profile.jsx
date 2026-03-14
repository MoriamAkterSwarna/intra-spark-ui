import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import {
  FiMapPin, FiBook, FiBriefcase, FiHeart, FiCalendar,
  FiUser, FiDollarSign, FiEdit,
} from "react-icons/fi";

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Please log in to view your profile.</p>
      </div>
    );
  }

  const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    user.fullName
  )}&background=${user.gender === "male" ? "3b82f6" : "f43f5e"}&color=fff&size=300`;

  const photoUrl = user.profilePhoto
    ? `${import.meta.env.VITE_SERVER_URL || "http://localhost:5000"}${user.profilePhoto}`
    : defaultAvatar;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="relative">
            <div className="h-48 bg-gradient-to-r from-rose-400 to-pink-400"></div>
            <div className="absolute -bottom-16 left-8">
              <img
                src={photoUrl}
                alt={user.fullName}
                className="w-32 h-32 rounded-2xl border-4 border-white shadow-lg object-cover"
              />
            </div>
          </div>

          <div className="pt-20 px-8 pb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {user.fullName}, {user.age}
                </h1>
                <p className="text-gray-500 flex items-center mt-1">
                  <FiMapPin className="mr-1" />
                  {user.location || "Location not specified"}
                </p>
              </div>
              <Link
                to="/edit-profile"
                className="mt-4 md:mt-0 inline-flex items-center bg-rose-500 text-white px-6 py-2 rounded-xl hover:bg-rose-600 transition"
              >
                <FiEdit className="mr-2" />
                Edit Profile
              </Link>
            </div>

            {user.bio && (
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                {user.bio}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800 text-lg">Basic Info</h3>
                <InfoRow icon={<FiUser />} label="Gender" value={user.gender} />
                <InfoRow icon={<FiCalendar />} label="Age" value={`${user.age} years`} />
                <InfoRow icon={<FiHeart />} label="Religion" value={user.religion} />
                <InfoRow icon={<FiMapPin />} label="Location" value={user.location} />
                {user.height && <InfoRow icon={<FiUser />} label="Height" value={user.height} />}
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800 text-lg">Personal Info</h3>
                <InfoRow icon={<FiBook />} label="Education" value={user.education} />
                <InfoRow icon={<FiBriefcase />} label="Profession" value={user.profession} />
                {user.income && <InfoRow icon={<FiDollarSign />} label="Income" value={user.income} />}
                <InfoRow
                  icon={<FiHeart />}
                  label="Marital Status"
                  value={user.maritalStatus?.replace("_", " ")}
                />
              </div>
            </div>

            {user.preferences && (
              <div className="mt-8">
                <h3 className="font-semibold text-gray-800 text-lg mb-4">
                  Partner Preferences
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-rose-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">Preferred Age</p>
                    <p className="font-medium text-gray-800">
                      {user.preferences.preferredAgeRange?.min || 18} -{" "}
                      {user.preferences.preferredAgeRange?.max || 60} years
                    </p>
                  </div>
                  {user.preferences.preferredLocation && (
                    <div className="bg-rose-50 rounded-xl p-4">
                      <p className="text-sm text-gray-500">Preferred Location</p>
                      <p className="font-medium text-gray-800">
                        {user.preferences.preferredLocation}
                      </p>
                    </div>
                  )}
                  {user.preferences.preferredReligion && (
                    <div className="bg-rose-50 rounded-xl p-4">
                      <p className="text-sm text-gray-500">Preferred Religion</p>
                      <p className="font-medium text-gray-800">
                        {user.preferences.preferredReligion}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-center text-sm">
    <span className="text-rose-400 mr-3">{icon}</span>
    <span className="text-gray-500 w-28">{label}:</span>
    <span className="text-gray-800 capitalize">{value || "Not specified"}</span>
  </div>
);

export default Profile;
