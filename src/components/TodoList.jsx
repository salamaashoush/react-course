import { useContext } from "react";
import { TodosContext } from "../todosContext";
import { TodoItem } from "./TodoItem";

export function TodoList({ onDelete }) {
  const { todos, username } = useContext(TodosContext);
  return (
    <ol>
      {todos.map((item, index) => (
        <TodoItem key={item.id} id={item.id} onDelete={() => onDelete(index)}>
          <span>
            {username} {item.title}
          </span>
        </TodoItem>
      ))}
    </ol>
  );
}
