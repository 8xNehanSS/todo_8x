import "./taskcard.css";

function TaskCard(props) {
  const id = props.id;
  const task = props.task;
  let date = props.addedOn;
  date = new Date(date);
  const isDone = props.isDone;
  const setDone = props.setDone;
  let dueDate = props.date;
  dueDate = new Date(dueDate);
  const setDelete = props.setDelete;

  function taskOnClick() {
    setDone(id);
  }
  function buttonDelClick() {
    setDelete(id);
  }

  return (
    <div className="task-card">
      <button
        className="task-card__button"
        onClick={taskOnClick}
        style={{ backgroundColor: isDone ? "#00FF00" : "#FF0000" }}
      >
        {isDone ? "✓" : "X"}
      </button>
      <button className="task-card__button-delete" onClick={buttonDelClick}>
        <img src="/trash.png" width={19} />
      </button>
      <div className="task-card__content">
        <div className="task-card__title" id={id}>
          {task}
        </div>
        <div className="task-card__details">
          <p>Added on - {date.toLocaleDateString()}</p>
          <p>Due on - {dueDate.toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
