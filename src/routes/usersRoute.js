import { response, Router } from "express";
import resolveId from "../middleware/resolveId.js";
import { checkSchema, matchedData, validationResult } from "express-validator";
import { updateUserValidation } from "../utils/validationSchema.js";
import { errorMessageDisplay } from "../utils/utils.js";
import validationChecker from "../middleware/validationChecker.js";

const router = Router();

let usersData = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];

router.get("/", (req, res) => {
  res.send(usersData);
});

router.get("user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = usersData.find((u) => u.id === id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: "User not found" });
  }
});

router.put(
  "/:id",
  checkSchema(updateUserValidation),
  validationChecker,
  (req, res) => {
    const { id, name: userName } = matchedData(req);

    const user = usersData.find((user) => user.id === parseInt(id));
    if (user) {
      usersData[id - 1] = {
        id: id,
        name: userName,
      };
      return res.status(200).json({
        data: usersData,
      });
    } else {
      return res.status(404).json({
        message: "user not found",
      });
    }
  }
);

router.delete("/delete/:id", resolveId, (req, res) => {
  const { parseId } = req;
  const user = usersData.find(({ id }) => id === parseId);
  if (user) {
    const newData = usersData.filter(({ id }) => id !== parseId);
    return res.json({ message: "user deleted successfull" }).status(200);
  }

  return res
    .json({
      message: "user with the id do not exist",
    })
    .status(404);
});

router.get("/search", (req, res) => {
  const { q, filter } = req.query;

  if (q) {
    const searchUsers = usersData.filter(({ name }) =>
      name.toLocaleLowerCase().includes(q.toLocaleLowerCase())
    );
    if (searchUsers.length == 0) {
      return res.json({ message: "no users found", data: [] }).status(200);
    }
    return res.json({ message: "found users", data: searchUsers }).status(200);
  }
  return res.json({ query });
});

export default router;
