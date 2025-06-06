import type React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="landing-container">
      <div className="logo-section">
        <div className="logo-icon">
          <img src="../src/assets/images/Logo-green-thumb.png" alt="Logo" />
        </div>

        <h1 className="welcome-title">BIENVENUE</h1>
      </div>

      <button type="button" className="btn btn-primary" onClick={handleLogin}>
        Se connecter
      </button>
      <button type="button" className="btn btn-outline" onClick={handleSignup}>
        S’ inscrire
      </button>
    </div>
  );
};

export default Landing;
