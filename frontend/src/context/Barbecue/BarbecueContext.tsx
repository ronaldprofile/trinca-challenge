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
  hasDrinkIncluded: boolean | 'indeterminate';
}

interface BarbecueContextType {
  barbecues: IBarbecue[] | undefined;
  createNewBarbecue: (newBarbecue: CreateNewBarbecueData) => Promise<void>;
  updateMemberPaymentStatus: (memberId: string, barbecueListId: string) => void;
  calculateContributionMembers: (barbecueListId: string) => void;
  addMemberToBarbecue: (
    barbecueListId: string,
    newMember: CreateNewMemberToBarbecue
  ) => Promise<void>;
}

export const BarbecueContext = createContext({} as BarbecueContextType);

export const useBarbecues = () => useContext(BarbecueContext)