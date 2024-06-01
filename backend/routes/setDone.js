const Task = require("../models/Tasks");

const SetTaskDone = async (req, res) => {
  try {
    const { username, id } = req.body;
    const task = await Task.findOne({ username: username, _id: id });
    if (!task) {
      return res.status(400).json({ message: "Task not found" });
    }
    task.isDone = !task.isDone;
    await task.save();
    res.json({ message: "Task changed successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = SetTaskDone;
