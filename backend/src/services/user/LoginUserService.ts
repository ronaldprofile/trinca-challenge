import { prismaClient } from "../../prisma/prismaClient";
import { compare } from "bcrypt";

interface LoginType {
  email: string;
  password: string;
}

export class LoginUserService {
  async login({ email, password }: LoginType) {
    const userExists = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (!userExists) {
      throw new Error("login or passoword is invalid");
    }

    const passowordMatch = await compare(password, userExists.password);

    if (!passowordMatch) {
      throw new Error("login or passoword is invalid");
    }

    return userExists
  }
}
