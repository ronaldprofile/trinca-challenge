import { FormEvent, useState } from "react";
import { Modal, ModalProps, ModalTitle } from "./Modal";
import { Button } from "./Button";
import { Input } from "./Input";
import { toast } from "react-toastify";
import { Checkbox, CheckboxIndicator } from "./Checkbox";
import { Check } from "phosphor-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMember } from "../hooks/barbecue/create-member";
interface ModalAddMemberProps extends ModalProps {
  barbecueListId: string;
}

export function ModalAddMember({
  isOpen,
  closeModal,
  barbecueListId,
}: ModalAddMemberProps) {
  const [memberName, setMemberName] = useState("");
  const [memberContribution, setMemberContribution] = useState(15);
  const [memberHasDrinkIncluded, setMemberHasDrinkIncluded] = useState<
    boolean | "indeterminate"
  >(false);

  const queryClient = useQueryClient();

  const newMember = {
    name: memberName,
    paid: false,
    contribution: memberContribution,
    hasDrinkIncluded: memberHasDrinkIncluded,
  };

  const { mutate, isLoading } = useMutation(
    async () => createMember(barbecueListId, newMember),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["barbecue", barbecueListId]),
          toast.success("Membro adicionado", { theme: "colored" });
      },

      onError: () => {
        toast.error("Não foi possível criar o membro", { theme: "colored" });
      },
    }
  );

  async function handleSubmitForm(event: FormEvent) {
    event.preventDefault();

    if (!memberName.trim() || !memberContribution) {
      toast.error("Preencha os campos", { theme: "colored" });
      return;
    }

    mutate();
    closeModal();
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <ModalTitle title="Novo membro" />

      <div className="mt-8">
        <form onSubmit={handleSubmitForm}>
          <div className="mb-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-normal text-label">
                Nome do membro
              </label>
              <Input
                type="text"
                id="name"
                shape="secondary"
                className="w-full focus-effect"
                placeholder="Nome do membro"
                value={memberName}
                onChange={(event) => setMemberName(event.target.value)}
              />
            </div>
          </div>

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
                min={15}
                value={memberContribution}
                onChange={(event) =>
                  setMemberContribution(Number(event.target.value))
                }
              />
            </div>

            <div className="mt-4 flex items-center gap-2">
              <Checkbox
                checked={memberHasDrinkIncluded}
                onCheckedChange={setMemberHasDrinkIncluded}
                name="include_drinks"
              >
                <CheckboxIndicator>
                  <Check />
                </CheckboxIndicator>
              </Checkbox>

              <label htmlFor="include_drinks" title="Acréscimo de R$ 20,00">
                Incluir bebidas
              </label>
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
