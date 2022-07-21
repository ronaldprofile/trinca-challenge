import { createContext, useContext } from 'react'
import { IBarbecue } from '../../types';


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

interface BarbecueContextType {
  barbecues: IBarbecue[];
  createNewBarbecue: (newBarbecue: CreateNewBarbecueData) => Promise<void>;
  addMemberToBarbecue: (
    barbecueListId: string,
    newMember: CreateNewMemberToBarbecue
  ) => Promise<void>;
}

export const BarbecueContext = createContext({} as BarbecueContextType);

export const useBarbecues = () => useContext(BarbecueContext)