import { Router } from "express";
import {
  checkSchema,
  matchedData,
  param,
  query,
  validationResult,
} from "express-validator";
import { getItembyIdValidation } from "../utils/validationSchema.js";
import { errorMessageDisplay } from "../utils/utils.js";
import validationChecker from "../middleware/validationChecker.js";

const itemsRouter = Router();

// In-memory array to store items
let items = [
  { id: 1, name: "Car" },
  { id: 2, name: "Book" },
  { id: 3, name: "Shoe" },
];

itemsRouter.get("/all", (req, res) => {
  res.send(items);
});

itemsRouter.get(
  "/:id",
  checkSchema(getItembyIdValidation),
  validationChecker,
  (req, res) => {
    const requestData = matchedData(req);
    const searchItem = items.find(({ id }) => id === parseInt(requestData.id));

    if (searchItem) {
      res.status(200).send({ message: "items found", data: searchItem });
    }
    res.status(404).send({ message: "item not found", data: requestData });
  }
);

export default itemsRouter;
