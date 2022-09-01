import { MemberItem } from "../../../../components/MemberList/MemberItem";
import { IMember } from "../../../../types";

interface ListMembersProps {
  members: IMember[];
  barbecueId?: string;
  isFetchingBarbecue: boolean;
}

export function ListMembers({
  members,
  barbecueId,
  isFetchingBarbecue,
}: ListMembersProps) {
  const membersQuantity = members.length;

  return (
    <div className="mt-10">
      <div className="flex flex-col divide-y">
        {membersQuantity <= 0 ? (
          <span>nenhum membro por aqui</span>
        ) : (
          members.map((member) => {
            return (
              <MemberItem
                key={member.id}
                member={member}
                barbecueId={barbecueId}
                isFetchingBarbecue={isFetchingBarbecue}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
