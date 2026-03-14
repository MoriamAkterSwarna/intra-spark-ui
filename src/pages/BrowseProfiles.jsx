import { useState, useEffect } from "react";
import { userAPI } from "../services/api";
import ProfileCard from "../components/ProfileCard";
import { FiSearch, FiFilter } from "react-icons/fi";

const BrowseProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    religion: "",
    location: "",
    education: "",
    minAge: "",
    maxAge: "",
    page: 1,
  });

  const fetchProfiles = async () => {
    setLoading(true);
    try {
      const params = {};
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params[key] = value;
      });
      const res = await userAPI.getAll(params);
      setProfiles(res.data.users);
      setPagination(res.data.pagination);
    } catch (error) {
      console.error("Failed to fetch profiles");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, [filters.page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setFilters({ ...filters, page: 1 });
    fetchProfiles();
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      religion: "",
      location: "",
      education: "",
      minAge: "",
      maxAge: "",
      page: 1,
    });
    setTimeout(fetchProfiles, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            Browse <span className="text-rose-500">Profiles</span>
          </h1>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative">
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="search"
                value={filters.search}
                onChange={handleFilterChange}
                placeholder="Search by name, profession..."
                className="pl-10 pr-4 py-2.5 border rounded-xl focus:outline-none focus:border-rose-400 w-64"
              />
            </div>
            <button
              type="submit"
              className="bg-rose-500 text-white px-4 py-2.5 rounded-xl hover:bg-rose-600 transition"
            >
              Search
            </button>
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-1 border border-gray-300 px-4 py-2.5 rounded-xl hover:bg-gray-100 transition"
            >
              <FiFilter />
              Filters
            </button>
          </form>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Religion
                </label>
                <select
                  name="religion"
                  value={filters.religion}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-rose-400"
                >
                  <option value="">All</option>
                  <option value="Islam">Islam</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Christian">Christian</option>
                  <option value="Buddhist">Buddhist</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={filters.location}
                  onChange={handleFilterChange}
                  placeholder="City"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-rose-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Education
                </label>
                <input
                  type="text"
                  name="education"
                  value={filters.education}
                  onChange={handleFilterChange}
                  placeholder="Degree"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-rose-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Min Age
                </label>
                <input
                  type="number"
                  name="minAge"
                  value={filters.minAge}
                  onChange={handleFilterChange}
                  placeholder="18"
                  min="18"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-rose-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Max Age
                </label>
                <input
                  type="number"
                  name="maxAge"
                  value={filters.maxAge}
                  onChange={handleFilterChange}
                  placeholder="60"
                  max="100"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-rose-400"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleSearch}
                className="bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition"
              >
                Apply Filters
              </button>
              <button
                onClick={clearFilters}
                className="text-gray-500 hover:text-gray-700 px-6 py-2 rounded-lg border hover:bg-gray-50 transition"
              >
                Clear All
              </button>
            </div>
          </div>
        )}

        {/* Profiles Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
          </div>
        ) : profiles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No profiles found.</p>
            <p className="text-gray-400 mt-2">Try adjusting your filters.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {profiles.map((profile) => (
                <ProfileCard key={profile._id} profile={profile} />
              ))}
            </div>

            {/* Pagination */}
            {pagination.pages > 1 && (
              <div className="flex justify-center mt-10 gap-2">
                {Array.from({ length: pagination.pages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setFilters({ ...filters, page: i + 1 })}
                    className={`px-4 py-2 rounded-lg transition ${
                      pagination.page === i + 1
                        ? "bg-rose-500 text-white"
                        : "bg-white text-gray-600 hover:bg-rose-50 border"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BrowseProfiles;
