import React from "react";
import Task from "./Task";

function TaskList({ tasks, removeTask }) {
  //my working version
  // const displayTasks = tasks.map((task) => (
  //   <TaskDisplay task={task} key={task.text} removeTask={removeTask} />
  // ));
  const taskList = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      removeTask={removeTask}
    />
  ));

  return <div className="tasks">{taskList}</div>;
}

export default TaskList;
