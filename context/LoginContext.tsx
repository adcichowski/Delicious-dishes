import { useRouter } from "next/dist/client/router";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { supabase } from "../lib/supabase/config";
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
  const router = useRouter();
  const [user, setUser] = useState<IUser>({ isLogin: false, email: "" });
  useEffect(() => {
    const currentUser = supabase.auth.user();
    if (currentUser?.role === "authenticated") {
      setUser({ isLogin: true, email: user?.email || "" });
      user.isLogin && router.push("/recipes");
    }
  }, []);
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
