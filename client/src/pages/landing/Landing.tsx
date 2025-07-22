import "./Landing.css";
import { useNavigate } from "react-router";
import leaf from "/images/app-icon/leaf.png";
import phone from "/images/app-icon/phone-display.png";

export default function Landing() {
  const navigate = useNavigate();

  const Login = () => {
    navigate("/login");
  };
  const Register = () => {
    navigate("/register");
  };

  return (
    <div className="landing-container">
      <section className="landing-banner">
        <img
          src={phone}
          alt="phone representation"
          className="phone-representation"
        />
        <div className="banner-title">
          <h2>Greenthumb</h2>
          <hr />
          <p>your gardening companion</p>
        </div>
      </section>

      <section className="welcome-section">
        <img src={leaf} alt="greenthumb logo" className="greenthumb-logo" />
        <h1 className="welcome-title">WELCOME</h1>

        <button type="button" className="btn btn-primary" onClick={Login}>
          Login
        </button>
        <button type="button" className="btn btn-outline" onClick={Register}>
          Register
        </button>
      </section>
    </div>
  );
}
