import { useAuth } from "../context/Auth/AuthContext";

import { Modal, ModalDescription, ModalProps, ModalTitle } from "./Modal";
import { Button } from "./Button";
import { Input } from "./Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { FormError } from "./FormError";

const signUpSchemaForm = zod.object({
  email: zod
    .string()
    .min(1, "E-mail é essencial")
    .email("Insira um e-mail válido"),
  password: zod.string().min(4, "Senha deve conter no mínimo 4 caracteres"),
});

export type signUpFormData = zod.infer<typeof signUpSchemaForm>;
type FormDataInputs = signUpFormData;

interface ModalSignUpProps extends ModalProps {}

export function ModalSignUp({ isOpen, closeModal }: ModalSignUpProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpFormData>({
    resolver: zodResolver(signUpSchemaForm),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { signUp } = useAuth();

  async function handleSubscribe(data: FormDataInputs) {
    const { password, email } = data;

    try {
      await signUp({ password, email });
    } catch (error) {
      if (error) console.log(error);
    }

    closeModal();
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <ModalTitle title="Criar conta" className="mb-6" />
      <ModalDescription
        description="Que legal que você quer se juntar a nós, para fazer isso preencha os campos abaixo"
        className="mb-6"
      />

      <form className="w-full" onSubmit={handleSubmit(handleSubscribe)}>
        <div className="mb-8 flex flex-col gap-3">
          <div className={`flex flex-col gap-1`}>
            <Input
              placeholder="E-mail"
              shape="secondary"
              className="focus-effect"
              {...register("email")}
            />

            <FormError error={errors.email?.message} />
          </div>
          <div className={`flex flex-col gap-1`}>
            <Input
              type="password"
              placeholder="Senha"
              shape="secondary"
              className="focus-effect"
              {...register("password")}
            />

            <FormError error={errors.password?.message} />
          </div>
        </div>

        <footer className="w-full">
          <Button className="w-full">
            salvar
          </Button>
        </footer>
      </form>
    </Modal>
  );
}
