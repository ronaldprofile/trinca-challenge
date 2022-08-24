import { prismaClient } from "../../prisma/prismaClient";
import { hash } from "bcrypt";

interface CreateUserData {
  email: string;
  password: string;
}

export class CreateUserService {
  async create({ email, password }: CreateUserData) {
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email,
      },

      include: {
        barbecues: true,
      },
    });

    if (userAlreadyExists) {
      throw new Error("email existente, tente outro");
    }

    const encryptedPassword = await hash(password, 10);

    const user = await prismaClient.user.create({
      data: {
        email,
        password: encryptedPassword,
      },
    });

    return user;
  }
}
