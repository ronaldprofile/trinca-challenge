import { Request, Response } from "express";
import { CreateBarbecueService } from "../../services/barbecue/CreateBarbecueService";

export class CreateBarbecueController {
  async handle(request: Request, response: Response) {
    const { id, title, description } = request.body;

    const service = new CreateBarbecueService();
    const result = await service.create(id, { title, description });

    return response.json(result);
  }
}
