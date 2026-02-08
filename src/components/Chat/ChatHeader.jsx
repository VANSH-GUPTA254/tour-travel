function ChatHeader() {
  return (
    <div
      style={{
        height: "60px",
        background: "#2563eb",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      }}
    >
      <div>
        <h4 style={{ margin: 0 }}>AI Travel Assistant 🤖</h4>
        <small style={{ opacity: 0.9 }}>Online • Planning your trip</small>
      </div>
    </div>
  );
}

export default ChatHeader;
