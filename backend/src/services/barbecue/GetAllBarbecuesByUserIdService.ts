import { prismaClient } from "../../prisma/prismaClient";

export class GetAllBarbecuesByUserIdService {
  async getBarbecuesByUserId(userId: string) {
    const userExists = await prismaClient.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new Error("user not found");
    }

    const allBarbecues = await prismaClient.barbecue.findMany({
      where: {
        barbecueId: userId,
      },

      include: {
        members: true
      }
    });

    return allBarbecues;
  }
}
