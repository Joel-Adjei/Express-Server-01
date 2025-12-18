import { Router } from "express";
import { registerUser } from "../controllers/authController.js";

const router = Router();

router.post("/register", registerUser);
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
