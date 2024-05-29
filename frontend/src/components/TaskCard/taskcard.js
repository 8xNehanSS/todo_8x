import "./taskcard.css";

function TaskCard(props) {
  const id = props.id;
  const task = props.task;
  const date = props.date;
  const isDone = props.isDone;
  const setDone = props.setDone;

  function taskOnClick() {
    setDone(id);
  }
  return (
    <div className="task">
      <div
        className="task-title"
        id={id}
        onClick={taskOnClick}
        style={{ backgroundColor: isDone ? "#00FF00" : "#FF0000" }}
      >
        <p>{task}</p>
      </div>
      <div className="task-details">
        <p>Added on - {date.toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default TaskCard;
