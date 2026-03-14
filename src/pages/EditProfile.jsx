import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { userAPI } from "../services/api";
import { toast } from "react-toastify";

const EditProfile = () => {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [photoLoading, setPhotoLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    religion: user?.religion || "",
    education: user?.education || "",
    profession: user?.profession || "",
    location: user?.location || "",
    bio: user?.bio || "",
    height: user?.height || "",
    income: user?.income || "",
    maritalStatus: user?.maritalStatus || "never_married",
    preferredAgeMin: user?.preferences?.preferredAgeRange?.min || 18,
    preferredAgeMax: user?.preferences?.preferredAgeRange?.max || 60,
    preferredLocation: user?.preferences?.preferredLocation || "",
    preferredReligion: user?.preferences?.preferredReligion || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        fullName: formData.fullName,
        religion: formData.religion,
        education: formData.education,
        profession: formData.profession,
        location: formData.location,
        bio: formData.bio,
        height: formData.height,
        income: formData.income,
        maritalStatus: formData.maritalStatus,
        preferences: {
          preferredAgeRange: {
            min: parseInt(formData.preferredAgeMin),
            max: parseInt(formData.preferredAgeMax),
          },
          preferredLocation: formData.preferredLocation,
          preferredReligion: formData.preferredReligion,
        },
      };

      const res = await userAPI.update(user._id, payload);
      updateUser(res.data.user);
      toast.success("Profile updated!");
      navigate("/profile");
    } catch (error) {
      toast.error(error.response?.data?.error || "Update failed.");
    } finally {
      setLoading(false);
    }
  };

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("photo", file);

    setPhotoLoading(true);
    try {
      const res = await userAPI.uploadProfilePhoto(formData);
      updateUser({ ...user, profilePhoto: res.data.profilePhoto });
      toast.success("Profile photo updated!");
    } catch (error) {
      toast.error("Failed to upload photo.");
    } finally {
      setPhotoLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Edit <span className="text-rose-500">Profile</span>
        </h1>

        {/* Photo Upload */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h3 className="font-semibold text-gray-800 mb-4">Profile Photo</h3>
          <div className="flex items-center gap-4">
            <img
              src={
                user?.profilePhoto
                  ? `${import.meta.env.VITE_SERVER_URL || "http://localhost:5000"}${user.profilePhoto}`
                  : `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.fullName || "")}&background=f43f5e&color=fff&size=100`
              }
              alt="Profile"
              className="w-20 h-20 rounded-xl object-cover"
            />
            <label className="cursor-pointer bg-rose-50 text-rose-500 px-4 py-2 rounded-xl hover:bg-rose-100 transition">
              {photoLoading ? "Uploading..." : "Change Photo"}
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Edit Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
          <h3 className="font-semibold text-gray-800">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:border-rose-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Religion</label>
              <select name="religion" value={formData.religion} onChange={handleChange}
                className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:border-rose-400">
                <option value="">Select</option>
                <option value="Islam">Islam</option>
                <option value="Hindu">Hindu</option>
                <option value="Christian">Christian</option>
                <option value="Buddhist">Buddhist</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
              <input type="text" name="education" value={formData.education} onChange={handleChange}
                className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:border-rose-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Profession</label>
              <input type="text" name="profession" value={formData.profession} onChange={handleChange}
                className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:border-rose-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange}
                className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:border-rose-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
              <input type="text" name="height" value={formData.height} onChange={handleChange}
                placeholder="e.g. 5'8&quot;"
                className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:border-rose-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Income</label>
              <input type="text" name="income" value={formData.income} onChange={handleChange}
                className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:border-rose-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Marital Status</label>
              <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}
                className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:border-rose-400">
                <option value="never_married">Never Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <textarea name="bio" value={formData.bio} onChange={handleChange} rows={3}
              className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:border-rose-400" />
          </div>

          <h3 className="font-semibold text-gray-800 pt-4">Partner Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Min Age</label>
              <input type="number" name="preferredAgeMin" value={formData.preferredAgeMin} onChange={handleChange}
                min="18" className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:border-rose-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Max Age</label>
              <input type="number" name="preferredAgeMax" value={formData.preferredAgeMax} onChange={handleChange}
                max="100" className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:border-rose-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Location</label>
              <input type="text" name="preferredLocation" value={formData.preferredLocation} onChange={handleChange}
                className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:border-rose-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Religion</label>
              <select name="preferredReligion" value={formData.preferredReligion} onChange={handleChange}
                className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:border-rose-400">
                <option value="">Any</option>
                <option value="Islam">Islam</option>
                <option value="Hindu">Hindu</option>
                <option value="Christian">Christian</option>
                <option value="Buddhist">Buddhist</option>
              </select>
            </div>
          </div>

          <button type="submit" disabled={loading}
            className="w-full bg-rose-500 text-white py-3 rounded-xl hover:bg-rose-600 transition font-medium disabled:opacity-50">
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
