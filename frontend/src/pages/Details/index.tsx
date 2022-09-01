import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetBarbecueById } from "../../hooks/barbecue/get-barbecue-by-id";
import { Header } from "../../components/Header";

import { ModalAddMember } from "../../components/ModalAddMember";

import { DetailsWithoutContentSkeleton } from "./components/DetailsWithoutContentSkeleton";
import { BarbecueInfo } from "./components/BarbecueInfo";
import { ListMembers } from "./components/ListMembers";
import { HeaderActions } from "./components/HeaderActions";

export function Details() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { id: barbecueId } = useParams();

  const {
    data: barbecue,
    isLoading,
    isFetching: isFetchingBarbecue,
  } = useGetBarbecueById(barbecueId);

  if (!barbecue) {
    return <DetailsWithoutContentSkeleton />;
  }

  const membersQuantity = barbecue.members.length;

  const closeModal = () => setIsOpenModal(false);
  const openModal = () => setIsOpenModal(true);

  return (
    <div className="min-h-screen">
      <Header className="h-80 pt-[70px] bg-barbecue bg-yellow" />

      <main className={`-mt-28`}>
        <div className={`px-6`}>
          <HeaderActions />
          {/* <div className="mb-6 flex flex-col gap-2 sm:justify-between sm:flex-row">
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
          </div> */}

          <div className="bg-white shadow-md p-6">
            <BarbecueInfo
              title={barbecue.title}
              description={barbecue.description}
              amount_collected={barbecue.amount_collected}
              scheduled_day={barbecue.scheduled_day}
              membersQuantity={membersQuantity}
              isFetchingBarbecue={isFetchingBarbecue}
            />

            {!isLoading && (
              <ListMembers
                members={barbecue.members}
                isFetchingBarbecue={isFetchingBarbecue}
                barbecueId={barbecueId}
              />
            )}
          </div>
        </div>
      </main>
      {/* {Modal && Modal} */}

      {/* {Modal && (
        <ModalAddMember
          isOpen={isOpenModal}
          closeModal={closeModal}
          barbecueListId={barbecueId!}
        />
      )} */}
    </div>
  );
}
