import { Router } from "express";
import { registerUser } from "../controllers/authController.js";
import { checkSchema } from "express-validator";
import {
  loginValidation,
  registerUserValidation,
} from "../utils/validationSchema.js";
import validationChecker from "../middleware/validationChecker.js";
import passport from "passport";

const router = Router();

router.post(
  "/register",
  checkSchema(registerUserValidation),
  validationChecker,
  registerUser
);

router.post(
  "/login",
  checkSchema(loginValidation),
  validationChecker,
  passport.authenticate("local"),
  (req, res) => {
    const { username, password } = req.body;
    return res.sendStatus(200);
  }
);

router.get("/status", (req, res) => {
  console.log("Auth Status");
  console.log(req.user);
  if (!req.user) return res.sendStatus(404);
  return res.sendStatus(200);
});

router.post("/logout", (req, res) => {
  if (!req.user) return res.sendStatus(401);
  req.logout((err) => {
    if (err) return res.sendStatus(500);
    return res.sendStatus(200);
  });
});

export default router;
