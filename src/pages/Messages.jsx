import { useState, useEffect } from "react";
import { messageAPI } from "../services/api";
import ChatBox from "../components/ChatBox";
import { FiMessageSquare } from "react-icons/fi";

const Messages = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const res = await messageAPI.getConversations();
        setConversations(res.data.conversations);
      } catch (error) {
        console.error("Failed to fetch conversations");
      } finally {
        setLoading(false);
      }
    };
    fetchConversations();
  }, []);

  const defaultAvatar = (name, gender) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${gender === "male" ? "3b82f6" : "f43f5e"}&color=fff&size=50`;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          <FiMessageSquare className="inline mr-2 text-rose-500" />
          Messages
        </h1>

        {conversations.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center">
            <FiMessageSquare className="text-5xl text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No conversations yet.</p>
            <p className="text-gray-400 mt-2">
              Accept interests to start messaging!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Conversation List */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800">Conversations</h3>
              </div>
              <div className="divide-y max-h-[500px] overflow-y-auto">
                {conversations.map((conv) => (
                  <button
                    key={conv.user._id}
                    onClick={() => setSelectedUser(conv.user)}
                    className={`w-full p-4 flex items-center gap-3 hover:bg-rose-50 transition text-left ${
                      selectedUser?._id === conv.user._id ? "bg-rose-50" : ""
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={defaultAvatar(conv.user.fullName, conv.user.gender)}
                        alt={conv.user.fullName}
                        className="w-12 h-12 rounded-full"
                      />
                      {conv.user.isOnline && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-gray-800 truncate">
                          {conv.user.fullName}
                        </h4>
                        {conv.unreadCount > 0 && (
                          <span className="bg-rose-500 text-white text-xs rounded-full px-2 py-0.5">
                            {conv.unreadCount}
                          </span>
                        )}
                      </div>
                      {conv.lastMessage && (
                        <p className="text-sm text-gray-500 truncate">
                          {conv.lastMessage.message}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-2">
              {selectedUser ? (
                <ChatBox otherUser={selectedUser} />
              ) : (
                <div className="bg-white rounded-2xl shadow-sm flex items-center justify-center h-[500px]">
                  <div className="text-center text-gray-400">
                    <FiMessageSquare className="text-5xl mx-auto mb-3" />
                    <p>Select a conversation to start chatting</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
