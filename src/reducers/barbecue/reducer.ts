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
      const barbecue = draft.barbecues.find((barbecue) => {
        return barbecue.id === action.payload.barbecueListId ? barbecue : null;
      });

      barbecue?.members.push(action.payload.newMember);
    });
  }

  return state;
}
