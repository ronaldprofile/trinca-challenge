import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import peopleIcon from "../assets/people.svg";
import moneyIcon from "../assets/money.svg";

interface CardBarbecueProps {
  id: string;
  title: string;
  date: Date;
  amountCollected: number;
  totalMembers: number;
}

export function CardBarbecue({
  id,
  title,
  date,
  amountCollected,
  totalMembers
}: CardBarbecueProps) {
  const dateFormatted = format(date, "dd/MM", { locale: ptBR });

  return (
    <Link
      to={`/details/${id}`}
      title="ver detalhes"
      className={`w-full p-6 bg-white text-black shadow-md rounded-sm
        border-2 border-transparent hover:-translate-y-1 transition-all
        hover:border-yellow ease-in
      `}
    >
      <div className={`flex flex-col gap-2`}>
        <span className={`font-bold text-[28px]`}>{dateFormatted}</span>
        <span className={`font-bold text-xl text-black/80`}>{title}</span>
      </div>

      <div className={`mt-12 flex items-center justify-between`}>
        <span className={`text-xl font-medium flex items-center gap-3`}>
          <img src={peopleIcon} alt="people icon" />
          {totalMembers}
        </span>
        <span className={`text-xl font-medium flex items-center gap-3`}>
          <img src={moneyIcon} alt="money icon" />
          {amountCollected}
        </span>
      </div>
    </Link>
  );
}
