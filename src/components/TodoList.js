import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  const handleRemoveTodo = (id) => {
    const arr = [...todos].filter((item) => item.id !== id);
    setTodos(arr);
  };
  const handleEditTodo = (todoId, value) => {
    if (!value.text || /^\s*$/.test(value.text)) {
      return;
    }
    setTodos((prev) => prev.map((item) => (item.id === todoId ? value : item)));
  };
  return (
    <div>
      <h2>Todolist</h2>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        handleRemoveTodo={handleRemoveTodo}
        handleEditTodo={handleEditTodo}
      />
    </div>
  );
}

export default TodoList;
