import React from "react";
import { useSpring, animated } from "react-spring";

const Task = props => {
  const { important, name, dateTo, id, dateOfCompletion, status } = props.task;
  const fade = useSpring({
    from: {
      color: "#cc99ff"
    },
    color: "black",
    config: {duration: 1000}
  });

  //Undone tasks on list
  const undoneTask = (
    <animated.li className="tasks" key={id} style={fade}>
      <strong style={important ? { color: "red" } : null}>{name}, </strong>
      <span>wykonać zadanie do: {dateTo} </span>
      <button onClick={() => props.handleDone(id)}>Done</button>{" "}
      <button onClick={() => props.handleDelete(id)}>X</button>
    </animated.li>
  );

  //Representation of tasks which are done
  const doneTask = (
    <animated.li className="tasks" key={id} style={fade}>
      <strong>{name}, </strong>
      <span>
        Zostało wykonane: {new Date(dateOfCompletion).toLocaleString()}{" "}
      </span>
      <button onClick={() => props.handleDelete(id)}>X</button>
    </animated.li>
  );

  return <>{status ? doneTask : undoneTask}</>;
};

export default Task;
