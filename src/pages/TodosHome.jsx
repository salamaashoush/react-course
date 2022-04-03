import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoInput } from "../components/TodoInput";
import { TodoList } from "../components/TodoList";
import { TodosContext } from "../todosContext";

export function TodosHome() {
  const { todos, isLoading, setTodos, refetch, username } =
    useContext(TodosContext);

  const handleDelete = (index) =>
    setTodos(todos.filter((item, i) => i !== index));

  return !isLoading ? (
    <div>
      <Link to="/">Home</Link>

      <button onClick={refetch}>Refresh</button>
      <h1>Todo App</h1>
      <TodoInput
        onAdd={(value) => {
          if (value) {
            setTodos([...todos, value]);
          }
        }}
      />
      <TodoList onDelete={handleDelete} />
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}
