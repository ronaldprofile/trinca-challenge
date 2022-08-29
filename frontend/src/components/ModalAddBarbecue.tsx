import { FormEvent, useState } from "react";
import { Modal, ModalProps, ModalTitle } from "./Modal";
import { Button } from "./Button";
import { Input } from "./Input";
import { toast } from "react-toastify";
import { createBarbecue } from "../hooks/barbecue/create-barbecue";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface ModalAddBarbecueProps extends ModalProps {}

export function ModalAddBarbecue({
  isOpen,
  closeModal,
}: ModalAddBarbecueProps) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [informationAdditional, setInformationAdditional] = useState("");

  const queryClient = useQueryClient();

  const newBarbecue = {
    title,
    scheduled_day: new Date(date),
    members: [],
    amount_collected: 0,
    description: informationAdditional,
  };

  const { data, isLoading, mutate } = useMutation(
    async () => await createBarbecue(newBarbecue),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["barbecues"]);
        toast.success("Churras adicionado", { theme: "colored" });
        closeModal();
        clearFieldsForm();
      },
    }
  );

  async function handleAddBarbecue(event: FormEvent) {
    event.preventDefault();

    if (!title.trim() || !date) {
      toast.error("Preencha todos os campos", { theme: "colored" });
      return;
    }

    mutate();
  }

  function clearFieldsForm() {
    setTitle("");
    setInformationAdditional("");
    setDate("");
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <ModalTitle title="Adicionar churra" />

      <div className="mt-8">
        <form onSubmit={handleAddBarbecue}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name_event"
                className="text-sm font-normal text-label"
              >
                Nome evento
              </label>
              <Input
                type="text"
                id="name_event"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                shape="secondary"
                className="focus-effect"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="date_event"
                className="text-sm font-normal text-label"
              >
                Data do evento
              </label>
              <Input
                type="date"
                id="date_event"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                shape="secondary"
                className="focus-effect"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="information"
                className="text-sm font-normal text-label"
              >
                Informações adicionais
              </label>

              <textarea
                id="information"
                onChange={(e) => setInformationAdditional(e.target.value)}
                value={informationAdditional}
                placeholder="Informações importantes sobre o evento (opcional)"
                className="py-3 px-5 min-h-[112px] w-full text-base bg-input resize-none shadow-sm focus:outline-none focus-effect border border-gray-300 rounded transition-all"
              />
            </div>
          </div>

          <Button className="mt-8 w-full text-base focus-effect" color="green">
            {isLoading ? "Adicionando..." : "Adicionar"}
          </Button>
        </form>
      </div>
    </Modal>
  );
}
