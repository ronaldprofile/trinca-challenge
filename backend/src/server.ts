import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "express-async-errors";
import { router } from "./router";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response.status(400).json({ message: error.message });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);
app.listen(4000, () => console.log("server is running..."));
