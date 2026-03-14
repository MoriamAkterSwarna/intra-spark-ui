import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { interestAPI } from "../services/api";
import { toast } from "react-toastify";
import { FiCheck, FiX, FiClock } from "react-icons/fi";

const Interests = () => {
  const [sent, setSent] = useState([]);
  const [received, setReceived] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("received");

  const fetchInterests = async () => {
    try {
      const res = await interestAPI.getMy();
      setSent(res.data.sent);
      setReceived(res.data.received);
    } catch (error) {
      console.error("Failed to fetch interests");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInterests();
  }, []);

  const handleRespond = async (interestId, status) => {
    try {
      await interestAPI.respond(interestId, status);
      toast.success(`Interest ${status}!`);
      fetchInterests();
    } catch (error) {
      toast.error("Failed to respond.");
    }
  };

  const defaultAvatar = (name, gender) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${gender === "male" ? "3b82f6" : "f43f5e"}&color=fff&size=80`;

  const statusBadge = (status) => {
    const styles = {
      pending: "bg-yellow-100 text-yellow-700",
      accepted: "bg-green-100 text-green-700",
      rejected: "bg-red-100 text-red-700",
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${styles[status]}`}>
        {status}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          My <span className="text-rose-500">Interests</span>
        </h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("received")}
            className={`px-6 py-2 rounded-xl transition ${
              activeTab === "received"
                ? "bg-rose-500 text-white"
                : "bg-white text-gray-600 hover:bg-rose-50"
            }`}
          >
            Received ({received.length})
          </button>
          <button
            onClick={() => setActiveTab("sent")}
            className={`px-6 py-2 rounded-xl transition ${
              activeTab === "sent"
                ? "bg-rose-500 text-white"
                : "bg-white text-gray-600 hover:bg-rose-50"
            }`}
          >
            Sent ({sent.length})
          </button>
        </div>

        {/* Received Interests */}
        {activeTab === "received" && (
          <div className="space-y-4">
            {received.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 text-center">
                <FiClock className="text-4xl text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">No interests received yet.</p>
              </div>
            ) : (
              received.map((interest) => (
                <div
                  key={interest._id}
                  className="bg-white rounded-2xl shadow-sm p-4 flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  <img
                    src={defaultAvatar(interest.sender.fullName, interest.sender.gender)}
                    alt={interest.sender.fullName}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <Link
                      to={`/profile/${interest.sender._id}`}
                      className="font-semibold text-gray-800 hover:text-rose-500"
                    >
                      {interest.sender.fullName}, {interest.sender.age}
                    </Link>
                    <p className="text-sm text-gray-500">
                      {interest.sender.profession} | {interest.sender.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {interest.status === "pending" ? (
                      <>
                        <button
                          onClick={() => handleRespond(interest._id, "accepted")}
                          className="flex items-center gap-1 bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition text-sm"
                        >
                          <FiCheck /> Accept
                        </button>
                        <button
                          onClick={() => handleRespond(interest._id, "rejected")}
                          className="flex items-center gap-1 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition text-sm"
                        >
                          <FiX /> Reject
                        </button>
                      </>
                    ) : (
                      statusBadge(interest.status)
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Sent Interests */}
        {activeTab === "sent" && (
          <div className="space-y-4">
            {sent.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 text-center">
                <FiClock className="text-4xl text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">No interests sent yet.</p>
                <Link
                  to="/browse"
                  className="text-rose-500 hover:underline mt-2 inline-block"
                >
                  Browse profiles
                </Link>
              </div>
            ) : (
              sent.map((interest) => (
                <div
                  key={interest._id}
                  className="bg-white rounded-2xl shadow-sm p-4 flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  <img
                    src={defaultAvatar(interest.receiver.fullName, interest.receiver.gender)}
                    alt={interest.receiver.fullName}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <Link
                      to={`/profile/${interest.receiver._id}`}
                      className="font-semibold text-gray-800 hover:text-rose-500"
                    >
                      {interest.receiver.fullName}, {interest.receiver.age}
                    </Link>
                    <p className="text-sm text-gray-500">
                      {interest.receiver.profession} | {interest.receiver.location}
                    </p>
                  </div>
                  {statusBadge(interest.status)}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Interests;
