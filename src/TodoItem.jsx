import React from "react";

export function TodoItem({ children, onDelete }) {
  return (
    <li className="todo-item">
      {children}
      <button onClick={onDelete}>X</button>
    </li>
  );
}
