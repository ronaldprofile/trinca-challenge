import { Link } from "react-router-dom";
import { Users, CurrencyCircleDollar } from 'phosphor-react'
import { formatPrice } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";

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
  date: dateToBarbecue,
  amountCollected,
  totalMembers,
}: CardBarbecueProps) {
  const dateFormatted = formatDate(dateToBarbecue, {
    day: '2-digit', month: '2-digit'
  });

  const dateToBarbecueFormattedFull = formatDate(dateToBarbecue, {
    day: 'numeric', month: 'numeric', year: 'numeric'
  });

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
        <time
          dateTime={dateToBarbecue.toISOString()}
          title={dateToBarbecueFormattedFull}
          className={`font-bold text-base sm:text-[28px]`}
        >
          {dateFormatted}
        </time>
        <span className={`font-bold text-xl text-black/80`}>{title}</span>
      </div>

      <div className={`mt-12 flex items-center justify-between`}>
        <span className={`text-sm sm:text-xl font-medium flex items-center gap-3`}>
          <Users size={24} />
          {totalMembers}
        </span>
        
        <span className={`text-base sm:text-xl font-medium flex items-center gap-3`}>
          <CurrencyCircleDollar size={24} />
          {formatPrice(amountCollected)}
        </span>
      </div>
    </Link>
  );
}
