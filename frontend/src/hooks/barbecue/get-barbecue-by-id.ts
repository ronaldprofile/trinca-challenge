import { api } from "../../services/api";
import { getLocalStorage } from "../../utils";
import { IBarbecue } from "../../types";
import { useQuery } from "@tanstack/react-query";

type BarbecueResponse = IBarbecue;

export const getBarbecueById = async (barbecueId: string | undefined) => {
  const userId = getLocalStorage<string>("@trinca-user$id");

  const url = `/barbecue/${userId}/${barbecueId}`;

  try {
    const response = await api.get<BarbecueResponse>(url);
    const data = response.data;

    return data;
  } catch (error) {
    if (error) console.log(error);
  }
};

export function useGetBarbecueById(barbecueId: string | undefined) {
  return useQuery(
    ["barbecue", barbecueId],
    async () => await getBarbecueById(barbecueId)
  );
}
