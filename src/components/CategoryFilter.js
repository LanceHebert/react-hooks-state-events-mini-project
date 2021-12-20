import React from "react";

function CategoryFilter({ categories, setSelectedValue,selectedValue }) {
  

  function handleCategory(event){
    const e = event.target.value;     
    setSelectedValue(e)
                       
  }

  

  const displayCategories = categories.map(
    (category) => (
    <button key={category} value={category} onClick={handleCategory} className={selectedValue === category ? "selected":null}>{category}</button>
  ));

  
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategories}
    </div>
  );
}

export default CategoryFilter;
