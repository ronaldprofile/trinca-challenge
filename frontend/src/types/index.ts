export interface IUser {
  email: string;
  password: string;
}

export interface IBarbecue {
  id: string;
  title: string;
  description?: string;
  amount_collected: number;
  scheduled_day: Date | string;

  members: IMember[];
}

export interface IMember {
  id: string;
  name: string;
  contribution: number;
  paid: boolean;
  hasDrinkIncluded: boolean | 'indeterminate';
}
