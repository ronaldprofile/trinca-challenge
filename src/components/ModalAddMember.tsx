import { Modal, ModalProps, ModalTitle } from "./Modal";
import { Button } from "./Button";
import { Input } from "./Input";

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
              shape="secondary"
              className="w-full focus-effect"
              placeholder="Nome do membro"
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

          <Button className="mt-8 w-full text-base focus-effect focus:ring-black">
            Adicionar
          </Button>
        </form>
      </div>
    </Modal>
  );
}
