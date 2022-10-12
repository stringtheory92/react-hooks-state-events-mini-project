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
  const [selectedCategory, setSelectedCategory] = useState("All"); //=> CategoryFilter
  const [newCategory, setNewCategory] = useState("Code"); //=> NewTaskForm
  const [newTaskInput, setNewTaskInput] = useState(""); //=> NewTaskForm

  const onTaskFormSubmit = (e, newTaskObj) => {
    e.preventDefault();
    console.log("newTask: ", newTaskObj);
    setTasks([...tasks, newTaskObj]);
  };

  console.log("tasks", tasks);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm
        originalCategories={CATEGORIES}
        newCategory={newCategory}
        setNewCategory={setNewCategory}
        newTaskInput={newTaskInput}
        setNewTaskInput={setNewTaskInput}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        selectedCategory={selectedCategory}
        newCategory={newCategory}
        newTaskInput={newTaskInput}
      />
    </div>
  );
}

export default App;
