import { Button } from "./Button";
import { Input } from "./Input";
import { Modal, ModalProps, ModalTitle } from "./Modal";

interface ModalAddMemberProps extends ModalProps {}

export function ModalAddMember({ isOpen, closeModal }: ModalAddMemberProps) {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <ModalTitle title="Adicionar membro" />

      <div className="mt-8">
        <form>
          <div className="mb-6">
            <label htmlFor="name" className="sr-only">
              Nome do membro
            </label>
            <Input
              type="text"
              id="name"
              placeholder="Nome do membro"
              className="bg-input"
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
                className="bg-input"
                placeholder="Contribuição do membro"
              />
            </div>

            {/* <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="include_drinks"
                id="include_drinks"
              />
              <label htmlFor="include_drinks">Incluir bebidas</label>
            </div> */}
          </div>

          <Button className="mt-8 w-full bg-black text-white text-base">
            Adicionar
          </Button>
        </form>
      </div>
    </Modal>
  );
}
