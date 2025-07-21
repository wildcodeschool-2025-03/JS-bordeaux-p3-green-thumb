export type UserInfo = {
  id: number;
  email: string;
};

export type UserContextType = {
  user: {
    token: string | null;
    infoUser: UserInfo | null;
  };
  setUser: React.Dispatch<
    React.SetStateAction<{
      token: string | null;
      infoUser: UserInfo | null;
    }>
  >;
};
