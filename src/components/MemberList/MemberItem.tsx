import { useState } from "react";
import { Wine } from "phosphor-react";

interface MemberItemProps {
  barbecueListId?: string;
  memberId: string;
  name: string;
  contribution: number;
  hasDrinkIncluded: boolean;
}

export function MemberItem({
  name,
  contribution,
  hasDrinkIncluded,
}: MemberItemProps) {
  const [memberPaidContribution, setMemberPaidContribution] = useState("");
  const memberHasAlreadyPaid = memberPaidContribution === "on";

  if (memberHasAlreadyPaid) {
    // atualizar amount do barbecue
    console.log("pagou a contribuição");
  } else {
    console.log("não pagou a contribuição");
  }

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
          onChange={(event) => setMemberPaidContribution(event.target.value)}
        />

        <span className="text-xl font-medium text-black/80">{name}</span>
        {hasDrinkIncluded && (
          <span
            className="text-black cursor-pointer"
            title={`Bebida inclusa, R$ 20,00  `}
          >
            <Wine size={24} weight="fill" />
          </span>
        )}
      </div>

      <span className="text-xl font-medium text-black/80">R$ {total}</span>
    </div>
  );
}
