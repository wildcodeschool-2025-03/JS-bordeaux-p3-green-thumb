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
    <form onSubmit={submitRegister}>
      <section className="user-infos">
        <fieldset className="form-field">
          <label htmlFor="firstname">firstname</label>
          <input ref={firstnameRef} type="text" />
        </fieldset>
        <fieldset className="form-field">
          <label htmlFor="lastname">lastname</label>
          <input ref={lastnameRef} type="text" />
        </fieldset>
        <fieldset className="form-field">
          <label htmlFor="username">username</label>
          <input ref={usernameRef} type="text" />
        </fieldset>
        <fieldset className="form-field">
          <label htmlFor="city">city</label>
          <input ref={cityRef} type="text" />
        </fieldset>
        <fieldset className="form-field">
          <label htmlFor="email">email</label>
          <input ref={emailRef} type="text" />
        </fieldset>
        <fieldset className="form-field">
          <label htmlFor="passwword">password</label>
          <input ref={passwordRef} type="password" />
        </fieldset>
        <fieldset className="form-field">
          <label htmlFor="confirm password">consfirm password</label>
          <input ref={confirmPasswordRef} type="text" />
        </fieldset>
      </section>
      <button type="submit">Send</button>
    </form>
  );
}
