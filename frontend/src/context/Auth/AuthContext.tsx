import { createContext, useContext } from "react";
import { IUser } from "../../types";

export interface UserCredentials {
  email: string;
  password: string;
}
interface AuthContextType {
  user: IUser | null;
  signUp: (user: IUser) => Promise<void>;
  signOut: () => void;
  authenticateWithEmailAndPassword: (credentials: UserCredentials) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);
