import "./addtask.css";

function AddTask(props) {
  const setNewTask = props.setNewTask;
  const newTask = props.newTask;
  const handleAddTask = props.handleAddTask;
  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };
  return (
    <div className="addtask-main">
      <div className="addtask">
        <input
          className="addtask-input"
          type="text"
          placeholder="Enter your todo task here..."
          value={newTask}
          onChange={handleTaskChange}
        />
      </div>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
