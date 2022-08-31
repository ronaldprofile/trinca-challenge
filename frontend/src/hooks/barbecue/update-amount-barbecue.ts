import { api } from "../../services/api";

type BarbecueId = string | undefined;

interface UpdatePaymentStatus {
  paid: boolean;
  memberId: string;
}

interface UpdateBarbecueAmount {
  barbecueId: BarbecueId;
  membersContribution: number;
}

export const updateMemberPaymentStatus = async ({
  memberId,
  paid,
}: UpdatePaymentStatus) => {
  try {
    await api.patch(`/update/paid/member/${memberId}`, {
      paid,
    });
  } catch (error) {
    if (error) console.log(error);
  }
};

export const updateAmountBarbecue = async ({
  barbecueId,
  membersContribution,
}: UpdateBarbecueAmount) => {
  try {
    await api.patch(`/update/amount/barbecue/${barbecueId}`, {
      amount: membersContribution,
    });
  } catch (error) {
    if (error) console.log(error);
  }
};
