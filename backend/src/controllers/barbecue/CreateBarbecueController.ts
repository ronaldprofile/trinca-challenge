import { Request, Response } from "express";
import { CreateBarbecueService } from "../../services/barbecue/CreateBarbecueService";

export class CreateBarbecueController {
  async handle(request: Request, response: Response) {
    const { title, description, scheduled_day } = request.body;
    const { userId } = request.params;

    const service = new CreateBarbecueService();
    const result = await service.create({
      userId,
      title,
      description,
      scheduled_day,
    });

    return response.json(result);
  }
}
