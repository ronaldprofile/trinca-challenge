import { prismaClient } from "../../prisma/prismaClient";

interface GetBarbecueById {
  barbecueId: string;
  userId: string;
}

export class GetBarbecueByIdService {
  async getBarbecueById({ barbecueId, userId }: GetBarbecueById) {
    const barbecueExists = await prismaClient.barbecue.findFirst({
      where: {
        id: barbecueId,
        barbecueId: userId,
      },

      include: {
        members: true,
      },
    });

    if (!barbecueExists) {
      throw new Error("barbecue not found");
    }

    return barbecueExists;
  }
}
