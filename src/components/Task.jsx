import React from "react";

const Task = props => {
  const task = props.task
    if (props.task.status === true) {
    return (
      <>
        <li className="tasks" key={task.id}>
          <strong style={task.important ? { color: "red" } : null}>
            {task.name},{" "}
          </strong>
          <span>wykonać zadanie do: {task.dateTo} </span>
          <button onClick={() => props.handleDone(task.id)}>Done</button>{" "}
          <button onClick={() => props.handleDelete(task.id)}>X</button>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li className="tasks" key={task.id}>
          <strong>{task.name}, </strong>
          <span>
            Zostało wykonane: {new Date(task.dateOfCompletion).toLocaleString()}{" "}
          </span>
          <button onClick={() => props.handleDelete(task.id)}>X</button>
        </li>
      </>
    );
  }
};

export default Task;
