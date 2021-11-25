import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react";
interface IUser {
  readonly isLogin: boolean;
  readonly email: string;
}
interface IUserContext {
  readonly user: IUser;
  readonly setUser: Dispatch<SetStateAction<IUser>>;
}
const LoginContext = React.createContext<IUserContext | undefined>(undefined);
export function LoginProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser>({ isLogin: false, email: "" });
  const value = useMemo(() => {
    return { user, setUser };
  }, [user]);
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
export function useLoginContext() {
  const context = React.useContext(LoginContext);
  if (context === undefined) {
    throw new Error("LoginContext must be used within a CountProvider");
  }
  return context;
}
