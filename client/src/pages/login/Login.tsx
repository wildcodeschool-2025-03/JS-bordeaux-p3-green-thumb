import { useRef } from "react";
import type { FormEventHandler } from "react";
import { useNavigate } from "react-router";
import { useUserContext } from "../../context/UserContext";

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
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
        return;
      }

      const { token, user } = await response.json();

      setUser({
        token,
        infoUser: user,
      });

      navigate("/tutorial");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={loginSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input ref={emailRef} type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input ref={passwordRef} type="password" id="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
