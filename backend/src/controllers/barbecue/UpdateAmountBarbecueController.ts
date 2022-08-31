import { Request, Response } from "express";
import { UpdateAmountBarbecueService } from "../../services/barbecue/UpdateAmountBarbecueService";

export class UpdateAmountBarbecueController {
  async handle(request: Request, response: Response) {
    const { barbecueId } = request.params;
    const { amount } = request.body;

    const service = new UpdateAmountBarbecueService();

    const result = await service.update(barbecueId, amount);

    return response.json(result);
  }
}
