import { Router } from "express";
import { registerUser } from "../controllers/authController.js";
import { checkSchema } from "express-validator";
import { registerUserValidation } from "../utils/validationSchema.js";
import validationChecker from "../middleware/validationChecker.js";

const router = Router();

router.post(
  "/register",
  checkSchema(registerUserValidation),
  validationChecker,
  registerUser
);

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Dummy authentication logic
  if (username === "admin" && password === "password") {
    return res.status(200).json({ message: "Login successful" });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

export default router;
