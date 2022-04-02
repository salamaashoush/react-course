import { TodoItem } from "./TodoItem";

export function TodoList({ items, onDelete }) {
  return (
    <ol>
      {items.map((item, index) => (
        <TodoItem key={item} onDelete={() => onDelete(index)}>
          <span>{item}</span>
        </TodoItem>
      ))}
    </ol>
  );
}
