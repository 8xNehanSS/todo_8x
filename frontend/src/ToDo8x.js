import "./ToDo8x.css";
import AddTask from "./components/AddTask/addtask";
import { useEffect, useState } from "react";
import TaskCard from "./components/TaskCard/taskcard";
import getUserTasks from "./helpers/GetUserTasks";
import AddUserTask from "./helpers/AddUserTask";
import setDone from "./helpers/SetDone";

class Task {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.dueDate = new Date();
    this.isDone = false;
  }
}

function App({ userID, setLogin }) {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [temp, setTemp] = useState(1);

  const handleAddTask = () => {
    if (newTask.replaceAll(" ", "") === "") {
      return;
    }
    AddUserTask(userID, newTask, new Date());
    getUserTasks(userID, setTasks);
    setTemp(temp + 1);
    setNewTask("");
  };

  useEffect(() => {
    getUserTasks(userID, setTasks);
  }, []);

  const DoneTask = async (id) => {
    await setDone(userID, id);
    getUserTasks(userID, setTasks);
  };

  return (
    <div className="App">
      <div className="app-heading">
        <div className="app-fixed">
          <p className="todo-heading">todo_8x</p>
          <p className="todo-username">{userID}</p>
        </div>
        <div className="logout-button">
          <button className="app-logout" onClick={setLogin}>
            Logout
          </button>
        </div>
      </div>
      <div className="add-task">
        <AddTask
          newTask={newTask}
          setNewTask={setNewTask}
          handleAddTask={handleAddTask}
        />
      </div>
      <div className="app-tasks">
        {tasks.map((task, index) => (
          <div key={task._id.toString()} className="task">
            <TaskCard
              key={task._id.toString()}
              id={task._id.toString()}
              task={task.taskDesc}
              date={task.dueDate}
              isDone={task.isDone}
              addedOn={task.addedOn}
              setDone={DoneTask}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
