import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";
import { useNavigate } from "react-router-dom";

interface User {
  password: string;
  email: string;
}

interface UserContextProviderProps {
  children: ReactNode;
}

interface UserContextData {
  user: User | null;
  handleSignup: (user: User) => Promise<void>;
  signOut: () => void;
}

const UserContext = createContext({} as UserContextData);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  async function handleSignup(userData: User) {
    localStorage.setItem("trinca-user", JSON.stringify(userData));
    setUser(userData);
  }

  function signOut() {
    localStorage.removeItem("trinca-user");
    setUser(null);

    navigate("/");
  }

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem("trinca-user")!);

    if (userStorage) {
      setUser(userStorage);
    }
  }, []);

  // useEffect(() => {
  //   const userStorage = JSON.parse(localStorage.getItem("trinca-user")!);

  //   if (!userStorage) {
  //     console.log("não existi");

  //     navigate("/");
  //   }
  // }, []);

  return (
    <UserContext.Provider value={{ user, handleSignup, signOut }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
