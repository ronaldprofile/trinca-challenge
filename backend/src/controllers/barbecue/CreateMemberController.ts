import { Request, Response } from "express";
import { CreateMemberService } from "../../services/barbecue/CreateMemberService";

interface Member {
  name: string;
  paid: boolean;
  hasDrinkIncluded?: boolean;
  contribution: number;
}

export class CreateMemberController {
  async handle(request: Request, response: Response) {
    const member: Member = request.body;
    const { barbecueId } = request.params;

    const service = new CreateMemberService();
    const result = await service.create(barbecueId, member);
    return response.json(result);
  }
}
