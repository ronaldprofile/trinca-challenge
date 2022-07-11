import { FormEvent, useState } from "react";
import { Modal, ModalProps, ModalTitle } from "./Modal";
import { Button } from "./Button";
import { Input } from "./Input";
import { v4 as useId } from "uuid";
import { toast } from "react-toastify";
import { IBarbecue } from "../types";

interface ModalAddBarbecueProps extends ModalProps {
  onAddBarbecue: (barbecueEvent: IBarbecue) => Promise<void>;
}

export function ModalAddBarbecue({
  isOpen,
  closeModal,
  onAddBarbecue
}: ModalAddBarbecueProps) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [informationAdditional, setInformationAdditional] = useState("");

  async function handleAddBarbecue(event: FormEvent) {
    event.preventDefault();

    if (!title.trim() || !date) {
      toast.error("Preencha todos os campos", { theme: "colored" });
      return;
    }

    await onAddBarbecue({
      id: useId(),
      title,
      date: new Date(date),
      informationAdditional,
      members: [],
      totalAmountCollected: 0
    });

    toast.success("Churras adicionado", { theme: "colored" });

    setTitle("");
    setInformationAdditional("");
    setDate("");
    closeModal();
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
                onChange={e => setTitle(e.target.value)}
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
                onChange={e => setDate(e.target.value)}
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
                onChange={e => setInformationAdditional(e.target.value)}
                value={informationAdditional}
                placeholder="Informações importantes sobre o evento"
                className="py-3 px-5 min-h-[112px] w-full text-base bg-input resize-none shadow-sm focus:outline-none focus-effect border border-gray-300 rounded transition-all"
              />
            </div>
          </div>

          <Button className="mt-8 w-full text-base focus-effect" color="green">
            Adicionar
          </Button>
        </form>
      </div>
    </Modal>
  );
}
