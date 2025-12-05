import itemsRouter from "./itemsRoute.js";
import { Router } from "express";
import userRoute from "./usersRoute.js";

const router = Router();

router.use(itemsRouter);
router.use(userRoute)

export default router;