import { FormEvent, useState } from "react";
import { Modal, ModalProps, ModalTitle } from "./Modal";
import { useBarbecues } from "../context/Barbecue/BarbecueContext";
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
      <ModalTitle title="Adicionar membro" />

      <div className="mt-8">
        <form onSubmit={handleSubmitForm}>
          <div className="mb-6">
            <label htmlFor="name" className="sr-only">
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

          <div>
            <div>
              <label htmlFor="contribution" className="sr-only">
                Contribuição
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

          <Button className="mt-8 w-full text-base focus-effect focus:ring-black">
            {isLoading ? "Adicionando..." : "Adicionar"}
          </Button>
        </form>
      </div>
    </Modal>
  );
}
