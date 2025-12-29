import { matchedData, validationResult } from "express-validator";
import { errorMessageDisplay } from "../utils/utils.js";

const registerUser = (req, res) => {
  const { name, email } = matchedData(req);
  return res
    .status(201)
    .send({ message: "User registered successfully", user: { name, email } });
};

export { registerUser };
