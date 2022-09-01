import { useState } from "react";
import { ArrowLeft, Users } from "phosphor-react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/Button";
import { ModalAddMember } from "../../../../components/ModalAddMember";

interface HeaderActionsProps {
  barbecueId?: string;
}

export function HeaderActions({ barbecueId }: HeaderActionsProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => setIsOpenModal(false);
  const openModal = () => setIsOpenModal(true);

  return (
    <>
      <div className="mb-6 flex flex-col gap-2 sm:justify-between sm:flex-row">
        <Link
          to="/dashboard"
          title="Voltar para o inicio"
          className="h-[50px] px-5 transparent text-black hover:bg-black hover:text-white border border-black transition-colors flex items-center justify-center gap-2 text-xs font-bold uppercase rounded md:text-sm"
        >
          <ArrowLeft size={24} />
          Voltar
        </Link>

        <Button
          onClick={openModal}
          className="flex items-center justify-center gap-2 text-xs md:text-sm focus-effect focus:ring-black"
          title="Adicionar membro"
        >
          <Users size={24} />
          Adicionar membro
        </Button>
      </div>

      <ModalAddMember
        isOpen={isOpenModal}
        closeModal={closeModal}
        barbecueListId={barbecueId!}
      />
    </>
  );
}
