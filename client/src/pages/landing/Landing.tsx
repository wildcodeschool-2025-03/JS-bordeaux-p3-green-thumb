import type React from "react";

import "./Landing.css";
import { useNavigate } from "react-router";

import leaf from "../../../public/images/app-icon/leaf.png";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const Login = () => {
    navigate("/login");
  };
  const Signup = () => {
    navigate("/register");
  };
  return (
    <div className="landing-container">
      <div>coucou</div>
      <div className="logo-section">
        <div className="logo-icon">
          <img src={leaf} alt="greenthumb logo" />
        </div>

        <h1 className="welcome-title">WELCOME</h1>
      </div>

      <button type="button" className="btn btn-primary" onClick={Login}>
        Login
      </button>
      <button type="button" className="btn btn-outline" onClick={Signup}>
        Sign Up
      </button>
    </div>
  );
};

export default Landing;
