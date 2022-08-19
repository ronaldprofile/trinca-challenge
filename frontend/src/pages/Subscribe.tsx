import { FormEvent, useState } from "react";
import { useAuth } from "../context/Auth/AuthContext";
import { Header } from "../components/Header";
import { TrincaLogo } from "../components/TrincaLogo";
import { ModalSignUp } from "../components/ModalSignUp";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { toast } from "react-toastify";

export function Subscribe() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { authenticateWithEmailAndPassword } = useAuth();

  async function handleAuthenticate(event: FormEvent) {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("Preencha os campos", { theme: "colored" });
      return;
    }

    await authenticateWithEmailAndPassword({
      email,
      password,
    });
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  function openModal() {
    setIsOpenModal(true);
  }

  return (
    <div className={`min-h-screen bg-barbecue bg-yellow`}>
      <Header className={`pt-[70px]`} title="Faça seu login" />

      <div
        className={`mt-16 w-screen max-w-xs mx-auto flex items-center 
        flex-col gap-16`}
      >
        <div className="w-full">
          <form onSubmit={handleAuthenticate}>
            <div className={`mb-9 flex flex-col gap-4`}>
              <label
                htmlFor="email"
                className={`text-xl font-bold text-black/80 sr-only`}
              >
                Login
              </label>

              <Input
                type="email"
                id="email"
                placeholder="Seu E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={`flex flex-col gap-4`}>
              <label
                htmlFor="password"
                className={`text-xl font-bold text-black/80 sr-only`}
              >
                Senha
              </label>

              <Input
                type="password"
                id="password"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button className="w-full mt-12">entrar</Button>
          </form>

          <div className={`mt-6 flex flex-col gap-4`}>
            <div
              className={`flex items-center  before:h-[1px] before:flex-1
            before:bg-black before:mr-4 after:h-[1px] after:bg-black 
              after:flex-1 after:ml-4`}
            >
              ou
            </div>

            <Button type="button" onClick={openModal} shape="secondary">
              Criar minha conta
            </Button>
          </div>
        </div>

        <footer>
          <TrincaLogo />
        </footer>

        {isOpenModal && (
          <ModalSignUp isOpen={isOpenModal} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
}
