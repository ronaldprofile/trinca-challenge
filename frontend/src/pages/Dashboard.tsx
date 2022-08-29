import { useState } from "react";
import { SignOut } from "phosphor-react";
import { useAuth } from "../context/Auth/AuthContext";
import { ModalAddBarbecue } from "../components/ModalAddBarbecue";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { CardBarbecue } from "../components/CardBarbecue";
import { useBarbecues } from "../hooks/barbecue/get-all-barbecues";
import { Loading } from "../components/Loading";

export function Dashboard() {
  const { user, signOut } = useAuth();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { data, isLoading } = useBarbecues();

  function closeModal() {
    setIsOpenModal(false);
  }

  function openModal() {
    setIsOpenModal(true);
  }

  return (
    <div className={`min-h-screen overflow-x-hidden`}>
      <Header className={`pt-[70px] h-80 bg-barbecue bg-yellow`} />

      <main className={`-mt-28`}>
        <div className={`px-6`}>
          <div className="mb-6 flex items-center justify-end gap-3">
            <Button
              onClick={openModal}
              className="text-xs md:text-sm text-white bg-black"
            >
              Adicionar Churras
            </Button>

            {user && (
              <Button
                onClick={signOut}
                shape="secondary"
                danger
                className="text-xs md:text-sm flex items-center gap-2"
              >
                <SignOut size={24} className="text-xs md:text-2xl" />
                sair
              </Button>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.barbecues.length === 0 && (
              <div className="p-5 w-full bg-white shadow-md">
                <span className="font-normal text-xl">
                  Nenhum evento adicionado
                </span>
              </div>
            )}

            {!isLoading &&
              data?.barbecues?.map((barbecue) => (
                <CardBarbecue
                  key={barbecue.id}
                  id={barbecue.id}
                  title={barbecue.title}
                  date={new Date(barbecue.scheduled_day)}
                  amountCollected={barbecue.amount_collected}
                  totalMembers={barbecue.members.length}
                />
              ))}
          </div>
        </div>
      </main>

      {isOpenModal && (
        <ModalAddBarbecue isOpen={isOpenModal} closeModal={closeModal} />
      )}

      {isLoading && <Loading />}
    </div>
  );
}
