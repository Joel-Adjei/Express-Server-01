import { Router } from "express";
import { registerUser } from "../controllers/authController.js";

const router = Router();

let usersData = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];

router.get("/", (req, res) => {
  res.send(usersData);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = usersData.find((u) => u.id === id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: "User not found" });
  }
});

router.put("/:id", (req, res) => {
  const { body, params } = req;
  const parseId = parseInt(params.id);
  if (isNaN(parseId)) return res.sendStatus(400);

  const user = usersData.find((user) => user.id === parseId);
  if (user) {
    usersData[parseId - 1] = {
      id: parseId,
      name: body.name,
    };
    return res
      .json({
        data: usersData,
      })
      .sendStatus(200);
  }

  return res.sendStatus(500);
});

export default router;
