import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div
        style={{
          minHeight: "calc(100vh - 60px)",
          background: "#f5f7fa",
          padding: "40px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2>Welcome 👋</h2>
          <p style={{ color: "#555", marginBottom: "30px" }}>
            Plan your entire trip using our AI travel assistant.
          </p>

          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h3>Start a New Trip ✈️</h3>
            <p style={{ color: "#666" }}>
              Chat with AI to plan hotels, budget and travel.
            </p>

            <button
              onClick={() => navigate("/chat")}
              style={{
                marginTop: "16px",
                padding: "12px 20px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
              }}
            >
              Start Planning 🚀
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
