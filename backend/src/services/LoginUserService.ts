import { prismaClient } from "../prisma/prismaClient";

interface LoginType {
  email: string;
  password: string;
}

export class LoginUserService {
  async login({ email, password }: LoginType) {
    const user = await prismaClient.user.findFirst({
      where: {
        email,
        password,
      },
    });

    return user;
  }
}
