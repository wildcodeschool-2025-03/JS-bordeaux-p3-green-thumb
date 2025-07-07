import { useRef } from "react";
import type { FormEventHandler } from "react";

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const loginSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={loginSubmit}>
      <div>
        <label htmlFor="email">email</label>
        <input ref={emailRef} type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="password" id="password" ref={passwordRef} />
      </div>
      <button type="submit">Connexion</button>
    </form>
  );
}
