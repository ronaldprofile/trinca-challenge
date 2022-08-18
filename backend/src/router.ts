import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetUserByIdController } from "./controllers/GetUserByIdController";
import { LoginUserController } from "./controllers/LoginUserController";

const router = Router();

router.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

router.get("/user", new GetUserByIdController().handle);
router.post("/signin", new LoginUserController().handle);
router.post("/signup", new CreateUserController().handle);

export { router };
