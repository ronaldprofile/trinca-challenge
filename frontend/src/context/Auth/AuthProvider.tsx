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

      const subscribeAfterTheeSeconds = new Promise((resolve) =>
        setTimeout(() => resolve(""), 3000)
      );

      await toast.promise(
        subscribeAfterTheeSeconds,
        {
          pending: "Criando conta...",
          success: "Woow, deu tudo certo",
        },
        { theme: "colored" }
      );

      setLocalStorage("@trinca-user$id", user.id);
      setUser(user);
      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error.response.data.message, { theme: "colored" });
      console.log(error);
    }
  }

  function signOut() {
    localStorage.removeItem("@trinca-user$id");
    setUser(null);

    navigate("/");
  }

  async function authenticateWithEmailAndPassword({
    email,
    password,
  }: UserCredentials) {
    try {
      const response = await api.post("/signin", {
        email,
        password,
      });

      const user = response.data;

      if (user) {
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
