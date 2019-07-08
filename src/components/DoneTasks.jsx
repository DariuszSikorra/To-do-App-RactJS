import React from "react";

const DoneTasks = props => {
  const { id, name, dateOfCompletion } = props.task;
  return (
    <li className="tasks fadein" key={id}>
      <strong>{name}, </strong>
      <span>
        Zostało wykonane: {new Date(dateOfCompletion).toLocaleString()}{" "}
      </span>
      <button onClick={() => props.handleDelete(id)}>X</button>
    </li>
  );
};

export default DoneTasks;
