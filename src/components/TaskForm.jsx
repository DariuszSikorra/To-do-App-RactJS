import React, { useState } from "react";

const TaskForm = props => {
  const [name, setName] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [important, setImportant] = useState(false);

  //State seting methods
  const handleNewTodoName = e => {
    const newName = e.target.value;
    setName(newName);
  };

  const handleNewTodoDeadline = e => {
    const newDateTo = e.target.value;
    setDateTo(newDateTo);
  };

  const handleChecked = e => {
    const newImportant = e.target.checked
    setImportant(newImportant);
  };
  
  //Submit button
  const handleClick = () => {
    if (dateTo && name.length > 4) {
      props.addTask(name, dateTo, important);
      setName("");
      setDateTo("");
      setImportant(false);
    } else {
      alert("Wypełnij pola właściwie");
    }
  };

  return (
    <div className="form">
      <h2>Dodaj nowe zadanie</h2>
      <div>
        <label>
          <p>
            <span>Nazwa zadania: </span>
            <input
              type="text"
              placeholder="Wpisz nazwę"
              onChange={handleNewTodoName}
              value={name}
            />
          </p>
          <p>
            <span>Dzień deadline'u: </span>
            <input
              type="date"
              onChange={handleNewTodoDeadline}
              value={dateTo}
              min={new Date().toISOString().slice(0, 10)}
            />
          </p>
          <p>
            <label htmlFor="important">Oznaczyć zadanie jako ważne? </label>
            <input
              type="checkbox"
              id="important"
              name="important"
              onChange={handleChecked}
              checked={important}
            />
          </p>
          <button onClick={handleClick}>Dodaj</button>
        </label>
      </div>
    </div>
  );
};

export default TaskForm;