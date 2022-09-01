import { Link } from "react-router-dom";
import { Users, CurrencyCircleDollar } from "phosphor-react";
import { formatPrice } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";
import Skeleton from "react-loading-skeleton";
import { IBarbecue } from "../types";

interface CardBarbecueProps {
  barbecue: IBarbecue;
  isFetchingBarbecue: boolean;
}

export function CardBarbecue({
  barbecue,
  isFetchingBarbecue,
}: CardBarbecueProps) {
  const dateFormatted = formatDate(new Date(barbecue.scheduled_day), {
    day: "2-digit",
    month: "2-digit",
  });

  const dateToBarbecueFormattedFull = formatDate(
    new Date(barbecue.scheduled_day),
    {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    }
  );

  return (
    <Link
      to={`/details/${barbecue.id}`}
      title="ver detalhes"
      className={`w-full p-6 bg-white text-black shadow-lg rounded-sm
        border-2 border-transparent hover:-translate-y-2 transition-all
      `}
    >
      <div className={`flex flex-col gap-2`}>
        {!isFetchingBarbecue ? (
          <time
            dateTime={new Date(barbecue.scheduled_day).toISOString()}
            title={dateToBarbecueFormattedFull}
            className={`font-bold text-base sm:text-[28px]`}
          >
            {dateFormatted}
          </time>
        ) : (
          <Skeleton width={84} height={33} />
        )}

        {!isFetchingBarbecue ? (
          <span className={`font-bold text-xl text-black/80`}>
            {barbecue.title}
          </span>
        ) : (
          <Skeleton width={124} height={25} />
        )}
      </div>

      <div className={`mt-12 flex items-center justify-between`}>
        {!isFetchingBarbecue ? (
          <span
            className={`text-sm sm:text-xl font-medium flex items-center gap-3`}
          >
            <Users size={24} />
            {barbecue.members.length}
          </span>
        ) : (
          <Skeleton width={84} height={25} />
        )}

        {!isFetchingBarbecue ? (
          <span
            className={`text-base sm:text-xl font-medium flex items-center gap-3`}
          >
            <CurrencyCircleDollar size={24} />
            {formatPrice(barbecue.amount_collected)}
          </span>
        ) : (
          <Skeleton width={84} height={25} />
        )}
      </div>
    </Link>
  );
}
