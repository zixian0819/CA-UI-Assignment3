import React, { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm";

import ToDo from "./ToDo";

function ToDoLists() {
  const [todos, setTodos] = useState([]);
  const [sortType, setSortType] = useState("");

  const addToDo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newToDos = [todo, ...todos];
    setTodos(newToDos);
  };
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        text1: "text",
        text2: "text"
      };
      const sortProperty = types[type];
      if (type === "text1") {
        const sorted = [...todos].sort(function (a, b) {
          if (a[sortProperty] < b[sortProperty]) {
            return -1;
          }
          if (a[sortProperty] > b[sortProperty]) {
            return 1;
          }
          return 0;
        });
        setTodos(sorted);
      }
      if (type === "text2") {
        const sorted = [...todos].sort(function (a, b) {
          if (a[sortProperty] < b[sortProperty]) {
            return 1;
          }
          if (a[sortProperty] > b[sortProperty]) {
            return -1;
          }
          return 0;
        });
        setTodos(sorted);
      }
    };

    sortArray(sortType);
  }, [sortType]);

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  console.log(todos);

  return (
    <div>
      <h1> Plan for Today?</h1>
      <ToDoForm onSubmit={addToDo} />
      <ToDo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
      <select
        className="normal-button"
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="sort">Sort</option>
        <option value="text1">A-Z</option>
        <option value="text2">Z-A</option>
      </select>
    </div>
  );
}

export default ToDoLists;
