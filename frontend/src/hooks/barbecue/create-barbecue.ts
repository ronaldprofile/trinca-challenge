import { IBarbecue } from "../../types";
import { api } from "../../services/api";
import { getLocalStorage } from "../../utils";

type CreateNewBarbecue = Omit<IBarbecue, "id">;

export async function createBarbecue(barbecueData: CreateNewBarbecue) {
  const userId = getLocalStorage<string>("@trinca-user$id");

  const response = await api.post(`/create/barbecue/${userId}`, {
    ...barbecueData,
  });

  const barbecue = response.data;

  return barbecue;
}
