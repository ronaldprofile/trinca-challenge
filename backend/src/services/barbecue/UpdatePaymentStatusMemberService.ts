import { prismaClient } from "../../prisma/prismaClient";

export class UpdatePaymentStatusMemberService {
  async update(memberId: string) {
    const memberExists = await prismaClient.member.findFirst({
      where: {
        id: memberId,
      },
    });

    if (!memberExists) {
      throw new Error("member not found");
    }

    const member = await prismaClient.member.update({
      where: {
        id: memberId,
      },

      data: {
        paid: !memberExists.paid,
      },
    });

    return member;
  }
}
