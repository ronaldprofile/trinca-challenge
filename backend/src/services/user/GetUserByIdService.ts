import { prismaClient } from "../../prisma/prismaClient";

export class GetUserByIdService {
  async getUserById(userId: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: userId,
      },

      include: {
        barbecues: true
      }
    });

    return user;
  }
}
