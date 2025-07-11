import type { ReactNode } from "react";
import { Navigate } from "react-router";
import { useUserContext } from "../context/UserContext";

interface PrivateRoad {
  children: ReactNode;
}

export default function PrivateRoadContext({ children }: PrivateRoad) {
  const { user } = useUserContext();

  if (!user.token) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
