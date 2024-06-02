import "./addtask.css";

function AddTask(props) {
  const setNewTask = props.setNewTask;
  const setNewTaskDate = props.setNewTaskDate;
  const newTaskDate = props.newTaskDate;
  const newTask = props.newTask;
  const handleAddTask = props.handleAddTask;
  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };
  return (
    <>
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
        <div className="addtask-calen-button">
          <input
            className="addtask-date"
            type="date"
            placeholder="Enter due date"
            value={newTaskDate}
            onChange={(event) => setNewTaskDate(event.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
      </div>
      <hr className="hr-addtask" />
    </>
  );
}

export default AddTask;
