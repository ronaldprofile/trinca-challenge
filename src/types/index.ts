export interface IUser {
  email: string;
  password: string;
}

export interface IBarbecue {
  id: string;
  title: string;
  date: Date;
  informationAdditional?: string;

  members: IMember[];
  totalAmountCollected: number;
}

export interface IMember {
  name: string;
  contribution: string;
  paid: boolean;
  hasDrinkIncluded: boolean;
}
