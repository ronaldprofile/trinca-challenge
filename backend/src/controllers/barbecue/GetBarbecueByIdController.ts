import { Request, Response } from "express";
import { GetBarbecueByIdService } from "../../services/barbecue/GetBarbecueByIdService";

export class GetBarbecueByIdController {
  async handle(request: Request, response: Response) {
    const { userId, barbecueId } = request.params;

    const service = new GetBarbecueByIdService();

    const result = await service.getBarbecueById({ barbecueId, userId });

    return response.json(result);
  }
}
