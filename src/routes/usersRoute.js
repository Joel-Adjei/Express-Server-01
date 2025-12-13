import { Router } from "express";
import { registerUser } from "../controllers/authController.js";

const userRoute = Router();

const usersData = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];

userRoute.get("/", (req, res) => {
  res.send(usersData);
});

userRoute.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = usersData.find((u) => u.id === id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: "User not found" });
  }
});

export default userRoute;
