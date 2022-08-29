import { Request, Response } from "express";
import { GetAllBarbecuesByUserIdService } from "../../services/barbecue/GetAllBarbecuesByUserIdService";

export class GetAllBarbecuesByUserIdController {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;

    const service = new GetAllBarbecuesByUserIdService();

    const result = await service.getBarbecuesByUserId(userId);

    return response.json(result);
  }
}
