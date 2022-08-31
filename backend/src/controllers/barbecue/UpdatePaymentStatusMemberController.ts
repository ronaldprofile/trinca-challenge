import { Request, Response } from "express";
import { UpdatePaymentStatusMemberService } from "../../services/barbecue/UpdatePaymentStatusMemberService";

export class UpdatePaymentStatusMemberController {
  async handle(request: Request, response: Response) {
    const { memberId } = request.params;

    const service = new UpdatePaymentStatusMemberService();

    const result = await service.update(memberId);

    return response.json(result);
  }
}
