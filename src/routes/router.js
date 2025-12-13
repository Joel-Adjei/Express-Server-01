import itemsRouter from "./itemsRoute.js";
import { Router } from "express";
import userRoute from "./usersRoute.js";

const router = Router();

router.use("/items", itemsRouter);
router.use("/users", userRoute);
router.use("/auth", userRoute);

export default router;
