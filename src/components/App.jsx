import React, { useState, useEffect } from "react";

import TaskForm from "./TaskForm";
import Tasks from "./Tasks";
import "./App.scss";

let oldTasks = [
  {
    id: 0,
    name: "Wydrukować grę planszową",
    dateTo: "2019-10-05",
    important: false,
    status: false,
    dateOfCompletion: null
  },
  {
    id: 1,
    name: "Wyskoczyć na rower",
    dateTo: "2019-09-04",
    important: false,
    status: false,
    dateOfCompletion: null
  },
  {
    id: 2,
    name: "Przebiec 10km",
    dateTo: "2019-09-20",
    important: true,
    status: false,
    dateOfCompletion: null
  },
  {
    id: 3,
    name: "Polecieć do Honkongu",
    dateTo: "2019-09-21",
    important: false,
    status: false,
    dateOfCompletion: null
  },
  {
    id: 4,
    name: "Przebiec maraton",
    dateTo: "2019-09-24",
    important: true,
    status: false,
    dateOfCompletion: null
  },
  {
    id: 5,
    name: "Skoczyć z bungie",
    dateTo: "2019-09-20",
    important: true,
    status: false,
    dateOfCompletion: null
  }
];

const App = () => {
  const [counter, setCounter] = useState(oldTasks.length);
  const [tasks, setTasks] = useState([]);

  //Substitute of componentDidMount
  useEffect(() => {
    let tasks = oldTasks;
    setTasks(tasks);
  }, []);

  const addTask = (name, dateTo, important) => {
    const newTask = {
      id: counter,
      name,
      dateTo,
      important,
      status: false,
      dateOfCompletion: null
    };
    setCounter(counter + 1)
    setTasks([...tasks, newTask])
  };

  const handleDelete = id => {
    let newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks)
  };

  const handleDone = id => {
    const newTasks = Array.from(tasks);
    const date = new Date().getTime();
    newTasks.forEach(task => {
      if (task.id === id) {
        task.status = true;
        task.dateOfCompletion = date;
      }
    });
    setTasks(newTasks)
  };

  return (
    <div className="container">
      <TaskForm addTask={addTask} />
      <hr />
      <Tasks
        tasks={tasks}
        handleDone={handleDone}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;