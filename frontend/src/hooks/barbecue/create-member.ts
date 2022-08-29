import { IMember } from "../../types";
import { api } from "../../services/api";

type CreateNewBarbecue = Omit<IMember, "id">;

export async function createMember(
  barbecueId: string,
  barbecueData: CreateNewBarbecue
) {
  const response = await api.post(`/create/member/${barbecueId}`, {
    ...barbecueData,
  });

  const barbecue = response.data;

  return barbecue;
}
