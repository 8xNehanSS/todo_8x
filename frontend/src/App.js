import "./App.css";
import AddTask from "./components/AddTask/addtask";
import { useState } from "react";
import TaskCard from "./components/TaskCard/taskcard";

class Task {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.dueDate = new Date();
    this.isDone = false;
  }
}

function App(props) {
  const userID = props.userID;
  const setLogin = props.setLogin;
  const userTasks = props.db[userID].map(
    (task, index) => new Task(index, task)
  );

  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(userTasks);

  const handleAddTask = () => {
    if (newTask.replaceAll(" ", "") === "") {
      return;
    }
    const taskcount = tasks.length;
    const task = new Task(taskcount, newTask);
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const setDone = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone;
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <div>
        <div className="app-fixed">
          <code className="todo-heading">todo_8x</code>
          <p>Welcome {userID}</p>
          <AddTask
            newTask={newTask}
            setNewTask={setNewTask}
            handleAddTask={handleAddTask}
          />
        </div>
        <div className="app-tasks">
          {tasks.map((task, index) => (
            <div key={index} className="task">
              <TaskCard
                id={task.id}
                task={task.description}
                date={task.dueDate}
                isDone={task.isDone}
                setDone={setDone}
              />
            </div>
          ))}
        </div>
      </div>
      <button className="app-logout" onClick={() => setLogin(false)}>
        Logout
      </button>
    </div>
  );
}

export default App;
