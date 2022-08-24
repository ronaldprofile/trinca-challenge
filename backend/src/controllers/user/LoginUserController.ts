import { Request, Response } from "express";
import { compare } from "bcrypt";
import { prismaClient } from "../prisma/prismaClient";
import { LoginUserService } from "../services/user/LoginUserService";

interface UserCredentials {
  password: string;
  email: string;
}

export class LoginUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const service = new LoginUserService();

    const user = await service.login({
      email,
      password,
    });

    return response.json(user);
  }
}
