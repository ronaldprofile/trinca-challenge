import { Router } from "express";
import { CreateBarbecueController } from "./controllers/barbecue/CreateBarbecueController";
import { CreateMemberController } from "./controllers/barbecue/CreateMemberController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { GetUserByIdController } from "./controllers/user/GetUserByIdController";
import { LoginUserController } from "./controllers/user/LoginUserController";

const router = Router();

router.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

router.get("/user", new GetUserByIdController().handle);
router.post("/signin", new LoginUserController().handle);
router.post("/signup", new CreateUserController().handle);
router.post("/create/barbecue/:userId", new CreateBarbecueController().handle);
router.post("/create/member/:barbecueId", new CreateMemberController().handle);

export { router };
