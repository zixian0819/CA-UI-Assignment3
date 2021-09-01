import React from "react";
import ToDoForm from "./ToDoForm";
function ToDo({ todos, completeTodo, removeTodo }) {


  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <button onClick={() => removeTodo(todo.id)} className="normal-button">
          {" "}
          delete
        </button>
      </div>
    </div>
  ));
}

export default ToDo;
