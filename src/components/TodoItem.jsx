import React, { useEffect } from "react";
import { Timer } from "./Timer";

export function TodoItem({ children, onDelete, id }) {
  return (
    <li className="todo-item">
      {children}
      <button onClick={onDelete}>X</button>
    </li>
  );
}
