import React from "react";

import Task from "./Task";

const Tasks = props => {
  
  //handling undone tasks
  const undoneTasks = props.tasks
    .filter(task => !task.status)
    .map(task => (
      <Task
        task={task}
        handleDelete={props.handleDelete}
        handleDone={props.handleDone}
      />
    ));
    
  // handling done tasks
  const doneTasks = props.tasks
    .filter(task => task.status)
    .sort((a, b) => b.dateOfCompletion - a.dateOfCompletion)
    .map(task => <Task task={task} handleDelete={props.handleDelete} />);

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
