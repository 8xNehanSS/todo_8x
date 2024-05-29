const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("./Models/User");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.mongoDB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", async (req, res) => {
  res.send("Request Recieved");
});

app.post("/todo8x/getuser", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send("Invalid username or password");
    }
    if (password !== user.password) {
      return res.status(400).send("Invalid username or password");
    }
    const token = jwt.sign({ id: user.username }, process.env.JWT_TOKEN_SERVER);
    res.send({ token });
  } catch (ex) {
    console.log(ex);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/todo8x/adduser", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      return res.status(1).send("User already exists");
    }
    const newUser = new User({
      username,
      password,
    });
    await newUser.save();
  } catch (ex) {
    console.log(ex);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
