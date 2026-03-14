import { useState } from "react";
import { interestAPI } from "../services/api";
import { FiHeart, FiCheck, FiLoader } from "react-icons/fi";
import { toast } from "react-toastify";

const InterestButton = ({ receiverId, onSent }) => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSend = async () => {
    if (sent || loading) return;
    setLoading(true);
    try {
      await interestAPI.send(receiverId);
      setSent(true);
      toast.success("Interest sent!");
      if (onSent) onSent();
    } catch (error) {
      const msg =
        error.response?.data?.error || "Failed to send interest.";
      if (msg.includes("already exists")) {
        setSent(true);
      }
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <button
        disabled
        className="flex items-center text-green-600 text-sm font-medium"
      >
        <FiCheck className="mr-1" />
        Sent
      </button>
    );
  }

  return (
    <button
      onClick={handleSend}
      disabled={loading}
      className="flex items-center text-rose-500 hover:text-rose-600 text-sm font-medium transition"
    >
      {loading ? (
        <FiLoader className="mr-1 animate-spin" />
      ) : (
        <FiHeart className="mr-1" />
      )}
      Send Interest
    </button>
  );
};

export default InterestButton;
