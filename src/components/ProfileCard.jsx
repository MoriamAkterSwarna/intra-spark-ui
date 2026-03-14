import { Link } from "react-router-dom";
import { FiMapPin, FiBook, FiBriefcase, FiHeart } from "react-icons/fi";
import InterestButton from "./InterestButton";

const ProfileCard = ({ profile, showInterestButton = true }) => {
  const defaultAvatar =
    profile.gender === "male"
      ? "https://ui-avatars.com/api/?name=" +
        encodeURIComponent(profile.fullName) +
        "&background=3b82f6&color=fff&size=200"
      : "https://ui-avatars.com/api/?name=" +
        encodeURIComponent(profile.fullName) +
        "&background=f43f5e&color=fff&size=200";

  const photoUrl = profile.profilePhoto
    ? `${import.meta.env.VITE_SERVER_URL || "http://localhost:5000"}${profile.profilePhoto}`
    : defaultAvatar;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
      <div className="relative">
        <img
          src={photoUrl}
          alt={profile.fullName}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {profile.isOnline && (
          <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            Online
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-white font-semibold text-lg">
            {profile.fullName}, {profile.age}
          </h3>
        </div>
      </div>

      <div className="p-4 space-y-2">
        <div className="flex items-center text-gray-500 text-sm">
          <FiMapPin className="mr-1.5 text-rose-400" />
          {profile.location || "Not specified"}
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <FiBook className="mr-1.5 text-rose-400" />
          {profile.education || "Not specified"}
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <FiBriefcase className="mr-1.5 text-rose-400" />
          {profile.profession || "Not specified"}
        </div>
        {profile.religion && (
          <div className="flex items-center text-gray-500 text-sm">
            <FiHeart className="mr-1.5 text-rose-400" />
            {profile.religion}
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t mt-3">
          <Link
            to={`/profile/${profile._id}`}
            className="text-rose-500 hover:text-rose-600 text-sm font-medium"
          >
            View Profile
          </Link>
          {showInterestButton && <InterestButton receiverId={profile._id} />}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
