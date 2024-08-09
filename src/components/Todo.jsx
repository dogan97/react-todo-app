import React from "react";
import { MdDoneOutline } from "react-icons/md";

import { RiDeleteBin5Line } from "react-icons/ri";

function Todo({ todo, onRemoveTodo, onToggleTodo }) {
  const handleRemoveClick = () => {
    onRemoveTodo(todo.id);
  };
  const handleToggleClick = () => {
    onToggleTodo(todo.id);
  };

  return (
    <div className={`todo-area ${todo.completed ? "completed" : ""}`}>
      <div>{todo.content}</div>
      <div className="todo-icons">
        <MdDoneOutline className="done-icon" onClick={handleToggleClick} />
        <RiDeleteBin5Line className="delete-icon" onClick={handleRemoveClick} />
      </div>
    </div>
  );
}

export default Todo;
