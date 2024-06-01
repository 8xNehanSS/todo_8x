const Tasks = require("../models/Tasks");

const GetArchivedTasks = async (req, res) => {
  try {
    const { userid } = req.params;
    const userTasks = await Tasks.find({ username: userid, isArchived: true });
    res.json(userTasks);
  } catch (error) {
    console.log(error);
  }
};

module.exports = GetArchivedTasks;
