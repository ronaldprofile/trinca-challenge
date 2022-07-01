import { useState, FormEvent } from "react";
import { Modal, ModalDescription, ModalProps, ModalTitle } from "./Modal";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

import { Button } from "./Button";
import { Input } from "./Input";

interface ModalSignupProps extends ModalProps {}

export function ModalSignup({ isOpen, closeModal }: ModalSignupProps) {
  const { signUp } = useUser();
  const navigate = useNavigate();

  const [fieldEmailValue, setFieldEmailValue] = useState("");
  const [fieldPasswordValue, setFieldPasswordValue] = useState("");

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    if (!fieldEmailValue.trim() || !fieldPasswordValue.trim()) {
      alert("Preencha os campos");
      return;
    }

    setFieldEmailValue("");
    setFieldPasswordValue("");

    await signUp({
      password: fieldPasswordValue,
      email: fieldEmailValue
    });

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
            shape="secondary"
            className="focus-effect"
          />

          <Input
            type="password"
            placeholder="Sua senha"
            onChange={e => setFieldPasswordValue(e.target.value)}
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
