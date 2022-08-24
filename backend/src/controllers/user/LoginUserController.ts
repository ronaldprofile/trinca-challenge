import { Request, Response } from "express";
import { LoginUserService } from "../../services/user/LoginUserService";

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
