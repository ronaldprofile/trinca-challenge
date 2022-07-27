import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useBarbecues } from "../context/Barbecue/BarbecueContext";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { MemberItem } from "../components/MemberList/MemberItem";
import { ModalAddMember } from "../components/ModalAddMember";
import { ArrowLeft, Users, CurrencyCircleDollar } from "phosphor-react";
import { formatPrice } from "../utils/formatCurrency";

export function Details() {
  const { id: currentBarbecueId } = useParams();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { barbecues, calculateContributionMembers } = useBarbecues();

  const currentBarbecue = barbecues.find((barbecue) =>
    barbecue.id === currentBarbecueId ? barbecue : null
  );

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
          <div className="mb-6 flex flex-col gap-2 sm:justify-between sm:flex-row">
            <Link to="/dashboard" title="Voltar para o inicio" className="h-[50px] px-5 transparent text-black hover:bg-black hover:text-white border border-black transition-colors flex items-center justify-center gap-2 text-xs font-bold uppercase rounded md:text-sm">
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

          <div className="bg-white shadow-md p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <time className="text-base sm:text-[28px] font-medium">01/09</time>
                <strong className="text-base sm:text-4xl">{currentBarbecue?.title}</strong>

                {currentBarbecue?.informationAdditional && (
                  <span>{currentBarbecue.informationAdditional}</span>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <span className={`text-base sm:text-xl font-medium flex items-center gap-3`}>
                  <Users size={24} />
                  {currentBarbecue?.members.length}
                </span>
                <span className={`text-base sm:text-xl font-medium flex items-center gap-3`}>
                  <CurrencyCircleDollar size={24} />
                  {formatPrice(currentBarbecue?.totalAmountCollected!)}
                </span>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex flex-col divide-y">
                {currentBarbecue!.members.length <= 0 ? (
                  <span>nenhum item</span>
                ) : (
                  currentBarbecue?.members.map((member) => {
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
                  })
                )}
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
