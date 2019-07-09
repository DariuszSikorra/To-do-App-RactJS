import React from "react";

const Task = props => {
  const { important, name, dateTo, id, dateOfCompletion, status } = props.task;
  const undoneTask = (
    <li className="tasks" key={id}>
      <strong style={important ? { color: "red" } : null}>{name}, </strong>
      <span>wykonać zadanie do: {dateTo} </span>
      <button onClick={() => props.handleDone(id)}>Done</button>{" "}
      <button onClick={() => props.handleDelete(id)}>X</button>
    </li>
  );
  const doneTask = (
    <li className="tasks" key={id}>
      <strong>{name}, </strong>
      <span>
        Zostało wykonane: {new Date(dateOfCompletion).toLocaleString()}{" "}
      </span>
      <button onClick={() => props.handleDelete(id)}>X</button>
    </li>
  );
  return <>{status ? doneTask : undoneTask}</>;
};

export default Task;
