import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ModalSignUp } from "../../components/ModalSignUp";
import { Loading } from "../../components/Loading";
import { Button } from "../../components/Button";
import { SignInForm } from "./SignInForm";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const authFormSchema = zod.object({
  email: zod
    .string()
    .min(1, "E-mail é essencial")
    .email("Insira um e-mail válido"),
  password: zod.string().min(1, "Senha é essencial"),
});

export type authFormData = zod.infer<typeof authFormSchema>;
type FormDataInputs = authFormData;

export function Login() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const authLoginForm = useForm<FormDataInputs>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isSubmittingForm = authLoginForm.formState.isSubmitting;

  const closeModal = () => setIsOpenModal(false);
  const openModal = () => setIsOpenModal(true);

  return (
    <div className="h-screen w-screen flex items-stretch">
      <div className={`hidden sm:block flex-7 bg-barbecue bg-yellow`} />

      <div className={`px-8 flex flex-8 items-center justify-center`}>
        <div className="w-full max-w-xs">
          <FormProvider {...authLoginForm}>
            <SignInForm />
          </FormProvider>

          <div className={`mt-6 flex flex-col gap-4`}>
            <div
              className={`flex items-center text-[#a8a8b3] before:h-[1px] before:flex-1
          before:bg-[#a8a8b3] before:mr-4 after:h-[1px] after:bg-[#a8a8b3] 
            after:flex-1 after:ml-4`}
            >
              ou
            </div>

            <Button onClick={openModal} shape="secondary">
              Criar minha conta
            </Button>
          </div>
        </div>

        {isOpenModal && (
          <ModalSignUp isOpen={isOpenModal} closeModal={closeModal} />
        )}

        {isSubmittingForm && <Loading />}
      </div>
    </div>
  );
}
