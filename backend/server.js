//imports
const authenticateJWT = require("./middleware/authentication.js");
const registerUser = require("./routes/registerUser.js");
const loginUser = require("./routes/loginUser.js");
const AddUserTask = require("./routes/addUserTask.js");
const GetUserTasks = require("./routes/getUserTasks.js");
const GetArchivedTasks = require("./routes/getArchivedTasks.js");
const SetTaskDone = require("./routes/setDone.js");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//connect to db
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

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

//routes
app.post("/register", registerUser);
app.post("/login", loginUser);
app.get("/auth", authenticateJWT, (req, res) => {
  res.json({ user: req.user });
});
app.get("/tasks/:userid", authenticateJWT, GetUserTasks);
app.post("/addtask/:userid", authenticateJWT, AddUserTask);
app.get("/archivedtasks/:userid", authenticateJWT, GetArchivedTasks);
app.post("/setdone", authenticateJWT, SetTaskDone);

// Protected route
app.get("/protected", authenticateJWT, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
