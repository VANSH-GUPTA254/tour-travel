import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "10px", background: "#2563eb", color: "#fff" }}>
      <span>AI Travel Planner</span>
      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
        style={{ marginLeft: "20px" }}
      >
        Logout
      </button>
    </div>
  );
}

export default Header;
