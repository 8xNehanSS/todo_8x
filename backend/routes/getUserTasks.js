const Tasks = require("../models/Tasks");

const GetUserTasks = async (req, res) => {
  try {
    const { userid } = req.params;
    const userTasks = await Tasks.find({ username: userid, isArchived: false });
    res.json(userTasks);
  } catch (error) {
    console.log(error);
  }
};

module.exports = GetUserTasks;
