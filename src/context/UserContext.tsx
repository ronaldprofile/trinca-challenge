import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

import { useNavigate } from "react-router-dom";
import { IUser } from "../types/user";
import { getUserLocalStorage, setUserLocalStorage } from "../utils";

interface UserContextProviderProps {
  children: ReactNode;
}

interface UserContextData {
  user: IUser | null;
  signUp: (user: IUser) => Promise<void>;
  signOut: () => void;
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
    // setUserLocalStorage(null);
    setUser(null);

    navigate("/");
  }

  return (
    <UserContext.Provider value={{ user, signUp, signOut }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
