const Task = require("../models/Tasks");

const AddUserTask = async (req, res) => {
  try {
    const { username, taskDesc, dueDate } = req.body;
    const userTask = new Task({
      username: username,
      taskDesc: taskDesc,
      dueDate: dueDate,
    });
    await userTask.save();
    res.json({ message: "Task added successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = AddUserTask;
