import { type FormEventHandler, useRef } from "react";
import "./Register.css";

export default function Register() {
  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const submitRegister: FormEventHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <main className="form-wrapper">
      <h2>Register</h2>
      <form onSubmit={submitRegister}>
        <section className="user-infos">
          <fieldset className="form-field">
            <label htmlFor="firstname">firstname</label>
            <input ref={firstnameRef} type="text" className="form-input" />
          </fieldset>
          <fieldset className="form-field">
            <label htmlFor="lastname">lastname</label>
            <input ref={lastnameRef} type="text" className="form-input" />
          </fieldset>
          <fieldset className="form-field">
            <label htmlFor="username">username</label>
            <input ref={usernameRef} type="text" className="form-input" />
          </fieldset>
          <fieldset className="form-field">
            <label htmlFor="city">city</label>
            <input ref={cityRef} type="text" className="form-input" />
          </fieldset>
          <fieldset className="form-field">
            <label htmlFor="email">email</label>
            <input ref={emailRef} type="text" className="form-input" />
          </fieldset>
          <fieldset className="form-field">
            <label htmlFor="passwword">password</label>
            <input ref={passwordRef} type="password" className="form-input" />
          </fieldset>
          <fieldset className="form-field">
            <label htmlFor="confirm password">consfirm password</label>
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
