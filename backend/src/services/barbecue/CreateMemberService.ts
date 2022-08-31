import { prismaClient } from "../../prisma/prismaClient";

interface CreateMember {
  name: string;
  contribution: number;
  paid: boolean;
  hasDrinkIncluded?: boolean;
}

export class CreateMemberService {
  async create(
    barbecueId: string,
    { name, contribution, paid, hasDrinkIncluded }: CreateMember
  ) {
    const barbecueExists = await prismaClient.barbecue.findFirst({
      where: { id: barbecueId },
      include: {
        members: true,
      },
    });

    if (!barbecueExists) {
      throw new Error("barbecue not found");
    }

    const newMember = await prismaClient.member.create({
      data: {
        name,
        contribution,
        paid,
        hasDrinkIncluded,
        memberId: barbecueId,
      },
    });

    return newMember;
  }
}
