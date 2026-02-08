function MessageBubble({ text, sender }) {
  const isUser = sender === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "12px",
      }}
    >
      <div
        style={{
          maxWidth: "75%",
          padding: "12px 16px",
          borderRadius: isUser
            ? "18px 18px 4px 18px"
            : "18px 18px 18px 4px",
          background: isUser ? "#2563eb" : "#ffffff",
          color: isUser ? "#fff" : "#111",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          whiteSpace: "pre-wrap",
          lineHeight: "1.4",
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default MessageBubble;
