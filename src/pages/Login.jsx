import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!identifier || !password) {
      setError("Please enter email/phone and password");
      return;
    }
    login({ identifier });
    navigate("/home");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "360px",
          background: "#fff",
          padding: "28px",
          borderRadius: "14px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
        }}
      >
        <h2 style={{ marginBottom: "6px" }}>Welcome Back 👋</h2>
        <p style={{ color: "#666", marginBottom: "20px" }}>
          Login to continue your journey
        </p>

        {error && (
          <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
        )}

        <input
          placeholder="Email or Phone Number"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <div style={{ textAlign: "right", marginBottom: "16px" }}>
          <button
            onClick={() => alert("Forgot password flow (UI only)")}
            style={{
              background: "none",
              border: "none",
              color: "#2563eb",
              cursor: "pointer",
              padding: 0,
            }}
          >
            Forgot password?
          </button>
        </div>

        <button onClick={handleLogin} style={primaryButton}>
          Login
        </button>

        <p style={{ marginTop: "16px", textAlign: "center" }}>
          Don’t have an account?{" "}
          <Link to="/register" style={{ color: "#2563eb" }}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const primaryButton = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Login;
