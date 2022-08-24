import { prismaClient } from "../../prisma/prismaClient";

interface CreateBarbecue {
  title: string;
  description?: string;
}

export class CreateBarbecueService {
  async create(userId: string, { title, description }: CreateBarbecue) {
    const userExists = await prismaClient.user.findFirst({
      where: {
        id: userId,
      },

      include: {
        barbecues: true,
      },
    });

    if (!userExists) {
      throw new Error("user not found");
    }

    const newBarbecue = await prismaClient.barbecue.create({
      data: {
        title,
        description,
        amount_collected: 0,
        barbecueId: userId,
      },

      include: {
        user: true,
        members: true,
      },
    });

    return newBarbecue;
  }
}
