import { useState, useEffect } from "react";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <div className="App">
      <div className="max-w-800">
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList
          todos={todos}
          onRemoveTodo={removeTodo}
          onToggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
}

export default App;
