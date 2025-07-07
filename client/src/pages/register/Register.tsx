import { type FormEventHandler, useRef, useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import { useNavigate } from "react-router";
import eyeOff from "../../assets/images/icons/password-hide.png";
import eyeOn from "../../assets/images/icons/password-view.png";

import "./Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const { ref: cityRef } = usePlacesWidget<HTMLInputElement>({
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    onPlaceSelected: (place) => {
      console.info("Selected city:", place);
    },
  });
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const togglePasswordView = () => {
    if (type === "password") {
      setType("text");
      setIcon(eyeOff);
    } else {
      setType("password");
      setIcon(eyeOn);
    }
  };

  const submitRegister: FormEventHandler = async (event) => {
    event.preventDefault();

    if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
      alert("Passwords do not match!");
      return;
    }
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
        navigate("/tutorial");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="form-wrapper">
      <div className="form-title-wrapper">
        <h2 className="form-title">Register</h2>
      </div>
      <form onSubmit={submitRegister} className="form">
        <section className="user-infos">
          <fieldset className="form-field firstname-field">
            <label htmlFor="firstname">firstname</label>
            <input ref={firstnameRef} type="text" className="form-input" />
          </fieldset>
          <fieldset className="form-field lastname-field">
            <label htmlFor="lastname">lastname</label>
            <input ref={lastnameRef} type="text" className="form-input" />
          </fieldset>
          <fieldset className="form-field username-field">
            <label htmlFor="username">username</label>
            <input ref={usernameRef} type="text" className="form-input" />
          </fieldset>
          <fieldset className="form-field city-field">
            <label htmlFor="city">city</label>
            <input
              ref={cityRef}
              type="text"
              className="form-input"
              placeholder=""
            />
          </fieldset>
          <fieldset className="form-field email-field">
            <label htmlFor="email">email</label>
            <input ref={emailRef} type="email" className="form-input" />
          </fieldset>
          <fieldset className="form-field password-field">
            <label htmlFor="password">password</label>
            <input
              ref={passwordRef}
              type={type}
              className="form-input "
              id="pass-input"
            />
          </fieldset>
          <fieldset className="form-field confirm-password-field">
            <label htmlFor="confirm password">confirm password</label>
            <input
              ref={confirmPasswordRef}
              type={type}
              className="form-input"
            />
          </fieldset>
        </section>
        <button
          type="button"
          onClick={togglePasswordView}
          className="password-view-button"
        >
          <img
            src={icon}
            alt="view password icon"
            className="password-view-icon"
          />
        </button>
        <fieldset className="register-button-wrapper">
          <button type="submit" className="register-button">
            Create Account
          </button>
        </fieldset>
      </form>
    </main>
  );
}
