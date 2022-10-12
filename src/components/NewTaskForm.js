import React from "react";

function NewTaskForm({
  originalCategories,
  newCategory,
  setNewCategory,
  newTaskInput,
  setNewTaskInput,
  onTaskFormSubmit,
}) {
  const handleCategorySelect = (e) => {
    setNewCategory(e.target.value);
  };

  const handleInputChange = (e) => {
    setNewTaskInput(e.target.value);
  };

  const categoryMenu = originalCategories.slice(1).map((category) => {
    return (
      <option value={category} key={category}>
        {category}
      </option>
    );
  });
  return (
    <form
      className="new-task-form"
      onSubmit={(e) =>
        onTaskFormSubmit(e, { text: newTaskInput, category: newCategory })
      }
    >
      <label>
        Details
        <input type="text" name="text" onChange={handleInputChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategorySelect}>
          {categoryMenu}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
