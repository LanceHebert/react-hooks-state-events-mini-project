import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectedValue, setSelectedValue] = useState("All");
  const [formData, setFormData] = useState({
    text: "",
    category: "Code",
  });

  function removeTask(id) {
    console.log(id.target);
    const newTaskList = tasks.filter((task) => {
      return task.text !== id.target.name;
    });
    setTasks(newTaskList);
  }
  
  const filterTasks = tasks.filter((task) => {
    return task.category === selectedValue || selectedValue === "All";
  });

  function onTaskFormSubmit() {    
    const newObj = {
      text: formData.text,
      category: formData.category,
    };
    setTasks([...tasks,newObj])    
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <NewTaskForm
        categories={categories}
        formData={formData}
        setFormData={setFormData}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filterTasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
