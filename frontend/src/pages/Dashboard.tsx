import React from "react";
import { useState } from "react";
import { SignOut } from "phosphor-react";
import { useAuth } from "../context/Auth/AuthContext";
import { ModalAddBarbecue } from "../components/ModalAddBarbecue";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { CardBarbecue } from "../components/CardBarbecue";
import { useBarbecues } from "../hooks/barbecue/get-all-barbecues";
import { useConfetti } from "../hooks/useConfetti";

export function Dashboard() {
  const { user, signOut } = useAuth();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { Confetti, showConfetti, hideConfetti } = useConfetti();

  const {
    data: barbecues,
    isLoading,
    isFetching: isFetchingBarbecue,
  } = useBarbecues();

  const closeModal = () => setIsOpenModal(false);
  const openModal = () => setIsOpenModal(true);

  const startConffetiAnimation = () => {
    showConfetti();

    setTimeout(() => {
      hideConfetti();
    }, 7000);
  };

  return (
    <div className={`min-h-screen overflow-x-hidden`}>
      <Header className={`pt-[70px] h-80 bg-barbecue bg-yellow`} />

      <main className={`-mt-28`}>
        <div className={`px-6`}>
          <div className="mb-6 flex items-center justify-end gap-3">
            <Button
              onClick={openModal}
              shape="secondary"
              className="text-xs md:text-sm"
            >
              Adicionar evento
            </Button>

            {user && (
              <Button
                onClick={signOut}
                shape="danger"
                className="text-xs md:text-sm flex items-center gap-2"
              >
                <SignOut size={20} className="text-xs md:text-2xl" />
                sair
              </Button>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {barbecues?.length === 0 && (
              <div className="p-5 w-full bg-white shadow-md">
                <span className="font-normal text-xl">
                  Nenhum evento adicionado
                </span>
              </div>
            )}

            {!isLoading &&
              barbecues?.map((barbecue) => (
                <CardBarbecue
                  key={barbecue.id}
                  barbecue={barbecue}
                  isFetchingBarbecue={isFetchingBarbecue}
                />
              ))}
          </div>
        </div>
      </main>

      {Confetti && <Confetti />}

      {isOpenModal && (
        <ModalAddBarbecue
          isOpen={isOpenModal}
          closeModal={closeModal}
          onSuccessShowConffeti={startConffetiAnimation}
        />
      )}
    </div>
  );
}
