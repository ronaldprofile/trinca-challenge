import { prismaClient } from "../../prisma/prismaClient";

export class UpdateAmountBarbecueService {
  async update(barbecueId: string, amount: number) {
    const barbecueExists = await prismaClient.barbecue.findFirst({
      where: {
        id: barbecueId,
      },

      include: {
        members: true,
      },
    });

    if (!barbecueExists) {
      throw new Error("barbecue not found");
    }

    const membersContribution = barbecueExists.members
      .filter((member) => member.paid === true)
      .reduce((acc, member) => {
        const drinkAmount = member.hasDrinkIncluded ? 20 : 0;

        return acc + member.contribution + drinkAmount;
      }, 0);

    const barbecueUpdated = await prismaClient.barbecue.update({
      where: {
        id: barbecueId,
      },

      data: {
        amount_collected: membersContribution,
      },
    });

    return barbecueUpdated;
  }
}
