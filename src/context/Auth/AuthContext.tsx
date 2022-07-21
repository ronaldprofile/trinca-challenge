import { createContext, useContext } from "react";
import { IUser } from "../../types";

interface AuthContextType {
  user: IUser | null;
  signUp: (user: IUser) => Promise<void>;
  signOut: () => void;
  authenticate: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);
