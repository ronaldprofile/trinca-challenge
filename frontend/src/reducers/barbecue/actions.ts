import { CreateNewMemberToBarbecue } from "../../context/Barbecue/BarbecueContext";
import { IBarbecue } from "../../types";

export enum ActionsType {
  ADD_NEW_BARBECUE = "ADD_NEW_BARBECUE",
  ADD_NEW_MEMBER_T0_BARBECUE = "ADD_NEW_MEMBER_T0_BARBECUE",
  UPDATE_MEMBER_PAYMENT_STATUS = "UPDATE_MEMBER_PAYMENT_STATUS",
  CALCULATE_CONTRIBUTION_MEMBERS = "CALCULATE_CONTRIBUTION_MEMBERS",
}

export function addNewBarbecueAction(newBarbecue: IBarbecue) {
  return {
    type: ActionsType.ADD_NEW_BARBECUE,
    payload: {
      newBarbecue,
    },
  };
}

export function addNewMemberToBarbecueAction(
  newMember: CreateNewMemberToBarbecue,
  barbecueListId: string
) {
  return {
    type: ActionsType.ADD_NEW_MEMBER_T0_BARBECUE,
    payload: {
      newMember,
      barbecueListId,
    },
  };
}

export function updateMemberPaymentStatusAction(
  memberId: string,
  barbecueListId: string
) {
  return {
    type: ActionsType.UPDATE_MEMBER_PAYMENT_STATUS,
    payload: {
      memberId,
      barbecueListId,
    },
  };
}

export function calculateContributionMembersAction(barbecueListId: string) {
  return {
    type: ActionsType.CALCULATE_CONTRIBUTION_MEMBERS,
    payload: {
      barbecueListId,
    },
  };
}
