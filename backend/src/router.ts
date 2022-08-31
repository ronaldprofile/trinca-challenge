import { Router } from "express";
import { UpdatePaymentStatusMemberController } from "./controllers/barbecue/UpdatePaymentStatusMemberController";
import { GetAllBarbecuesByUserIdController } from "./controllers/barbecue/GetAllBarbecuesByUserIdController";
import { UpdateAmountBarbecueController } from "./controllers/barbecue/UpdateAmountBarbecueController";
import { GetBarbecueByIdController } from "./controllers/barbecue/GetBarbecueByIdController";
import { CreateBarbecueController } from "./controllers/barbecue/CreateBarbecueController";
import { CreateMemberController } from "./controllers/barbecue/CreateMemberController";
import { GetUserByIdController } from "./controllers/user/GetUserByIdController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { LoginUserController } from "./controllers/user/LoginUserController";

const router = Router();

const updatePaymentStatusMemberController = new UpdatePaymentStatusMemberController().handle;
const getAllBarbecuesByUserIdController = new GetAllBarbecuesByUserIdController().handle;
const updateAmountBarbecueController = new UpdateAmountBarbecueController().handle;
const getBarbecueByIdController = new GetBarbecueByIdController().handle;
const createBarbecueController = new CreateBarbecueController().handle;
const createMemberController = new CreateMemberController().handle;
const getUserByIdController = new GetUserByIdController().handle;
const createUserController = new CreateUserController().handle;
const loginUserController = new LoginUserController().handle;

router.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

router.get("/user", getUserByIdController);
router.post("/signin", loginUserController);
router.post("/signup", createUserController);

router.patch("/update/paid/member/:memberId", updatePaymentStatusMemberController);
router.patch("/update/amount/barbecue/:barbecueId", updateAmountBarbecueController)
router.get("/barbecues/:userId", getAllBarbecuesByUserIdController);
router.get("/barbecue/:userId/:barbecueId", getBarbecueByIdController);

router.post("/create/barbecue/:userId", createBarbecueController);
router.post("/create/member/:barbecueId", createMemberController);

export { router };
