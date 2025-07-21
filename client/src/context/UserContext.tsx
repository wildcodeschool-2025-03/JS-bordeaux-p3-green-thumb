import type { ReactNode } from "react";
import { createContext, useContext } from "react";
import { useState } from "react";
import type { UserContextType, UserInfo } from "../types/context/usercontext";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{
    token: string | null;
    infoUser: UserInfo | null;
  }>({
    token: null,
    infoUser: null,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
