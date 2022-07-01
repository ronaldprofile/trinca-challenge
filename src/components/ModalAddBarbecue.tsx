import { Button } from "./Button";
import { Input } from "./Input";
import { Modal, ModalProps, ModalTitle } from "./Modal";

interface ModalAddBarbecueProps extends ModalProps {}

export function ModalAddBarbecue({
  isOpen,
  closeModal
}: ModalAddBarbecueProps) {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <ModalTitle title="Adicionar churra" />

      <div className="mt-8">
        <form>
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
