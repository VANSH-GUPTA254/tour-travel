function MessageBubble({ text, sender }) {
  const isUser = sender === "user";

  return (
    <div
      style={{
        maxWidth: "75%",
        padding: "10px 14px",
        marginBottom: "10px",
        borderRadius: "12px",
        alignSelf: isUser ? "flex-end" : "flex-start",
        backgroundColor: isUser ? "#2563eb" : "#e5e7eb",
        color: isUser ? "#fff" : "#000",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
      }}
    >
      {text}
    </div>
  );
}

export default MessageBubble;
