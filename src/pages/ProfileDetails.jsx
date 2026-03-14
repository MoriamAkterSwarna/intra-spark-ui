import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { userAPI } from "../services/api";
import { useAuth } from "../context/AuthContext";
import InterestButton from "../components/InterestButton";
import {
  FiMapPin, FiBook, FiBriefcase, FiHeart, FiCalendar,
  FiUser, FiDollarSign, FiArrowLeft,
} from "react-icons/fi";

const ProfileDetails = () => {
  const { id } = useParams();
  const { user: currentUser } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await userAPI.getById(id);
        setProfile(res.data.user);
      } catch (error) {
        console.error("Failed to fetch profile");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">Profile not found.</p>
        <Link to="/browse" className="text-rose-500 hover:underline mt-4 inline-block">
          Back to Browse
        </Link>
      </div>
    );
  }

  const defaultAvatar =
    profile.gender === "male"
      ? `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.fullName)}&background=3b82f6&color=fff&size=300`
      : `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.fullName)}&background=f43f5e&color=fff&size=300`;

  const photoUrl = profile.profilePhoto
    ? `${import.meta.env.VITE_SERVER_URL || "http://localhost:5000"}${profile.profilePhoto}`
    : defaultAvatar;

  const isOwnProfile = currentUser?._id === profile._id;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          to="/browse"
          className="inline-flex items-center text-gray-600 hover:text-rose-500 mb-6 transition"
        >
          <FiArrowLeft className="mr-2" />
          Back to Browse
        </Link>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Profile Header */}
          <div className="relative">
            <div className="h-48 bg-gradient-to-r from-rose-400 to-pink-400"></div>
            <div className="absolute -bottom-16 left-8">
              <img
                src={photoUrl}
                alt={profile.fullName}
                className="w-32 h-32 rounded-2xl border-4 border-white shadow-lg object-cover"
              />
            </div>
            {profile.isOnline && (
              <span className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                Online
              </span>
            )}
          </div>

          <div className="pt-20 px-8 pb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {profile.fullName}, {profile.age}
                </h1>
                <p className="text-gray-500 flex items-center mt-1">
                  <FiMapPin className="mr-1" />
                  {profile.location || "Location not specified"}
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                {isOwnProfile ? (
                  <Link
                    to="/edit-profile"
                    className="bg-rose-500 text-white px-6 py-2 rounded-xl hover:bg-rose-600 transition"
                  >
                    Edit Profile
                  </Link>
                ) : (
                  <InterestButton receiverId={profile._id} />
                )}
              </div>
            </div>

            {profile.bio && (
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                {profile.bio}
              </p>
            )}

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800 text-lg">Basic Info</h3>
                <InfoRow icon={<FiUser />} label="Gender" value={profile.gender} />
                <InfoRow icon={<FiCalendar />} label="Age" value={`${profile.age} years`} />
                <InfoRow icon={<FiHeart />} label="Religion" value={profile.religion} />
                <InfoRow icon={<FiMapPin />} label="Location" value={profile.location} />
                {profile.height && (
                  <InfoRow icon={<FiUser />} label="Height" value={profile.height} />
                )}
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800 text-lg">
                  Personal Info
                </h3>
                <InfoRow icon={<FiBook />} label="Education" value={profile.education} />
                <InfoRow icon={<FiBriefcase />} label="Profession" value={profile.profession} />
                {profile.income && (
                  <InfoRow icon={<FiDollarSign />} label="Income" value={profile.income} />
                )}
                <InfoRow
                  icon={<FiHeart />}
                  label="Marital Status"
                  value={profile.maritalStatus?.replace("_", " ")}
                />
              </div>
            </div>

            {/* Preferences */}
            {profile.preferences && (
              <div className="mt-8">
                <h3 className="font-semibold text-gray-800 text-lg mb-4">
                  Partner Preferences
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-rose-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">Preferred Age</p>
                    <p className="font-medium text-gray-800">
                      {profile.preferences.preferredAgeRange?.min || 18} -{" "}
                      {profile.preferences.preferredAgeRange?.max || 60} years
                    </p>
                  </div>
                  {profile.preferences.preferredLocation && (
                    <div className="bg-rose-50 rounded-xl p-4">
                      <p className="text-sm text-gray-500">Preferred Location</p>
                      <p className="font-medium text-gray-800">
                        {profile.preferences.preferredLocation}
                      </p>
                    </div>
                  )}
                  {profile.preferences.preferredReligion && (
                    <div className="bg-rose-50 rounded-xl p-4">
                      <p className="text-sm text-gray-500">Preferred Religion</p>
                      <p className="font-medium text-gray-800">
                        {profile.preferences.preferredReligion}
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

export default ProfileDetails;
