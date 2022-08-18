import { Request, Response } from "express";
import { LoginUserService } from "../services/LoginUserService";

interface UserCredentials {
  password: string;
  email: string;
}

export class LoginUserController {
  async handle(request: Request, response: Response) {
    const credentials: UserCredentials = request.body;

    const { email, password } = credentials;

    const service = new LoginUserService();
    const user = await service.login({
      email,
      password,
    });

    return response.json(user);
  }
}
