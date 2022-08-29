import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { MemberItem } from "../components/MemberList/MemberItem";
import { ModalAddMember } from "../components/ModalAddMember";
import { ArrowLeft, Users, CurrencyCircleDollar } from "phosphor-react";
import { formatPrice } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";
import { useBarbecue } from "../hooks/barbecue/get-barbecue-by-id";
import { Loading } from "../components/Loading";

export function Details() {
  const { id: barbecueId } = useParams();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { data: barbecue, isLoading } = useBarbecue(barbecueId);

  if (!barbecue) {
    return (
      <div className="w-screen h-screen bg-barbecue bg-yellow">
        <Loading />
      </div>
    );
  }

  const scheduledDay = new Date(barbecue.scheduled_day);

  const formattedDate = formatDate(scheduledDay, {
    day: "2-digit",
    month: "2-digit",
  });

  const membersLength = barbecue.members.length;

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

          <div className="bg-white shadow-md p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <time className="text-base sm:text-[28px] font-medium">
                  {formattedDate}
                </time>
                <strong className="text-base sm:text-4xl">
                  {barbecue?.title}
                </strong>

                {barbecue?.description && <span>{barbecue.description}</span>}
              </div>

              <div className="flex flex-col gap-4">
                <span
                  className={`text-base sm:text-xl font-medium flex items-center gap-3 transition-all`}
                >
                  <Users size={24} />
                  {barbecue?.members.length}
                </span>
                <span
                  className={`text-base sm:text-xl font-medium flex items-center gap-3 transition-all`}
                >
                  <CurrencyCircleDollar size={24} />
                  {formatPrice(barbecue?.amount_collected!)}
                </span>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex flex-col divide-y">
                {membersLength <= 0 ? (
                  <span>nenhum membro por aqui</span>
                ) : (
                  !isLoading &&
                  barbecue?.members.map((member) => {
                    return (
                      <MemberItem
                        key={member.id}
                        memberId={member.id}
                        barbecueListId={barbecueId}
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
          barbecueListId={barbecueId!}
        />
      )}
    </div>
  );
}
