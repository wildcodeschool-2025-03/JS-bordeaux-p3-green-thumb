import { useRef, useState } from "react";
import type { FormEventHandler } from "react";
import { Link, useNavigate } from "react-router";
import leaf from "../../assets/images/Logo-green-thumb.png";
import eyeOff from "../../assets/images/icons/password-hide.png";
import eyeOn from "../../assets/images/icons/password-view.png";
import { useUserContext } from "../../context/UserContext";
import "./Login.css";

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const loginSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        },
      );

      if (!response.ok) {
        if (response.status === 404) {
          setError("User not found. Please check your email.");
        } else if (response.status === 401) {
          setError("Incorrect password. Please try again.");
        } else {
          setError("Login failed. Please try again.");
        }
        return;
      }

      const { token, user } = await response.json();

      setUser({
        token,
        infoUser: user,
      });

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
    }
  };

  return (
    <div className="login-body">
      <img src={leaf} alt="leaf logo" className="login-greenthumb-logo" />
      <main className="login-form-wrapper">
        <div className="login-form-title-wrapper">
          <h2 className="login-form-title">Login</h2>
        </div>
        <form onSubmit={loginSubmit} className="login-form">
          <div className="login-user-infos">
            <div className="login-form-field login-email-field">
              <div className="login-floating-label-container">
                <input
                  id="email"
                  ref={emailRef}
                  type="email"
                  className="login-form-input"
                  placeholder=" "
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>

            <div className="login-form-field login-password-field">
              <div className="login-floating-label-container">
                <div className="login-password-label">
                  <input
                    id="password"
                    ref={passwordRef}
                    type={showPassword ? "text" : "password"}
                    className="login-form-input"
                    placeholder=" "
                  />
                  <label htmlFor="password">Password</label>
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="login-password-view-button"
                  >
                    <img
                      src={showPassword ? eyeOn : eyeOff}
                      alt="view password icon"
                      className="login-password-view-icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="login-form-link login-combined-link">
            <p>Not registered yet ?</p>
            <Link to="/register" className="login-form-link-anchor">
              Create an account
            </Link>
          </div>

          <div className="login-button-wrapper">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>

          {error && (
            <div className="login-form-error">
              <p>{error}</p>
            </div>
          )}
        </form>
      </main>
    </div>
  );
}
