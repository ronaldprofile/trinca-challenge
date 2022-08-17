import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

router.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

router.post("/signup", new CreateUserController().handle);

export { router };
