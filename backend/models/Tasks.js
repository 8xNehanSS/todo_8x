const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  taskDesc: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
    required: false,
  },
  addedOn: {
    type: Date,
    default: Date.now,
  },
  isArchived: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
