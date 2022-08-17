import { prismaClient } from "../prisma/prismaClient";

interface CreateUserData {
  email: string;
  password: string;
}

export class CreateUserService {
  async create(data: CreateUserData) {
    const { email, password } = data;

    const user = await prismaClient.user.create({
      data: {
        email,
        password,
      },
    });

    return user;
  }
}
