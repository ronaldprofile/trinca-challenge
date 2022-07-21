import { CreateNewMemberToBarbecue } from "../../context/Barbecue/BarbecueContext";
import { IBarbecue } from "../../types";

export enum ActionsType {
  ADD_NEW_BARBECUE = "ADD_NEW_BARBECUE",
  ADD_NEW_MEMBER_T0_BARBECUE = "ADD_NEW_MEMBER_T0_BARBECUE",
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
      barbecueListId
    },
  };
}
