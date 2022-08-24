import { Request, Response } from "express";
import { GetUserByIdService } from "../../services/user/GetUserByIdService";

export class GetUserByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new GetUserByIdService();
    const user = await service.getUserById(id);

    return response.json(user);
  }
}
