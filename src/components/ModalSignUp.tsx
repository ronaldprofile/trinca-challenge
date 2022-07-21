import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth/AuthContext";
import { Modal, ModalDescription, ModalProps, ModalTitle } from "./Modal";
import { Button } from "./Button";
import { Input } from "./Input";
import { toast } from "react-toastify";

interface ModalSignUpProps extends ModalProps {}

export function ModalSignUp({ isOpen, closeModal }: ModalSignUpProps) {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [fieldEmailValue, setFieldEmailValue] = useState("");
  const [fieldPasswordValue, setFieldPasswordValue] = useState("");

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    if (!fieldEmailValue.trim() || !fieldPasswordValue.trim()) {
      toast.error("Preencha os campos", { theme: "colored" });
      return;
    }

    const subscribeUserAfterTheeSeconds = new Promise(resolve =>
      setTimeout(async () => {
        await signUp({ password: fieldPasswordValue, email: fieldEmailValue });

        resolve("user subscribed with successful");
      }, 3000)
    );

    await toast.promise(
      subscribeUserAfterTheeSeconds,
      {
        pending: "Cadastrando usuário...",
        success: "Woow, deu tudo certo"
      },
      { theme: "colored" }
    );

    setFieldEmailValue("");
    setFieldPasswordValue("");
    closeModal();
    navigate("/dashboard");
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <ModalTitle title="Criar conta" className="mb-6" />
      <ModalDescription
        description="Que legal que você quer se juntar a nós, para fazer isso preencha os campos abaixo"
        className="mb-6"
      />

      <form className="w-full" onSubmit={handleSubscribe}>
        <div className="mb-8 flex flex-col gap-3">
          <Input
            type="email"
            placeholder="Seu E-mail"
            onChange={e => setFieldEmailValue(e.target.value)}
            value={fieldEmailValue}
            shape="secondary"
            className="focus-effect"
          />

          <Input
            type="password"
            placeholder="Sua senha"
            onChange={e => setFieldPasswordValue(e.target.value)}
            value={fieldPasswordValue}
            shape="secondary"
            className="focus-effect"
          />
        </div>

        <footer className="w-full">
          <Button color="green" className="w-full focus-effect">
            salvar
          </Button>
        </footer>
      </form>
    </Modal>
  );
}
