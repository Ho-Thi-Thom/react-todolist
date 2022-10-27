import React, { useState } from "react";
import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
import TodoForm from "./TodoForm";
function Todo({ todos, completeTodo, handleRemoveTodo, handleEditTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const handleSubmitUpdate = (value) => {
    handleEditTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={handleSubmitUpdate} />;
  }
  return todos.map((item, index) => (
    <div
      className={item.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={item.id} onClick={() => completeTodo(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        <AiOutlineClose
          onClick={() => handleRemoveTodo(item.id)}
          className="delete-icon"
        />
        <AiOutlineEdit
          onClick={() => {
            setEdit({ id: item.id, value: item.text });
          }}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
