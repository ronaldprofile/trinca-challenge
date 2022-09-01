import { api } from "../../services/api";
import { getLocalStorage } from "../../utils";
import { IBarbecue } from "../../types";
import { useQuery } from "@tanstack/react-query";

type BarbecueResponse = IBarbecue[];

export const getAllBarbecues = async () => {
  const userId = getLocalStorage<string>("@trinca-user$id");

  try {
    const response = await api.get<BarbecueResponse>(`/barbecues/${userId}`);
    const data = response.data;

    const barbecues = data.map((barbecue) => {
      return {
        id: barbecue.id,
        title: barbecue.title,
        description: barbecue.description,
        scheduled_day: barbecue.scheduled_day,
        amount_collected: barbecue.amount_collected,
        members: barbecue.members,
      };
    });

    return barbecues;
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};

export const useBarbecues = () =>
  useQuery(["barbecues"], async () => await getAllBarbecues());
