import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

interface User {
  email: string;
  password: string;
}

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const user: User = request.body;
    const { email, password } = user;

    const service = new CreateUserService();

    const userCreated = await service.create({
      email,
      password,
    });

    return response.json(userCreated);
  }
}
