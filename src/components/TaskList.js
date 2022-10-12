import React from "react";
import Task from "./Task";
//import NewTaskForm from "./NewTaskForm";

function TaskList({
  tasks,
  setTasks,
  selectedCategory,
  newCategory,
  newTaskInput,
}) {
  // const onTaskFormSubmit = (e, newTask) => {
  //   e.preventDefault();
  //   console.log("newTask: ", newTask);
  //   setTasks({ ...tasks, newTask });
  //   //debugger;
  // };

  const handleTaskDelete = (text) => {
    //console.log("e", e.target.parentElement);
    const updatedList = tasks.filter((task) => {
      return task.text !== text;
    });
    setTasks(updatedList);
  };

  const displayTasks =
    selectedCategory === "All"
      ? tasks.map((task) => {
          return (
            <Task
              text={task.text}
              category={task.category}
              key={task.text}
              onDeleteClick={handleTaskDelete}
            />
          );
        })
      : tasks
          .filter((task) => task.category === selectedCategory)
          .map((task) => {
            return (
              <Task
                text={task.text}
                category={task.category}
                key={task.text}
                onDeleteClick={handleTaskDelete}
              />
            );
          });

  return <div className="tasks">{displayTasks}</div>;
}

export default TaskList;
