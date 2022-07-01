import { useState } from "react";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { ModalAddBarbecue } from "../components/ModalAddBarbecue";
import { SignOut } from "phosphor-react";

export function Dashboard() {
  const [isOpenModal, setIsOpenModal] = useState(false);

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
            <Button onClick={openModal} className="text-sm text-white bg-black">
              Adicionar Churras
            </Button>

            <Button
              type="button"
              shape="secondary"
              danger
              className="text-sm flex items-center gap-2"
            >
              <SignOut size={24} />
              sair
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>

      {isOpenModal && (
        <ModalAddBarbecue isOpen={isOpenModal} closeModal={closeModal} />
      )}
    </div>
  );
}
