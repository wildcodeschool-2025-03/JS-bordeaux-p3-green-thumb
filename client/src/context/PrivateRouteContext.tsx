import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Navigate } from "react-router";
import leaf from "/images/app-icon/leaf.png";
import { useUserContext } from "./UserContext";
import "./PrivateRouteContext.css";

interface PrivateRoute {
  children: ReactNode;
}

export default function PrivateRouteContext({ children }: PrivateRoute) {
  const { user } = useUserContext();
  const [moveToLogin, setMoveToLogin] = useState(false);

  useEffect(() => {
    if (!user.token) {
      const timer = setTimeout(() => setMoveToLogin(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [user.token]);

  if (moveToLogin) {
    return <Navigate to="/login" />;
  }

  if (!user.token) {
    return (
      <section className="alert-box">
        <img className="leaf-decor" src={leaf} alt="ceci est une feuille" />
        <p>You will be redirected to the login page</p>
      </section>
    );
  }

  return <>{children}</>;
}
