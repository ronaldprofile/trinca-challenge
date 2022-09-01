import Skeleton from "react-loading-skeleton";
import { CurrencyCircleDollar, Users } from "phosphor-react";
import { formatPrice } from "../../../../utils/formatCurrency";
import { formatDate } from "../../../../utils/formatDate";

interface BarbecueInfoProps {
  title: string;
  description?: string;
  membersQuantity: number;
  amount_collected: number;
  scheduled_day: string | Date;
  isFetchingBarbecue: boolean;
}

export function BarbecueInfo({
  title,
  description,
  membersQuantity,
  scheduled_day,
  amount_collected,
  isFetchingBarbecue,
}: BarbecueInfoProps) {
  
    const scheduledDay = new Date(scheduled_day);

    const formattedDate = formatDate(scheduledDay, {
      day: "2-digit",
      month: "2-digit",
    });
  
    return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-2">
        {!isFetchingBarbecue ? (
          <time className="text-base sm:text-[28px] font-medium">
            {formattedDate}
          </time>
        ) : (
          <Skeleton width={84} height={33} />
        )}

        {!isFetchingBarbecue ? (
          <strong className="text-base sm:text-4xl">{title}</strong>
        ) : (
          <Skeleton width={124} height={25} />
        )}

        {!isFetchingBarbecue || description ? (
          <span>{description}</span>
        ) : (
          <Skeleton count={2} width={200} height={25} />
        )}
      </div>

      <div className="flex flex-col gap-4">
        {!isFetchingBarbecue ? (
          <span
            className={`text-base sm:text-xl font-medium flex items-center gap-3 transition-all`}
          >
            <Users size={24} />
            {membersQuantity}
          </span>
        ) : (
          <Skeleton width={94} height={25} />
        )}

        {!isFetchingBarbecue ? (
          <span
            className={`text-base sm:text-xl font-medium flex items-center gap-3 transition-all`}
          >
            <CurrencyCircleDollar size={24} />
            {formatPrice(amount_collected)}
          </span>
        ) : (
          <Skeleton width={94} height={25} />
        )}
      </div>
    </div>
  );
}
