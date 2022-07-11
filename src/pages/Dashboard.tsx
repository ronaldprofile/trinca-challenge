import { useState } from "react";
import { SignOut } from "phosphor-react";
import { useUser } from "../context/UserContext";
import { ModalAddBarbecue } from "../components/ModalAddBarbecue";
import { CardBarbecue } from "../components/CardBarbecue";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { IBarbecue } from "../types";

export function Dashboard() {
  const { user, signOut } = useUser();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [barbecuesList, setBarbecuesList] = useState<IBarbecue[]>([]);

  async function addBarbecue(newBarbecue: IBarbecue) {
    setBarbecuesList(prevState => [...prevState, newBarbecue]);
  }

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

            {user && (
              <Button
                onClick={signOut}
                shape="secondary"
                danger
                className="text-sm flex items-center gap-2"
              >
                <SignOut size={24} />
                sair
              </Button>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {barbecuesList.length <= 0 ? (
              <div className="p-5 w-full bg-white shadow-md">
                <span className="font-normal text-xl">
                  Nenhum evento adicionado
                </span>
              </div>
            ) : (
              barbecuesList.map(barbecue => (
                <CardBarbecue
                  key={barbecue.id}
                  id={barbecue.id}
                  title={barbecue.title}
                  date={barbecue.date}
                  amountCollected={barbecue.totalAmountCollected}
                  totalMembers={barbecue.members.length}
                />
              ))
            )}
          </div>
        </div>
      </main>

      {isOpenModal && (
        <ModalAddBarbecue
          isOpen={isOpenModal}
          closeModal={closeModal}
          onAddBarbecue={addBarbecue}
        />
      )}
    </div>
  );
}
