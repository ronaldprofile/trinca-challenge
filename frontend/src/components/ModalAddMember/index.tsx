import { Modal, ModalProps, ModalTitle } from "../Modal";
import { IncludeDrink, IncludeDrinkButton } from "./IncludeDrink";
import { Button } from "../Button";
import { Input } from "../Input";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMember } from "../../hooks/barbecue/create-member";
import { Controller, useForm } from "react-hook-form";
import {
  createMemberSchemaForm,
  createMemberDataForm,
  FormDataInputs,
} from "./zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "../FormError";

interface NewMemberData {
  name: string;
  paid: boolean;
  contribution: number;
  hasDrinkIncluded: boolean;
}

interface ModalAddMemberProps extends ModalProps {
  barbecueListId: string;
}

export function ModalAddMember({
  isOpen,
  closeModal,
  barbecueListId,
}: ModalAddMemberProps) {
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    formState: { errors },
    clearErrors,
    register,
    reset,
    control,
  } = useForm<createMemberDataForm>({
    resolver: zodResolver(createMemberSchemaForm),
    defaultValues: {
      name: "",
      contribution: 15,
      drinkIncluded: "with",
    },
  });

  const { mutateAsync, isLoading } = useMutation(
    async (newMember: NewMemberData) => createMember(barbecueListId, newMember),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["barbecue", barbecueListId]);
      },

      onError: () => {
        toast.error("Não foi possível criar o membro", { theme: "colored" });
      },
    }
  );

  async function handleSubmitForm(data: FormDataInputs) {
    const { name, contribution, drinkIncluded } = data;

    const newMember: NewMemberData = {
      name,
      paid: false,
      contribution,
      hasDrinkIncluded: drinkIncluded === "with" ? true : false,
    };

    await mutateAsync(newMember);
    handleCloseModal();
  }

  const handleCloseModal = () => {
    closeModal();
    reset();
    clearErrors();
  };

  return (
    <Modal isOpen={isOpen} closeModal={handleCloseModal}>
      <ModalTitle title="Novo membro" />

      <div className="mt-8">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="mb-6">
            <div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-normal text-label"
                >
                  Nome do membro
                </label>

                <Input
                  type="text"
                  id="name"
                  shape="secondary"
                  className="w-full focus-effect"
                  placeholder="Nome do membro"
                  {...register("name")}
                />
              </div>

              <FormError error={errors.name?.message} />
            </div>
          </div>

          <div>
            <div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contribution"
                  className="text-sm font-normal text-label"
                >
                  Contribuição do membro
                </label>

                <Input
                  type="number"
                  id="contribution"
                  shape="secondary"
                  className="w-full focus-effect"
                  placeholder="Contribuição do membro"
                  {...register("contribution", { valueAsNumber: true })}
                />
              </div>

              <FormError error={errors.contribution?.message} />
            </div>

            <div className="mt-4">
              <Controller
                name="drinkIncluded"
                control={control}
                render={({ field }) => {
                  return (
                    <IncludeDrink
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <IncludeDrinkButton
                        value="with"
                        title="Acréscimo de R$ 20,00"
                      >
                        Com bebidas
                      </IncludeDrinkButton>

                      <IncludeDrinkButton value="without">
                        Sem bebidas
                      </IncludeDrinkButton>
                    </IncludeDrink>
                  );
                }}
              />
            </div>
          </div>

          <Button className="mt-8 w-full text-base">
            {isLoading ? "Adicionando..." : "Adicionar"}
          </Button>
        </form>
      </div>
    </Modal>
  );
}
