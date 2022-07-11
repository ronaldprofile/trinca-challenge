import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IUser } from "../types";
import { getUserLocalStorage, setUserLocalStorage } from "../utils";

interface UserContextProviderProps {
  children: ReactNode;
}

interface UserContextData {
  user: IUser | null;
  signUp: (user: IUser) => Promise<void>;
  signOut: () => void;
  authenticate: (email: string, password: string) => Promise<void>;
}

const UserContext = createContext({} as UserContextData);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userStorage = getUserLocalStorage();

    if (userStorage) {
      setUser(userStorage);
    }
  }, []);

  async function signUp(userData: IUser | null) {
    setUserLocalStorage(userData);
    setUser(userData);
  }

  function signOut() {
    setUser(null);

    navigate("/");
  }

  async function authenticate(email: string, password: string) {
    const user = getUserLocalStorage() as IUser;

    if (user) {
      if (user.email === email && user.password === password) {
        setUser({ email, password });
        setUserLocalStorage({ email, password });

        navigate("/dashboard");
      } else {
        toast.error("Login ou senha inválidos", { theme: "colored" });
      }
    } else {
      toast.error("Usuário não encontrado", { theme: "colored" });
    }
  }

  return (
    <UserContext.Provider value={{ user, signUp, signOut, authenticate }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
