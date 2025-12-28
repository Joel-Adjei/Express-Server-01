import { validationResult } from "express-validator";
import { errorMessageDisplay } from "../utils/utils.js";

const validationChecker = (req, res, next) => {
  const validationErr = validationResult(req);
  if (!validationErr.isEmpty()) {
    return res.status(400).send({ error: errorMessageDisplay(validationErr) });
  }

  next();
};
export default validationChecker;
