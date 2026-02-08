function HotelCard({ hotel, onSelect }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "15px",
        marginBottom: "12px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        maxWidth: "75%",
      }}
    >
      <h4 style={{ marginBottom: "6px" }}>{hotel.name}</h4>
      <p style={{ margin: "4px 0", color: "#555" }}>
        📍 {hotel.location}
      </p>
      <p style={{ margin: "4px 0" }}>
        💰 ₹{hotel.price} / night
      </p>

      <button
        onClick={() => onSelect(hotel)}
        style={{
          marginTop: "8px",
          padding: "8px 14px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Select Hotel
      </button>
    </div>
  );
}

export default HotelCard;
