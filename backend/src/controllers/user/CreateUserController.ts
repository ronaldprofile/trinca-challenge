import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    const service = new CreateUserService();

    const result = await service.create({
      email,
      password,
    });

    return response.json(result);
  }
}
