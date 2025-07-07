import { type FormEventHandler, useRef } from "react";
import "./Register.css";
import { usePlacesWidget } from "react-google-autocomplete";
import { useNavigate } from "react-router";

export default function Register() {
  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const { ref: cityRef } = usePlacesWidget<HTMLInputElement>({
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    onPlaceSelected: (place) => {
      console.log("Selected city:", place);
    },
  });

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

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
            hashed_password: passwordRef.current?.value,
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
      <h2>Register</h2>
      <form onSubmit={submitRegister}>
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
            <input ref={cityRef} type="text" className="form-input" />
          </fieldset>
          <fieldset className="form-field email-field">
            <label htmlFor="email">email</label>
            <input ref={emailRef} type="text" className="form-input" />
          </fieldset>
          <fieldset className="form-field password-field">
            <label htmlFor="passwword">password</label>
            <input ref={passwordRef} type="password" className="form-input " />
          </fieldset>
          <fieldset className="form-field confirm-password-field">
            <label htmlFor="confirm password">confirm password</label>
            <input
              ref={confirmPasswordRef}
              type="text"
              className="form-input"
            />
          </fieldset>
        </section>
        <button type="submit">Register</button>
      </form>
    </main>
  );
}
