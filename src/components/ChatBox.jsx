import { useState, useEffect, useRef } from "react";
import { messageAPI } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { FiSend } from "react-icons/fi";

const ChatBox = ({ otherUser }) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef(null);

  const fetchMessages = async () => {
    try {
      const res = await messageAPI.get(otherUser._id);
      setMessages(res.data.messages);
    } catch (error) {
      console.error("Failed to fetch messages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (otherUser?._id) {
      fetchMessages();
      // Poll for new messages every 5 seconds
      const interval = setInterval(fetchMessages, 5000);
      return () => clearInterval(interval);
    }
  }, [otherUser?._id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    try {
      await messageAPI.send(otherUser._id, newMessage.trim());
      setNewMessage("");
      fetchMessages();
    } catch (error) {
      console.error("Failed to send message");
    }
  };

  const defaultAvatar = (name, gender) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${gender === "male" ? "3b82f6" : "f43f5e"}&color=fff&size=40`;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-500"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[500px] bg-white rounded-2xl shadow-md overflow-hidden">
      {/* Chat Header */}
      <div className="flex items-center p-4 border-b bg-gray-50">
        <img
          src={defaultAvatar(otherUser.fullName, otherUser.gender)}
          alt={otherUser.fullName}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{otherUser.fullName}</h3>
          <span
            className={`text-xs ${
              otherUser.isOnline ? "text-green-500" : "text-gray-400"
            }`}
          >
            {otherUser.isOnline ? "Online" : "Offline"}
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.length === 0 ? (
          <div className="text-center text-gray-400 mt-20">
            No messages yet. Start the conversation!
          </div>
        ) : (
          messages.map((msg, idx) => {
            const isMine = msg.senderId.toString() === user._id.toString();
            return (
              <div
                key={idx}
                className={`flex ${isMine ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    isMine
                      ? "bg-rose-500 text-white rounded-br-sm"
                      : "bg-white text-gray-800 shadow rounded-bl-sm"
                  }`}
                >
                  <p className="text-sm">{msg.message}</p>
                  <p
                    className={`text-xs mt-1 ${
                      isMine ? "text-rose-200" : "text-gray-400"
                    }`}
                  >
                    {new Date(msg.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="flex items-center p-3 border-t">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:border-rose-400"
        />
        <button
          type="submit"
          className="ml-2 bg-rose-500 text-white p-2 rounded-full hover:bg-rose-600 transition"
        >
          <FiSend />
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
