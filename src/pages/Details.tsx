import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { ItemList } from "../components/List/ItemList";
import { ModalAddMember } from "../components/ModalAddMember";
import { ArrowLeft, Users, CurrencyCircleDollar } from "phosphor-react";

export function Details() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function closeModal() {
    setIsOpenModal(false);
  }

  function openModal() {
    setIsOpenModal(true);
  }

  return (
    <div className="min-h-screen">
      <Header className="h-80 pt-[70px] bg-barbecue bg-yellow" />

      <main className={`-mt-28`}>
        <div className={`px-6`}>
          <div className="mb-6 flex items-center justify-between">
            <Link to="/dashboard">
              <Button
                className="flex items-center gap-2 text-sm"
                shape="secondary"
              >
                <ArrowLeft size={24} />
                Voltar
              </Button>
            </Link>

            <Button
              onClick={openModal}
              className="flex items-center gap-2 text-sm focus-effect focus:ring-black"
            >
              <Users size={24} />
              Adicionar membro
            </Button>
          </div>

          <div className="bg-white shadow-md p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-[28px] font-medium">01/12</span>
                <strong className="text-4xl">Niver do Gui</strong>
              </div>

              <div className="flex flex-col gap-4">
                <span className={`text-xl font-medium flex items-center gap-3`}>
                  <Users size={24} />
                  20
                </span>
                <span className={`text-xl font-medium flex items-center gap-3`}>
                  <CurrencyCircleDollar size={24} />
                  R$200
                </span>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex flex-col divide-y">
                <ItemList />
                <ItemList />
                <ItemList />
              </div>
            </div>
          </div>
        </div>
      </main>

      {isOpenModal && (
        <ModalAddMember isOpen={isOpenModal} closeModal={closeModal} />
      )}
    </div>
  );
}
