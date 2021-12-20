import React from "react";

function Task({text,category,removeTask}) {



  function handleClick(id){
    removeTask(id)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClick} name={text} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;
