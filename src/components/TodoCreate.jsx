import React from "react";
import { useState } from "react";
import "../App.css";

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const clearInput = () => {
    setNewTodo("");
  };

  const createTodo = (event) => {
    event.preventDefault();
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 9999),
      content: newTodo,
      completed: false,
    };
    onCreateTodo(request);
    clearInput();
  };

  return (
    <div className="todo-create">
      <form className="todo-form" action="">
        <input
          className="todo-input"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Yeni görev girin..."
        />
        <button onClick={createTodo} className="todo-btn">
          Görevi Ekle
        </button>
      </form>
    </div>
  );
}

export default TodoCreate;
