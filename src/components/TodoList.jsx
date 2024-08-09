import React from 'react';
import Todo from './Todo';

function TodoList({ todos, onRemoveTodo, onToggleTodo }) {
  return (
    <div className='todo-list'>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onToggleTodo={onToggleTodo} />
      ))}
    </div>
  );
}
export default TodoList;
