import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useBarbecues } from "../context/Barbecue/BarbecueContext";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { MemberItem } from "../components/MemberList/MemberItem";
import { ModalAddMember } from "../components/ModalAddMember";
import { ArrowLeft, Users, CurrencyCircleDollar } from "phosphor-react";
import { IBarbecue } from "../types";
import { formatPrice } from "../utils/formatCurrency";

export function Details() {
  const { id: currentBarbecueId } = useParams();
  const [currentBarbecue, setCurrentBarbecue] = useState<IBarbecue>();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { barbecues, calculateContributionMembers } = useBarbecues();

  useEffect(() => {
    const foundedBarbecue = barbecues.find((barbecue) =>
      currentBarbecueId === barbecue.id ? barbecue : null
    );

    if (foundedBarbecue) {
      setCurrentBarbecue(foundedBarbecue);
    }
  }, [currentBarbecueId]);

  useEffect(() => {
    calculateContributionMembers(currentBarbecueId!);
  }, [currentBarbecueId]);



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
                <time className="text-[28px] font-medium">01/09</time>
                <strong className="text-4xl">{currentBarbecue?.title}</strong>
              </div>

              <div className="flex flex-col gap-4">
                <span className={`text-xl font-medium flex items-center gap-3`}>
                  <Users size={24} />
                  {currentBarbecue?.members.length}
                </span>
                <span className={`text-xl font-medium flex items-center gap-3`}>
                  <CurrencyCircleDollar size={24} />
                  {formatPrice(currentBarbecue?.totalAmountCollected!)}
                </span>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex flex-col divide-y">
                {currentBarbecue?.members.map((member) => {
                  return (
                    <MemberItem
                      key={member.id}
                      memberId={member.id}
                      barbecueListId={currentBarbecueId}
                      name={member.name}
                      contribution={member.contribution}
                      hasDrinkIncluded={member.hasDrinkIncluded}
                      paid={member.paid}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      {isOpenModal && (
        <ModalAddMember
          isOpen={isOpenModal}
          closeModal={closeModal}
          barbecueListId={currentBarbecueId!}
        />
      )}
    </div>
  );
}
