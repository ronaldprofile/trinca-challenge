import { useState } from "react";
import { useBarbecues } from "../../context/Barbecue/BarbecueContext";
import { Wine } from "phosphor-react";

interface MemberItemProps {
  barbecueListId?: string;
  memberId: string;
  name: string;
  contribution: number;
  hasDrinkIncluded: boolean;
  paid: boolean;
}

export function MemberItem({
  memberId,
  barbecueListId,
  name,
  contribution,
  hasDrinkIncluded,
  paid,
}: MemberItemProps) {
  const [memberPaidContribution, setMemberPaidContribution] = useState(paid);

  const { updateMemberPaymentStatus } = useBarbecues();

  function totalMemberWillPay(drink: number, contribution: number) {
    if (hasDrinkIncluded) {
      const total = Number(contribution + drink);

      return total;
    } else {
      return contribution;
    }
  }

  const total = totalMemberWillPay(20, contribution);

  return (
    <div className="py-[10px] flex items-center justify-between">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="member_paid_contribution"
          id="member_paid_contribution"
          checked={memberPaidContribution}
          onChange={(event) => {
            updateMemberPaymentStatus(memberId, barbecueListId!);
            setMemberPaidContribution(event.target.checked)
          }}
        />

        <span
          className={`text-xl font-medium text-black/80 ${
            paid && "line-through"
          }`}
        >
          {name}
        </span>

        {hasDrinkIncluded && (
          <span
            className="text-black cursor-pointer"
            title={`Bebida inclusa, R$ 20,00  `}
          >
            <Wine size={24} weight="fill" />
          </span>
        )}
      </div>

      <span
        className={`text-xl font-medium text-black/80 ${
          paid && "line-through"
        }`}
      >
        R$ {total}
      </span>
    </div>
  );
}
