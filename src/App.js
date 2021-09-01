import { useState } from "react";
import "./styles.css";
import React from "react";
import ToDoLists from "./ToDoLists";
import CheckedBox from "./CheckedBox";
import Timer from "./Timer";
import Counter from "./Counter";

export default function App() {
  const [checked, setChecked] = useState("true");
  const [checked1, setChecked1] = useState("true");
  const clickChecked = () => {
    setChecked(!checked);
  };
  const clickChecked1 = () => {
    setChecked1(!checked1);
  };
  return (
    <div className="App">
      {checked && <Counter />}
      {checked1 && <Timer />}
      <ToDoLists />
      <CheckedBox clickChecked={clickChecked} />
      <CheckedBox clickChecked={clickChecked1} />
    </div>
  );
}
