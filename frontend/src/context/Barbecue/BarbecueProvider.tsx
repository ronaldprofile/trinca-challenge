import { ReactNode, useEffect, useReducer } from "react";
import {
  addNewBarbecueAction,
  addNewMemberToBarbecueAction,
  calculateContributionMembersAction,
  updateMemberPaymentStatusAction,
} from "../../reducers/barbecue/actions";

import { barbecuesReducer } from "../../reducers/barbecue/reducer";
import { setLocalStorage } from "../../utils";
import { IMember } from "../../types";

import { v4 as useId } from "uuid";
import { BarbecueContext } from "./BarbecueContext";

interface BarbecueContextProviderProps {
  children: ReactNode;
}

interface CreateNewBarbecueData {
  title: string;
  date: Date;
  informationAdditional: string;
}

export interface CreateNewMemberToBarbecue {
  name: string;
  contribution: number;
  hasDrinkIncluded: boolean | "indeterminate";
}

export function BarbecueContextProvider({
  children,
}: BarbecueContextProviderProps) {
  const [barbecuesState, dispatch] = useReducer(
    barbecuesReducer,
    {
      barbecues: [],
    },
    () => {
      return { barbecues: [] };
    }
  );

  const { barbecues } = barbecuesState;

  useEffect(() => {
    setLocalStorage("@trinca-barbecues-list", barbecuesState);
  }, [barbecuesState]);

  async function createNewBarbecue(data: CreateNewBarbecueData) {
    const newBarbecue = {
      title: data.title,
      scheduled_day: data.date,
      members: [],
      amount_collected: 0,
      description: data.informationAdditional,
    };

    dispatch(addNewBarbecueAction(newBarbecue));
  }

  async function addMemberToBarbecue(
    barbecueListId: string,
    data: CreateNewMemberToBarbecue
  ) {
    const id = useId();

    const newMember: IMember = {
      id,
      name: data.name,
      contribution: data.contribution,
      hasDrinkIncluded: data.hasDrinkIncluded,
      paid: false,
    };

    dispatch(addNewMemberToBarbecueAction(newMember, barbecueListId));
  }

  function updateMemberPaymentStatus(memberId: string, barbecueListId: string) {
    dispatch(updateMemberPaymentStatusAction(memberId, barbecueListId));
  }

  function calculateContributionMembers(barbecueListId: string) {
    dispatch(calculateContributionMembersAction(barbecueListId));
  }

  return (
    <BarbecueContext.Provider
      value={{
        barbecues,
        createNewBarbecue,
        addMemberToBarbecue,
        updateMemberPaymentStatus,
        calculateContributionMembers,
      }}
    >
      {children}
    </BarbecueContext.Provider>
  );
}
