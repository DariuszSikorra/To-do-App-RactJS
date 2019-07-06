import React, { Component } from "react";
import TaskForm from "./TaskForm";
import Tasks from "./Tasks";
import "./App.scss";

let tasks = [
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

class App extends Component {
  state = {
    counter: tasks.length,
    tasks: []
  };

  componentWillMount() {
    this.setState({
      tasks: [...tasks]
    });
  }

  addTask = (name, dateTo, important) => {
    const newTask = {
      id: this.state.counter,
      name,
      dateTo,
      important,
      status: false,
      dateOfCompletion: null
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
      counter: this.state.counter + 1
    });
  };

  handleDelete = id => {
    let tasks = this.state.tasks;
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    });
  };

  handleDone = id => {
    const tasks = Array.from(this.state.tasks);
    const date = new Date().getTime();
    tasks.forEach(task => {
      if (task.id === id) {
        task.status = true;
        task.dateOfCompletion = date;
      }
    });
    this.setState({
      tasks
    });
  };

  render() {
    return (
      <div className="container">
        <TaskForm addTask={this.addTask} />
        <hr />
        <Tasks
          tasks={this.state.tasks}
          handleDone={this.handleDone}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
