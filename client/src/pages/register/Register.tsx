import { type FormEventHandler, useRef, useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import { useNavigate } from "react-router";
import eyeOff from "../../assets/images/icons/password-hide.png";
import eyeOn from "../../assets/images/icons/password-view.png";
import leaf from "../../assets/images/leaf.png";
import registerSchema from "../../components/register/registerSchema";

import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState<string[]>([]);

  const [isComplete, setIsComplete] = useState(false);

  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const { ref: cityRef } = usePlacesWidget<HTMLInputElement>({
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const validateForm = () => {
    const formData = {
      firstname: firstnameRef.current?.value ?? "",
      lastname: lastnameRef.current?.value ?? "",
      username: usernameRef.current?.value ?? "",
      city: cityRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      password: passwordRef.current?.value ?? "",
      confirmPassword: confirmPasswordRef.current?.value ?? "",
    };

    const { error } = registerSchema.validate(formData, { abortEarly: true });

    if (error) {
      setErrors(error.details.map((detail) => detail.message));
      setIsComplete(false);
    } else {
      setErrors([]);
      setIsComplete(true);
    }
  };

  const submitRegister: FormEventHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstname: firstnameRef.current?.value,
            lastname: lastnameRef.current?.value,
            username: usernameRef.current?.value,
            city: cityRef.current?.value,
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
          }),
        },
      );

      if (response.status === 201) {
        navigate("/login");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="register-body">
        <img src={leaf} alt="leaf logo" className="greenthumb-logo" />
        <main className="form-wrapper">
          <div className="form-title-wrapper">
            <h2 className="form-title">Register</h2>
          </div>
          <form onSubmit={submitRegister} className="form">
            <section className="user-infos">
              <div className="form-field firstname-field">
                <div className="floating-label-container">
                  <input
                    id="firstname"
                    ref={firstnameRef}
                    type="text"
                    className="form-input"
                    onInput={validateForm}
                    placeholder=" "
                  />
                  <label htmlFor="firstname">Firstname</label>
                </div>
              </div>
              <div className="form-field lastname-field">
                <div className="floating-label-container">
                  <input
                    id="lastname"
                    ref={lastnameRef}
                    type="text"
                    className="form-input"
                    onInput={validateForm}
                    placeholder=" "
                  />
                  <label htmlFor="lastname">Lastname</label>
                </div>
              </div>
              <div className="form-field username-field">
                <div className="floating-label-container">
                  <input
                    id="username"
                    ref={usernameRef}
                    type="text"
                    className="form-input"
                    onInput={validateForm}
                    placeholder=" "
                  />
                  <label htmlFor="username">Username</label>
                </div>
              </div>
              <div className="form-field city-field">
                <div className="floating-label-container">
                  <input
                    id="city"
                    ref={cityRef}
                    type="text"
                    className="form-input"
                    onInput={validateForm}
                    placeholder=" "
                  />
                  <label htmlFor="city">City</label>
                </div>
              </div>
              <div className="form-field email-field">
                <div className="floating-label-container">
                  <input
                    id="email"
                    ref={emailRef}
                    type="email"
                    className="form-input"
                    onInput={validateForm}
                    placeholder=" "
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="form-field password-field">
                <div className="floating-label-container">
                  <div className="password-label">
                    <input
                      id="password"
                      ref={passwordRef}
                      type={showPassword ? "text" : "password"}
                      className="form-input "
                      onInput={validateForm}
                      placeholder=" "
                    />
                    <label htmlFor="password">Password</label>
                    <button
                      type="button"
                      onClick={() => {
                        setShowPassword((prev) => !prev);
                      }}
                      className="password-view-button"
                    >
                      <img
                        src={showPassword ? eyeOn : eyeOff}
                        alt="view password icon"
                        className="password-view-icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-field confirm-password-field">
                <div className="floating-label-container">
                  <input
                    id="confirm-password"
                    ref={confirmPasswordRef}
                    type="password"
                    className="form-input"
                    onInput={validateForm}
                    placeholder=" "
                  />
                  <label htmlFor="confirm-password">Confirm Password</label>
                </div>
              </div>
            </section>

            <div className="register-button-wrapper">
              <button
                type="submit"
                className={`register-button ${!isComplete ? "register-button--disabled" : ""}`}
                disabled={!isComplete}
              >
                Create Account
              </button>
              <div className="form-error">
                {errors.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
