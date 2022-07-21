import { ReactNode, useEffect, useReducer } from "react";
import {
  addNewBarbecueAction,
  addNewMemberToBarbecueAction,
} from "../../reducers/barbecue/actions";

import { barbecuesReducer } from "../../reducers/barbecue/reducer";
import { getLocalStorage, setLocalStorage } from "../../utils";
import { IBarbecue, IMember } from "../../types";

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
  hasDrinkIncluded: boolean;
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
      const storedStateAsJSON = getLocalStorage<{ barbecues: IBarbecue[] }>(
        "@trinca-barbecues-list"
      );

      if (storedStateAsJSON) {
        return storedStateAsJSON;
      }

      return {
        barbecues: [],
      };
    }
  );

  const { barbecues } = barbecuesState;

  useEffect(() => {
    setLocalStorage("@trinca-barbecues-list", barbecuesState);
  }, [barbecuesState]);

  async function createNewBarbecue(data: CreateNewBarbecueData) {
    const id = useId();

    const newBarbecue: IBarbecue = {
      id,
      title: data.title,
      date: data.date,
      members: [],
      totalAmountCollected: 0,
      informationAdditional: data.informationAdditional,
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

  return (
    <BarbecueContext.Provider
      value={{
        barbecues,
        createNewBarbecue,
        addMemberToBarbecue,
      }}
    >
      {children}
    </BarbecueContext.Provider>
  );
}
