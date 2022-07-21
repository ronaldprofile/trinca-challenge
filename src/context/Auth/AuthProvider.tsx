import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IUser } from "../../types";
import { getLocalStorage, setLocalStorage } from "../../utils";
import { AuthContext } from "./AuthContext";

interface AuthContextProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userStorage = getLocalStorage<IUser>("trinca-user");

    if (userStorage) {
      setUser(userStorage);
    }
  }, []);

  async function signUp(userData: IUser | null) {
    setLocalStorage("trinca-user", userData);
    setUser(userData);
  }

  function signOut() {
    setUser(null);

    navigate("/");
  }

  async function authenticate(email: string, password: string) {
    const user = getLocalStorage("trinca-user") as IUser;

    if (!user) {
      toast.error("Usuário não encontrado", { theme: "colored" });
    }

    if (user.email === email && user.password === password) {
      setUser({ email, password });
      setLocalStorage("trinca-user", { email, password });

      navigate("/dashboard");
    } else {
      toast.error("Login ou senha inválidos", { theme: "colored" });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        signOut,
        authenticate,
      }}
    >
        {children}
    </AuthContext.Provider>
  );
}
