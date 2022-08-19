import { api } from "../../services/api";

export async function getUser(id: string) {
  try {
    const response = await api.get(`/user`, {
      params: {
        id,
      },
    });

    const user = response.data;
    return user;
  } catch (error) {
    console.log(error);
  }
}
