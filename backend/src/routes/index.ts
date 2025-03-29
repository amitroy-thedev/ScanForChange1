import { Request, Response, Router } from "express";
import { failureLabel, successLabel } from "../constants";

const appRouter = Router();

/**
 * Default Health Route
 */
appRouter.get("/", (req: Request, res: Response) =>
  res.status(200).json({ status: successLabel, msg: "Server Up and running.." })
);

/**
 * Registering other routers
 */

/**
 * 404 Route
 */
appRouter.use("*", (req: Request, res: Response) =>
  res.status(404).json({ status: failureLabel, msg: "Invalid Route!😔😔" })
);

export { appRouter };
