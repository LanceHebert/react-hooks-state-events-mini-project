import React from "react";

function NewTaskForm({ categories,formData,setFormData,onTaskFormSubmit }) {
  
  const optionDisplay = categories.map((category) => {return category !== "All" ? (<option key={category} value={category}> {category} </option>) : null    
  });

  function handleChange(event){
    const name = event.target.name
    let value = event.target.value

    setFormData({...formData,[name]:value})
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log("This is in category",formData.category);
    onTaskFormSubmit()
    setFormData({text:"",category:"Code"})
    
  }
  

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category"  value={formData.category} onChange={handleChange}>{optionDisplay}</select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
