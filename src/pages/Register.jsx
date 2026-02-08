import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
  });
  const [error, setError] = useState("");

  const auth = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    const { name, email, phone, state } = form;
    if (!name || !email || !phone || !state) {
      setError("Please fill all fields");
      return;
    }
    auth.login(form);
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
          width: "380px",
          background: "#fff",
          padding: "28px",
          borderRadius: "14px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
        }}
      >
        <h2>Create Account ✨</h2>
        <p style={{ color: "#666", marginBottom: "20px" }}>
          Start planning smarter trips
        </p>

        {error && (
          <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
        )}

        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          style={inputStyle}
        />
        <select
          name="state"
          value={form.state}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select State</option>
          <option>Delhi</option>
          <option>Maharashtra</option>
          <option>Karnataka</option>
          <option>Tamil Nadu</option>
          <option>Other</option>
        </select>

        <button onClick={handleRegister} style={primaryButton}>
          Register
        </button>

        <p style={{ marginTop: "16px", textAlign: "center" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#2563eb" }}>
            Login
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

export default Register;
