import { Router } from "express";

const itemsRouter = Router();

// In-memory array to store items
let items = [
  { id: 1, name: "Car" },
  { id: 2, name: "Book" },
  { id: 3, name: "Shoe" },
];

itemsRouter.get("/", (req, res) => {
  res.send(items);
});

export default itemsRouter;
