import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetUserByIdController } from "./controllers/GetUserByIdController";

const router = Router();

router.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

router.get("/user", new GetUserByIdController().handle);
router.post("/signup", new CreateUserController().handle);

export { router };
