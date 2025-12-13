const registerUser = (req, res) => {
  const { name, email } = req.body;
  if (name && email) {
    res
      .status(201)
      .send({ message: "User registered successfully", user: { name, email } });
  } else {
    res.status(400).send({ message: "Name and email are required" });
  }
};

export { registerUser };
