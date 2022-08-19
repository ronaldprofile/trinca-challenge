import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../types";
import { getLocalStorage, setLocalStorage } from "../../utils";
import { AuthContext, UserCredentials } from "./AuthContext";
import { getUser } from "../../hooks/user/get-user";
import { api } from "../../services/api";
import { toast } from "react-toastify";

interface AuthContextProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  async function signUp(data: IUser) {
    const { email, password } = data;

    try {
      const response = await api.post("/signup", {
        email,
        password,
      });

      const user = response.data;

      setLocalStorage("@trinca-user$id", user.id);
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  }

  function signOut() {
    localStorage.removeItem("@trinca-user$id");
    setUser(null);

    navigate("/");
  }

  async function authenticateWithEmailAndPassword(
    credentials: UserCredentials
  ) {
    try {
      const response = await api.post("/signin", credentials);
      const user = response.data;

      if (
        user.email === credentials.email &&
        user.password === credentials.password
      ) {
        setUser(user);
        setLocalStorage("@trinca-user$id", user.id);
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("Login ou senha inválidos", { theme: "colored" });
      console.log(error);
    }
  }

  useEffect(() => {
    (async () => {
      const userId = getLocalStorage<string>("@trinca-user$id");

      if (userId) {
        const user = await getUser(userId);

        setUser(user);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        signOut,
        authenticateWithEmailAndPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
