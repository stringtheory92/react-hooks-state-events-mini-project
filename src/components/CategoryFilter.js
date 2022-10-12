import React, { useState } from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  //const [selectedCategory, setSelectedCategory] = useState("");

  console.log("categories: ", categories);

  const handleCategorySelect = (e) => {
    setSelectedCategory(e.target.textContent);
  };
  console.log("selectedCategory: ", selectedCategory);

  const categoryButtons = categories.map((category) => {
    return (
      <button
        key={category}
        onClick={handleCategorySelect}
        className={selectedCategory === category ? "selected" : null}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
