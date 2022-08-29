import { api } from "../../services/api";
import { getLocalStorage } from "../../utils";
import { IBarbecue } from "../../types";
import { useQuery } from "@tanstack/react-query";

type BarbecueResponse = IBarbecue;

export const getBarbecueById = async (barbecueId: string | undefined) => {
  const userId = getLocalStorage<string>("@trinca-user$id");

  try {
    const response = await api.get<BarbecueResponse>(
      `/barbecue/${userId}/${barbecueId}`
    );
    const data = response.data;

    return data;
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};

export function useBarbecue(barbecueId: string | undefined) {
  return useQuery(
    ["barbecue", barbecueId],
    async () => await getBarbecueById(barbecueId)
  );
}
