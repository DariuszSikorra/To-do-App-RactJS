import React from "react";

const UndoneTasks = props => {
  const { important, name, dateTo, id } = props.task;
  return (
    <li className="tasks" onClick={props.handleFadeout} key={id}>
      <strong style={important ? { color: "red" } : null}>{name}, </strong>
      <span>wykonać zadanie do: {dateTo} </span>
      <button onClick={() => props.handleDone(id)}>Done</button>{" "}
      <button onClick={() => props.handleDelete(id)}>X</button>
    </li>
  );
};

export default UndoneTasks;
