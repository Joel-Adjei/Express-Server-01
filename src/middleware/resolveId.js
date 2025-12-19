const resolveId = (req, res, next) => {
  const {
    params: { id },
  } = req;
  const parseId = parseInt(id);

  if (isNaN(parseId))
    return res.json({ message: "error: invalid id" }).status(404);

  req.parseId = parseId;
  next();
};
0;
export default resolveId;
