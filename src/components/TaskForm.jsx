import React, { Component } from "react";

class TaskForm extends Component {
  state = {
    name: "",
    dateTo: "",
    important: false,
  };

  handleNewTodoName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleNewTodoDeadline = e => {
    this.setState({
      dateTo: e.target.value
    });
  };

  handleChecked = e => {
    this.setState({
      important: e.target.checked
    });
  };

  handleClick = () => {
    if (this.state.dateTo && this.state.name.length > 4) {
    this.props.addTask(this.state.name, this.state.dateTo, this.state.important)
    this.setState({
      name: "",
      dateTo: "",
      important: false,
    })
    } else {
      alert("Wypełnij pola właściwie")
    }
  }

  render() {
    return (
      <div className="form">
        <h2>Dodaj nowe zadanie</h2>
        <div>
          <label>
            <p>
              <span>Nazwa zadania: </span>
              <input
                type="text"
                onChange={this.handleNewTodoName}
                value={this.state.name}
              />
            </p>
            <p>
              <span>Dzień deadline'u: </span>
              <input
                type="date"
                onChange={this.handleNewTodoDeadline}
                value={this.state.dateTo}
                min={new Date().toISOString().slice(0, 10)}
              />
            </p>
            <p>
              <label htmlFor="important">Oznaczyć zadanie jako ważne? </label>
              <input
                type="checkbox"
                id="important"
                name="important"
                onChange={this.handleChecked}
                checked={this.state.important}
              />
            </p>
            <button onClick={this.handleClick}>Dodaj</button>
          </label>
        </div>
      </div>
    );
  }
}

export default TaskForm;
