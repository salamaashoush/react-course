import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

function App() {
  const [todos, setTodos] = useState(["Item 1", "Item 2"]);

  const handleDelete = (index) =>
    setTodos(todos.filter((item, i) => i !== index));
  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput
        onAdd={(value) => {
          if (value) {
            setTodos([...todos, value]);
          }
        }}
      />
      <TodoList items={todos} onDelete={handleDelete} />
      {todos.length >= 2 && <h1>Greater than 2</h1>}
    </div>
  );
}

export default App;
