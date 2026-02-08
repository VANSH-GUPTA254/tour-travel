import { useState } from "react";

function ChatInput({ onSend, disabled }) {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim() || disabled) return;
    onSend(message);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "12px",
        background: "#fff",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        disabled={disabled}
        style={{
          flex: 1,
          padding: "12px",
          borderRadius: "999px",
          border: "1px solid #ccc",
          outline: "none",
          fontSize: "15px",
        }}
      />

      <button
        onClick={sendMessage}
        disabled={disabled}
        style={{
          marginLeft: "10px",
          padding: "12px 18px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "999px",
          cursor: "pointer",
          opacity: disabled ? 0.6 : 1,
        }}
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;
