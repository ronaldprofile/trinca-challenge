export interface IUser {
  email: string;
  password: string;
}

export interface IBarbecue {
  id: string;
  title: string;
  date: Date | string;
  informationAdditional?: string;

  members: IMember[];
  totalAmountCollected: number;
}

export interface IMember {
  id: string;
  name: string;
  contribution: number;
  paid: boolean;
  hasDrinkIncluded: boolean;
}
