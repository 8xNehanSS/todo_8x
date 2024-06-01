const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = process.env.JWT_TOKEN_SERVER;

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  const userExists = await User.findOne({ username: username });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
  const token = jwt.sign({ username: username }, SECRET_KEY, {
    expiresIn: "1h",
  });
  res.json({ token });
};

module.exports = registerUser;
