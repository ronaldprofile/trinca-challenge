import { prismaClient } from "../../prisma/prismaClient";

interface CreateBarbecue {
  userId: string;
  title: string;
  description?: string;
  scheduled_day?: string;
}

export class CreateBarbecueService {
  async create({ userId, title, description, scheduled_day }: CreateBarbecue) {
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
        scheduled_day,
        amount_collected: 0,
        barbecueId: userId,
      },
    });

    return newBarbecue;
  }
}
