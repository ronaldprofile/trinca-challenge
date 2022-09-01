import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  updateMemberPaymentStatus,
  updateAmountBarbecue,
} from "../../hooks/barbecue/update-amount-barbecue";
import { Checkbox, CheckboxIndicator } from "../Checkbox";
import { Wine, Check as CheckIcon } from "phosphor-react";
import { formatPrice } from "../../utils/formatCurrency";
import Skeleton from "react-loading-skeleton";
import { IMember } from "../../types";

interface MemberItemProps {
  member: IMember;
  isFetchingBarbecue: boolean;
  barbecueId: string | undefined;
}

type MemberPaidContribution = boolean | "indeterminate";

export function MemberItem({
  barbecueId,
  member,
  isFetchingBarbecue,
}: MemberItemProps) {
  const [checked, setChecked] = useState<MemberPaidContribution>(member.paid);
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async () => {
      await updateMemberPaymentStatus({
        memberId: member.id,
        paid: member.paid,
      });

      await updateAmountBarbecue({
        barbecueId,
        membersContribution: totalMemberWillPay(20, member.contribution),
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["barbecue", barbecueId]);
      },
    }
  );

  const totalMemberWillPay = (drink: number, contribution: number) => {
    if (member.hasDrinkIncluded) {
      const total = Number(contribution + drink);

      return total;
    } else {
      return contribution;
    }
  };

  if (!isFetchingBarbecue) {
    return (
      <div className="py-[10px] flex sm:flex-row sm:items-center justify-between">
        <div className="flex items-center gap-3">
          <Checkbox
            className="transition-colors"
            checked={checked}
            onCheckedChange={setChecked}
            onClick={async () => await mutateAsync()}
          >
            <CheckboxIndicator>
              <CheckIcon />
            </CheckboxIndicator>
          </Checkbox>

          <span
            className={`text-base sm:text-xl font-medium text-black/80 transition-all ${
              member.paid && "line-through"
            }`}
          >
            {member.name}
          </span>

          {member.hasDrinkIncluded && (
            <span
              className="text-base sm:text-2xl text-black cursor-pointer"
              title={`Bebida inclusa, R$ 20,00  `}
            >
              <Wine weight="fill" />
            </span>
          )}
        </div>

        <span
          className={`text-base sm:text-xl font-medium text-black/80 transition-all ${
            member.paid && "line-through"
          }`}
        >
          {formatPrice(totalMemberWillPay(20, member.contribution))}
        </span>
      </div>
    );
  }

  return <Skeleton height={35} />;
}
