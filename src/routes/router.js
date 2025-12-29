import itemsRouter from "./itemsRoute.js";
import { Router } from "express";
import userRoute from "./usersRoute.js";
import authRoutes from "./authRoutes.js";

const router = Router();

router.use("/items", itemsRouter);
router.use("/users", userRoute);
router.use("/auth", authRoutes);

export default router;
