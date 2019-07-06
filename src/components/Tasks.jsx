import React from "react";

const Tasks = props => {
  const undoneTasksFilter = props.tasks.filter(task => !task.status);
  const undoneTasks = undoneTasksFilter.map(task => (
    <li className="tasks" key={task.id}>
      <strong style={task.important ? { color: "red" } : null}>
        {task.name},{" "}
      </strong>
      <span>wykonać zadanie do: {task.dateTo} </span>
      <button onClick={() => props.handleDone(task.id)}>Done</button>{" "}
      <button onClick={() => props.handleDelete(task.id)}>X</button>
    </li>
  ));

  const doneTasksFilter = props.tasks
    .filter(task => task.status)
    .sort((a, b) => b.dateOfCompletion - a.dateOfCompletion);
  console.log(doneTasksFilter);
  const doneTasks = doneTasksFilter.map(task => (
    <li className="tasks" key={task.id}>
      <strong>{task.name}, </strong>
      <span>
        Zostało wykonane: {new Date(task.dateOfCompletion).toLocaleString()}{" "}
      </span>
      <button onClick={() => props.handleDelete(task.id)}>X</button>
    </li>
  ));

  return (
    <>
      <h2>Zadanie do zobienie:</h2>
      <ul>
        {undoneTasks.length === 0
          ? "Dobra robota, wykonałeś wszystkie zadania!"
          : undoneTasks}
      </ul>
      <hr />
      <h2>Zadania zrobione ({doneTasks.length}):</h2>
      {doneTasks.length > 5 && <em>Wyświetlone zostaje 5 ostatnich zadań</em>}
      <ul>{doneTasks.slice(0, 5)}</ul>
    </>
  );
};

export default Tasks;
