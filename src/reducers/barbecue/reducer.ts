import produce from "immer";
import { ActionsType } from "./actions";
import { IBarbecue } from "../../types";

interface BarbecuesState {
  barbecues: IBarbecue[];
}

export function barbecuesReducer(state: BarbecuesState, action: any) {
  if (action.type === ActionsType.ADD_NEW_BARBECUE) {
    return produce(state, (draft) => {
      draft.barbecues.push(action.payload.newBarbecue);
    });
  }

  if (action.type === ActionsType.ADD_NEW_MEMBER_T0_BARBECUE) {
    return produce(state, (draft) => {
      const barbecueExists = draft.barbecues.find((barbecue) => {
        return barbecue.id === action.payload.barbecueListId ? barbecue : null;
      });

      barbecueExists?.members.push(action.payload.newMember);
    });
  }

  if (action.type === ActionsType.UPDATE_MEMBER_PAYMENT_STATUS) {
    return produce(state, (draft) => {
      const barbecueExists = draft.barbecues.find((barbecue) => {
        return barbecue.id === action.payload.barbecueListId ? barbecue : null;
      });

      if (barbecueExists != undefined) {
        const member: any = barbecueExists.members.find(
          (member) => member.id === action.payload.memberId
        );

        member.paid = !member.paid;
      }
    });
  }

  if (action.type === ActionsType.CALCULATE_CONTRIBUTION_MEMBERS) {
    return produce(state, (draft) => {
      const barbecueExists = draft.barbecues.find(
        (barbecue) => barbecue.id === action.payload.barbecueListId
      );

      if (barbecueExists != undefined) {
        const membersContribution = barbecueExists.members.filter(member => member.paid === true)
        .reduce((acc, member) => {
          const drinkValue = member.hasDrinkIncluded ? 20 : 0
          
          return acc + member.contribution + drinkValue
        }, 0)

        barbecueExists.totalAmountCollected = membersContribution
      }
    });
  }

  return state; 
}
